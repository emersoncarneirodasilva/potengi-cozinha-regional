import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/src/constants/galleryItem";
import Hero from "@/src/components/Gallery/Hero";
import GalleryGrid from "@/src/components/Gallery/GalleryGrid";
import CallToAction from "@/src/components/CallToAction";
import background from "@/public/images/home-hero1.webp";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Explore a galeria de fotos do Potengi Cozinha Regional. Conheça nossos pratos, drinks e o ambiente aconchegante na Praia da Redinha, Natal-RN.",
  openGraph: {
    title: "Galeria | Potengi Cozinha Regional",
    description:
      "Explore a galeria de fotos do Potengi Cozinha Regional. Conheça nossos pratos, drinks e o ambiente aconchegante na Praia da Redinha, Natal-RN.",
  },
};

export default function Gallery() {
  return (
    <>
      <Hero />
      <GalleryGrid items={GALLERY_ITEMS} />
      <CallToAction
        title="Gostou do que viu? Venha viver essa experiência."
        description="Sinta o aconchego da Praia da Redinha e saboreie nossa culinária regional de perto. Garanta sua mesa agora mesmo."
        image={background}
        imageAlt="Vista acolhedora do restaurante Potengi"
        whatsappMessage="Olá! Vi a galeria de fotos e gostaria de fazer uma reserva para conhecer o restaurante."
        imageOpacity="opacity-30 md:opacity-40"
      />
    </>
  );
}
