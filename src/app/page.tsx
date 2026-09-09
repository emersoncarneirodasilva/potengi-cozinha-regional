import { Metadata } from "next";
import Hero from "../components/Home/Hero";
import Essence from "../components/Home/Essence";
import Ingredients from "../components/Home/Ingredients";
import FeaturedDishes from "../components/Home/FeaturedDishes";
import CallToAction from "../components/CallToAction";
import backgroundImg from "@/public/images/beach.webp";

export const metadata: Metadata = {
  title: {
    absolute:
      "Potengi Cozinha Regional | O Melhor da Culinária Potiguar na Redinha",
  },
  description:
    "Descubra a verdadeira culinária potiguar contemporânea na Praia da Redinha. Sabores autênticos inspirados nas águas do Potengi.",
  openGraph: {
    title:
      "Potengi Cozinha Regional | O Melhor da Culinária Potiguar na Redinha",
    description:
      "Vivencie a verdadeira experiência da culinária potiguar com vista para as águas do Rio Potengi em Natal, RN.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Essence />
      <Ingredients />
      <FeaturedDishes />
      <CallToAction
        title="Seu próximo sabor favorito pode estar aqui."
        description="Venha vivenciar a culinária regional sob uma nova perspectiva. Um ambiente pensado para celebrar os sentidos em cada detalhe."
        image={backgroundImg}
        imageAlt="Paisagem praiana suave ao fundo"
        imageOpacity="opacity-40 md:opacity-50"
      />
    </>
  );
}
