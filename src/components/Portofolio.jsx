import { useState } from "react";

const c = {
  bg: "#F1F2EE",
  surface: "#FFFFFF",
  border: "#E5E7EB",
  heading: "#1F2933",
  body: "#4B5563",
  muted: "#6B7280",
  faint: "#9CA3AF",
  primary: "#2F5D50",
  primaryDark: "#264A40",
  accent: "#C8A97E",
  tint: "rgba(47, 93, 80, 0.08)",
  fontHeading: "'Manrope', 'Plus Jakarta Sans', sans-serif",
  fontBody: "'Inter', 'Plus Jakarta Sans', sans-serif",
};

const portfolioItems = [
  {
    title: "Pintu Kayu Jati",
    desc: "Pintu kayu jati solid dengan serat rapat dan struktur stabil, sehingga tidak mudah melengkung meski digunakan bertahun-tahun. Tampilan natural yang hangat cocok untuk pintu utama hunian maupun proyek bernilai tinggi.",
    tags: ["Jati", "Kayu Solid"],
    badge: "Best Seller",
    images: ["/assets/produk/kayujati.jpeg", "/assets/produk/kayujati2.jpeg"],
    featured: true,
  },
  {
    title: "Pintu Minimalis Putih",
    desc: "Desain minimalis dengan finishing putih bersih yang serasi untuk hunian modern. Tampilan clean dan netral, mudah dipadukan dengan berbagai gaya interior maupun eksterior.",
    tags: ["Minimalis", "Finishing Putih"],
    images: ["/assets/produk/minimalisputih.jpeg"],
  },
  {
    title: "Pintu Minimalis Merah Mahoni",
    desc: "Finishing kayu mahoni bernuansa merah kecoklatan yang elegan, menghadirkan kesan hangat dan mewah pada ruangan. Desain minimalis membuatnya serasi untuk berbagai konsep hunian.",
    tags: ["Mahoni", "Minimalis"],
    images: ["/assets/produk/mahonimerah.jpeg", "/assets/produk/mahonimerah2.jpeg"],
  },
];

const cardBase = {
  background: c.surface,
  borderRadius: "16px",
  border: `0.5px solid ${c.border}`,
  boxShadow: "0 4px 20px rgba(31,41,51,0.05)",
  transition: "box-shadow 300ms ease, transform 300ms ease",
};

const Portofolio = () => {
  const featured = portfolioItems.find((item) => item.featured);
  const rest = portfolioItems.filter((item) => !item.featured);

  const [activeImg, setActiveImg] = useState({});

  const currentImage = (item) => item.images[activeImg[item.title] || 0];
  const switchImage = (item) => {
    if (item.images.length < 2) return;
    setActiveImg((prev) => ({
      ...prev,
      [item.title]: ((prev[item.title] || 0) + 1) % item.images.length,
    }));
  };

  const switchBtnStyle = {
    position: "absolute",
    bottom: "12px",
    right: "12px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    background: "rgba(31,41,51,0.55)",
    backdropFilter: "blur(4px)",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "6px 12px",
    fontSize: "11px",
    fontFamily: c.fontBody,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 200ms ease",
  };

  const hoverIn = (e) => {
    e.currentTarget.style.boxShadow = "0 10px 32px rgba(47,93,80,0.14)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };
  const hoverOut = (e) => {
    e.currentTarget.style.boxShadow = cardBase.boxShadow;
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <section
      id="portofolio"
      style={{ background: c.bg, paddingTop: "64px", paddingBottom: "64px", fontFamily: c.fontBody }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: c.primary, textTransform: "uppercase", marginBottom: "12px" }}>
            Katalog Produk
          </p>
          <h2 style={{ fontFamily: c.fontHeading, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: c.heading, letterSpacing: "-1px", margin: 0, lineHeight: 1.1 }}>
            Material pintu premium<br /><span style={{ color: c.muted }}>untuk setiap kebutuhan bangunan.</span>
          </h2>
          <p style={{ fontSize: "14px", color: c.body, marginTop: "16px", maxWidth: "440px", lineHeight: 1.7 }}>
            Dari pintu kayu solid hingga pintu kaca tempered — tersedia dalam berbagai ukuran, finishing, dan spesifikasi teknis sesuai kebutuhan proyek Anda.
          </p>
        </div>

        <div style={{ borderTop: `0.5px solid ${c.border}`, marginBottom: "32px" }} />

        {/* Featured Card */}
        {featured && (
          <div
            style={{
              ...cardBase,
              display: "grid", gridTemplateColumns: "1fr 1fr",
              overflow: "hidden", marginBottom: "12px",
            }}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <div className="relative" style={{ background: c.tint, aspectRatio: "1 / 1" }}>
              <img
                src={currentImage(featured)}
                alt={featured.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              {featured.images.length > 1 && (
                <button
                  onClick={() => switchImage(featured)}
                  style={switchBtnStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(31,41,51,0.75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(31,41,51,0.55)")}
                >
                  ⟳ Ganti Foto
                </button>
              )}
            </div>
            <div style={{ padding: "32px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, color: c.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Unggulan</p>
              <p style={{ fontFamily: c.fontHeading, fontSize: "20px", fontWeight: 700, color: c.heading, lineHeight: 1.2 }}>{featured.title}</p>
              <p style={{ fontSize: "13px", color: c.body, lineHeight: 1.7, marginTop: "12px" }}>{featured.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "20px" }}>
                {featured.tags.map((t) => (
                  <span key={t} style={{ background: c.tint, color: c.primaryDark, borderRadius: "8px", padding: "5px 12px", fontSize: "12px", fontWeight: 500 }}>{t}</span>
                ))}
                {featured.badge && (
                  <span style={{ background: c.accent, color: c.primaryDark, borderRadius: "8px", padding: "5px 12px", fontSize: "12px", fontWeight: 600 }}>{featured.badge}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Grid Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
          {rest.map((item, i) => (
            <div
              key={i}
              style={{ ...cardBase, overflow: "hidden", position: "relative" }}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <div className="relative" style={{ background: c.tint, aspectRatio: "1 / 1" }}>
                <img
                  src={currentImage(item)}
                  alt={item.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span style={{ position: "absolute", top: "12px", right: "12px", fontFamily: c.fontHeading, fontSize: "11px", fontWeight: 700, color: "#fff", background: "rgba(31,41,51,0.45)", borderRadius: "8px", padding: "2px 8px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.images.length > 1 && (
                  <button
                    onClick={() => switchImage(item)}
                    style={switchBtnStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(31,41,51,0.75)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(31,41,51,0.55)")}
                  >
                    ⟳ Ganti Foto
                  </button>
                )}
              </div>
              <div style={{ padding: "24px" }}>
                <p style={{ fontSize: "11px", fontWeight: 600, color: c.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
                  {item.tags[0]}
                </p>
                <p style={{ fontFamily: c.fontHeading, fontSize: "15px", fontWeight: 700, color: c.heading, lineHeight: 1.3 }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: c.body, lineHeight: 1.6, marginTop: "8px" }}>{item.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
                  {item.tags.map((t) => (
                    <span key={t} style={{ background: c.tint, color: c.primaryDark, borderRadius: "8px", padding: "5px 12px", fontSize: "12px", fontWeight: 500 }}>{t}</span>
                  ))}
                  {item.badge && (
                    <span style={{ background: c.accent, color: c.primaryDark, borderRadius: "8px", padding: "5px 12px", fontSize: "12px", fontWeight: 600 }}>{item.badge}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portofolio;
