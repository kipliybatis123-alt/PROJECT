const About = () => {
  const keunggulan = [
    { label: "Material Bersertifikat", sub: "SNI, ISO, dan standar internasional" },
    { label: "Garansi 15 Tahun", sub: "Anti rayap, anti karat, dan weatherproof" },
    { label: "Pengiriman Nasional", sub: "Ke seluruh kota besar di Indonesia" },
    { label: "Konsultasi Gratis", sub: "Tim ahli siap bantu pilih material" },
  ];

  const keahlian = [
    "Kayu Solid", "HDF / MDF", "Aluminium", "UPVC",
    "Kaca Tempered", "Pintu Geser", "Pintu Lipat", "Security Door",
    "Finishing Duco", "HPL", "Natural Wood", "Powder Coat",
  ];

  return (
    <section
      id="tentang"
      style={{ background: "#fff", paddingTop: "64px", paddingBottom: "64px", fontFamily: "sans-serif", borderTop: "0.5px solid #e8e6e0" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <div style={{ width: "4px", height: "16px", background: "#0b0b0b", borderRadius: "2px" }} />
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888" }}>
            Tentang Kami
          </p>
        </div>

        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, color: "#0b0b0b", letterSpacing: "-1px", margin: 0, lineHeight: 1.1 }}>
          Spesialis material pintu<br /><span style={{ color: "#aaa" }}>sejak 2008.</span>
        </h2>

        <div style={{ borderTop: "0.5px solid #e8e6e0", marginTop: "40px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginTop: "40px" }}>

          {/* Left */}
          <div>
            <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.75 }}>
              Kami adalah distributor dan produsen material pintu berkualitas tinggi yang telah melayani kontraktor, arsitek, dan pemilik hunian di seluruh Indonesia selama lebih dari 15 tahun.
            </p>
            <p style={{ marginTop: "20px", fontSize: "14px", color: "#777", lineHeight: 1.75 }}>
              Dengan koleksi material dari kayu solid premium hingga aluminium modern dan UPVC tahan cuaca, kami hadir sebagai solusi lengkap untuk kebutuhan pintu hunian maupun komersial.
            </p>

            <div style={{ marginTop: "32px", borderTop: "0.5px solid #e8e6e0" }}>
              {keunggulan.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 0", borderBottom: "0.5px solid #e8e6e0",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 500, color: "#0b0b0b" }}>{item.label}</p>
                    <p style={{ fontSize: "11px", marginTop: "2px", color: "#aaa" }}>{item.sub}</p>
                  </div>
                  <span style={{ color: "#0b0b0b", fontSize: "14px" }}>→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div style={{ background: "#f8f7f4", padding: "28px", border: "0.5px solid #e8e6e0", borderRadius: "16px" }}>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px", color: "#aaa" }}>
                Jenis Material
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {keahlian.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: "12px", fontWeight: 500,
                      padding: "6px 14px",
                      background: "#fff",
                      color: "#555",
                      border: "0.5px solid #e8e6e0",
                      borderRadius: "20px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "12px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 24px",
                background: "#0b0b0b",
                borderRadius: "16px",
              }}
            >
              <div>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>Konsultasi gratis sekarang</p>
                <p style={{ fontSize: "11px", marginTop: "2px", color: "#666" }}>Senin–Sabtu · 08.00–17.00 WIB</p>
              </div>
              <a href="#kontak">
                <button
                  style={{
                    fontSize: "12px", fontWeight: 500,
                    padding: "8px 20px",
                    background: "#fff",
                    color: "#0b0b0b",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  Hubungi →
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
