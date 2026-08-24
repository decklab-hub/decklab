import type { Metadata } from "next"
import CategoryPage from "@/app/components/CategoryPage"

export const metadata: Metadata = {
  title: "Aktualności ze świata DJ | DeckLab",
  description:
    "Najnowsze informacje ze świata sprzętu DJ-skiego, oprogramowania i branży DJ-skiej.",

  alternates: {
    canonical: "https://decklab.pl/aktualnosci",
  },
}

export default function AktualnosciPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <CategoryPage
          articleType="news"
          title="Aktualności"
          description="Nowości ze świata sprzętu DJ-skiego, oprogramowania i branży."
        />
      </div>
    </main>
  )
}