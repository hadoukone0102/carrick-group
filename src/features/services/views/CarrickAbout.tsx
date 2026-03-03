"use client";

import { useRef, useEffect, useState } from "react";

const values = [
  { icon: "⚡", label: "Intégrité", desc: "Transparence et honnêteté dans chaque engagement." },
  { icon: "🎯", label: "Excellence", desc: "Standards élevés à chaque étape de nos projets." },
  { icon: "💡", label: "Innovation", desc: "Solutions modernes adaptées aux défis actuels." },
  { icon: "🤝", label: "Engagement", desc: "Nous restons présents, de la conception à la livraison." },
];

const stats = [
  { value: "5", label: "Pôles d'expertise" },
  { value: "100%", label: "Orienté résultats" },
  { value: "🌍", label: "Vision Afrique" },
  { value: "∞", label: "Engagement client" },
];

export default function CarrickAbout() {
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

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#0d0d0d" }}
    >
      {/* Diagonal accent strip */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(200,169,110,0.6) 100%)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12" style={{ background: "#68277f" }} />
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase"
                style={{ color: "#68277f", }}
              >
                Qui sommes-nous
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl font-black text-white mb-6"
              style={{  lineHeight: 1.05 }}
            >
              À Propos de{" "}
              <br />
              <span style={{ color: "#68277f" }}>CARRICK GROUP</span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              CARRICK GROUP est un groupe multisectoriel structuré autour de cinq pôles d&apos;expertise complémentaires : construction, aluminium, distribution, conseil stratégique et accompagnement juridique.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.45)", }}
            >
              Notre force repose sur une approche intégrée des projets, une expertise technique multidisciplinaire et une exigence élevée en matière de qualité. Nous intervenons avec rigueur, professionnalisme et engagement total envers nos clients.
            </p>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Notre Vision",
                  text: "Devenir un acteur de référence en Afrique dans la construction, le conseil stratégique et les services intégrés à forte valeur ajoutée.",
                },
                {
                  title: "Notre Mission",
                  text: "Offrir des solutions techniques, stratégiques et opérationnelles adaptées aux besoins de nos clients, en garantissant qualité, sécurité et conformité.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl"
                  style={{
                    background: "rgba(200,169,110,0.07)",
                    border: "1px solid rgba(200,169,110,0.2)",
                  }}
                >
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "#68277f", fontFamily: "'Courier New', monospace" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — values + stats */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mb-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p
                    className="text-2xl md:text-3xl font-black"
                    style={{ color: "#68277f",}}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(255,255,255,0.4)", }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Values grid */}
            <p
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.3)", }}
            >
              Nos Valeurs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:border-amber-500/30"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `all 0.6s ease ${0.4 + i * 0.1}s`,
                  }}
                >
                  <span className="text-2xl shrink-0">{v.icon}</span>
                  <div>
                    <p
                      className="font-bold text-white mb-1"
                    >
                      {v.label}
                    </p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}