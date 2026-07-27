import Image from "next/image"

type Props = {
  title: string
  description: string
}

export default function CategoryHero({
  title,
  description,
}: Props) {
  return (
    <section className="relative mb-6 overflow-hidden rounded-xl">
      <div className="relative h-[280px]">
        <Image
          src="/images/hero/hero-home.webp"
          alt={title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-3xl px-10">
            <h1 className="text-5xl font-bold text-white">
              {title}
            </h1>

            <p className="mt-4 max-w-xl text-lg text-zinc-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}