import gingaTapiocaImg from "@/public/images/ginga-tapioca-image.webp";
import croquetasImg from "@/public/images/croquetas-image.webp";
import tartarImg from "@/public/images/tartar-image.webp";
import macaxeiraImg from "@/public/images/macaxeira-image.webp";
import carneSolImg from "@/public/images/carne-sol-image.webp";
import queijoCoalhoImg from "@/public/images/queijo-coalho-image.webp";

export const APPETIZERS_DATA = [
  {
    id: "ginga-com-tapioca",
    name: "Ginga com Tapioca",
    price: "R$ 48",
    description:
      "Tapioca delicadamente preparada na chapa recheada com a tradicional ginga crocante da nossa costa.",
    image: gingaTapiocaImg,
  },
  {
    id: "croquetas",
    name: "Croquetas de Caju",
    price: "R$ 54",
    description:
      "Croquetas cremosas de caju refogado com especiarias locais, aioli de pimenta de cheiro e pó de azeitona preta.",
    image: croquetasImg,
  },
  {
    id: "tartar",
    name: "Tartar de Atum e Mangaba",
    price: "R$ 78",
    description:
      "Atum fresco da costa potiguar, emulsão de mangaba, cebola roxa marinada, telha de tapioca crocante.",
    image: tartarImg,
  },
  {
    id: "macaxeira",
    name: "Macaxeira Prensada",
    price: "R$ 48",
    description:
      "Mil folhas de macaxeira crocante, fonduta de queijo manteiga, melado de cana com pimenta biquinho.",
    image: macaxeiraImg,
  },
  {
    id: "carne-sol",
    name: "Carpaccio de Carne de Sol",
    price: "R$ 62",
    description:
      "Finas lâminas de carne de sol curada artesanalmente, emulsão de coentro, castanha de caju triturada e chips de batata-doce.",
    image: carneSolImg,
  },
  {
    id: "queijo-coalho",
    name: "Queijo Coalho Braseado",
    price: "R$ 52",
    description:
      "Queijo coalho artesanal grelhado na brasa, melaço de engenho infundido com rapadura e toque de cumaru.",
    image: queijoCoalhoImg,
  },
];
