const portfolioItems = [
  {
    title: "Pintu Panel Kayu Solid",
    desc: "Pintu kayu jati dan merbau premium dengan panel ukir dan finishing HPL. Struktur kayu yang padat membuatnya tahan lama dan tidak mudah melengkung, cocok untuk pintu utama hunian mewah maupun lobi bangunan komersial.",
    tags: ["Jati", "Merbau", "HPL Finishing"],
    badge: "Best Seller",
  },
  {
    title: "Pintu Aluminium Sliding",
    desc: "Sistem geser aluminium dengan lapisan powder-coat yang ringan dan bebas karat, sehingga hemat tenaga saat dibuka-tutup dan minim perawatan jangka panjang. Ideal untuk ruang terbatas dan fasad eksterior modern.",
    tags: ["Aluminium", "Sliding", "Eksterior"],
  },
  {
    title: "Pintu UPVC Weatherproof",
    desc: "Material UPVC tahan terhadap cuaca panas dan kelembaban tinggi tanpa memuai atau lapuk, menjadikannya pilihan hemat biaya perawatan untuk iklim tropis Indonesia sekaligus tahan terhadap serangan rayap.",
    tags: ["UPVC", "Weatherproof", "Anti Rayap"],
  },
  {
    title: "Pintu Kaca Frameless",
    desc: "Panel kaca tempered setebal 10–12mm dalam varian clear atau frosted, memberikan kesan luas dan pencahayaan alami yang maksimal. Pilihan tepat untuk lobi, ruang kantor, dan area showroom bergaya modern.",
    tags: ["Kaca Tempered", "Frameless", "Interior"],
    badge: "Premium",
    featured: true,
  },
  {
    title: "Security Door Baja",
    desc: "Pintu baja dengan sistem penguncian multipoint yang menyulitkan upaya pembobolan, memberikan lapisan keamanan ekstra untuk perumahan maupun fasilitas komersial dengan risiko keamanan tinggi.",
    tags: ["Baja", "Anti-Bobol", "Security"],
  },
  {
    title: "Pintu Lipat HDF / MDF",
    desc: "Sistem folding berbahan HDF atau MDF dengan finishing duco yang ringan dan hemat ruang, sehingga fleksibel digunakan sebagai partisi maupun pembatas pada ruang multifungsi.",
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
            Material pintu premium<br /><span style={{ color: "#aaa" }}>untuk setiap kebutuhan bangunan.</span>
          </h2>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "16px", maxWidth: "440px", lineHeight: 1.7 }}>
            Dari pintu kayu solid hingga pintu kaca tempered — tersedia dalam berbagai ukuran, finishing, dan spesifikasi teknis sesuai kebutuhan proyek Anda.
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
            <div style={{ background: "#f0ede8", minHeight: "200px", overflow: "hidden" }}>
              <img
                src="/assets/katalog/pintu-kaca-frameless.png"
                alt="Pintu kaca tempered frameless EleganceWood Indonesia untuk lobi dan ruang kantor modern"
                style={{ width: "100%", height: "100%", minHeight: "200px", objectFit: "cover", display: "block" }}
              />
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
