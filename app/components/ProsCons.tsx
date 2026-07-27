export default function ProsCons() {
  return (
    <section className="rounded-xl border border-zinc-800/70 bg-zinc-900/70 p-6 backdrop-blur">

      <h2
  id="plusy-i-minusy"
  className="text-2xl font-bold tracking-tight text-white"
>
  Plusy i minusy
</h2>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-white">
          Plusy
        </h3>

        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-300">
              Bardzo dobra jakość wykonania
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-300">
              Rekordbox i Serato w zestawie
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-300">
              Świetne pady Performance Pads
            </span>
          </li>
        </ul>
      </div>

      <div className="my-8 h-px bg-zinc-800" />

      <div>
        <h3 className="text-lg font-semibold text-white">
          Minusy
        </h3>

        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
            <span className="text-zinc-300">
              Brak wejścia mikrofonowego XLR
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
            <span className="text-zinc-300">
              Krótkie pitch fadery
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}