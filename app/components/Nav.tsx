"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Aktualności", href: "#", active: true },
  { label: "Testy", href: "#" },
  { label: "Rankingi", href: "#" },
  { label: "Porównania", href: "#" },
  { label: "Poradniki", href: "#" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="DeckLab"
            width={160}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </div>

        <div className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[15px] font-medium text-zinc-400 transition-all duration-200 hover:text-white ${
                item.active ? "border-b border-white/50 text-white" : ""
              }`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
