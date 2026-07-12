export function getTableOfContents(body: any[]) {
  if (!body) return []

  return body
    .filter(
      (block) =>
        block._type === "block" &&
        (block.style === "h2" || block.style === "h3")
    )
    .map((block: any) => ({
      level: block.style,
      title: block.children?.map((child: any) => child.text).join("") ?? "",
    }))
}