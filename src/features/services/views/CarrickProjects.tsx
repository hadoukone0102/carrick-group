"use client";

import { useRef, useEffect, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Complexe résidentiel — Abidjan",
    category: "Construction",
    status: "Livré",
    desc: "Construction d'un immeuble R+4 de 24 appartements, avec parking souterrain et espace paysager.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    tags: ["Résidentiel", "Clés en main", "Terrassement"],
    accent: "#C8A96E",
  },
  {
    id: "02",
    title: "Façades aluminium — Immeuble commercial",
    category: "Aluminium",
    status: "Livré",
    desc: "Installation de 120 m² de fenêtres coulissantes haute performance thermique sur un immeuble de bureaux.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    tags: ["Fenêtres", "Design", "Performance thermique"],
    accent: "#7EB8D4",
  },
  {
    id: "03",
    title: "Structuration d'investissement SCPI",
    category: "Conseil",
    status: "En cours",
    desc: "Accompagnement d'un groupe d'investisseurs dans la structuration d'un portefeuille immobilier via crowdfunding.",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=600&q=80",
    tags: ["Investissement", "SCPI", "Crowdfunding"],
    accent: "#B87ED4",
  },
  {
    id: "04",
    title: "Réhabilitation d'entrepôt industriel",
    category: "Construction",
    status: "Livré",
    desc: "Rénovation complète d'un entrepôt de 800 m² avec mise aux normes et réorganisation des flux logistiques.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    tags: ["Réhabilitation", "Industriel", "Normes"],
    accent: "#7EC88A",
  },
];

const statusColors: Record<string, string> = {
  "Livré": "#7EC88A",
  "En cours": "#C8A96E",
};

export default function CarrickProjects() {
  const [visible, setVisible] = useState(false);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#f7f4ef" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s ease",
          }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12" style={{ background: "#C8A96E" }} />
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase"
                style={{ color: "#C8A96E", fontFamily: "'Courier New', monospace" }}
              >
                Ce que nous avons bâti
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-black"
              style={{ fontFamily: "'Georgia', serif", color: "#111", lineHeight: 1.05 }}
            >
              Projets &<br />
              <span style={{ color: "#C8A96E" }}>Réalisations</span>
            </h2>
          </div>
          <p
            className="text-base max-w-sm"
            style={{ color: "#666", fontFamily: "Garamond, Georgia, serif" }}
          >
            Chaque projet est une preuve concrète de notre engagement envers la qualité, la conformité et la satisfaction client.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="group rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoverId(p.id)}
              onMouseLeave={() => setHoverId(null)}
              style={{
                boxShadow: hoverId === p.id ? "0 20px 60px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.06)",
                opacity: visible ? 1 : 0,
                transform: visible
                  ? hoverId === p.id ? "translateY(-4px)" : "translateY(0)"
                  : "translateY(24px)",
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "240px" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: hoverId === p.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)`,
                  }}
                />
                {/* Status badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: `${statusColors[p.status]}22`,
                    border: `1px solid ${statusColors[p.status]}66`,
                    color: statusColors[p.status],
                    fontFamily: "'Courier New', monospace",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  ● {p.status}
                </div>
                {/* Number */}
                <div
                  className="absolute bottom-4 left-4 font-black text-white opacity-20 select-none"
                  style={{ fontSize: "64px", lineHeight: 1, fontFamily: "'Georgia', serif" }}
                >
                  {p.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-6" style={{ background: "#fff" }}>
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: p.accent, fontFamily: "'Courier New', monospace" }}
                >
                  {p.category}
                </span>
                <h3
                  className="mt-2 text-xl font-black"
                  style={{ fontFamily: "'Georgia', serif", color: "#111" }}
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#666" }}>
                  {p.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        background: `${p.accent}12`,
                        color: p.accent,
                        fontFamily: "'Courier New', monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.5s",
          }}
        >
          <button
            className="px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: "#111",
              color: "#C8A96E",
              border: "1px solid rgba(200,169,110,0.3)",
              fontFamily: "'Courier New', monospace",
              letterSpacing: "0.05em",
            }}
          >
            Voir toutes nos réalisations →
          </button>
        </div>
      </div>
    </section>
  );
}