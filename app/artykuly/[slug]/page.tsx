import { client } from "@/sanity/lib/client"
import { articleQuery } from "@/sanity/lib/queries"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import { getReadingTime } from "@/lib/readingTime"
import FAQAccordion from "@/app/components/FAQAccordion"
import { getTableOfContents } from "@/lib/tableOfContents"
import TableOfContents from "@/app/components/TableOfContents"

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="mt-20 mb-8 text-3xl font-bold tracking-tight text-white">
        {children}
      </h2>
    ),

    h3: ({ children }: any) => (
      <h3 className="mt-12 mb-6 text-2xl font-semibold tracking-tight text-white">
        {children}
      </h3>
    ),

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
    image: ({ value }: any) => (
      <div className="my-12 overflow-hidden rounded-2xl">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt ?? ""}
          width={1200}
          height={675}
          className="w-full object-cover"
        />
      </div>
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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params

  const article = await client.fetch(articleQuery, { slug })

  const tableOfContents = getTableOfContents(article.body)

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

    <div className="mx-auto max-w-3xl">

      <div className="mb-8">
        <span className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
          {articleTypeLabels[article.articleType]}
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl leading-tight tracking-tight">
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

    </div>

    <div className="mt-14">
      <div className="relative mt-12 mb-12 aspect-video overflow-hidden rounded-xl max-w-3xl mx-auto">
        <Image
          src={urlFor(article.mainImage.image).width(1600).height(900).url()}
          alt={article.mainImage.alt}
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>

<TableOfContents items={tableOfContents} />

    <article className="prose prose-invert prose-lg mx-auto mt-16 max-w-3xl">
      <PortableText
  value={article.body}
  components={portableTextComponents}
      />
    </article>

    {article.faq?.length > 0 && (
  <FAQAccordion items={article.faq} />
)}

  </div>
</main>
  </>
)
}