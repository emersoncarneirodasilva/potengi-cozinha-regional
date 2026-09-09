"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "@/public/images/logo.webp";
import { NAV_LINKS } from "@/src/constants/navLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border transition-all">
      <div className="wrapper h-24 flex items-center justify-between">
        {/* Logo e Nome com Subtítulo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-11 h-11 rounded-md bg-background-alt border border-border flex items-center justify-center shadow-xs overflow-hidden relative shrink-0">
            <Image
              src={logo}
              alt="Potengi Cozinha Regional Logo"
              fill
              sizes="(max-width: 768px) 44px, 44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-libre-caslon text-2xl lg:text-[28px] font-medium text-text-title tracking-tight group-hover:text-primary transition-colors leading-none">
              Potengi
            </span>
            <span className="text-[8px] lg:text-[10px] font-medium tracking-widest uppercase text-primary mt-1">
              Cozinha Regional
            </span>
          </div>
        </Link>

        {/* Navegação Desktop com Verificação de Rota Ativa */}
        <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-semibold tracking-widest text-text-main">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1 ${
                  isActive
                    ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "hover:text-primary text-text-main"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Ações à Direita */}
        <div className="flex items-center gap-4">
          <Link
            href="/contato#reserva"
            className="hidden md:inline-flex items-center justify-center bg-primary text-white text-xs lg:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-md hover:opacity-95 hover:scale-[1.02] transition-all duration-300 shadow-xs"
          >
            Reservar Mesa
          </Link>

          {/* Botão Hamburguer Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu de navegação"
            className="md:hidden p-2 rounded-md text-text-title cursor-pointer transition-transform duration-200 active:scale-95"
          >
            {isOpen ? (
              <X className="w-6 h-6 hover:text-primary transition-colors" />
            ) : (
              <Menu className="w-6 h-6 hover:text-primary transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile com Background Destacado no Link Ativo */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 py-6 px-6 visible"
            : "max-h-0 opacity-0 py-0 px-6 invisible border-transparent shadow-none"
        }`}
      >
        <nav className="flex flex-col gap-2 text-sm font-semibold tracking-widest text-text-main">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-all py-2.5 px-4 rounded-md ${
                  isActive
                    ? "text-primary font-bold bg-primary/10 border-l-4 border-primary"
                    : "hover:text-primary hover:bg-background-alt"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="pt-4 mt-4 border-t border-border">
          <Link
            href="/contato#reserva"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center bg-primary text-white text-sm font-semibold uppercase tracking-wider py-3 rounded-md shadow-xs hover:opacity-95 transition-opacity"
          >
            Reservar Mesa
          </Link>
        </div>
      </div>
    </header>
  );
}
