"use client";
import { NAV_ITEMS } from "@/features/contants/head.intdex";
import { useState, useEffect, useRef } from "react";
import Image  from "next/image";

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
      <header className={`ck-header${isScrolled ? " scrolled" : ""}`} ref={dropdownRef}>
        <div className="ck-accent-bar" />
        <div className="ck-navbar">
          {/* Logo */}
          <a href="#" className="ck-logo">
            <Image src="/logo.png" height={50} width={50} alt="Logo"/>
            <div className="ck-logo-text">
              <span className="ck-logo-name">Carrick Groupe</span>
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