import ArticleCard from "@/app/components/ArticleCard"

type Props = {
  articles: any[]
}

export default function RelatedArticles({ articles }: Props) {
  if (articles.length === 0) {
  return null
}

  return (
    <section className="rounded-xl border border-zinc-800/70 bg-zinc-900/70 p-6 backdrop-blur">
      <h2 className="text-2xl font-bold tracking-tight text-white">
        Polecane artykuły
      </h2>

      <div className="mt-8 space-y-6">
        {articles.map((article) => (
          <ArticleCard
            key={article._id}
            article={article}
            variant="compact"
          />
        ))}
      </div>
    </section>
  )
}