'use client'

import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

type Props = {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto mt-20 max-w-3xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        FAQ
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => {
          const open = openIndex === index

          return (
            <div
            key={index}
  className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm transition-colors duration-300 hover:border-zinc-700"
>
              <button
  type="button"
  onClick={() => setOpenIndex(open ? null : index)}
  className="flex w-full items-center justify-between px-6 py-5 text-left transition-all duration-300 hover:bg-zinc-800/80"
>
  <span className="pr-6 text-lg font-semibold leading-7 text-white">
    {item.question}
  </span>

  <span
  className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-500/20 text-blue-400 transition-all duration-300 ${
    open ? "rotate-45 bg-blue-500/10" : ""
  }`}
>
  <span className="absolute h-px w-3 bg-blue-400" />
  <span className="absolute h-3 w-px bg-blue-400" />
</span>
</button>

              <div
  className={`grid transition-all duration-300 ease-in-out ${
    open
      ? "grid-rows-[1fr] opacity-100"
      : "grid-rows-[0fr] opacity-0"
  }`}
>
  <div className="overflow-hidden">
    <div className="border-t border-zinc-800 px-7 py-6">
      <p className="max-w-none text-[17px] leading-8 text-zinc-300">
        {item.answer}
      </p>
    </div>
  </div>
</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}