import { useEffect, useState } from "react";
import { TrendingUp, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrollY, setScrollY]   = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isScrolled = scrollY > 40;

  const navLinks = [
    { label: "Services",    href: "#services"    },
    { label: "About",       href: "#about"       },
    { label: "Portfolio",   href: "#portofolio"  },
    { label: "Pricing",     href: "#pricing"     },
    { label: "Team",        href: "#team"        },
    { label: "Contact",     href: "#contact"     },
  ];

  const base = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    background: isScrolled ? "rgba(255,255,255,0.97)" : "transparent",
    backdropFilter: isScrolled ? "blur(12px)" : "none",
    borderBottom: isScrolled ? "1px solid #e2e8f0" : "1px solid transparent",
    boxShadow: isScrolled ? "0 2px 16px rgba(10,22,40,0.06)" : "none",
  };

  const logoColor = isScrolled ? "#0a1628" : "#ffffff";
  const linkColor = isScrolled ? "#0a1628" : "rgba(255,255,255,0.88)";

  return (
    <>
      <nav style={base}>
        <div className="fin-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: isScrolled ? "var(--accent)" : "rgba(255,255,255,0.18)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.3s ease",
            }}>
              <TrendingUp size={18} color="#ffffff" strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.5px", color: logoColor, transition: "color 0.3s ease" }}>
              Fin<span style={{ color: isScrolled ? "var(--accent)" : "rgba(255,255,255,0.6)" }}>aleyas</span>
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} style={{
                fontSize: 13, fontWeight: 600, color: linkColor,
                textDecoration: "none", transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
                onMouseEnter={e => { e.target.style.color = isScrolled ? "var(--accent)" : "#ffffff"; }}
                onMouseLeave={e => { e.target.style.color = linkColor; }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden md:flex">
            <a href="#contact" className="fin-btn-primary" style={{ padding: "10px 22px", fontSize: 13 }}>
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", color: logoColor, padding: 4 }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "#ffffff", borderTop: "1px solid #e2e8f0", padding: "16px 20px 24px" }}>
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{
                display: "block", padding: "12px 0", fontSize: 15, fontWeight: 600,
                color: "var(--navy)", textDecoration: "none", borderBottom: "1px solid #f1f5f9",
              }}>
                {label}
              </a>
            ))}
            <a href="#contact" className="fin-btn-primary" style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>
              Get Started
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
