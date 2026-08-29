import type { Metadata } from "next"
import CategoryPage from "@/app/components/CategoryPage"

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Rankingi sprzętu DJ-skiego | DeckLab",
  description:
    "Rankingi sprzętu DJ-skiego przygotowane na podstawie praktycznych testów, porównań i doświadczenia.",

  alternates: {
    canonical: "https://decklab.pl/rankingi",
  },
}

export default function RankingiPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <CategoryPage
          articleType="ranking"
          title="Rankingi"
          description="Najlepszy sprzęt DJ-ski w różnych przedziałach cenowych i zastosowaniach."
        />
      </div>
    </main>
  )
}