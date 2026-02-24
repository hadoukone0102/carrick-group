"use client";
import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  {
    label: "Accueil",
    href: "#",
  },
  {
    label: "À Propos",
    href: "#a-propos",
    children: [
      { label: "Vision, Mission & Valeurs", href: "#vision" },
      { label: "Notre Équipe", href: "#equipe" },
      { label: "Partenaires", href: "#partenaires" },
      { label: "Nos Engagements", href: "#engagements" },
    ],
  },
  {
    label: "Nos Sociétés",
    href: "#societes",
    children: [
      { label: "Carrick Construction", href: "#construction" },
      { label: "Carrick Conseil", href: "#conseil" },
      { label: "Carrick Alu", href: "#alu" },
      { label: "Carrick Agro Retail", href: "#agro" },
      { label: "Carrick Point d'Accès aux Droits", href: "#droits" },
    ],
  },
  {
    label: "Nos Services",
    href: "#services",
    children: [
      { label: "Construction & Aménagement", href: "#service-construction" },
      { label: "Menuiserie Aluminium", href: "#service-alu" },
      { label: "Distribution Agro-Industrielle", href: "#service-distrib" },
      { label: "Conseil & Investissement", href: "#service-conseil" },
      { label: "Conseil Juridique & Administratif", href: "#service-juridique" },
    ],
  },
  {
    label: "Projets & Réalisations",
    href: "#projets",
    children: [
      { label: "Projets de Construction", href: "#projets-construction" },
      { label: "Missions de Consulting", href: "#projets-consulting" },
      { label: "Réalisations Aluminium", href: "#projets-alu" },
      { label: "Références en Distribution", href: "#projets-distrib" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
    children: [
      { label: "Formulaire de Contact", href: "#formulaire" },
      { label: "Coordonnées", href: "#coordonnees" },
      { label: "Demande de Devis", href: "#devis" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap');

        :root {
          --navy: #0d1b2a;
          --navy-light: #162233;
          --gold: #f0c040;
          --gold-dark: #d4a820;
          --white: #f5f5f0;
          --muted: #8fa3b8;
          --border: rgba(240,192,64,0.15);
        }

        .ck-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          font-family: 'Barlow', sans-serif;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        .ck-header.scrolled {
          box-shadow: 0 4px 32px rgba(0,0,0,0.45);
        }

        /* Top accent bar */
        .ck-accent-bar {
          height: 3px;
          background: linear-gradient(90deg, var(--gold) 0%, var(--gold-dark) 50%, transparent 100%);
        }

        /* Main nav bar */
        .ck-navbar {
          display: flex;
          align-items: stretch;
          background: var(--navy);
          min-height: 72px;
        }

        /* Logo block */
        .ck-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 28px;
          background: var(--gold);
          text-decoration: none;
          flex-shrink: 0;
          position: relative;
          clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%);
          min-width: 220px;
          transition: background 0.2s;
        }

        .ck-logo:hover { background: var(--gold-dark); }

        .ck-logo-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        }

        .ck-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .ck-logo-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--navy);
          text-transform: uppercase;
        }

        .ck-logo-tagline {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--navy);
          opacity: 0.7;
          text-transform: uppercase;
        }

        /* Nav links */
        .ck-nav {
          display: flex;
          align-items: stretch;
          flex: 1;
          padding: 0 16px 0 24px;
          gap: 2px;
        }

        .ck-nav-item {
          position: relative;
          display: flex;
          align-items: center;
        }

        .ck-nav-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0 16px;
          height: 100%;
          color: var(--white);
          text-decoration: none;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s;
          white-space: nowrap;
          cursor: pointer;
          background: none;
          border: none;
          font-family: inherit;
        }

        .ck-nav-link:hover,
        .ck-nav-link.active { color: var(--gold); }

        .ck-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 16px; right: 16px;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
          transform-origin: left;
        }

        .ck-nav-link:hover::after,
        .ck-nav-link.active::after { transform: scaleX(1); }

        .ck-chevron {
          width: 12px; height: 12px;
          opacity: 0.6;
          transition: transform 0.25s, opacity 0.2s;
        }

        .ck-nav-link:hover .ck-chevron,
        .ck-nav-link.active .ck-chevron {
          transform: rotate(180deg);
          opacity: 1;
        }

        /* CTA button */
        .ck-cta {
          display: flex;
          align-items: center;
          padding: 0 24px;
          margin-left: auto;
        }

        .ck-cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          background: var(--gold);
          color: var(--navy);
          border: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: background 0.2s, transform 0.15s;
        }

        .ck-cta-btn:hover {
          background: var(--gold-dark);
          transform: translateY(-1px);
        }

        /* Dropdown */
        .ck-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 240px;
          background: var(--navy-light);
          border-top: 2px solid var(--gold);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: all 0.22s cubic-bezier(0.4,0,0.2,1);
          z-index: 100;
        }

        .ck-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .ck-dropdown-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 20px;
          color: var(--muted);
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.04em;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.15s, background 0.15s, padding-left 0.2s;
        }

        .ck-dropdown-link:last-child { border-bottom: none; }

        .ck-dropdown-link::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }

        .ck-dropdown-link:hover {
          color: var(--white);
          background: rgba(240,192,64,0.06);
          padding-left: 26px;
        }

        .ck-dropdown-link:hover::before { opacity: 1; }

        /* Mobile toggle */
        .ck-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 44px; height: 44px;
          padding: 10px;
          margin: auto 16px auto auto;
          background: none;
          border: 1px solid var(--border);
          cursor: pointer;
          border-radius: 4px;
          transition: border-color 0.2s;
        }

        .ck-burger:hover { border-color: var(--gold); }

        .ck-burger span {
          display: block;
          height: 2px;
          background: var(--white);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }

        .ck-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .ck-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ck-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .ck-mobile-menu {
          display: none;
          background: var(--navy);
          border-top: 1px solid var(--border);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .ck-mobile-menu.open { max-height: 90vh; overflow-y: auto; }

        .ck-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          color: var(--white);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          font-family: inherit;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
        }

        .ck-mobile-link:hover, .ck-mobile-link.active { 
          color: var(--gold);
          background: rgba(240,192,64,0.05);
        }

        .ck-mobile-chevron {
          width: 14px; height: 14px;
          transition: transform 0.25s;
          opacity: 0.5;
        }

        .ck-mobile-chevron.open { transform: rotate(180deg); opacity: 1; }

        .ck-mobile-sub {
          background: var(--navy-light);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
        }

        .ck-mobile-sub.open { max-height: 400px; }

        .ck-mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 32px;
          color: var(--muted);
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          transition: color 0.15s;
        }

        .ck-mobile-sub-link::before {
          content: '—';
          font-size: 10px;
          color: var(--gold);
          opacity: 0.6;
        }

        .ck-mobile-sub-link:hover { color: var(--white); }

        .ck-mobile-cta {
          padding: 16px 20px;
          border-top: 1px solid var(--border);
        }

        .ck-mobile-cta-btn {
          display: block;
          text-align: center;
          padding: 13px;
          background: var(--gold);
          color: var(--navy);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: background 0.2s;
        }

        .ck-mobile-cta-btn:hover { background: var(--gold-dark); }

        /* Responsive */
        @media (max-width: 1024px) {
          .ck-nav { display: none; }
          .ck-cta { display: none; }
          .ck-burger { display: flex; }
          .ck-mobile-menu { display: block; }
          .ck-logo { min-width: unset; padding: 0 20px; }
        }

        @media (max-width: 480px) {
          .ck-logo { padding: 0 16px; clip-path: none; min-width: unset; }
          .ck-logo-name { font-size: 18px; }
          .ck-navbar { min-height: 62px; }
        }
      `}</style>

      <header className={`ck-header${isScrolled ? " scrolled" : ""}`} ref={dropdownRef}>
        <div className="ck-accent-bar" />
        <div className="ck-navbar">
          {/* Logo */}
          <a href="#" className="ck-logo">
            <svg className="ck-logo-icon" viewBox="0 0 40 40" fill="none">
              <rect x="4" y="20" width="14" height="14" rx="2" fill="#0d1b2a" opacity="0.7"/>
              <rect x="22" y="20" width="14" height="14" rx="2" fill="#0d1b2a" opacity="0.9"/>
              <polygon points="20,4 36,14 4,14" fill="#0d1b2a"/>
            </svg>
            <div className="ck-logo-text">
              <span className="ck-logo-name">Carrick Group</span>
              <span className="ck-logo-tagline">Bâtir · Conseiller · Distribuer</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="ck-nav">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="ck-nav-item"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className={`ck-nav-link${activeDropdown === item.label ? " active" : ""}`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="ck-chevron" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>

                {item.children && (
                  <div className={`ck-dropdown${activeDropdown === item.label ? " open" : ""}`}>
                    {item.children.map((child) => (
                      <a key={child.label} href={child.href} className="ck-dropdown-link">
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="ck-cta">
            <a href="#devis" className="ck-cta-btn">
              Demande de devis
            </a>
          </div>

          {/* Burger */}
          <button
            className={`ck-burger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`ck-mobile-menu${mobileOpen ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <button
                  className={`ck-mobile-link${activeMobileItem === item.label ? " active" : ""}`}
                  onClick={() =>
                    setActiveMobileItem((v) => (v === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <svg
                    className={`ck-mobile-chevron${activeMobileItem === item.label ? " open" : ""}`}
                    viewBox="0 0 14 14" fill="none"
                  >
                    <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ) : (
                <a href={item.href} className="ck-mobile-link" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              )}

              {item.children && (
                <div className={`ck-mobile-sub${activeMobileItem === item.label ? " open" : ""}`}>
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="ck-mobile-sub-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="ck-mobile-cta">
            <a href="#devis" className="ck-mobile-cta-btn" onClick={() => setMobileOpen(false)}>
              Demande de devis
            </a>
          </div>
        </div>
      </header>
    </>
  );
}