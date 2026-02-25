import { SERVICES } from "@/features/contants/service.index";
import Image from "next/image";


export default function CarrickServices() {
  return (
    <section className="w-full bg-white  px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h1
          className="mt-2 text-3xl md:text-4xl font-bold text-primary uppercase leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nos Services
        </h1>
        <div className="mt-3 mx-auto w-40 h-2 rounded-full bg-secondary" />
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group flex flex-col bg-[#F4F6FA] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Texte */}
            <div className="flex flex-col gap-3 p-6">
              <h3
                className="text-lg font-bold text-primary"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#services"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline underline-offset-4 transition-all"
              >
                En savoir plus
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}