import { Metadata } from "next";
import Hero from "@/src/components/Contact/Hero";
import ContactInfo from "@/src/components/Contact/ContactInfo";
import ContactForm from "@/src/components/Contact/ContactForm";
import Location from "@/src/components/Contact/Location";

export const metadata: Metadata = {
  title: "Contato & Localização | Potengi Cozinha Regional",
  description:
    "Entre em contato conosco, tire dúvidas, reserve sua mesa pelo WhatsApp ou venha nos visitar na Praia da Redinha, em Natal - RN.",
  openGraph: {
    title: "Contato & Localização | Potengi Cozinha Regional",
    description:
      "Faça sua reserva de mesa diretamente pelo WhatsApp e venha apreciar a vista panorâmica do Rio Potengi.",
  },
};

export default function Contact() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="wrapper space-y-16">
          {/* Cabeçalho centralizado */}
          <Hero />

          {/* Grid Principal (Informações e Formulário lado a lado) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Seção de Localização em largura total logo abaixo */}
      <Location />
    </>
  );
}
