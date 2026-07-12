export function getReadingTime(body: any[]): string {
  if (!body) return "1 min czytania"

  const text = body
    .filter((block) => block._type === "block")
    .map((block) =>
      block.children
        ?.map((child: any) => child.text)
        .join(" ")
    )
    .join(" ")

  const words = text.trim().split(/\s+/).length

  const minutes = Math.max(1, Math.ceil(words / 200))

  return `${minutes} min czytania`
}