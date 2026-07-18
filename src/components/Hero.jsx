const c = {
  bg: "#F8F8F6",
  bgAlt: "#F1F2EE",
  surface: "#FFFFFF",
  border: "#E5E7EB",
  heading: "#1F2933",
  body: "#4B5563",
  muted: "#6B7280",
  faint: "#9CA3AF",
  primary: "#2F5D50",
  primaryDark: "#264A40",
  accent: "#C8A97E",
  fontHeading: "'Manrope', 'Plus Jakarta Sans', sans-serif",
  fontBody: "'Inter', 'Plus Jakarta Sans', sans-serif",
};

const Hero = () => {
  return (
    <section
      id="home"
      style={{ fontFamily: c.fontBody, background: c.bg, paddingTop: "60px" }}
    >
      {/* ═══════════════════════════════════════════
          HERO UTAMA — full-width image + teks overlay
      ═══════════════════════════════════════════ */}
      <div className="px-4 sm:px-6 lg:px-8" style={{ paddingTop: "24px" }}>
        <div
          className="min-h-[440px] sm:min-h-[520px] lg:min-h-[600px]"
          style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
            boxShadow: "0 8px 32px rgba(31,41,51,0.10)",
          }}
        >
          {/* Gambar hero — full cover */}
          <img
            src="/assets/beranda/pintu.png"
            alt="Material pintu premium EleganceWood Indonesia untuk hunian dan bangunan komersial"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              display: "block",
            }}
          />

          {/* Overlay gradasi — nuansa kayu gelap yang hangat, bukan hitam pekat */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(105deg, rgba(20,28,26,0.72) 0%, rgba(20,28,26,0.36) 55%, rgba(20,28,26,0.06) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(20,28,26,0.5) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />

          {/* ── Konten Teks Kiri ── */}
          <div
            className="px-5 sm:px-8 lg:px-12"
            style={{
              position: "relative",
              zIndex: 2,
              paddingTop: "32px",
              paddingBottom: "56px",
              maxWidth: "660px",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                border: "0.5px solid rgba(255,255,255,0.3)",
                borderRadius: "20px", padding: "6px 14px",
                marginBottom: "20px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: c.accent, display: "inline-block" }} />
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Beranda
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: c.fontHeading,
                fontSize: "clamp(28px, 6vw, 62px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-1px",
                color: "#fff",
                margin: "0 0 16px",
              }}
            >
              Material Pintu Premium<br />
              <span style={{ color: c.accent }}>untuk Hunian &amp; Proyek Bernilai Tinggi</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "0 0 28px",
              }}
            >
              EleganceWood Indonesia adalah distributor dan supplier material pintu premium yang dipercaya kontraktor, arsitek, dan pemilik properti di seluruh Indonesia. Kami menghadirkan pintu kayu solid, pintu aluminium, pintu UPVC, hingga pintu kaca dengan kualitas material terpilih, presisi produksi, dan hasil akhir yang tahan lama untuk kebutuhan pintu rumah maupun pintu kantor.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#kontak">
                <button
                  style={{
                    background: "#fff",
                    color: c.primaryDark,
                    border: "none",
                    borderRadius: "24px",
                    padding: "13px 24px",
                    fontSize: "13px",
                    fontFamily: c.fontBody,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity 300ms ease, transform 300ms ease",
                    letterSpacing: "-0.1px",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Konsultasi &amp; minta penawaran →
                </button>
              </a>
              <a href="#produk">
                <button
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    border: "0.5px solid rgba(255,255,255,0.35)",
                    borderRadius: "24px",
                    padding: "13px 24px",
                    fontSize: "13px",
                    fontFamily: c.fontBody,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "background 300ms ease",
                    letterSpacing: "-0.1px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                >
                  Jelajahi katalog produk
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          STATS ROW — kartu mengambang, overlap ke gambar hero
      ═══════════════════════════════════════════ */}
      <div className="px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 lg:-mt-14" style={{ position: "relative", zIndex: 3 }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{
            background: c.surface,
            borderRadius: "18px",
            border: `0.5px solid ${c.border}`,
            overflow: "hidden",
            boxShadow: "0 16px 40px rgba(31,41,51,0.12)",
          }}
        >
          {[
            {
              val: "12+",
              label: "Kategori Material Pilihan",
              sub: "Kayu solid, aluminium, UPVC, kaca, hingga baja untuk security door.",
            },
            {
              val: "500+",
              label: "Varian Model & Finishing",
              sub: "Panel, flush, sliding, folding, HPL, duco, dan natural wood.",
            },
            {
              val: "15thn",
              label: "Pengalaman Melayani Klien",
              sub: "Ditopang standar mutu terjaga dan dukungan purnajual yang responsif.",
            },
          ].map(({ val, label, sub }, i) => (
            <div
              key={val}
              className={i < 2 ? "border-b sm:border-b-0 sm:border-r" : ""}
              style={{
                padding: "22px 24px",
                borderColor: c.border,
                borderWidth: i < 2 ? "0.5px" : "0",
                borderStyle: "solid",
                borderTop: `3px solid ${i === 1 ? c.accent : "transparent"}`,
              }}
            >
              <div style={{ fontFamily: c.fontHeading, fontSize: "28px", fontWeight: 700, color: c.primary, letterSpacing: "-1.5px", lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: "13px", color: c.heading, marginTop: "8px", fontWeight: 500 }}>{label}</div>
              <div style={{ fontSize: "11px", color: c.faint, marginTop: "3px" }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "48px" }} />
    </section>
  );
};

export default Hero;
