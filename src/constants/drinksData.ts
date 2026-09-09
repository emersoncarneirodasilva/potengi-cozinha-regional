import { MenuItem } from "../interface/menuItem";
import brisaImg from "@/public/images/brisa-image.webp";
import forteImg from "@/public/images/forte-image.webp";
import seridoImg from "@/public/images/serido-image.webp";

export const DRINKS_DATA: MenuItem[] = [
  {
    id: "brisa-de-pipa",
    name: "Brisa de Pipa",
    price: "R$ 48",
    description:
      "Gin infusionado com cajá, xarope de hibisco, limão siciliano, espuma de gengibre e flor comestível.",
    image: brisaImg,
  },
  {
    id: "forte-dos-reis",
    name: "Forte dos Reis",
    price: "R$ 52",
    description:
      "Whisky Bourbon, cordial de cajuína, bitter de cacau, defumado com canela em pau.",
    image: forteImg,
  },
  {
    id: "serido-tonica",
    name: "Seridó Tônica",
    price: "R$ 45",
    description:
      "Cachaça artesanal potiguar, shrub de maracujá do mato, água tônica, alecrim e pimenta rosa.",
    image: seridoImg,
  },
];
