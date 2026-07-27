# DeckLab --- Historia prac od początku projektu

## Cel

Ten dokument opisuje najważniejsze decyzje i ukończone etapy projektu.
Nie jest changelogiem Git.

------------------------------------------------------------------------

## Początek projektu

### Fundamenty

-   Wybór Next.js zamiast WordPressa.
-   Wybór Sanity CMS.
-   Wdrożenie na Vercel.
-   Rozpoczęcie prac nad architekturą headless.

### Wygląd

-   Hero strony.
-   Gradienty tła.
-   Zaokrąglenia kart.
-   Dopracowanie layoutu strony głównej.

### CMS

-   PortableText.
-   Reading Time.
-   Autorzy.
-   Kategorie.
-   Produkty.
-   Marki.

### Artykuły

-   Nowy layout artykułu.
-   Lepsza typografia H2/H3.
-   Obsługa obrazów.

### FAQ

-   Komponent FAQAccordion.
-   FAQ jako osobne pole w CMS.
-   FAQPage JSON-LD.

### SEO

-   Product Schema.
-   Przygotowanie pod kolejne Structured Data.

### Review

-   Zaprojektowano uniwersalny model ocen.
-   Dynamiczne `reviewScore` zamiast sztywnych kategorii.

### Table of Contents

-   Helper `lib/tableOfContents.ts`.
-   Automatyczne wykrywanie H2 i H3.
-   Pierwsza wersja komponentu.

## Następne kroki

-   Smooth scroll dla spisu treści.
-   Sticky Table of Contents.
-   Review UI.
-   Review Schema.
-   Breadcrumb Schema.
-   Wspólny komponent StructuredData.

------------------------------------------------------------------------

## Zasada aktualizacji

Po zakończeniu każdej większej funkcjonalności dopisujemy: - co zostało
wykonane, - jakie decyzje podjęto, - co zostało zaplanowane jako
następny krok.
