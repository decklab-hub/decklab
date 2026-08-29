import type { Metadata } from "next"
import CategoryPage from "@/app/components/CategoryPage"

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Porównania sprzętu DJ-skiego | DeckLab",
  description:
    "Porównania sprzętu DJ-skiego, które pomagają wybrać odpowiedni kontroler, mikser, gramofon i inne urządzenia.",

  alternates: {
    canonical: "https://www.decklab.pl/porownania",
  },
}

export default function PorownaniaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <CategoryPage
          articleType="comparison"
          title="Porównania"
          description="Porównujemy kontrolery, odtwarzacze, miksery i akcesoria, aby ułatwić wybór."
        />
      </div>
    </main>
  )
}