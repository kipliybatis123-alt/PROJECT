import { useEffect, useState } from "react";

const c = {
  surface: "#FFFFFF",
  border: "#E5E7EB",
  heading: "#1F2933",
  body: "#4B5563",
  primary: "#2F5D50",
  primaryDark: "#264A40",
  accent: "#C8A97E",
  fontHeading: "'Manrope', 'Plus Jakarta Sans', sans-serif",
  fontBody: "'Inter', 'Plus Jakarta Sans', sans-serif",
};

const NAV_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Jenis Pintu", href: "#jenis" },
  { label: "Katalog Produk", href: "#portofolio" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isScrolled = scrollY > 20;

  return (
    <>
      <nav
        className="px-4 sm:px-6 lg:px-8"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: "60px",
          background: isScrolled ? "rgba(255,255,255,0.96)" : c.surface,
          borderBottom: `0.5px solid ${c.border}`,
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          boxShadow: isScrolled ? "0 4px 24px rgba(31,41,51,0.06)" : "none",
          transition: "all 300ms ease",
          fontFamily: c.fontBody,
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          style={{ textDecoration: "none", fontFamily: c.fontHeading, fontSize: "15px", fontWeight: 700, color: c.heading, letterSpacing: "-0.3px" }}
        >
          EleganceWood<span style={{ color: c.primary }}>.Indonesia</span>
        </a>

        {/* Nav Links — desktop only */}
        <div className="hidden md:flex" style={{ gap: "28px" }}>
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ fontSize: "13px", color: c.body, textDecoration: "none", transition: "color 300ms ease" }}
              onMouseEnter={(e) => (e.target.style.color = c.primaryDark)}
              onMouseLeave={(e) => (e.target.style.color = c.body)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA — desktop only */}
        <a href="#kontak" className="hidden md:block">
          <button
            style={{
              background: c.primaryDark, color: "#fff", border: "none",
              borderRadius: "20px", padding: "8px 20px",
              fontSize: "13px", fontFamily: c.fontBody, fontWeight: 500, cursor: "pointer",
              transition: "opacity 300ms ease, transform 300ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Minta Penawaran
          </button>
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            width: "36px", height: "36px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "5px", background: "transparent", border: "none", cursor: "pointer", padding: 0,
          }}
        >
          <span style={{
            width: "20px", height: "2px", background: c.heading, borderRadius: "2px",
            transition: "transform 250ms ease, opacity 250ms ease",
            transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
          }} />
          <span style={{
            width: "20px", height: "2px", background: c.heading, borderRadius: "2px",
            transition: "opacity 250ms ease",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            width: "20px", height: "2px", background: c.heading, borderRadius: "2px",
            transition: "transform 250ms ease, opacity 250ms ease",
            transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <div
        className="md:hidden"
        style={{
          position: "fixed", top: "60px", left: 0, right: 0, zIndex: 49,
          background: c.surface,
          borderBottom: `0.5px solid ${c.border}`,
          boxShadow: "0 12px 24px rgba(31,41,51,0.08)",
          display: "flex", flexDirection: "column",
          padding: "8px 20px 20px",
          fontFamily: c.fontBody,
          transformOrigin: "top",
          transform: menuOpen ? "scaleY(1)" : "scaleY(0)",
          opacity: menuOpen ? 1 : 0,
          maxHeight: menuOpen ? "80vh" : "0",
          overflow: "hidden",
          transition: "transform 250ms ease, opacity 200ms ease, max-height 250ms ease",
        }}
      >
        {NAV_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "14px", color: c.body, textDecoration: "none",
              padding: "14px 4px", borderBottom: `0.5px solid ${c.border}`,
            }}
          >
            {item.label}
          </a>
        ))}
        <a href="#kontak" onClick={() => setMenuOpen(false)} style={{ marginTop: "16px" }}>
          <button
            style={{
              width: "100%",
              background: c.primaryDark, color: "#fff", border: "none",
              borderRadius: "20px", padding: "12px 20px",
              fontSize: "13px", fontFamily: c.fontBody, fontWeight: 500, cursor: "pointer",
            }}
          >
            Minta Penawaran
          </button>
        </a>
      </div>
    </>
  );
};

export default Navbar;
