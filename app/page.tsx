import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-zinc-950 text-zinc-50">
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-12 sm:px-8 lg:px-12">
        <div className="relative flex flex-1 flex-col justify-center gap-10 py-12 lg:py-20">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full border border-zinc-700 bg-white/5 px-4 py-1 text-sm text-zinc-300 shadow-sm shadow-black/20">
              Niezależny serwis dla DJs
            </p>
            <h1
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'Hanken Grotesk, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto' }}
            >
              DeckLab
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Testy, porównania i przewodniki po sprzęcie DJ-skim.
            </p>
          </div>
          <div className="hidden lg:block absolute right-[-300px] top-[60%] -translate-y-1/2 w-[980px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[650px] w-[650px] rounded-full bg-cyan-400/15 blur-[240px]"></div>
            <div className="absolute left-[55%] top-[55%] -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-blue-500/8 blur-[300px]"></div>
              <Image
                src="/images/hero/cdj3000-djm-a9.webp"
                alt="Pioneer DJ CDJ-3000 i mikser DJM-A9"
                width={1800}
                height={1200}
                priority
                className="w-full h-auto drop-shadow-[0_60px_180px_rgba(59,130,246,0.5)]"
              />
          </div>

          <div className="flex flex-wrap gap-3">
  {[
    "Aktualności",
    "Testy",
    "Rankingi",
    "Porównania",
    "Poradniki",
  ].map((item) => (
    <button
      key={item}
      className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:bg-white/10 hover:text-white"
    >
      {item}
    </button>
  ))}
</div>
        </div>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.85)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
                Hity w DeckLab
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Najciekawsze artykuły i testy
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Przegląd najbardziej popularnych materiałów, które pomogą znaleźć najlepszy sprzęt, porównać modele i wybrać idealny kontroler.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "AlphaTheta DDJ-FLX4",
              "FLX4 vs FLX6",
              "Najlepszy kontroler DJ do 3000 zł",
            ].map((item) => (
              <article
                key={item}
                className="rounded-3xl border border-white/10 bg-zinc-950/80 p-5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-zinc-500/50"
              >
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Hity
                </p>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item}
                </h3>
              </article>
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
                Jeśli masz pomysł na ciekawy materiał, chcesz udostępnić sprzęt do testów lub po prostu skontaktować się z nami, napisz na adres <a href="mailto:kontakt@decklab.pl" className="font-semibold text-white hover:text-zinc-300 transition">kontakt@decklab.pl</a>.
              </p>
              <div className="pt-4">
                <a
                  href="mailto:kontakt@decklab.pl"
                  className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
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
