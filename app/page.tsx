import { client } from "@/sanity/lib/client";
import { articlesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import ArticleCard from "@/app/components/ArticleCard"
import Link from "next/link";
import { categories } from "@/lib/categories";
import AnimatedBadge from "@/app/components/AnimatedBadge";

const articleTypeLabels: Record<string, string> = {
  news: "AKTUALNOŚĆ",
  review: "TEST",
  comparison: "PORÓWNANIE",
  ranking: "RANKING",
  guide: "PORADNIK",
};
export default async function Home() {
  const articles = await client.fetch(articlesQuery);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-zinc-50">

{/* subtle grain */}
<div
  className="pointer-events-none absolute inset-0 opacity-[0.025]"
  style={{
    backgroundImage: `
      radial-gradient(circle at 25% 25%, rgba(255,255,255,.12) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,.08) 1px, transparent 1px)
    `,
    backgroundSize: "12px 12px, 16px 16px",
  }}
/>

      <div
  className="pointer-events-none absolute inset-0"
  style={{
    background: `
  radial-gradient(circle at 92% 8%, rgba(245,158,11,.18), transparent 32%),
  radial-gradient(circle at 82% 68%, rgba(251,191,36,.08), transparent 40%),
  radial-gradient(circle at 15% 100%, rgba(245,158,11,.05), transparent 50%)
    `,
  }}
/>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-13 sm:px-8 lg:px-12">
        <div className="relative flex flex-col gap-10 py-12 lg:py-16">
          <div className="absolute inset-0 overflow-hidden rounded-xl">
           <Image
  src="/images/hero/hero-home.webp"
  alt="DeckLab Hero"
  fill
  priority
  fetchPriority="high"
  className="object-cover"
/>

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
          </div>
        <div className="relative z-10 pl-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex rounded-full bg-white/5 px-4 py-1 text-sm text-zinc-300">
  Niezależny serwis dla DJs
</div>
            <h1
              className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl"
              style={{
                fontFamily:
                'Hanken Grotesk, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto',
              }}
                  >
                Testy, porównania i przewodniki po sprzęcie DJ-skim.
            </h1>
          </div>

         <div className="mt-26 flex flex-wrap gap-2">
  {categories.map((category) => (
    <Link
      key={category.href}
      href={category.href}
      className="rounded-full border border-white/10 bg-white/5 px-5 py-1 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-100 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
    >
      {category.title}
    </Link>
  ))}
</div>
        </div>
</div>
<section className="mt-8 rounded-[10px] border border-white/5 bg-white/[0.02] p-8">
  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {articles.map((article: any) => (
  <ArticleCard
    key={article._id}
    article={article}
  />
))}

  </div>
</section>

        <section className="mt-20 grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                O DeckLab
              </h2>
            </div>
            <div className="space-y-4 text-zinc-400">
              <p className="leading-7">
                Autorzy serwisu są związani z DJ-ingiem i sprzętem muzycznym od 2009 roku. DeckLab powstał, aby dzielić się wiedzą, publikować rzetelne testy oraz pomagać DJ-om wybierać sprzęt bez marketingowego szumu.
              </p>
              <p className="leading-7">
                Publikujemy testy, porównania, rankingi i praktyczne poradniki dla początkujących oraz bardziej zaawansowanych DJs.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Współpraca i kontakt
              </h2>
            </div>
            <div className="space-y-4 text-zinc-400">
              <p className="leading-7">
                Masz pomysł na materiał, chcesz przekazać sprzęt do testów lub nawiązać współpracę?
              </p>
              <div>
                <a
                  href="mailto:kontakt@decklab.pl"
                  className="inline-flex items-center gap-2 font-semibold text-white hover:text-zinc-300 transition"
                >
                  ✉️ kontakt@decklab.pl
                </a>
              </div>
              <div className="space-y-3 pt-2">
                <p className="font-medium text-white">
                  Jesteśmy otwarci na:
                </p>
                <ul className="space-y-1 text-sm leading-6">
                  <li>• współprace partnerskie,</li>
                  <li>• testy i recenzje sprzętu DJ-skiego,</li>
                  <li>• propozycje tematów i sugestie artykułów.</li>
                </ul>
              </div>
              <div className="pt-4">
                <a href="mailto:kontakt@decklab.pl">
                <AnimatedBadge
  className="bg-transparent px-6 py-2 text-base font-semibold text-white hover:bg-white/[0.03] transition-colors duration-300 cursor-pointer"
>
  Napisz do nas
</AnimatedBadge>
</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © 2026 DeckLab. Testy, porównania i przewodniki po sprzęcie DJ-skim.
        </footer>
      </div>
    </main>
  );
}