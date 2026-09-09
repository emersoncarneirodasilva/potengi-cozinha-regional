import solSeridoImg from "@/public/images/sol-serido-image.webp";
import cordeiroImg from "@/public/images/cordeiro-image.webp";
import porcoImg from "@/public/images/porco-image.webp";
import costelaImg from "@/public/images/costela-angus-image.webp";
import patoImg from "@/public/images/pato-image.webp";
import fileBovinoImg from "@/public/images/file-bovino-image.webp";

export const MEATS_DATA = [
  {
    id: "sol-serido",
    name: "Sol do Seridó",
    price: "R$ 145",
    description:
      "Mignon de sol curado artesanalmente por 12 horas, selado na manteiga de garrafa. Acompanha purê sedoso de macaxeira, crocante de queijo coalho e demi-glace de rapadura.",
    image: solSeridoImg,
  },
  {
    id: "cordeiro-potiguar",
    name: "Cordeiro Potiguar",
    price: "R$ 168",
    description:
      "Paleta de cordeiro prensada, roti de umbu, cuscuz marroquino de milho flocado e picles de maxixe.",
    image: cordeiroImg,
  },
  {
    id: "porco-moura",
    name: "Porco Moura & Jerimum",
    price: "R$ 132",
    description:
      "Barriga de porco laqueada no mel de engenho, mousseline de jerimum assado, farofa de licuri e folhas da horta.",
    image: porcoImg,
  },
  {
    id: "costela-angus-sol",
    name: "Costela Angus no Bafo de Mel",
    price: "R$ 152",
    description:
      "Costela bovina Angus assada lentamente por 12 horas, laqueada com mel de engenho e rapadura. Acompanha purê rústico de batata-doce roxa e farofa crocante de castanha de caju.",
    image: costelaImg,
  },
  {
    id: "magret-caja",
    name: "Magret de Pato ao Cajá",
    price: "R$ 164",
    description:
      "Peito de pato grelhado ao ponto da casa, molho agridoce de cajá com pimenta de cheiro, servido sobre mousseline de mandioquinha e aspargos grelhados.",
    image: patoImg,
  },
  {
    id: "file-bovino-queijo-manteiga",
    name: "Medalhão Potengi",
    price: "R$ 148",
    description:
      "Medalhão de filé mignon envolvido em bacon artesanal, banhado em molho de vinho tinto e queijo de manteiga derretido. Acompanha fettuccine fresco na manteiga de garrafa.",
    image: fileBovinoImg,
  },
];
