import Script from "next/script";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeckLab | Testy sprzętu DJ-skiego, rankingi i poradniki",
  description:
    "Testy, porównania i praktyczne poradniki dotyczące kontrolerów, mixerów, gramofonów i akcesoriów dla DJ-ów.",

  verification: {
    google: "1mMaLeuViNBUHC89fBzv-dcdGJfkeAKLy_tpKLm4jok",
  },

  metadataBase: new URL("https://www.decklab.pl"),

  openGraph: {
    title: "DeckLab | Testy sprzętu DJ-skiego, rankingi i poradniki",
    description:
      "Testy, porównania i praktyczne poradniki dotyczące kontrolerów, mixerów, gramofonów i akcesoriów dla DJ-ów.",
    url: "https://www.decklab.pl",
    siteName: "DeckLab",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/og/decklab-og.jpg",
        width: 1200,
        height: 630,
        alt: "DeckLab",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DeckLab | Testy sprzętu DJ-skiego, rankingi i poradniki",
    description:
      "Testy, porównania i praktyczne poradniki dotyczące kontrolerów, mixerów, gramofonów i akcesoriów dla DJ-ów.",
    images: ["/images/og/decklab-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="pl"
  className={`${hanken.variable} h-full antialiased`}
>
      <body className="min-h-full flex flex-col">
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-11EMLVM76D"
  strategy="lazyOnload"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-11EMLVM76D');
  `}
</Script>

<Nav />
{children}
</body>
    </html>
  );
}
