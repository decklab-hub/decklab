import CategoryPage from "@/app/components/CategoryPage"

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