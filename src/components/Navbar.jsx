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
        background: isScrolled ? "#ffffff" : "transparent",
        borderBottom: isScrolled ? "1px solid #e5e5e5" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <a href="#home" className="flex-shrink-0">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: isScrolled ? "#111111" : "#ffffff", letterSpacing: "0.12em" }}
            >
              Putra Gama
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Portofolio", "Project", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                style={{ color: isScrolled ? "#111111" : "#ffffff" }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#contact">
              <button
                className="px-6 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{
                  background: isScrolled ? "#111111" : "#ffffff",
                  color: isScrolled ? "#ffffff" : "#111111",
                  borderRadius: "30px",
                }}
              >
                Contact Me
              </button>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
