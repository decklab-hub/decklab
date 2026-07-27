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
  variant?: "default" | "compact"
}

export default function ArticleCard({
  article,
  variant = "default",
}: Props) {

const isCompact = variant === "compact"

if (isCompact) {
  return (
    <article className="group rounded-xl border border-zinc-800/70 bg-zinc-900/70 p-5 transition-all duration-300 hover:border-zinc-700">
      <div className="flex gap-5">
        <div className="relative aspect-[4/3] w-56 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={urlFor(article.mainImage.image).width(500).height(375).url()}
            alt={article.mainImage.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="mb-3 flex items-center gap-3 text-sm">
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300">
              {articleTypeLabels[article.articleType] ?? article.articleType}
            </span>

            <span className="text-zinc-500">
              {new Date(article.publishedAt).toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h3 className="text-xl font-semibold leading-tight text-white">
            {article.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
            {article.excerpt}
          </p>

          <div className="mt-auto pt-4">
            <Link
              href={`/artykuly/${article.slug.current}`}
              className="text-sm font-medium text-blue-300 hover:text-blue-200"
            >
              Czytaj →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

  return (
    <article
  className={`
    group
    transition-all
    duration-300
    ${
      isCompact
        ? "flex gap-5 rounded-xl border border-zinc-800/70 bg-zinc-900/70 p-5"
        : "space-y-4 rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/[0.02]"
    }
  `}
>
      <Link
  href={`/artykuly/${article.slug.current}`}
  className="relative block aspect-video overflow-hidden rounded-lg"
>
  <Image
    src={urlFor(article.mainImage.image).width(800).height(450).url()}
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

      <div className="flex items-center gap-3 text-sm">
        <span
          className="
            rounded-full
            bg-blue-500/20
            px-3
            py-1
            text-blue-300
            transition-all
            duration-300
            group-hover:bg-blue-500/30
            group-hover:shadow-[0_0_18px_rgba(59,130,246,.25)]
          "
        >
          {articleTypeLabels[article.articleType] ?? article.articleType}
        </span>

        <span className="text-zinc-500">
          {new Date(article.publishedAt).toLocaleDateString("pl-PL", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <h2
  className={`font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-zinc-100 ${
    isCompact ? "text-lg" : "text-2xl"
  }`}
>
        {article.title}
      </h2>

      <p
  className={`text-zinc-400 ${
    isCompact
      ? "line-clamp-2 text-sm leading-6"
      : "max-w-xl leading-7"
  }`}
>
        {article.excerpt}
      </p>

      <Link
        href={`/artykuly/${article.slug.current}`}
        className="text-sm font-medium text-blue-300 hover:text-blue-200"
      >
        Czytaj →
      </Link>
    </article>
  )
}