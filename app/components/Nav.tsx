"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { categories } from "@/lib/categories";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 z-40 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="DeckLab"
            width={70}
            height={14}
            className="h-3.5 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {categories.map((it) => {
            const isActive = pathname === it.href;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {it.title}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/4 text-white/60 hover:bg-white/6 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-12">
            <nav className="flex flex-col gap-2">
              {items.map((it) => {
                const isActive = pathname === it.href;
                return (
                  <Link
                    key={it.label}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-full px-3 py-2 text-sm font-medium transition ${
                      isActive ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {it.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
