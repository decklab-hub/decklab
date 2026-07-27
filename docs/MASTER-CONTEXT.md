# DECKLAB --- MASTER CONTEXT

## Cel projektu

DeckLab to nowoczesny serwis o sprzęcie DJ-skim budowany od podstaw z
naciskiem na rzetelne testy, porównania, rankingi i poradniki.

## Stack

-   Next.js 16 (App Router)
-   TypeScript
-   Tailwind CSS
-   Sanity CMS v5
-   Vercel

## Sposób pracy

-   Jeden krok na raz.
-   Najpierw diagnoza, potem jedna mała zmiana.
-   Po każdej zmianie sprawdzamy efekt.
-   Unikamy dużych refaktorów.
-   Priorytetem jest zachowanie działającego projektu.

## Styl serwisu

Inspiracje: Apple, Vercel, Linear, Stripe.

Założenia: - minimalistyczny wygląd, - dużo przestrzeni, - subtelne
animacje, - ciemny motyw, - nowoczesny charakter premium.

## Aktualna architektura

Działa: - Artykuły - Autorzy - Kategorie - Produkty - Marki -
PortableText - Reading Time - FAQ Accordion - FAQPage Schema - Product
Schema - Dynamiczny Table of Contents (podstawowa wersja)

## Zasady kodu

-   Małe komponenty.
-   Logika w `lib`.
-   Brak duplikowania kodu.
-   Komponenty wielokrotnego użytku.

## Ważne helpery

-   `lib/readingTime.ts`
-   `lib/tableOfContents.ts`

## Ważna zasada współpracy

Po wykonaniu większej funkcjonalności aktualizujemy
`Historia-prac-od-początku-projektu.md`.
