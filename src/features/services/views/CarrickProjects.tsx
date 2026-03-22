"use client";

import { projects } from "@/features/contants/projet";
import { useRef, useEffect, useState } from "react";
import Image from 'next/image';

const statusColors: Record<string, string> = {
  "Livré": "#7EC88A",
  "En cours": "#68277f",
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
              <div className="h-px w-12" style={{ background: "black" }} />
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase text-black"
                // style={{ color: "#68277f" }}
              >
                Ce que nous avons bâti
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-black"
              style={{ color: "#111", lineHeight: 1.05 }}
            >
              Projets &<br />
              <span className="text-black">Réalisations</span>
            </h2>
          </div>
          <p
            className="text-sm max-w-sm"
            style={{ color: "#666"}}
          >
            Chaque projet est une preuve concrète de notre engagement envers la qualité, la conformité et la satisfaction client.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="group rounded-2xl overflow-hidden cursor-pointer "
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
              <div className="relative overflow-hidden h-full" style={{ height: "240px" }}>
                <Image
                  src={p.image as string}
                  alt={p.title as string}
                  fill
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
                  style={{ fontSize: "64px", lineHeight: 1, }}
                >
                  {p.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 h-full" style={{ background: "#fff" }}>
                <span
                  className="text-xs font-bold tracking-widest uppercase text-black"
                >
                  {p.category}
                </span>
                <h3
                  className="mt-2 text-xl font-black"
                  style={{ color: "#111" }}
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
                      className="px-3 py-1 rounded-full text-xs border border-secondary"
                      style={{
                        color: "black",
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
      </div>
    </section>
  );
}