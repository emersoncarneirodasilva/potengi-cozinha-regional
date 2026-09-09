"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2 pessoas",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = `Olá, gostaria de fazer uma reserva!%0a%0a*Nome:* ${formData.name}%0a*Telefone:* ${formData.phone}%0a*E-mail:* ${formData.email || "Não informado"}%0a*Data:* ${formData.date}%0a*Horário:* ${formData.time}%0a*Pessoas:* ${formData.guests}%0a*Observações:* ${formData.message || "Nenhuma"}`;

    const whatsappNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+5584999999999";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Abre o WhatsApp em outra aba
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Dispara o toast de sucesso
    toast.success("Redirecionando para o WhatsApp!", {
      description: "Sua mensagem de reserva foi gerada com sucesso.",
    });

    // Limpa os campos do formulário (mantendo o valor padrão de pessoas se desejar)
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: "2 pessoas",
      message: "",
    });
  };

  return (
    <div
      id="reserva"
      className="lg:col-span-7 bg-text-muted/5 border border-text-muted/10 rounded-xl p-8 md:p-10 flex flex-col justify-between scroll-mt-10"
    >
      <div className="space-y-2 mb-6">
        <h3 className="font-medium text-2xl md:text-3xl text-text-title">
          Reserve sua mesa
        </h3>
        <p className="font-sans text-sm text-text-muted">
          Preencha os dados abaixo para enviar sua solicitação de reserva
          diretamente pelo WhatsApp.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 grow flex flex-col justify-between"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-wider font-semibold text-text-title">
                Seu Nome *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Maria Silva"
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-text-muted/20 text-text-title text-sm focus:outline-none focus:border-text-title transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-wider font-semibold text-text-title">
                Telefone / WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex: (84) 98888-8888"
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-text-muted/20 text-text-title text-sm focus:outline-none focus:border-text-title transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs uppercase tracking-wider font-semibold text-text-title">
              E-mail (Opcional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ex: maria@email.com"
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-text-muted/20 text-text-title text-sm focus:outline-none focus:border-text-title transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-wider font-semibold text-text-title">
                Data *
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-text-muted/20 text-text-title text-sm focus:outline-none focus:border-text-title transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-wider font-semibold text-text-title">
                Horário *
              </label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-text-muted/20 text-text-title text-sm focus:outline-none focus:border-text-title transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-wider font-semibold text-text-title">
                Pessoas *
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-text-muted/20 text-text-title text-sm focus:outline-none focus:border-text-title transition-colors"
              >
                <option value="1 pessoa">1 pessoa</option>
                <option value="2 pessoas">2 pessoas</option>
                <option value="3 pessoas">3 pessoas</option>
                <option value="4 pessoas">4 pessoas</option>
                <option value="5+ pessoas">5+ pessoas</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs uppercase tracking-wider font-semibold text-text-title">
              Observações (Opcional)
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              placeholder="Restrição alimentar ou ocasião especial?"
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-text-muted/20 text-text-title text-sm focus:outline-none focus:border-text-title transition-colors resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="group w-full py-4 px-6 rounded-xl bg-text-title text-background font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:scale-[1.01] shadow-md cursor-pointer mt-4 flex items-center justify-center gap-2"
        >
          <span>Confirmar Reserva via WhatsApp</span>
          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
        </button>
      </form>
    </div>
  );
}
