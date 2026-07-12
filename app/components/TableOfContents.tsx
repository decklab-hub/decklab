type Item = {
  level: string
  title: string
}

type Props = {
  items: Item[]
}

export default function TableOfContents({ items }: Props) {
  if (!items.length) return null

  return (
    <aside className="mx-auto mt-16 mb-20 max-w-3xl rounded-xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-6 text-xl font-semibold text-white">
        📑 Spis treści
      </h2>

      <nav>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.title}
              className={
                item.level === "h3"
                  ? "ml-5 text-zinc-400"
                  : "text-white"
              }
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}