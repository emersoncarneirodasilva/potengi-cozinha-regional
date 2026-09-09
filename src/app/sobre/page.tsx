import { Metadata } from "next";
import Hero from "@/src/components/About/Hero";
import OurPhilosophy from "@/src/components/About/OurPhilosophy";
import OurRoots from "@/src/components/About/OurRoots";
import CallToAction from "@/src/components/CallToAction";
import backgroundImg from "@/public/images/bridge.webp";

export const metadata: Metadata = {
  title: "Nossa História",
  description:
    "Conheça a trajetória, as raízes e a essência do Potengi Cozinha Regional na Praia da Redinha, em Natal-RN.",
  openGraph: {
    title: "Nossa História | Potengi Cozinha Regional",
    description:
      "Conheça a trajetória, as raízes e a essência do Potengi Cozinha Regional na Praia da Redinha, em Natal-RN.",
  },
};

export default function About() {
  return (
    <>
      <Hero />
      <OurRoots />
      <OurPhilosophy />
      <CallToAction
        title="Venha saborear nossa história de perto."
        description="Cada prato carrega a alma e a tradição potiguar. Reserve sua mesa e permita-se viver essa experiência sensorial completa."
        image={backgroundImg}
        imageAlt="Interior acolhedor do restaurante Potengi com vista para a ponte"
        whatsappMessage="Olá! Conheci a história do Potengi e gostaria de fazer uma reserva."
        imageOpacity="opacity-30 md:opacity-40"
      />
    </>
  );
}
