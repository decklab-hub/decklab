"use client"
import { useEffect, useState } from "react"
type Item = {
  level: string
  title: string
}

type Props = {
  items: Item[]
}

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState("")
  useEffect(() => {
  const headings = document.querySelectorAll("h2[id], h3[id]")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    }
  )

  headings.forEach((heading) => observer.observe(heading))

  return () => observer.disconnect()
}, [])
  if (!items.length) return null

  return (
    <aside className="sticky top-24 rounded-xl border border-zinc-800/70 bg-zinc-900/70 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Spis treści
      </h2>

      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.title}
              className={
                item.level === "h3"
  ? "ml-4 text-sm text-zinc-500"
  : "text-sm font-medium text-zinc-300"
              }
            >
              <a
  href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
  aria-current={
    activeId === item.title.toLowerCase().replace(/\s+/g, "-")
      ? "location"
      : undefined
  }
  className={`block rounded-md border-l-2 px-3 py-1.5 transition-all duration-200 ${
  activeId === item.title.toLowerCase().replace(/\s+/g, "-")
    ? "border-blue-500 bg-blue-500/5 text-white"
    : "border-transparent text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
}`}
>
  {item.title}
</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}