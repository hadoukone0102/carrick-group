"use client";

import { useEffect, useRef, useState } from "react";

interface DevisDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Construction & Aménagement",
  "Menuiserie Aluminium",
  "Distribution Agro-Industrielle",
  "Conseil & Investissement",
  "Juridique & Administratif",
];

export default function DevisDrawer({ open, onClose }: DevisDrawerProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "", nom: "", email: "",
    telephone: "", entreprise: "", message: "", budget: "", delai: "",
  });
  const firstInputRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 350);
    //   setStep(1); setSubmitted(false);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} style={{
        position: "fixed", inset: 0,
        background: "rgba(10,6,18,0.55)",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.4s ease",
      }} />

      {/* Drawer */}
      <div role="dialog" aria-modal="true" style={{
        position: "fixed", top: 0, right: 0,
        height: "100dvh",
        width: "min(50vw, 680px)", minWidth: "340px",
        background: "#fff", zIndex: 1001,
        boxShadow: "-8px 0 60px rgba(104,39,127,0.18)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.45s cubic-bezier(0.32,0.72,0,1)",
        display: "flex", flexDirection: "column", overflow: "hidden",
      }}>
        {/* Header violet */}
        <div style={{
          background: "linear-gradient(135deg, #68277f 0%, #4a1a5c 100%)",
          padding: "28px 36px 24px", position: "relative", flexShrink: 0,
        }}>
          <div style={{
            position: "absolute", top: -40, right: -40,
            width: 160, height: 160, borderRadius: "50%",
            background: "rgba(255,255,255,0.06)", pointerEvents: "none",
          }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "'Courier New', monospace", marginBottom: "6px" }}>
                Carrick Group
              </p>
              <h2 style={{ color: "#fff", fontSize: "26px", fontWeight: 900, fontFamily: "'Georgia', serif", lineHeight: 1.1, margin: 0 }}>
                Demande de devis
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", marginTop: "6px" }}>
                Réponse sous 24h ouvrées
              </p>
            </div>
            <button onClick={onClose} style={{
              background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%",
              width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", fontSize: "18px",
            }}>✕</button>
          </div>
          {/* Progress bar */}
          {!submitted && (
            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              {[1, 2].map((s) => (
                <div key={s} style={{
                  height: 3, flex: 1, borderRadius: 2,
                  background: step >= s ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
                  transition: "background 0.3s",
                }} />
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "32px 36px" }}>
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: "16px" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#68277f22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "#68277f" }}>✓</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Georgia', serif" }}>Demande envoyée !</h3>
              <p style={{ color: "#666", fontSize: 15, maxWidth: 320, lineHeight: 1.6 }}>
                Notre équipe reviendra vers vous sous <strong>24h ouvrées</strong>.
              </p>
              <button onClick={onClose} style={{ background: "#68277f", color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px", fontWeight: 700, cursor: "pointer" }}>Fermer</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              {step === 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <StepLabel>Étape 1 — Votre projet</StepLabel>

                  <Field label="Service concerné *">
                    <select ref={firstInputRef} required value={form.service} onChange={e => update("service", e.target.value)}>
                      <option value="">Sélectionner un service…</option>
                      {SERVICES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </Field>

                  <Field label="Décrivez votre besoin *">
                    <textarea required rows={4} placeholder="Ex : Je souhaite construire un bâtiment R+2 à Abidjan…" value={form.message} onChange={e => update("message", e.target.value)} />
                  </Field>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="Budget estimé">
                      <select value={form.budget} onChange={e => update("budget", e.target.value)}>
                        <option value="">Non défini</option>
                        <option>Moins de 5M FCFA</option>
                        <option>5M – 20M FCFA</option>
                        <option>20M – 100M FCFA</option>
                        <option>Plus de 100M FCFA</option>
                      </select>
                    </Field>
                    <Field label="Délai souhaité">
                      <select value={form.delai} onChange={e => update("delai", e.target.value)}>
                        <option value="">Non défini</option>
                        <option>Urgent (- 1 mois)</option>
                        <option>1 – 3 mois</option>
                        <option>3 – 6 mois</option>
                        <option>+ 6 mois</option>
                      </select>
                    </Field>
                  </div>

                  <Btn disabled={!form.service || !form.message} onClick={() => setStep(2)}>
                    Continuer →
                  </Btn>
                </div>
              )}

              {step === 2 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <StepLabel>Étape 2 — Vos coordonnées</StepLabel>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="Nom complet *">
                      <input required type="text" placeholder="Jean Dupont" value={form.nom} onChange={e => update("nom", e.target.value)} />
                    </Field>
                    <Field label="Entreprise">
                      <input type="text" placeholder="Votre société" value={form.entreprise} onChange={e => update("entreprise", e.target.value)} />
                    </Field>
                  </div>

                  <Field label="Email *">
                    <input required type="email" placeholder="vous@exemple.com" value={form.email} onChange={e => update("email", e.target.value)} />
                  </Field>

                  <Field label="Téléphone">
                    <input type="tel" placeholder="+225 07 00 00 00 00" value={form.telephone} onChange={e => update("telephone", e.target.value)} />
                  </Field>

                  {/* Recap */}
                  <div style={{ background: "#68277f0d", borderLeft: "3px solid #68277f", borderRadius: 10, padding: "14px 16px" }}>
                    <p style={{ fontSize: 12, color: "#68277f", fontWeight: 700, marginBottom: 4 }}>RÉCAPITULATIF</p>
                    <p style={{ fontSize: 13, color: "#333" }}>
                      <strong>{form.service}</strong>
                      {form.budget && <> · {form.budget}</>}
                      {form.delai && <> · {form.delai}</>}
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: 12 }}>
                    <button type="button" onClick={() => setStep(1)} style={{ padding: "12px 18px", background: "transparent", border: "1.5px solid #ddd", borderRadius: 12, fontSize: 14, color: "#555", cursor: "pointer", fontWeight: 600 }}>
                      ← Retour
                    </button>
                    <Btn disabled={!form.nom || !form.email} style={{ flex: 1 }}>
                      Envoyer ma demande
                    </Btn>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>

      <style>{`
        input, select, textarea {
          width: 100%; padding: 11px 14px;
          border: 1.5px solid #e0e0e0; border-radius: 10px;
          font-size: 14px; color: #222; background: #fafafa;
          outline: none; box-sizing: border-box; resize: vertical;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        input:focus, select:focus, textarea:focus {
          border-color: #68277f;
          box-shadow: 0 0 0 3px rgba(104,39,127,0.1);
          background: #fff;
        }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 12, fontWeight: 700, color: "#555", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</label>
      {children}
    </div>
  );
}

function StepLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 13, color: "#888", fontFamily: "'Courier New', monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>
      {children}
    </p>
  );
}

function Btn({ disabled, onClick, children, style }: { disabled?: boolean; onClick?: () => void; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <button type={onClick ? "button" : "submit"} onClick={onClick} disabled={disabled} style={{
      padding: "13px 24px",
      background: disabled ? "#ccc" : "linear-gradient(135deg, #68277f, #4a1a5c)",
      color: "#fff", border: "none", borderRadius: 12,
      fontSize: 14, fontWeight: 700, letterSpacing: "0.05em",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      ...style,
    }}>
      {children}
    </button>
  );
}