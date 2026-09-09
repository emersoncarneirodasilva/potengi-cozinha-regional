import { StaticImageData } from "next/image";

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: StaticImageData | string;
}
