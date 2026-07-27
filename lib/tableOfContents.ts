export function getTableOfContents(
  body: any[],
  extraItems: { level: "h2" | "h3"; title: string }[] = []
) {
  if (!body) return extraItems

  const items = body
    .filter(
      (block) =>
        block._type === "block" &&
        (block.style === "h2" || block.style === "h3")
    )
    .map((block: any) => ({
      level: block.style,
      title: block.children?.map((child: any) => child.text).join("") ?? "",
    }))

  return [...items, ...extraItems]
}