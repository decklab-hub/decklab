import { redirect } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { articleQuery } from "@/sanity/lib/queries"

type Props = {
  params: Promise<{
    slug: string
  }>
}

const articleTypePaths: Record<string, string> = {
  news: "aktualnosci",
  review: "testy",
  comparison: "porownania",
  ranking: "rankingi",
  guide: "poradniki",
}

export default async function OldArticlePage({ params }: Props) {
  const { slug } = await params

  const article = await client.fetch(articleQuery, { slug })

  if (!article) {
    return null
  }

  const category = articleTypePaths[article.articleType]

  if (!category) {
    return null
  }

  redirect(`/${category}/${slug}`)
}