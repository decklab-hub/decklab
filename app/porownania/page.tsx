import CategoryPage from "@/app/components/CategoryPage"

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