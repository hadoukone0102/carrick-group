"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const companies = [
  {
    id: "01",
    name: "Carrick Construction",
    tagline: "Bâtir avec rigueur, construire avec vision",
    description:
      "Construction de bâtiments résidentiels, commerciaux et institutionnels, rénovation, terrassement et aménagement paysager.",
    services: ["Bâtiments clés en main", "Rénovation & réhabilitation", "Terrassement", "Relevés topographiques"],
    icon: "🏗️",
    img:"/carrick/c-construction-img.jpg",
    color: "#68277f",
    bg: "from-stone-900 to-stone-800",
  },
  {
    id: "02",
    name: "Carrick Alu",
    tagline: "L'esthétique au service de la performance",
    description:
      "Menuiserie aluminium moderne et design : fenêtres, portes, balcons vitrés, stores électriques et escaliers vitrés.",
    services: ["Fenêtres françaises & coulissantes", "Portes coulissantes", "Balcons vitrés inox", "Stores électriques"],
    icon: "🪟",
    img:"/carrick/c-alu-img.jpg",
    color: "#7EB8D4",
    bg: "from-slate-900 to-slate-800",
  },
  {
    id: "03",
    name: "Carrick Agro Retail",
    tagline: "Fiabilité, traçabilité, performance logistique",
    description:
      "Distribution agroalimentaire et industrielle avec un souci constant de qualité, conformité et logistique maîtrisée.",
    services: ["Distribution agroalimentaire", "Distribution industrielle", "Traçabilité produits", "Approvisionnement régulier"],
    icon: "🌾",
    color: "#7EC88A",
    bg: "from-emerald-950 to-emerald-900",
  },
  {
    id: "04",
    name: "Carrick Conseil",
    tagline: "Structurez, sécurisez et optimisez vos projets",
    description:
      "Cabinet de conseil stratégique : montage de projets, investissement, marchés financiers, crowdfunding immobilier & SCPI.",
    services: ["Montage de projets", "Consulting stratégique", "Marchés financiers", "Crowdfunding & SCPI"],
    icon: "📊",
    img:"/carrick/c-conseil-img.jpg",
    color: "#B87ED4",
    bg: "from-purple-950 to-purple-900",
  },
  {
    id: "05",
    name: "Carrick Point d'Accès aux Droits",
    tagline: "Sécurisez vos démarches, protégez vos intérêts",
    description:
      "Accompagnement juridique et administratif : conseil, rédaction de contrats, création d'entreprise, assistance fiscale et sociale.",
    services: ["Conseil juridique", "Rédaction de contrats", "Création d'entreprise", "Recouvrement & assistance sociale"],
    icon: "⚖️",
    color: "#D4A27E",
    bg: "from-amber-950 to-amber-900",
  },
];

export default function CarrickCompanies() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const company = companies[active];

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)" }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-12 bg-white" 
                // style={{ background: "#68277f" }} 
            />
            <span
              className="text-xs text-white font-bold tracking-[0.3em] uppercase">
              Groupe Multisectoriel
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-white"
            style={{lineHeight: 1.05 }}
          >
            Nos
            <br />
            <span  className="text-white"
                // style={{ color: "#68277f" }}
            >Entreprises</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left — Tab list */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {companies.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className="group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300"
                style={{
                  background: active === i ? "rgba(200,169,110,0.12)" : "rgba(255,255,255,0.03)",
                  border: active === i ? "1px solid rgba(200,169,110,0.4)" : "1px solid rgba(255,255,255,0.06)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
                }}
              >
                <span
                  className="text-2xl w-10 h-10 flex items-center justify-center rounded-lg shrink-0"
                  // style={{
                  //   background: active === i ? `${c.color}22` : "rgba(255,255,255,0.05)",
                  // }}
                >
                  {c.img ? (<Image src={c.img} width={20} height={20} alt={c.name}  />) :  c.icon}
                </span>
                <div>
                  <p
                    className="font-bold text-sm text-white"
                    // style={{
                    //   color: active === i ? c.color : "rgba(255,255,255,0.7)",
                    // }}
                  >
                    {c.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.35)", }}
                  >
                    {c.id}
                  </p>
                </div>
                <div
                  className="ml-auto w-1.5 h-8 rounded-full shrink-0 transition-all duration-300"
                  style={{ background: active === i ? c.color : "transparent" }}
                />
              </button>
            ))}
          </div>

          {/* Right — Detail card */}
          <div
            className="lg:col-span-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            <div
              className="rounded-2xl p-8 md:p-10 h-full relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(20,20,20,0.95), rgba(15,15,15,0.98))`,
                border: `1px solid ${company.color}33`,
              }}
            >
              {/* Big number watermark */}
              <div
                className="absolute top-4 right-6 font-black select-none"
                style={{
                  fontSize: "120px",
                  lineHeight: 1,
                  color: `${company.color}08`,
                }}
              >
                {company.id}
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <span
                    className="text-4xl w-16 h-16 flex items-center justify-center rounded-2xl shrink-0"
                    style={{ background: `${company.color}18`, border: `1px solid ${company.color}33` }}
                  >
                    {company.img ? (<Image src={company.img} width={20} height={20} alt={company.name}  />) :  company.icon}
                    {/* {company.icon} */}
                  </span>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-black text-white"
                    >
                      {company.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/70 italic" 
                      // style={{ color: company.color,}}
                    >
                      {company.tagline}
                    </p>
                  </div>
                </div>

                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {company.description}
                </p>

                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-4"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    Prestations clés
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {company.services.map((s, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: company.color }}
                        />
                        <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  {/* <button
                    className="px-6 py-3 rounded-xl text-secondary cursor-pointer border border-secondary text-sm font-bold transition-all duration-200 hover:scale-105"
                  >
                    En savoir plus →
                  </button> */}
                  <button
                    className="px-6 py-3 cursor-pointer rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-80"
                    style={{
                      background: "transparent",
                      border: `2px solid ${company.color}66`,
                      color: "white",
                      // color: company.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}