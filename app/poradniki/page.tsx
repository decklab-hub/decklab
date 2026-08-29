import type { Metadata } from "next"
import CategoryPage from "@/app/components/CategoryPage"

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Poradniki dla DJs | DeckLab",
  description:
    "Praktyczne poradniki dla DJs — od wyboru sprzętu i konfiguracji setupu po pierwsze kroki za konsoletą.",

  alternates: {
    canonical: "https://www.decklab.pl/poradniki",
  },
}

export default function PoradnikiPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <CategoryPage
          articleType="guide"
          title="Poradniki"
          description="Praktyczne poradniki dla początkujących i zaawansowanych DJ-ów."
        />
      </div>
    </main>
  )
}