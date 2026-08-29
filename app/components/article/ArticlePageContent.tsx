import { client } from "@/sanity/lib/client"
import {
  articleQuery,
  relatedArticlesQuery,
} from "@/sanity/lib/queries"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import { getReadingTime } from "@/lib/readingTime"
import FAQAccordion from "@/app/components/FAQAccordion"
import { getTableOfContents } from "@/lib/tableOfContents"
import TableOfContents from "@/app/components/TableOfContents"
import ProsCons from "@/app/components/ProsCons"
import ComparisonTable from "@/app/components/ComparisonTable"
import RecommendedFor from "@/app/components/RecommendedFor"
import RelatedArticles from "@/app/components/RelatedArticles"
import type { Metadata } from "next"

const portableTextComponents = {
  block: {
   h2: ({ children }: any) => {
  const id = children.toString().toLowerCase().replace(/\s+/g, "-")

  return (
    <h2
      id={id}
      className="mt-20 mb-8 text-3xl font-bold tracking-tight text-white"
    >
      {children}
    </h2>
  )
},

    h3: ({ children }: any) => {
  const id = children.toString().toLowerCase().replace(/\s+/g, "-")

  return (
    <h3
      id={id}
      className="mt-12 mb-6 text-2xl font-semibold tracking-tight text-white"
    >
      {children}
    </h3>
  )
},

    normal: ({ children }: any) => (
      <p className="mb-7 text-lg leading-9 text-zinc-300">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="my-10 border-l-4 border-blue-500 pl-6 text-xl italic text-zinc-300">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="my-8 list-disc space-y-3 pl-6 text-lg text-zinc-300">
        {children}
      </ul>
    ),

    number: ({ children }: any) => (
      <ol className="my-8 list-decimal space-y-3 pl-6 text-lg text-zinc-300">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-8">
        {children}
      </li>
    ),

    number: ({ children }: any) => (
      <li className="leading-8">
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-white">
        {children}
      </strong>
    ),

    em: ({ children }: any) => (
      <em className="italic text-zinc-200">
        {children}
      </em>
    ),

    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline underline-offset-4 transition hover:text-blue-300"
      >
        {children}
      </a>
    ),
  },

  types: {
  imageWithAlt: ({ value }: any) => (
    <div className="my-12 overflow-hidden rounded-2xl">
      <Image
        src={urlFor(value.image).width(1200).url()}
        alt={value.alt ?? ""}
        width={1200}
        height={675}
        className="w-full object-cover"
      />
    </div>
  ),

  comparisonTable: ({ value }: any) => (
  <ComparisonTable
    title={value.title}
    productA={value.productA}
    productB={value.productB}
    rows={value.rows ?? []}
  />
),

  prosCons: ({ value }: any) => (
  <section className="my-14 rounded-2xl border border-zinc-800/70 bg-zinc-900/70 p-6">
    <h2
      id="plusy-i-minusy"
      className="text-2xl font-bold tracking-tight text-white"
    >
      Plusy i minusy
    </h2>

    {value.pros?.length > 0 && (
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-white">
          Plusy
        </h3>

        <ul className="mt-4 space-y-3">
          {value.pros.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span className="text-zinc-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {value.cons?.length > 0 && (
      <>
        <div className="my-8 h-px bg-zinc-800" />

        <div>
          <h3 className="text-lg font-semibold text-white">
            Minusy
          </h3>

          <ul className="mt-4 space-y-3">
            {value.cons.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                <span className="text-zinc-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </>
    )}
  </section>
),
},
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

const articleTypeLabels: Record<string, string> = {
  news: "AKTUALNOŚĆ",
  review: "TEST",
  comparison: "PORÓWNANIE",
  ranking: "RANKING",
  guide: "PORADNIK",
}

const articleTypePaths: Record<string, string> = {
  news: "aktualnosci",
  review: "testy",
  comparison: "porownania",
  ranking: "rankingi",
  guide: "poradniki",
}

function getArticlePath(articleType: string, slug: string) {
  const category = articleTypePaths[articleType]

  if (!category) {
    return `/artykuly/${slug}`
  }

  return `/${category}/${slug}`
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params

  const article = await client.fetch(articleQuery, { slug })

if (!article) {
  return {}
}

const articlePath = getArticlePath(article.articleType, slug)

return {
  title: article.seo?.metaTitle || article.title,
  description: article.seo?.metaDescription || article.excerpt,

  robots: article.seo?.noIndex
  ? {
      index: false,
      follow: true,
    }
  : undefined,

    alternates: {
  canonical: `https://www.decklab.pl${articlePath}`,
},

  openGraph: {
    title: article.seo?.ogTitle || article.title,
    description: article.seo?.ogDescription || article.excerpt,
    type: "article",
    url: `https://www.decklab.pl${articlePath}`,
    images: article.mainImage
      ? [
          {
            url: urlFor(article.mainImage.image).width(1200).height(630).url(),
            width: 1200,
            height: 630,
            alt: article.mainImage.alt || article.title,
          },
        ]
      : undefined,
  },
}
}

export default async function ArticlePageContent({ params }: Props) {
  const { slug } = await params

  const article = await client.fetch(articleQuery, { slug })
  if (!article) {
  return null
}

const articlePath = getArticlePath(article.articleType, slug)

const relatedArticles = await client.fetch(
  relatedArticlesQuery,
  { slug }
)
console.log("Related articles:", relatedArticles)

 const tableOfContents = getTableOfContents(
  article.body,
  [
    ...(article.body?.some(
      (block: any) => block._type === "prosCons"
    )
      ? [
          {
            level: "h2" as const,
            title: "Plusy i minusy",
          },
        ]
      : []),

    ...(article.recommendedFor
      ? [
          {
            level: "h2" as const,
            title: article.recommendedFor.title,
          },
        ]
      : []),
  ]
)

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.excerpt,
  image: article.mainImage
    ? [urlFor(article.mainImage.image).width(1200).height(675).url()]
    : undefined,
  datePublished: article.publishedAt,
  author: {
    "@type": "Person",
    name: article.author.name,
  },
  publisher: {
  "@type": "Organization",
  name: "DeckLab",
  url: "https://www.decklab.pl",
},
  mainEntityOfPage: {
  "@type": "WebPage",
  "@id": `https://www.decklab.pl${articlePath}`,
},
}

  const productSchema =
  article.products?.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: article.products[0].name,
        brand: {
          "@type": "Brand",
          name: article.products[0].brand.name,
        },
        model: article.products[0].model,
      }
    : null

  const faqSchema =
  article.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((item: any) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null

  return (
  <>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(articleSchema),
  }}
/>

    {faqSchema && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    )}

    {productSchema && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
    )}

    <main className="min-h-screen bg-black text-white">
  <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16">
  
  <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_280px]">

  {/* LEWA KOLUMNA */}
  <div className="mx-auto w-full max-w-3xl">

    <div className="mb-8">
      <span className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
        {articleTypeLabels[article.articleType]}
      </span>
    </div>

    <h1 className="text-4xl leading-tight tracking-tight md:text-5xl">
      {article.title}
    </h1>

    <p className="mt-6 text-xl leading-9 text-zinc-300">
      {article.excerpt}
    </p>

    <div className="mt-12 flex items-center gap-4">
      <Image
        src={urlFor(article.author.avatar).width(80).height(80).url()}
        alt={article.author.name}
        width={48}
        height={48}
        className="rounded-full object-cover"
      />

      <div>
        <p className="font-medium text-white">
          {article.author.name}
        </p>

        <p className="text-sm text-zinc-500">
          {new Date(article.publishedAt).toLocaleDateString("pl-PL", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          {" • "}
          {getReadingTime(article.body)}
        </p>
      </div>
    </div>

    <div className="relative mt-12 mb-12 aspect-video overflow-hidden rounded-xl">
      <Image
        src={urlFor(article.mainImage.image).width(1600).height(900).url()}
        alt={article.mainImage.alt}
        fill
        priority
        className="object-cover"
      />
    </div>

    <article className="prose prose-invert prose-lg mt-16 max-w-none">
      <PortableText
        value={article.body}
        components={portableTextComponents}
      />
    </article>


<div className="mt-12">
  {article.recommendedFor && (
  <RecommendedFor
    title={article.recommendedFor.title}
    content={article.recommendedFor.content}
  />
)}
</div>

<div className="mt-12">
  <RelatedArticles articles={relatedArticles} />
</div>

    {article.faq?.length > 0 && (
      <FAQAccordion items={article.faq} />
    )}

  </div>

  {/* PRAWA KOLUMNA */}
  <div className="mt-[330px] hidden lg:block">
  <TableOfContents items={tableOfContents} />
</div>

 </div>   {/* koniec grida */}
  </div>     {/* koniec max-w-7xl */}
</main>

  </>
)
}