import { MenuItem } from "../interface/menuItem";
import cartolaImg from "@/public/images/cartola-image.webp";
import suspiroImg from "@/public/images/suspiro-image.webp";
import pudimImg from "@/public/images/pudim-image.webp";
import boloImg from "@/public/images/bolo-image.webp";

export const DESSERTS_DATA: MenuItem[] = [
  {
    id: "cartola-desconstruida",
    name: "Cartola Desconstruída",
    price: "R$ 42",
    description:
      "Banana da terra caramelizada, espuma de queijo manteiga, crumble de canela e sorvete de baunilha do cerrado.",
    image: cartolaImg,
  },
  {
    id: "suspiro-caju",
    name: "Suspiro de Caju",
    price: "R$ 38",
    description:
      "Merengue suíço, compota de caju em calda, creme anglaise de limão cravo, praliné de castanha de caju.",
    image: suspiroImg,
  },
  {
    id: "pudim-de-rapadura",
    name: "Pudim de Rapadura com Flor de Sal",
    price: "R$ 36",
    description:
      "Pudim cremoso de rapadura potiguar, calda leve de café coado na hora e finalizado com flor de sal.",
    image: pudimImg,
  },
  {
    id: "bolo-de-rolo-serido",
    name: "Bolo de Rolo com Sorvete de Tapioca",
    price: "R$ 39",
    description:
      "Finas camadas de massa amanteigada recheadas com goiabada artesanal derretida, acompanhadas de sorvete cremoso de tapioca.",
    image: boloImg,
  },
];
