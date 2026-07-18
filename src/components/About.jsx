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
  secondary: "#7A5230",
  fontHeading: "'Manrope', 'Plus Jakarta Sans', sans-serif",
  fontBody: "'Inter', 'Plus Jakarta Sans', sans-serif",
};

const About = () => {
  const keunggulan = [
    { label: "Material Bersertifikat", sub: "Memenuhi standar SNI, ISO, dan standar internasional" },
    { label: "Garansi hingga 15 Tahun", sub: "Perlindungan terhadap rayap, karat, dan cuaca" },
    { label: "Pengiriman ke Seluruh Indonesia", sub: "Menjangkau kota-kota besar dan area proyek" },
    { label: "Konsultasi Gratis", sub: "Didampingi tim ahli material dalam menentukan pilihan" },
  ];

  const keahlian = [
    "Kayu Solid", "HDF / MDF", "Aluminium", "UPVC",
    "Kaca Tempered", "Pintu Geser", "Pintu Lipat", "Security Door",
    "Finishing Duco", "HPL", "Natural Wood", "Powder Coat",
  ];

  return (
    <section
      id="tentang"
      style={{ background: c.surface, paddingTop: "64px", paddingBottom: "64px", fontFamily: c.fontBody, borderTop: `0.5px solid ${c.border}` }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <div style={{ width: "4px", height: "16px", background: c.primary, borderRadius: "2px" }} />
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: c.primary }}>
            Tentang Kami
          </p>
        </div>

        <h2 style={{ fontFamily: c.fontHeading, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: c.heading, letterSpacing: "-1px", margin: 0, lineHeight: 1.1 }}>
          Distributor pintu terpercaya<br /><span style={{ color: c.muted }}>sejak 2008.</span>
        </h2>

        <div style={{ borderTop: `0.5px solid ${c.border}`, marginTop: "40px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginTop: "40px" }}>

          {/* Left */}
          <div>
            <p style={{ fontSize: "14px", color: c.body, lineHeight: 1.75 }}>
              EleganceWood Indonesia adalah distributor dan supplier material pintu premium yang telah melayani kontraktor, arsitek, dan pemilik hunian di seluruh Indonesia selama lebih dari 15 tahun. Kami memahami bahwa pintu bukan sekadar pelengkap bangunan, melainkan elemen yang menentukan kesan pertama dan kenyamanan jangka panjang sebuah ruang.
            </p>
            <p style={{ marginTop: "20px", fontSize: "14px", color: c.body, lineHeight: 1.75 }}>
              Dengan koleksi material dari pintu kayu solid, pintu aluminium modern, pintu UPVC tahan cuaca, hingga pintu kaca tempered, kami hadir sebagai satu mitra yang menyederhanakan pengadaan material pintu untuk proyek hunian maupun bangunan komersial berskala besar.
            </p>

            <div style={{ marginTop: "32px", borderTop: `0.5px solid ${c.border}` }}>
              {keunggulan.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 0", borderBottom: `0.5px solid ${c.border}`,
                  }}
                >
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: c.heading }}>{item.label}</p>
                    <p style={{ fontSize: "11px", marginTop: "2px", color: c.faint }}>{item.sub}</p>
                  </div>
                  <span style={{ color: c.primary, fontSize: "14px" }}>→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div style={{ background: c.bg, padding: "28px", border: `0.5px solid ${c.border}`, borderRadius: "16px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px", color: c.muted }}>
                Jenis Material Kami
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {keahlian.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: "12px", fontWeight: 500,
                      padding: "6px 14px",
                      background: c.surface,
                      color: c.body,
                      border: `0.5px solid ${c.border}`,
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
                background: c.secondary,
                borderRadius: "16px",
              }}
            >
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>Butuh bantuan menentukan material?</p>
                <p style={{ fontSize: "11px", marginTop: "2px", color: "rgba(255,255,255,0.6)" }}>Senin–Sabtu · 08.00–17.00 WIB</p>
              </div>
              <a href="#kontak">
                <button
                  style={{
                    fontSize: "12px", fontWeight: 600,
                    padding: "8px 20px",
                    background: "#fff",
                    color: c.secondary,
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    transition: "opacity 300ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
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
