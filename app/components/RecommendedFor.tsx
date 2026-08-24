type Props = {
  title: string
  content: string
}

export default function RecommendedFor({ title, content }: Props) {
  return (
    <section className="rounded-xl border border-zinc-800/70 bg-zinc-900/70 p-6 backdrop-blur">
      <h2
        id={title.toLowerCase().replace(/\s+/g, "-")}
        className="text-2xl font-bold tracking-tight text-white"
      >
        {title}
      </h2>

      <div className="mt-8 space-y-6 text-lg leading-9 text-zinc-300">
        {content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}