import type { Metadata } from "next"
import CategoryPage from "@/app/components/CategoryPage"

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Testy sprzętu DJ-skiego | DeckLab",
  description:
    "Niezależne testy sprzętu DJ-skiego. Sprawdzamy kontrolery, miksery, gramofony i inne urządzenia w praktyce.",

  alternates: {
    canonical: "https://decklab.pl/testy",
  },
}

export default function TestyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <CategoryPage
          articleType="review"
          title="Testy"
          description="Niezależne testy sprzętu DJ-skiego."
        />
      </div>
    </main>
  )
}