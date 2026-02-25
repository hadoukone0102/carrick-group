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
      }, 800);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, INTERVAL);
    return () => clearInterval(interval);
  }, [next]);

  // Progress bar
  useEffect(() => {
    // setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
    }, 30);
    return () => clearInterval(tick);
  }, [current]);

  const slide = SLIDES[current];

{/**
    .banner-img.entering {
          opacity: 1;
          transform: scale(1.05);
        }
        .banner-img.active {
          opacity: 1;
          transform: scale(1.0);
        }
        .banner-img.leaving {
          opacity: 0;
          transform: scale(1.08);
        }
        .banner-img.hidden {
          opacity: 0;
        }
    
*/}
  return (
    <>
      <style>{`
        .banner-img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        //   transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 8s ease-out;
        }
        

        .slide-content {
          animation: slideUp 0.9s cubic-bezier(0.22,1,0.36,1) both;
        }
        .slide-tag {
          animation: fadeIn 0.6s 0.1s ease both;
        }
        .slide-title {
          animation: slideUp 0.8s 0.2s cubic-bezier(0.22,1,0.36,1) both;
        }
        .slide-desc {
          animation: slideUp 0.8s 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        .slide-btn {
          animation: slideUp 0.8s 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .thumb-bar {
          position: relative;
          height: 3px;
          background: rgba(255,255,255,0.2);
          border-radius: 2px;
          overflow: hidden;
        }
        .thumb-bar-fill {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          background: white;
          border-radius: 2px;
          transition: width 30ms linear;
        }
        .diagonal-cut {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
        }
      `}</style>

      <section
        className="banner-root relative w-full overflow-hidden bg-primary" style={{ height: "calc(90vh - 4rem)" }}>
        
        {SLIDES.map((s, i) => (
          <Image
            key={i}
            src={s.img}
            width={100}
            height={500}
            alt={s.title}
            className={`w-full ${
              i === current
                ? "active"
                : i === prev
                ? "leaving"
                : "hidden"
            }`}
          />
        ))}

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,5,30,0.82) 0%, rgba(10,5,30,0.55) 50%, rgba(10,5,30,0.15) 100%)",
          }}
        />

        {/* Diagonal purple accent strip */}
        {/* <div
          className="absolute left-0 top-0 bottom-0 z-10 w-1.5"
          style={{ background: "linear-gradient(180deg, #7c3aed, #a855f7, #7c3aed)" }}
        /> */}

        {/* Content */}
        <div
          key={current}
          className="absolute inset-0 z-20 flex flex-col justify-center px-10 md:px-20 lg:px-28 max-w-3xl"
        >
          {/* Tag */}
          <div className="slide-tag flex items-center gap-3 mb-5">
            <span
              className="h-px w-8 text-secondary"
            //   style={{ background: "#a855f7" }}
            />
            <span
              className="text-xs font-medium uppercase tracking-[0.2em] text-secondary"
            //   style={{ color: "#d8b4fe" }}
            >
              {slide.tag}
            </span>
          </div>

          {/* Title */}
          <h1
            className="slide-title text-white leading-[1.08] mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              fontWeight: 900,
            }}
          >
            {slide.title}{" "}
            <span className="text-secondary">{slide.highlight}</span>
          </h1>

          {/* Description */}
          <p
            className="slide-desc text-white/70 leading-relaxed mb-8 max-w-lg"
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)", fontWeight: 300 }}
          >
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="slide-btn flex flex-wrap gap-4">
            <a
              href={slide.path}
              className="inline-flex bg-secondary shadow-secondary items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90 active:scale-95"
            //   style={{
            //     // background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            //     // boxShadow: "0 4px 20px rgba(124,58,237,0.45)",
            //   }}
            >
              {slide.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#devis"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-sm border border-white/30 hover:border-white/60 transition-all duration-200 hover:bg-white/10"
            >
              Devis gratuit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10M7 12h10M7 17h6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Slide controls — bottom right */}
        <div className="absolute bottom-8 right-8 md:right-12 z-30 flex flex-col items-end gap-4">
          {/* Slide indicators */}
          <div className="flex gap-2 items-center">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group flex flex-col gap-1 cursor-pointer"
                aria-label={`Slide ${i + 1}`}
              >
                <div
                  className="thumb-bar transition-all duration-300"
                  style={{ width: i === current ? 48 : 20 }}
                >
                  <div
                    className="thumb-bar-fill"
                    style={{ width: i === current ? `${progress}%` : i < current ? "100%" : "0%" }}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Slide counter */}
          <div className="flex items-baseline gap-1">
            <span
              className="text-white font-bold"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", lineHeight: 1 }}
            >
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-white/30 text-sm font-light">
              / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          {/* Prev / Next arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
              className="w-9 h-9 border border-white/25 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/50 transition-all duration-200 rounded-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={() => goTo((current + 1) % SLIDES.length)}
              className="w-9 h-9 border border-white/25 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/50 transition-all duration-200 rounded-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/50 animate-pulse" />
        </div> */}
      </section>
    </>
  );
}