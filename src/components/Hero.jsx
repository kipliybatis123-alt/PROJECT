import { useState } from "react";

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
            alt="Pintu Material Premium"
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
          {/* Overlay bawah untuk teks */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />

          {/* ── Floating Cards ── */}

          {/* Card kanan atas — Garansi */}
          <div
            onMouseEnter={() => setHoveredCard("garansi")}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: "absolute",
              top: "32px",
              right: "32px",
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "0.5px solid rgba(255,255,255,0.6)",
              borderRadius: "16px",
              padding: "16px 20px",
              minWidth: "180px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              transform: hoveredCard === "garansi" ? "translateY(-4px)" : "translateY(0)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              cursor: "default",
            }}
          >
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: "8px" }}>
              Garansi Material
            </p>
            <p style={{ fontSize: "26px", fontWeight: 600, color: "#0b0b0b", letterSpacing: "-1px", lineHeight: 1 }}>
              15 <span style={{ fontSize: "14px", fontWeight: 500, color: "#555" }}>tahun</span>
            </p>
            <p style={{ fontSize: "11px", color: "#aaa", marginTop: "4px" }}>Anti rayap · Anti karat</p>
          </div>

          {/* Card kanan tengah — Rating */}
          <div
            onMouseEnter={() => setHoveredCard("rating")}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: "absolute",
              top: "160px",
              right: "32px",
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "0.5px solid rgba(255,255,255,0.6)",
              borderRadius: "16px",
              padding: "16px 20px",
              minWidth: "160px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              transform: hoveredCard === "rating" ? "translateY(-4px)" : "translateY(0)",
              transition: "transform 0.25s ease",
              cursor: "default",
            }}
          >
            <div style={{ display: "flex", gap: "2px", marginBottom: "6px" }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ fontSize: "13px" }}>★</span>
              ))}
            </div>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#0b0b0b" }}>4.9 / 5.0</p>
            <p style={{ fontSize: "11px", color: "#aaa", marginTop: "2px" }}>dari 1.200+ pelanggan</p>
          </div>

          {/* Card kanan bawah — Standar SNI */}
          <div
            onMouseEnter={() => setHoveredCard("sni")}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: "absolute",
              bottom: "120px",
              right: "32px",
              background: "rgba(11,11,11,0.80)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "14px 18px",
              minWidth: "150px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.24)",
              transform: hoveredCard === "sni" ? "translateY(-4px)" : "translateY(0)",
              transition: "transform 0.25s ease",
              cursor: "default",
            }}
          >
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>
              Sertifikasi
            </p>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>SNI · E1 · V0</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "3px" }}>Standar internasional</p>
          </div>

          {/* ── Konten Teks Kiri ── */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "48px",
              maxWidth: "600px",
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
                Katalog Material Pintu
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(36px, 5.5vw, 72px)",
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-2px",
                color: "#fff",
                margin: "0 0 20px",
              }}
            >
              Kualitas<br />
              premium,<br />
              <span style={{ color: "rgba(255,255,255,0.45)" }}>pilihan tepat.</span>
            </h1>

            {/* Sub */}
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                maxWidth: "380px",
                margin: "0 0 32px",
              }}
            >
              Dari kayu solid hingga aluminium dan UPVC — material pintu premium untuk hunian dan komersial.
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
                  Minta penawaran →
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
                  Lihat katalog
                </button>
              </a>
            </div>

            {/* Material Chips */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "28px" }}>
              {["Kayu Solid", "HDF / MDF", "Aluminium", "UPVC", "Kaca Tempered"].map((label) => (
                <span
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(6px)",
                    border: "0.5px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.8)",
                    borderRadius: "20px",
                    padding: "5px 14px",
                    fontSize: "11px",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </span>
              ))}
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
          margin: "16px 32px 0",
          background: "#fff",
          borderRadius: "20px",
          border: "0.5px solid #e8e6e0",
          overflow: "hidden",
        }}
      >
        {[
          { val: "12+", label: "Jenis material tersedia", sub: "Dari kayu, logam, hingga komposit" },
          { val: "500+", label: "Model & finishing", sub: "Panel, flush, geser, lipat, dan lainnya" },
          { val: "15thn", label: "Garansi material premium", sub: "Anti rayap, anti karat, weatherproof" },
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

      {/* ═══════════════════════════════════════════
          CARD GRID — Material unggulan
      ═══════════════════════════════════════════ */}
      <div id="produk" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "12px", padding: "12px 32px 0" }}>

        {/* Card Utama — Kayu */}
        <div style={{ background: "#fff", borderRadius: "20px", border: "0.5px solid #e8e6e0", overflow: "hidden" }}>
          <div style={{ height: "128px", background: "#f0ede8", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="100" height="72" viewBox="0 0 100 72" fill="none">
              <rect x="8" y="6" width="36" height="60" rx="3" stroke="#0b0b0b" strokeWidth="1.5" fill="none" />
              <rect x="14" y="12" width="24" height="20" rx="2" stroke="#0b0b0b" strokeWidth="1" fill="none" opacity="0.4" />
              <rect x="14" y="36" width="24" height="20" rx="2" stroke="#0b0b0b" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="42" cy="36" r="2" fill="#0b0b0b" opacity="0.5" />
              <rect x="56" y="6" width="36" height="60" rx="3" stroke="#0b0b0b" strokeWidth="1.5" fill="none" strokeDasharray="5 3" />
              <rect x="62" y="12" width="24" height="48" rx="2" stroke="#0b0b0b" strokeWidth="1" fill="none" opacity="0.3" />
              <line x1="74" y1="6" x2="74" y2="66" stroke="#0b0b0b" strokeWidth="0.8" opacity="0.3" />
            </svg>
          </div>
          <div style={{ padding: "24px" }}>
            <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Material unggulan</p>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "#0b0b0b", lineHeight: 1.3 }}>Kayu solid & engineered wood</p>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6, marginTop: "8px" }}>
              Kayu jati, merbau, dan pinus pilihan — tersedia dalam finishing natural, duco, dan HPL. Cocok untuk pintu utama, kamar, maupun kamar mandi.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
              {["Jati", "Merbau", "Pinus", "Sungkai"].map((t) => (
                <span key={t} style={{ background: "#f0ede8", color: "#666", borderRadius: "8px", padding: "5px 12px", fontSize: "12px" }}>{t}</span>
              ))}
              <span style={{ background: "#0b0b0b", color: "#fff", borderRadius: "8px", padding: "5px 12px", fontSize: "12px" }}>Best seller</span>
            </div>
          </div>
        </div>

        {/* Spesifikasi Card */}
        <div style={{ background: "#fff", borderRadius: "20px", border: "0.5px solid #e8e6e0", padding: "24px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#e8e5df", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="4" y="2" width="20" height="24" rx="2" stroke="#888" strokeWidth="1.5" fill="none" />
              <line x1="8" y1="8" x2="20" y2="8" stroke="#888" strokeWidth="1" />
              <line x1="8" y1="12" x2="20" y2="12" stroke="#888" strokeWidth="1" />
              <line x1="8" y1="16" x2="14" y2="16" stroke="#888" strokeWidth="1" />
            </svg>
          </div>
          <p style={{ fontSize: "15px", fontWeight: 500, color: "#0b0b0b", marginTop: "12px" }}>Spesifikasi material</p>
          <p style={{ fontSize: "12px", color: "#888", marginTop: "3px" }}>Standar SNI & internasional</p>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px", paddingTop: "16px", borderTop: "0.5px solid #f0ede8" }}>
            {[{ val: "E1", key: "Emisi" }, { val: "V0", key: "Fire rate" }].map(({ val, key }) => (
              <div key={key}>
                <div style={{ fontSize: "18px", fontWeight: 500, color: "#0b0b0b" }}>{val}</div>
                <div style={{ fontSize: "11px", color: "#bbb", marginTop: "2px" }}>{key}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "16px" }}>
            {[
              { label: "Anti rayap", badge: "standar", hot: false },
              { label: "Tahan lembab", badge: "opsional", hot: false },
              { label: "Soundproof", badge: "premium", hot: true },
              { label: "UV coating", badge: "opsional", hot: false },
            ].map(({ label, badge, hot }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#555", padding: "9px 0", borderBottom: "0.5px solid #f0ede8" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0b0b0b", flexShrink: 0 }} />
                {label}
                <span style={{ marginLeft: "auto", background: hot ? "#0b0b0b" : "#f0ede8", color: hot ? "#fff" : "#666", borderRadius: "20px", padding: "3px 10px", fontSize: "11px", whiteSpace: "nowrap" }}>
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Card Kecil */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ background: "#fff", borderRadius: "20px", border: "0.5px solid #e8e6e0", padding: "24px", flex: 1 }}>
            <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Material modern</p>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "#0b0b0b", lineHeight: 1.3 }}>Aluminium & UPVC</p>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6, marginTop: "8px" }}>Ringan, anti karat, dan perawatan minimal. Ideal untuk pintu sliding, folding, dan eksterior.</p>
          </div>
          <div style={{ background: "#fff", borderRadius: "20px", border: "0.5px solid #e8e6e0", padding: "24px", flex: 1 }}>
            <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Aksesori & kaca</p>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "#0b0b0b", lineHeight: 1.3 }}>Kaca tempered & panel kaca</p>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6, marginTop: "8px" }}>Kaca 8–12mm, frosted, clear, dan stopsol untuk pintu modern bergaya.</p>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div style={{ margin: "12px 32px 0", background: "#0b0b0b", borderRadius: "20px", padding: "28px 36px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: "20px", fontWeight: 500, color: "#fff", letterSpacing: "-0.5px", margin: 0 }}>
          Butuh konsultasi? <span style={{ color: "#555" }}>Kami bantu pilih material yang tepat.</span>
        </p>
        <a href="#kontak">
          <button style={{ background: "#fff", color: "#0b0b0b", border: "none", borderRadius: "24px", padding: "12px 28px", fontSize: "14px", fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap" }}>
            Hubungi kami →
          </button>
        </a>
      </div>

      {/* Bottom Row */}
      <div id="jenis" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", padding: "12px 32px 32px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", border: "0.5px solid #e8e6e0", padding: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Jenis pintu</p>
          {["Pintu panel kayu solid", "Pintu flush HDF / MDF", "Pintu geser (sliding)", "Pintu lipat (folding)", "Pintu baja & security door", "Pintu kaca frameless"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#555", padding: "9px 0", borderBottom: "0.5px solid #f0ede8" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0b0b0b", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: "20px", border: "0.5px solid #e8e6e0", padding: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Testimoni</p>
          <p style={{ fontSize: "14px", color: "#555", fontWeight: 400, lineHeight: 1.6, marginTop: "4px" }}>
            "Material kayu jatinya sangat solid, finishing duco-nya rapi dan tahan lama. Sudah 3 tahun tidak ada masalah sama sekali."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "16px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#e8e5df", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#888" }}>BW</div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "#0b0b0b" }}>Budi Wicaksono</div>
              <div style={{ fontSize: "11px", color: "#aaa" }}>Kontraktor, Surabaya</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
