import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/sanity/lib/image"

const articleTypeLabels: Record<string, string> = {
  news: "AKTUALNOŚĆ",
  review: "TEST",
  comparison: "PORÓWNANIE",
  ranking: "RANKING",
  guide: "PORADNIK",
}

type Props = {
  article: any
}

export default function FeaturedArticleCard({ article }: Props) {
  return (
    <article className="group grid gap-8 lg:grid-cols-2 lg:items-center">
      <Link
  href={`/artykuly/${article.slug.current}`}
  className="relative block aspect-[16/10] overflow-hidden rounded-xl"
>
  <Image
    src={urlFor(article.mainImage.image).width(1200).height(750).url()}
    alt={article.mainImage.alt}
    fill
    className="
      object-cover
      transition-all
      duration-500
      group-hover:scale-105
      group-hover:brightness-105
    "
  />
</Link>

      <div className="space-y-5">
        <span className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">
          {articleTypeLabels[article.articleType] ?? article.articleType}
        </span>

        <h2 className="text-4xl font-bold leading-tight text-white">
          {article.title}
        </h2>

        <p className="text-lg leading-8 text-zinc-400">
          {article.excerpt}
        </p>

        <Link
          href={`/artykuly/${article.slug.current}`}
          className="inline-flex text-base font-medium text-blue-300 transition hover:text-blue-200"
        >
          Czytaj artykuł →
        </Link>
      </div>
    </article>
  )
}