"use client";

import { useRef, useEffect, useState } from "react";

const commitments = [
  { icon: "🏆", title: "Qualité", desc: "Standards élevés à chaque étape de nos projets, sans compromis." },
  { icon: "🛡️", title: "Sécurité", desc: "Respect strict des normes techniques et réglementaires en vigueur." },
  { icon: "📋", title: "Conformité", desc: "Application rigoureuse des exigences légales et professionnelles." },
];

// Placeholder partner logos (you can replace with real logos)
const partners = [
  { name: "Partenaire Technique A", type: "Technique" },
  { name: "Partenaire Financier B", type: "Financier" },
  { name: "Institution C", type: "Institutionnel" },
  { name: "Partenaire Technique D", type: "Technique" },
  { name: "Fournisseur E", type: "Fournisseur" },
  { name: "Institution F", type: "Institutionnel" },
];

export default function CarrickPartners() {
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
      className="relative py-24 px-4"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Engagements */}
        <div
          className="mb-20"
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
              Notre promesse
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-12"
            style={{ fontFamily: "'Georgia', serif", lineHeight: 1.05 }}
          >
            Nos <span style={{ color: "#C8A96E" }}>Engagements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((c, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(200,169,110,0.15)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.7s ease ${i * 0.12}s`,
                }}
              >
                <span className="text-4xl block mb-4">{c.icon}</span>
                <h3
                  className="text-xl font-black text-white mb-3"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {c.desc}
                </p>
                <div
                  className="mt-6 h-0.5 w-12 rounded-full"
                  style={{ background: "#C8A96E" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s ease 0.3s",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: "#C8A96E" }} />
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: "#C8A96E", fontFamily: "'Courier New', monospace" }}
            >
              Ils nous font confiance
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-12"
            style={{ fontFamily: "'Georgia', serif", lineHeight: 1.05 }}
          >
            Nos <span style={{ color: "#C8A96E" }}>Partenaires</span>
          </h2>

          <p
            className="mb-10 max-w-xl text-base"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Garamond, Georgia, serif" }}
          >
            Nous collaborons avec des partenaires techniques, financiers et institutionnels reconnus afin de garantir la réussite et la durabilité de chaque projet.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-5 rounded-2xl text-center transition-all duration-200 hover:border-amber-500/30"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  minHeight: "100px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.5s ease ${0.4 + i * 0.07}s`,
                }}
              >
                {/* Placeholder logo circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 font-bold text-sm"
                  style={{
                    background: "rgba(200,169,110,0.12)",
                    border: "1px solid rgba(200,169,110,0.25)",
                    color: "#C8A96E",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {p.name.charAt(0)}
                </div>
                <p className="text-xs font-bold text-white/60 leading-tight" style={{ fontFamily: "'Courier New', monospace" }}>
                  {p.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}