import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { MessageCircle } from "lucide-react";

interface CallToActionProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt: string;
  whatsappMessage?: string;
  imageOpacity?: string;
}

export default function CallToAction({
  title,
  description,
  image,
  imageAlt,
  whatsappMessage = "Olá! Gostaria de fazer uma reserva no Potengi Cozinha Regional.",
  imageOpacity = "opacity-40 md:opacity-50",
}: CallToActionProps) {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+5584999999999";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Imagem de fundo com gradiente de transição */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className={`object-cover object-center ${imageOpacity}`}
        />
        {/* Gradiente para fundir a imagem com a cor de fundo do site à esquerda */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-10" />
      </div>

      {/* Conteúdo da Seção */}
      <div className="wrapper relative z-20 flex flex-col items-start">
        <div className="max-w-2xl flex flex-col items-start space-y-8 text-left">
          {/* Título Principal */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-text-title tracking-tight leading-[1.1]">
            {title}
          </h2>

          {/* Textos Descritivos */}
          <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed max-w-lg">
            {description}
          </p>

          {/* Botão de Ação para o WhatsApp */}
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-text-title text-background px-8 py-4 rounded-full font-sans text-xs md:text-sm tracking-widest font-semibold uppercase hover:bg-primary transition-all duration-300 shadow-lg hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            Reservar pelo WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
