"use client";

import { useState, useRef, useEffect } from "react";

const services = [
  "Construction & Aménagement",
  "Menuiserie Aluminium",
  "Distribution Agro & Industrielle",
  "Conseil & Investissement",
  "Juridique & Administratif",
  "Autre / Plusieurs services",
];

export default function CarrickContact() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.service) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111 100%)" }}
    >
      {/* Decorative accent */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA text */}
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
                style={{ color: "#68277f", fontFamily: "'Courier New', monospace" }}
              >
                Passons à l&apos;action
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl font-black text-white mb-6"
              style={{ fontFamily: "'Georgia', serif", lineHeight: 1.05 }}
            >
              Vous avez un
              <br />
              <span style={{ color: "#68277f" }}>projet ?</span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Garamond, Georgia, serif" }}
            >
              Notre équipe est à votre écoute. Décrivez votre besoin, choisissez le service concerné et nous reviendrons vers vous avec une étude personnalisée.
            </p>

            {/* Contact info */}
            {[
              { icon: "📍", label: "Adresse", value: "Abidjan, Côte d'Ivoire" },
              { icon: "📧", label: "Email", value: "contact@carrickgroup.ci" },
              { icon: "📞", label: "Téléphone", value: "+225 XX XX XX XX XX" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: "rgba(200,169,110,0.12)", border: "1px solid rgba(200,169,110,0.25)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Courier New', monospace" }}>
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(200,169,110,0.2)",
              backdropFilter: "blur(12px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"
                  style={{ background: "rgba(126,200,138,0.15)", border: "2px solid #7EC88A" }}
                >
                  ✅
                </div>
                <h3
                  className="text-2xl font-black text-white mb-3"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Demande envoyée !
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Notre équipe vous contactera dans les 24 heures ouvrables.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="text-xl font-black text-white mb-8"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Demande de devis
                </h3>

                <div className="space-y-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name", label: "Nom complet", placeholder: "Jean Kouassi", type: "text" },
                      { name: "email", label: "Email", placeholder: "jean@example.com", type: "email" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label
                          className="block text-xs font-bold uppercase tracking-wider mb-2"
                          style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Courier New', monospace" }}
                        >
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            fontFamily: "Garamond, Georgia, serif",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(200,169,110,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Courier New', monospace" }}
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+225 XX XX XX XX XX"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "Garamond, Georgia, serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(200,169,110,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  {/* Service select */}
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Courier New', monospace" }}
                    >
                      Service concerné
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "Garamond, Georgia, serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(200,169,110,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ background: "#1a1a1a" }}>
                        Sélectionnez un service...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#1a1a1a" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Courier New', monospace" }}
                    >
                      Décrivez votre projet
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Décrivez brièvement votre besoin ou projet..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none resize-none"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "Garamond, Georgia, serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(200,169,110,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                    style={{
                      background: "linear-gradient(135deg, #68277f, #d4b87e)",
                      color: "#0a0a0a",
                      fontFamily: "'Courier New', monospace",
                      letterSpacing: "0.1em",
                    }}
                  >
                    ENVOYER MA DEMANDE →
                  </button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Courier New', monospace" }}
                  >
                    Réponse sous 24h ouvrables · Confidentialité garantie
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}