"use client";

import { useRef, useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Vous avez un projet de construction ?",
    subtitle: "Construction & Aménagement",
    answer:
      "Nous prenons en charge l'intégralité de votre chantier — du terrassement à la livraison — avec rigueur, respect des délais et transparence totale sur les coûts.",
    points: [
      "Bâtiments résidentiels, commerciaux & institutionnels",
      "Rénovation & réhabilitation du patrimoine bâti",
      "Réseaux d'assainissement & terrassement",
      "Suivi de chantier et coordination des équipes",
    ],
    cta: "Demander un devis construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    accent: "#C8A96E",
  },
  {
    number: "02",
    title: "Vous souhaitez moderniser vos espaces ?",
    subtitle: "Menuiserie Aluminium",
    answer:
      "CARRICK ALU transforme vos façades, ouvertures et intérieurs avec des solutions aluminium alliant design contemporain, isolation thermique et durabilité.",
    points: [
      "Fenêtres françaises, coulissantes & soufflets",
      "Portes coulissantes & escaliers vitrés",
      "Balcons vitrés avec inox",
      "Stores électriques & finitions personnalisées",
    ],
    cta: "Obtenir un devis menuiserie",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    accent: "#7EB8D4",
  },
  {
    number: "03",
    title: "Vous cherchez des produits fiables en distribution ?",
    subtitle: "Distribution Agro & Industrielle",
    answer:
      "Nous connectons producteurs et marchés grâce à une logistique maîtrisée, une traçabilité rigoureuse et un approvisionnement régulier — pour que votre chaîne ne s'arrête jamais.",
    points: [
      "Distribution agroalimentaire certifiée",
      "Distribution industrielle spécialisée",
      "Traçabilité et conformité aux normes",
      "Approvisionnement fiable et ponctuel",
    ],
    cta: "Discuter de vos besoins",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    accent: "#7EC88A",
  },
  {
    number: "04",
    title: "Votre projet a besoin de structure stratégique ?",
    subtitle: "Conseil & Investissement",
    answer:
      "Nos experts vous aident à monter, sécuriser et optimiser vos projets — qu'il s'agisse d'un investissement immobilier, d'une expansion ou d'une entrée sur les marchés financiers.",
    points: [
      "Montage et structuration de projets",
      "Études de faisabilité & consulting",
      "Accompagnement en investissement",
      "Crowdfunding immobilier & SCPI",
    ],
    cta: "Prendre rendez-vous",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    accent: "#B87ED4",
  },
  {
    number: "05",
    title: "Vos démarches juridiques vous freinent ?",
    subtitle: "Juridique & Administratif",
    answer:
      "Notre pôle dédié simplifie chaque étape — création d'entreprise, contrats, fiscalité, recouvrement — pour que vous puissiez avancer l'esprit libre.",
    points: [
      "Conseil juridique & rédaction de contrats",
      "Création d'entreprise & formalités",
      "Conseil fiscal et comptable",
      "Recouvrement & assistance sociale",
    ],
    cta: "Consulter un expert",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    accent: "#D4A27E",
  },
];

export default function CarrickServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const s = services[activeIdx];

  return (
    <section
      ref={ref}
      className="relative py-24 px-4"
      style={{ background: "#f7f4ef" }}
    >
      {/* Top label */}
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s ease",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: "#C8A96E" }} />
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: "#C8A96E", fontFamily: "'Courier New', monospace" }}
            >
              Ce que nous faisons pour vous
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black"
            style={{ fontFamily: "'Georgia', serif", color: "#111", lineHeight: 1.05 }}
          >
            Nos{" "}
            <span style={{ color: "#C8A96E" }}>Services</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "#555", fontFamily: "Garamond, Georgia, serif" }}>
            Chaque service est pensé pour répondre à un besoin précis. Dites-nous où vous en êtes, nous vous proposons la solution.
          </p>
        </div>

        {/* Tab pills */}
        <div
          className="flex flex-wrap gap-2 mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.2s",
          }}
        >
          {services.map((sv, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: activeIdx === i ? sv.accent : "rgba(0,0,0,0.07)",
                color: activeIdx === i ? "#fff" : "#444",
                fontFamily: "'Courier New', monospace",
                border: activeIdx === i ? `1.5px solid ${sv.accent}` : "1.5px solid transparent",
              }}
            >
              {sv.subtitle}
            </button>
          ))}
        </div>

        {/* Main card */}
        <div
          key={activeIdx}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 24px 80px rgba(0,0,0,0.12)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease",
          }}
        >
          {/* Left — content */}
          <div
            className="p-10 md:p-14 flex flex-col justify-between"
            style={{ background: "#fff" }}
          >
            <div>
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: s.accent, fontFamily: "'Courier New', monospace" }}
              >
                {s.number} — {s.subtitle}
              </span>

              <h3
                className="mt-4 text-2xl md:text-3xl font-black"
                style={{ fontFamily: "'Georgia', serif", color: "#111", lineHeight: 1.25 }}
              >
                {s.title}
              </h3>

              {/* Answer bar */}
              <div
                className="mt-6 p-5 rounded-2xl"
                style={{ background: `${s.accent}12`, borderLeft: `4px solid ${s.accent}` }}
              >
                <p className="text-base leading-relaxed" style={{ color: "#333", fontFamily: "Garamond, Georgia, serif" }}>
                  {s.answer}
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: s.accent }}
                    />
                    <span className="text-sm" style={{ color: "#444" }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="mt-10 self-start px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                background: s.accent,
                color: "#fff",
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.05em",
              }}
            >
              {s.cta} →
            </button>
          </div>

          {/* Right — image */}
          <div className="relative min-h-64 lg:min-h-full overflow-hidden">
            <img
              src={s.image}
              alt={s.subtitle}
              className="w-full h-full object-cover"
              style={{ minHeight: "360px" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${s.accent}44 0%, transparent 60%)` }}
            />
            {/* Number overlay */}
            <div
              className="absolute bottom-6 right-6 font-black select-none"
              style={{
                fontSize: "100px",
                lineHeight: 1,
                color: "rgba(255,255,255,0.15)",
                fontFamily: "'Georgia', serif",
              }}
            >
              {s.number}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}