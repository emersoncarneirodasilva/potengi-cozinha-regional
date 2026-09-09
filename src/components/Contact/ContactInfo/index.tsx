import Image from "next/image";
import contactImg from "@/public/images/bridge.webp";

export default function ContactInfo() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "(84) 99999-9999";

  return (
    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
      <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-xl shadow-sm">
        <Image
          src={contactImg}
          alt="Vista da Praia da Redinha e Ponte Newton Navarro"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="bg-text-muted/5 border border-text-muted/10 rounded-xl p-8 md:p-10 flex flex-col justify-between grow space-y-8">
        <div className="space-y-6">
          <h3 className="font-medium text-2xl text-text-title">Informações</h3>

          <div className="space-y-4 font-sans text-sm text-text-muted">
            <div>
              <span className="block text-xs uppercase tracking-wider text-text-title font-semibold mb-1">
                Endereço
              </span>
              <p>
                Av. Dinarte Mariz, s/n - Praia da Redinha
                <br />
                Natal - RN, 59000-000
              </p>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-wider text-text-title font-semibold mb-1">
                Horários
              </span>
              <p>Terça a Quinta: 18h – 23h</p>
              <p>Sexta e Sábado: 12h – 00h</p>
              <p>Domingo: 12h – 17h</p>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-wider text-text-title font-semibold mb-1">
                Contato
              </span>
              <p>WhatsApp: {phoneNumber}</p>
              <p>Instagram: @potengicozinha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
