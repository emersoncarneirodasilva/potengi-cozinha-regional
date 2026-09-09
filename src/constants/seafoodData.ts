import camaroesImg from "@/public/images/camaroes-image.webp";
import peixeImg from "@/public/images/peixe-image.webp";
import polvoImg from "@/public/images/polvo-image.webp";
import ouroPotiguarImg from "@/public/images/ouro-potiguar.webp";
import lagostaImg from "@/public/images/lagosta-image.webp";
import atumImg from "@/public/images/atum-image.webp";

export const SEAFOOD_DATA = [
  {
    id: "camaroes-costa-branca",
    name: "Camarões da Costa Branca",
    price: "R$ 158",
    description:
      "Camarões rosa grandes grelhados na brasa, emulsão de moqueca, arroz de coco queimado e farofa panko com coentro fresco. Uma reinterpretação do clássico potiguar.",
    image: camaroesImg,
  },
  {
    id: "peixe-da-costa",
    name: "Peixe da Costa",
    price: "R$ 105",
    description:
      "Pescado do dia grelhado na brasa, emulsão de jerimum, arroz caldoso de coco e tuile de tinta de lula com toque cítrico.",
    image: peixeImg,
  },
  {
    id: "polvo-na-brasa",
    name: "Polvo na Brasa",
    price: "R$ 175",
    description:
      "Tentáculos de polvo confitados e tostados, batatas ao murro, tapenade de azeitonas pretas, alho assado e azeite de ervas.",
    image: polvoImg,
  },
  {
    id: "ouro-potiguar",
    name: "Ouro Potiguar",
    price: "R$ 138",
    description:
      "Camarões VG grelhados, bisque intensa do próprio camarão, risoto de queijo de coalho curado e crocante de tapioca.",
    image: ouroPotiguarImg,
  },
  {
    id: "caldeirada-lagosta",
    name: "Caçarola de Lagosta do Farol",
    price: "R$ 195",
    description:
      "Caudas de lagosta grelhadas na manteiga de ervas, camarões frescos, mexilhões e lulas em caldo leve de tomate rústico, leite de coco e coentro. Acompanha arroz de açafrão da terra.",
    image: lagostaImg,
  },
  {
    id: "atum-selado-sesame",
    name: "Atum Selado na Crosta de Castanha",
    price: "R$ 146",
    description:
      "Lombo de atum fresco levemente selado com crosta de castanha-de-caju e gergelim. Servido com purê de jerimum levemente apimentado e vinagrete de maxixe com coentro.",
    image: atumImg,
  },
];
