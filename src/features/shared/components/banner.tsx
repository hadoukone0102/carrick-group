"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { SLIDES } from "@/features/contants/slide.index";

const INTERVAL = 5000;

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setPrev(current);
      setAnimating(true);
      setCurrent(index);
      setProgress(0);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 900);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, INTERVAL);
    return () => clearInterval(interval);
  }, [next]);

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
    }, 30);
    return () => clearInterval(tick);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      {/* ── Images empilées avec transition opacity ── */}
      {SLIDES.map((s, i) => {
        const isActive = i === current;
        const isLeaving = i === prev;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
            style={{
              opacity: isActive ? 1 : isLeaving ? 0 : 0,
              zIndex: isActive ? 1 : isLeaving ? 1 : 0,
            }}
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        );
      })}

      {/* ── Overlay gradient sombre ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,5,30,0.85) 0%, rgba(10,5,30,0.55) 55%, rgba(10,5,30,0.1) 100%)",
        }}
      />

      {/* ── Contenu du slide (re-monte à chaque changement grâce à key) ── */}
      <div
        key={current}
        className="absolute inset-0 z-20 flex flex-col justify-center px-10 md:px-20 lg:px-28 max-w-3xl"
      >
        {/* Tag */}
        <div
          className="flex items-center gap-3 mb-5 opacity-0 translate-y-4"
          style={{ animation: "slideUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) forwards" }}
        >
          <span className="h-px w-8 bg-secondary" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            {slide.tag}
          </span>
        </div>

        {/* Titre */}
        <h1
          className="text-white leading-[1.08] mb-3 opacity-0 translate-y-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 900,
            animation: "slideUp 0.8s 0.2s cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        >
          {slide.title}{" "}
          <span className="text-secondary">{slide.highlight}</span>
        </h1>

        {/* Description */}
        <p
          className="text-white/70 leading-relaxed mb-8 max-w-lg opacity-0 translate-y-6"
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
            fontWeight: 300,
            animation: "slideUp 0.8s 0.4s cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        >
          {slide.description}
        </p>

        {/* Boutons */}
        <div
          className="flex flex-wrap gap-4 opacity-0 translate-y-6"
          style={{ animation: "slideUp 0.8s 0.55s cubic-bezier(0.22,1,0.36,1) forwards" }}
        >
          <a
            href={slide.path}
            className="inline-flex bg-secondary items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 active:scale-95"
          >
            {slide.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#devis"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-sm border border-white/30 hover:border-white/60 transition-all duration-200 hover:bg-white/10"
          >
            Devis gratuit
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 7h10M7 12h10M7 17h6" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Contrôles bas-droite ── */}
      <div className="absolute bottom-8 right-8 md:right-12 z-30 flex flex-col items-end gap-4">

        {/* Barres de progression */}
        <div className="flex gap-2 items-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="cursor-pointer"
            >
              <div
                className="relative h-[3px] bg-white/20 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? 48 : 20 }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 bg-white rounded-full transition-[width] duration-[30ms] linear"
                  style={{
                    width:
                      i === current
                        ? `${progress}%`
                        : i < current
                        ? "100%"
                        : "0%",
                  }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Compteur */}
        <div className="flex items-baseline gap-1">
          <span
            className="text-white font-bold text-[2rem] leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-white/30 text-sm font-light">
            / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Flèches */}
        <div className="flex gap-2">
          <button
            onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
            className="w-9 h-9 border border-white/25 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/50 transition-all duration-200 rounded-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goTo((current + 1) % SLIDES.length)}
            className="w-9 h-9 border border-white/25 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/50 transition-all duration-200 rounded-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── keyframes injectés une seule fois ── */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}