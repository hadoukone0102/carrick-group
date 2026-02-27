export function CarrickStyle () {
   return (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap');

        :root {
          --navy: #0d1b2a;
          --navy-light: #162233;
          --gold: #68277f;
          --gold-dark: #68277f;
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
   )
}