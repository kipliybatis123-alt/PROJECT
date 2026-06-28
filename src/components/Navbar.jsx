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
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: isScrolled ? "rgba(10,15,26,0.96)" : "transparent",
        borderBottom: isScrolled ? "1px solid #1e2d40" : "1px solid transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div className="flex items-center justify-between" style={{ height: "64px" }}>

          <a href="#home" className="flex-shrink-0 flex items-center gap-2">
            <div style={{
              width: "28px", height: "28px",
              background: "linear-gradient(135deg, #10b981, #059669)",
              borderRadius: "6px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: 800 }}>F</span>
            </div>
            <span style={{
              color: "#f0f4ff",
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.05em",
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              FINANCE
            </span>
          </a>

          <div className="hidden md:flex items-center" style={{ gap: "32px" }}>
            {["Home", "Portofolio", "Project", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#9ca3af" }}
                onMouseEnter={e => e.target.style.color = "#10b981"}
                onMouseLeave={e => e.target.style.color = "#9ca3af"}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#contact">
              <button
                className="text-sm font-semibold transition-all"
                style={{
                  background: "#10b981",
                  color: "#0a0f1a",
                  borderRadius: "8px",
                  padding: "8px 20px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
                onMouseEnter={e => e.target.style.background = "#059669"}
                onMouseLeave={e => e.target.style.background = "#10b981"}
              >
                Get Started
              </button>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
