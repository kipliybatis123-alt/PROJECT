import { useEffect, useState } from "react";

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
        background: isScrolled ? "rgba(255,255,255,0.96)" : "#fff",
        borderBottom: "0.5px solid #e8e6e0",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        transition: "all 0.3s ease",
        fontFamily: "sans-serif",
      }}
    >
      {/* Logo */}
      <a href="#home" style={{ textDecoration: "none", fontSize: "15px", fontWeight: 500, color: "#0b0b0b", letterSpacing: "-0.3px" }}>
        pintu<span style={{ color: "#888" }}>.material</span>
      </a>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "28px" }}>
        {[
          { label: "Produk", href: "#produk" },
          { label: "Jenis", href: "#jenis" },
          { label: "Portofolio", href: "#portofolio" },
          { label: "Tentang", href: "#tentang" },
          { label: "Kontak", href: "#kontak" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{ fontSize: "13px", color: "#555", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#0b0b0b")}
            onMouseLeave={(e) => (e.target.style.color = "#555")}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a href="#kontak">
        <button
          style={{
            background: "#0b0b0b", color: "#fff", border: "none",
            borderRadius: "20px", padding: "8px 20px",
            fontSize: "13px", cursor: "pointer", transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Minta penawaran
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
