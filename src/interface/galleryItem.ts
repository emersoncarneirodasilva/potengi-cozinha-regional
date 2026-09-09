import { StaticImageData } from "next/image";

export interface GalleryItem {
  id: string;
  category: "pratos" | "ambiente" | "drinks" | "experiencia";
  image: StaticImageData | string;
  alt: string;
}
