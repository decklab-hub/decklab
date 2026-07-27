import CategoryPage from "@/app/components/CategoryPage"

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