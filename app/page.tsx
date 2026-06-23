import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-black to-[#183f7a] text-zinc-50">
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-13 sm:px-8 lg:px-12">
        <div className="relative flex flex-col gap-10 py-12 lg:py-16">
          <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
            <Image
              src="/images/hero/hero-home.webp"
              alt="DeckLab Hero"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
          </div>
        <div className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full border border-zinc-700 bg-white/5 px-4 py-1 text-sm text-zinc-300 shadow-sm shadow-black/20">
              Niezależny serwis dla DJs
            </p>
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
  {[
    "Aktualności",
    "Testy",
    "Rankingi",
    "Porównania",
    "Poradniki",
  ].map((item) => (
    <button
      key={item}
      className="rounded-full border border-white/10 bg-white/5 px-5 py-1 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-100 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
    >
      {item}
    </button>
  ))}
</div>
        </div>
</div>
<section className="mt-6">
  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    <article className="group space-y-4">

  {/* obrazek */}
  <div className="relative aspect-video overflow-hidden rounded-3xl">
    <Image
      src="/images/articles/alphatheta-ddj-flx4-test.webp"
      alt="AlphaTheta DDJ-FLX4"
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* meta */}
  <div className="flex items-center gap-3 text-sm">
    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300">
      TEST
    </span>

    <span className="text-zinc-500">
      22 czerwca 2026
    </span>
  </div>

  {/* tytuł */}
  <h2 className="text-2xl font-semibold leading-tight text-white">
    AlphaTheta DDJ-FLX4
  </h2>

  {/* opis */}
  <p className="max-w-xl leading-7 text-zinc-400">
    Sprawdzamy jeden z najpopularniejszych kontrolerów dla początkujących DJ-ów i oceniamy, czy nadal warto go kupić.
  </p>

  <a
    href="#"
    className="text-sm font-medium text-blue-300 hover:text-blue-200"
  >
    Czytaj →
  </a>

</article>

<article className="group space-y-4">
<div className="relative aspect-video overflow-hidden rounded-3xl">
<Image
  src="/images/articles/flx4-vs-flx6.webp"
  alt="FLX4 vs FLX6"
  fill
  className="object-cover transition duration-500 group-hover:scale-105"
/>
</div>

<div className="flex items-center gap-3 text-sm">
  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300">
    PORÓWNANIE
  </span>
  <span className="text-zinc-500">20 czerwca 2026</span>
</div>

<h2 className="text-2xl font-semibold leading-tight text-white">
  FLX4 vs FLX6
</h2>

<p className="max-w-xl leading-7 text-zinc-400">
  Porównujemy dwa popularne kontrolery AlphaTheta i sprawdzamy, dla kogo lepszym wyborem będzie FLX4, a dla kogo FLX6.
</p>

<a
  href="#"
  className="text-sm font-medium text-blue-300 hover:text-blue-200"
>
  Czytaj →
</a>

</article>

<article className="group space-y-4">
<div className="relative aspect-video overflow-hidden rounded-3xl">
<Image
  src="/images/articles/najlepszy-kontroler-dj-do-3000-zl.webp"
  alt="Najlepszy kontroler DJ do 3000 zł"
  fill
  className="object-cover transition duration-500 group-hover:scale-105"
/>
</div>

<div className="flex items-center gap-3 text-sm">
  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300">
    RANKING
  </span>
  <span className="text-zinc-500">18 czerwca 2026</span>
</div>

<h2 className="text-2xl font-semibold leading-tight text-white">
  Najlepszy kontroler DJ do 3000 zł
</h2>

<p className="max-w-xl leading-7 text-zinc-400">
  Zebraliśmy najciekawsze modele dla początkujących i średniozaawansowanych DJ-ów w budżecie do 3000 zł.
</p>

<a
  href="#"
  className="text-sm font-medium text-blue-300 hover:text-blue-200"
>
  Czytaj →
</a>

</article>

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
                Masz pytanie dotyczące sprzętu lub chcesz nawiązać współpracę?
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
              <p className="leading-7 pt-2">
                Masz pomysł na materiał, chcesz przekazać sprzęt do testów lub po prostu porozmawiać? Odezwij się do nas.
              </p>
              <div className="pt-4">
                <a
                  href="mailto:kontakt@decklab.pl"
                  className="inline-flex rounded-full bg-white px-6 py-2 font-semibold text-black transition hover:bg-zinc-200"
                >
                  Napisz do nas
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
