import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import logo from "@/public/images/logo.webp";
import { FOOTER_NAV } from "@/src/constants/footerNav";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "(84) 99999-9999";

  return (
    <footer className="w-full bg-background-footer border-t border-border pt-16 pb-4 md:pt-24 md:pb-8 text-text-main">
      <div className="wrapper">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 items-start">
          {/* Coluna 1: Logo e Descrição */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-md bg-background border border-border flex items-center justify-center shadow-xs overflow-hidden relative shrink-0">
                <Image
                  src={logo}
                  alt="Potengi Cozinha Regional Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="font-libre-caslon text-2xl font-medium text-text-title tracking-tight group-hover:text-primary transition-colors">
                Potengi
              </span>
            </Link>
            <p className="text-sm md:text-base leading-relaxed text-text-main/80 max-w-xs md:max-w-62.5">
              Cozinha regional contemporânea inspirada nas águas do Potengi.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-hanken-grotesk font-semibold tracking-widest uppercase text-text-title">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-hanken-grotesk font-semibold tracking-widest uppercase text-text-title">
              Contato
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{phoneNumber}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <svg
                    className="w-3.5 h-3.5 text-primary shrink-0 transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>@potengicozinha</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Localização */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-hanken-grotesk font-semibold tracking-widest uppercase text-text-title">
              Localização
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col text-text-main/80">
                  <span>Praia da Redinha</span>
                  <span>Natal, RN - Brasil</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória e Rodapé Inferior */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[8px] sm:text-xs text-text-main/70 uppercase tracking-wider">
          <p>
            © {currentYear} Potengi Cozinha Regional. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/termos"
              className="hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacidade"
              className="hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
