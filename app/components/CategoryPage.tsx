import CategoryHero from "@/app/components/CategoryHero"
import FeaturedArticleCard from "@/app/components/FeaturedArticleCard"
import ArticleCard from "@/app/components/ArticleCard"

import { client } from "@/sanity/lib/client"
import {
  articlesByTypeQuery,
  featuredArticleByTypeQuery,
} from "@/sanity/lib/queries"

type Props = {
  articleType: string
  title: string
  description: string
}

export default async function CategoryPage({
  articleType,
  title,
  description,
}: Props) {
  const articles = await client.fetch(
    articlesByTypeQuery,
    { articleType }
  )

  const featuredArticle = await client.fetch(
    featuredArticleByTypeQuery,
    { articleType }
  )

  const remainingArticles = featuredArticle
    ? articles.filter(
        (article: { _id: string }) =>
          article._id !== featuredArticle._id
      )
    : articles

  return (
    <>
      <CategoryHero
        title={title}
        description={description}
      />

      {featuredArticle && (
        <FeaturedArticleCard article={featuredArticle} />
      )}

      {remainingArticles.length > 0 && (
        <section className="mt-10">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {remainingArticles.map((article: any) => (
              <ArticleCard
                key={article._id}
                article={article}
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}