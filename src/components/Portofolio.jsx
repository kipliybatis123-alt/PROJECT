const portfolioItems = [
  {
    title: "Pintu Panel Kayu Solid",
    desc: "Pintu kayu jati dan merbau premium dengan panel ukir dan finishing HPL. Cocok untuk hunian mewah dan bangunan komersial.",
    tags: ["Jati", "Merbau", "HPL Finishing"],
    badge: "Best Seller",
  },
  {
    title: "Pintu Aluminium Sliding",
    desc: "Sistem geser aluminium powder-coat ringan dan anti karat. Ideal untuk ruang terbatas dan fasad eksterior modern.",
    tags: ["Aluminium", "Sliding", "Eksterior"],
  },
  {
    title: "Pintu UPVC Weatherproof",
    desc: "Material UPVC tahan cuaca dan kelembaban tinggi. Pilihan tepat untuk area tropis dengan perawatan minimal.",
    tags: ["UPVC", "Weatherproof", "Anti Rayap"],
  },
  {
    title: "Pintu Kaca Frameless",
    desc: "Panel kaca tempered 10–12mm clear atau frosted. Tampilan modern dan elegan untuk lobby, kantor, dan showroom.",
    tags: ["Kaca Tempered", "Frameless", "Interior"],
    badge: "Premium",
    featured: true,
  },
  {
    title: "Security Door Baja",
    desc: "Pintu baja anti-bobol dengan locking system multipoint. Standar keamanan untuk perumahan dan fasilitas komersial.",
    tags: ["Baja", "Anti-Bobol", "Security"],
  },
  {
    title: "Pintu Lipat HDF / MDF",
    desc: "Sistem folding ringan berbahan HDF atau MDF dengan finishing duco. Solusi fleksibel untuk partisi dan ruang multifungsi.",
    tags: ["HDF", "MDF", "Folding"],
  },
];

const Portofolio = () => {
  const featured = portfolioItems.find((item) => item.featured);
  const rest = portfolioItems.filter((item) => !item.featured);

  return (
    <section
      id="portofolio"
      style={{ background: "#f8f7f4", paddingTop: "64px", paddingBottom: "64px", fontFamily: "sans-serif" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "#888", textTransform: "uppercase", marginBottom: "12px" }}>
            Katalog Produk
          </p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, color: "#0b0b0b", letterSpacing: "-1px", margin: 0, lineHeight: 1.1 }}>
            Pilihan material<br /><span style={{ color: "#aaa" }}>untuk setiap kebutuhan.</span>
          </h2>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "16px", maxWidth: "440px", lineHeight: 1.7 }}>
            Dari kayu solid hingga kaca tempered — semua tersedia dalam berbagai ukuran, finishing, dan spesifikasi teknis.
          </p>
        </div>

        <div style={{ borderTop: "0.5px solid #e8e6e0", marginBottom: "32px" }} />

        {/* Featured Card */}
        {featured && (
          <div
            style={{
              background: "#fff", borderRadius: "16px", border: "0.5px solid #e8e6e0",
              display: "grid", gridTemplateColumns: "1fr 1fr",
              overflow: "hidden", marginBottom: "12px",
            }}
          >
            <div style={{ background: "#f0ede8", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "200px" }}>
              <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
                <rect x="10" y="8" width="44" height="74" rx="3" stroke="#0b0b0b" strokeWidth="1.5" fill="none" opacity="0.3" />
                <rect x="66" y="8" width="44" height="74" rx="3" stroke="#0b0b0b" strokeWidth="1.5" fill="none" opacity="0.3" />
                <rect x="14" y="12" width="36" height="66" rx="2" fill="#e8e5df" opacity="0.6" />
                <rect x="70" y="12" width="36" height="66" rx="2" fill="#e8e5df" opacity="0.6" />
                <line x1="54" y1="8" x2="54" y2="82" stroke="#0b0b0b" strokeWidth="0.8" opacity="0.4" />
                <circle cx="56" cy="45" r="3" fill="#0b0b0b" opacity="0.3" />
                <circle cx="64" cy="45" r="3" fill="#0b0b0b" opacity="0.3" />
              </svg>
            </div>
            <div style={{ padding: "32px" }}>
              <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Unggulan</p>
              <p style={{ fontSize: "20px", fontWeight: 500, color: "#0b0b0b", lineHeight: 1.2 }}>{featured.title}</p>
              <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.7, marginTop: "12px" }}>{featured.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "20px" }}>
                {featured.tags.map((t) => (
                  <span key={t} style={{ background: "#f0ede8", color: "#666", borderRadius: "8px", padding: "5px 12px", fontSize: "12px" }}>{t}</span>
                ))}
                {featured.badge && (
                  <span style={{ background: "#0b0b0b", color: "#fff", borderRadius: "8px", padding: "5px 12px", fontSize: "12px" }}>{featured.badge}</span>
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
              style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #e8e6e0", padding: "24px" }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
                {item.tags[0]}
              </p>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#0b0b0b", lineHeight: 1.3 }}>{item.title}</p>
              <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6, marginTop: "8px" }}>{item.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
                {item.tags.map((t) => (
                  <span key={t} style={{ background: "#f0ede8", color: "#666", borderRadius: "8px", padding: "5px 12px", fontSize: "12px" }}>{t}</span>
                ))}
                {item.badge && (
                  <span style={{ background: "#0b0b0b", color: "#fff", borderRadius: "8px", padding: "5px 12px", fontSize: "12px" }}>{item.badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portofolio;
