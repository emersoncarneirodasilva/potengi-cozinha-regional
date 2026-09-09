import type { Metadata } from "next";
import { Libre_Caslon_Text, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

const libreCaslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-caslon",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://potengicozinha.com.br"), // Substitua pela URL oficial do restaurante quando tiver
  title: {
    default:
      "Potengi Cozinha Regional | O Melhor da Culinária Potiguar na Redinha",
    template: "%s | Potengi Cozinha Regional",
  },
  description:
    "Cozinha regional contemporânea inspirada nas águas do Potengi. Sabores autênticos da culinária típica potiguar na Praia da Redinha, Natal - RN.",
  keywords: [
    "cozinha regional",
    "culinária potiguar",
    "comida típica Natal RN",
    "Praia da Redinha",
    "restaurante Potengi",
    "frutos do mar Natal",
  ],
  authors: [{ name: "Potengi Cozinha Regional" }],
  creator: "Potengi Cozinha Regional",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://potengicozinha.com.br",
    title: "Potengi Cozinha Regional | Culinária Típica na Redinha",
    description:
      "Vivencie a verdadeira experiência da culinária potiguar com vista para as águas do Rio Potengi em Natal, RN.",
    siteName: "Potengi Cozinha Regional",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${libreCaslon.variable} ${hankenGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
