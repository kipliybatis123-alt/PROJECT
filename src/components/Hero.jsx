import { useState } from "react";

const Hero = () => {
  return (
    <section
      id="home"
      style={{ fontFamily: "sans-serif", background: "#f2f0eb", paddingTop: "60px" }}
    >
      {/* ═══════════════════════════════════════════
          HERO UTAMA — full-width image + teks overlay
      ═══════════════════════════════════════════ */}
      <div style={{ padding: "32px 32px 0" }}>
        <div
          style={{
            position: "relative",
            borderRadius: "28px",
            overflow: "hidden",
            minHeight: "580px",
            display: "flex",
            alignItems: "flex-end",
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

          {/* Overlay gradasi kiri → kanan, bawah → atas */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.08) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />

          {/* ── Konten Teks Kiri ── */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "48px",
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
                marginBottom: "24px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff", display: "inline-block" }} />
              <span style={{ fontSize: "11px", fontWeight: 500, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Beranda
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 62px)",
                fontWeight: 500,
                lineHeight: 1.06,
                letterSpacing: "-2px",
                color: "#fff",
                margin: "0 0 20px",
              }}
            >
              Material Pintu Premium<br />
              <span style={{ color: "rgba(255,255,255,0.45)" }}>untuk Hunian &amp; Proyek Bernilai Tinggi</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "0 0 32px",
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
                    color: "#0b0b0b",
                    border: "none",
                    borderRadius: "24px",
                    padding: "13px 28px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                    letterSpacing: "-0.1px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
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
                    padding: "13px 28px",
                    fontSize: "13px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "background 0.2s",
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
          STATS ROW — 3 angka kunci
      ═══════════════════════════════════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "16px 32px 32px",
          background: "#fff",
          borderRadius: "20px",
          border: "0.5px solid #e8e6e0",
          overflow: "hidden",
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
            style={{
              padding: "28px 32px",
              borderRight: i < 2 ? "0.5px solid #e8e6e0" : "none",
            }}
          >
            <div style={{ fontSize: "32px", fontWeight: 500, color: "#0b0b0b", letterSpacing: "-1.5px", lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: "13px", color: "#555", marginTop: "8px", fontWeight: 500 }}>{label}</div>
            <div style={{ fontSize: "11px", color: "#bbb", marginTop: "3px" }}>{sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
