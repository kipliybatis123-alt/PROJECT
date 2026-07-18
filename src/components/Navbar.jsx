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

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 20;

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: "60px",
        background: isScrolled ? "rgba(255,255,255,0.96)" : c.surface,
        borderBottom: `0.5px solid ${c.border}`,
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        boxShadow: isScrolled ? "0 4px 24px rgba(31,41,51,0.06)" : "none",
        transition: "all 300ms ease",
        fontFamily: c.fontBody,
      }}
    >
      {/* Logo */}
      <a href="#home" style={{ textDecoration: "none", fontFamily: c.fontHeading, fontSize: "15px", fontWeight: 700, color: c.heading, letterSpacing: "-0.3px" }}>
        EleganceWood<span style={{ color: c.primary }}>.Indonesia</span>
      </a>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "28px" }}>
        {[
          { label: "Beranda", href: "#home" },
          { label: "Jenis Pintu", href: "#jenis" },
          { label: "Katalog Produk", href: "#portofolio" },
          { label: "Tentang Kami", href: "#tentang" },
          { label: "Kontak", href: "#kontak" },
        ].map((item) => (
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

      {/* CTA */}
      <a href="#kontak">
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
    </nav>
  );
};

export default Navbar;
