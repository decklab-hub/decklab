type ComparisonTableProps = {
  title?: string
  productA: string
  productB: string
  rows: {
    feature: string
    valueA: string
    valueB: string
  }[]
}

export default function ComparisonTable({
  title,
  productA,
  productB,
  rows,
}: ComparisonTableProps) {
  return (
    <section className="my-16 overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/70">
      {title && (
        <h2 className="px-6 pt-6 text-2xl font-bold tracking-tight text-white">
          {title}
        </h2>
      )}

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="px-6 py-4 text-sm font-medium text-zinc-500">
                Parametr
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-white">
  {productA}
</th>

<th className="px-6 py-4 text-center text-sm font-semibold text-white">
  {productB}
</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-zinc-800/70 last:border-b-0"
              >
                <td className="px-6 py-4 font-medium text-zinc-300">
                  {row.feature}
                </td>

                <td className="px-6 py-4 text-center text-zinc-400">
  {row.valueA}
</td>

<td className="px-6 py-4 text-center text-zinc-400">
  {row.valueB}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}