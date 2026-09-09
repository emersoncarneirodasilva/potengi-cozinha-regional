import { Metadata } from "next";
import Hero from "@/src/components/Menu/Hero";
import Appetizers from "@/src/components/Menu/Menu/Appetizers";
import MainCourses from "@/src/components/Menu/Menu/MainCourses";
import MenuSectionDual from "@/src/components/Menu/Menu/MenuSectionDual";
import CallToAction from "@/src/components/CallToAction";
import backgroundImg from "@/public/images/home-hero4.webp";

export const metadata: Metadata = {
  title: "Cardápio",
  description:
    "Explore o cardápio do Potengi Cozinha Regional. Pratos típicos, sobremesas e drinks autorais na Praia da Redinha, Natal-RN.",
  openGraph: {
    title: "Cardápio | Potengi Cozinha Regional",
    description:
      "Explore o cardápio do Potengi Cozinha Regional. Pratos típicos, sobremesas e drinks autorais na Praia da Redinha, Natal-RN.",
  },
};

export default function Menu() {
  return (
    <>
      <Hero />
      <Appetizers />
      <MainCourses />
      <MenuSectionDual />
      <CallToAction
        title="Água na boca? Garanta sua mesa."
        description="Explore nossos pratos, sobremesas e drinks autorais pessoalmente. Venha viver uma experiência gastronômica inesquecível."
        image={backgroundImg}
        imageAlt="Ambiente acolhedor do restaurante Potengi"
        whatsappMessage="Olá! Olhei o cardápio e gostaria de fazer uma reserva para saborear as novidades."
        imageOpacity="opacity-30 md:opacity-40"
      />
    </>
  );
}
