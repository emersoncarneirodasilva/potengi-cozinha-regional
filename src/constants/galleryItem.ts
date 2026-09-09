import { GalleryItem } from "../interface/galleryItem";
import bridgeImg from "@/public/images/bridge.webp";
import beachImg from "@/public/images/beach.webp";
import ouroPotiguarImg from "@/public/images/ouro-potiguar.webp";
import seridoImg from "@/public/images/serido-image.webp";
import essenceImg from "@/public/images/essence-image.webp";
import gingaImg from "@/public/images/ginga-tapioca-image.webp";
import pudimImg from "@/public/images/pudim-image.webp";
import solSerido from "@/public/images/sol-serido-image.webp";
import backgroundInterior from "@/public/images/about-hero.webp";
import brisaImg from "@/public/images/brisa-image.webp";
import frontImg from "@/public/images/forte-image.webp";

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    category: "experiencia",
    image: bridgeImg,
    alt: "Vista panorâmica da ponte e do interior do restaurante Potengi",
  },
  {
    id: "2",
    category: "pratos",
    image: ouroPotiguarImg,
    alt: "Prato autoral elaborado da culinária potiguar",
  },
  {
    id: "3",
    category: "drinks",
    image: seridoImg,
    alt: "Drink autoral da culinária potiguar",
  },
  {
    id: "4",
    category: "ambiente",
    image: essenceImg,
    alt: "Ambiente aconchegante do restaurante Potengi",
  },
  {
    id: "5",
    category: "pratos",
    image: gingaImg,
    alt: "Prato autoral elaborado da culinária potiguar",
  },
  {
    id: "6",
    category: "pratos",
    image: pudimImg,
    alt: "Sobremesa autoral elaborada da culinária potiguar",
  },
  {
    id: "7",
    category: "pratos",
    image: solSerido,
    alt: "Prato autoral elaborado da culinária potiguar",
  },
  {
    id: "8",
    category: "drinks",
    image: brisaImg,
    alt: "Drink autoral da culinária potiguar",
  },
  {
    id: "9",
    category: "drinks",
    image: frontImg,
    alt: "Drink autoral da culinária potiguar",
  },
  {
    id: "10",
    category: "ambiente",
    image: backgroundInterior,
    alt: "Ambiente aconchegante do restaurante Potengi",
  },
  {
    id: "11",
    category: "experiencia",
    image: beachImg,
    alt: "Paisagem praiana suave próxima ao restaurante",
  },
];
