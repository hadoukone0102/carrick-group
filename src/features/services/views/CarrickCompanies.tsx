"use client";

import { companies } from "@/features/contants/company";
import { useRef, useEffect, useState } from "react";
import { CompanyAvatar } from "../components/company-avatar";


export default function CarrickCompanies() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
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
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)",
      }}
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
            <div className="h-px flex-1 max-w-12 bg-white" />
            <span className="text-xs text-white font-bold tracking-[0.3em] uppercase">
              Groupe Multisectoriel
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-white flex gap-2"
            style={{ lineHeight: 1.05 }}
          >
            Nos <span className="text-white">Divisions</span>
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
                  background:
                    active === i
                      ? "rgba(200,169,110,0.12)"
                      : "rgba(255,255,255,0.03)",
                  border:
                    active === i
                      ? "1px solid rgba(200,169,110,0.4)"
                      : "1px solid rgba(255,255,255,0.06)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
                }}
              >
                {/* Avatar */}
                <CompanyAvatar name={c.name} color={c.color} size="sm" />

                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-white truncate">
                    {c.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {c.id}
                  </p>
                </div>

                {/* Active indicator bar */}
                <div
                  className="w-1.5 h-8 rounded-full shrink-0 transition-all duration-300"
                  style={{
                    background: active === i ? c.color : "transparent",
                  }}
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
                background:
                  "linear-gradient(135deg, rgba(20,20,20,0.95), rgba(15,15,15,0.98))",
                border: `1px solid ${company.color}33`,
              }}
            >
              {/* Big number watermark */}
              <div
                className="absolute top-4 right-6 font-black select-none pointer-events-none"
                style={{
                  fontSize: "120px",
                  lineHeight: 1,
                  color: `${company.color}08`,
                }}
              >
                {company.id}
              </div>

              <div className="relative z-10">
                {/* Card header */}
                <div className="flex items-start gap-4 mb-6">
                  <CompanyAvatar
                    name={company.name}
                    color={company.color}
                    size="lg"
                  />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white">
                      {company.name}
                    </h3>
                    <p
                      className="mt-1 text-sm italic"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {company.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {company.description}
                </p>

                {/* Services grid */}
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
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: company.color }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "rgba(255,255,255,0.75)" }}
                        >
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <button
                    className="px-6 py-3 cursor-pointer rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-80"
                    style={{
                      background: "transparent",
                      border: `2px solid ${company.color}66`,
                      color: "white",
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