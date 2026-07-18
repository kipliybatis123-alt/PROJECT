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
  secondary: "#7A5230",
  tint: "rgba(47, 93, 80, 0.08)",
  fontHeading: "'Manrope', 'Plus Jakarta Sans', sans-serif",
  fontBody: "'Inter', 'Plus Jakarta Sans', sans-serif",
};

const cardShadow = "0 4px 20px rgba(31,41,51,0.05)";

const DashboardMockup = () => {
  return (
    <div style={{ fontFamily: c.fontBody, background: c.bg, paddingBottom: "40px" }}>

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="px-5 sm:px-6 lg:px-8"
          style={{ paddingTop: "40px", paddingBottom: "32px", background: c.surface, borderRight: "none", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
          <div>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: c.primary, textTransform: "uppercase", marginBottom: "16px" }}>
              Katalog Material Pintu Premium
            </p>
            <h1 style={{ fontFamily: c.fontHeading, fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1px", color: c.heading, margin: 0 }}>
              Satu mitra,<br />segala <span style={{ color: c.muted }}>kebutuhan</span><br />material pintu.
            </h1>
            <p style={{ fontSize: "14px", color: c.body, lineHeight: 1.7, marginTop: "20px", maxWidth: "360px" }}>
              Sebagai distributor dan supplier pintu terpercaya, kami menghadirkan pintu kayu, pintu aluminium, pintu UPVC, hingga pintu kaca dalam satu katalog lengkap — siap mendukung proyek hunian maupun komersial dari tahap perencanaan hingga pemasangan.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "24px" }}>
              {[
                { label: "Kayu Solid", dark: true },
                { label: "HDF / MDF" },
                { label: "Aluminium" },
                { label: "UPVC" },
                { label: "Kaca Tempered" },
              ].map(({ label, dark }) => (
                <span key={label} style={{
                  background: dark ? c.primaryDark : c.tint,
                  color: dark ? "#fff" : c.primaryDark,
                  borderRadius: "20px", padding: "6px 16px", fontSize: "12px", fontWeight: 500,
                }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="px-5 sm:px-6 lg:px-8 border-t md:border-t-0 md:border-l"
          style={{ paddingTop: "28px", paddingBottom: "28px", background: c.bgAlt, display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px", borderColor: c.border }}
        >
          {[
            { val: "12+", label: "Kategori material tersedia", sub: "Dari kayu, logam, hingga kaca dan komposit" },
            { val: "500+", label: "Varian model & finishing", sub: "Panel, flush, geser, lipat, dan lainnya" },
            { val: "15thn", label: "Pengalaman melayani klien", sub: "Ditopang mutu terjaga dan garansi material" },
          ].map(({ val, label, sub }) => (
            <div key={val} style={{ background: c.surface, borderRadius: "16px", padding: "18px 20px", border: `0.5px solid ${c.border}`, boxShadow: cardShadow }}>
              <div style={{ fontFamily: c.fontHeading, fontSize: "26px", fontWeight: 700, color: c.primary, letterSpacing: "-1px" }}>{val}</div>
              <div style={{ fontSize: "12px", color: c.heading, marginTop: "4px" }}>{label}</div>
              <div style={{ fontSize: "11px", color: c.faint, marginTop: "2px" }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 px-4 sm:px-6 lg:px-8" style={{ gap: "12px", paddingTop: "12px" }}>

        {/* Card Utama */}
        <div className="md:col-span-2" style={{ background: c.surface, borderRadius: "16px", border: `0.5px solid ${c.border}`, overflow: "hidden", boxShadow: cardShadow }}>
          <div style={{ height: "120px", background: c.tint, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="100" height="72" viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="6" width="36" height="60" rx="3" stroke={c.primaryDark} strokeWidth="1.5" fill="none" />
              <rect x="14" y="12" width="24" height="20" rx="2" stroke={c.primaryDark} strokeWidth="1" fill="none" opacity="0.5" />
              <rect x="14" y="36" width="24" height="20" rx="2" stroke={c.primaryDark} strokeWidth="1" fill="none" opacity="0.5" />
              <circle cx="42" cy="36" r="2" fill={c.primaryDark} opacity="0.6" />
              <rect x="56" y="6" width="36" height="60" rx="3" stroke={c.primaryDark} strokeWidth="1.5" fill="none" strokeDasharray="5 3" />
              <rect x="62" y="12" width="24" height="48" rx="2" stroke={c.primaryDark} strokeWidth="1" fill="none" opacity="0.4" />
              <line x1="74" y1="6" x2="74" y2="66" stroke={c.primaryDark} strokeWidth="0.8" opacity="0.4" />
            </svg>
          </div>
          <div style={{ padding: "22px" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, color: c.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Material unggulan</p>
            <p style={{ fontFamily: c.fontHeading, fontSize: "16px", fontWeight: 700, color: c.heading, lineHeight: 1.3 }}>Pintu kayu solid & engineered wood</p>
            <p style={{ fontSize: "13px", color: c.body, lineHeight: 1.6, marginTop: "8px" }}>
              Kayu jati, merbau, dan pinus pilihan dengan serat rapat dan struktur stabil, sehingga tidak mudah melengkung meski digunakan bertahun-tahun. Tersedia dalam finishing natural, duco, dan HPL untuk pintu utama, kamar, hingga kamar mandi.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
              {["Jati", "Merbau", "Pinus", "Sungkai"].map((t) => (
                <span key={t} style={{ background: c.tint, color: c.primaryDark, borderRadius: "8px", padding: "5px 12px", fontSize: "12px", fontWeight: 500 }}>{t}</span>
              ))}
              <span style={{ background: c.primaryDark, color: "#fff", borderRadius: "8px", padding: "5px 12px", fontSize: "12px", fontWeight: 500 }}>Best seller</span>
            </div>
          </div>
        </div>

        {/* Profile / Spesifikasi Card */}
        <div className="md:col-span-1" style={{ background: c.surface, borderRadius: "16px", border: `0.5px solid ${c.border}`, padding: "22px", boxShadow: cardShadow }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: c.tint, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="2" width="20" height="24" rx="2" stroke={c.primaryDark} strokeWidth="1.5" fill="none" />
              <line x1="8" y1="8" x2="20" y2="8" stroke={c.primaryDark} strokeWidth="1" />
              <line x1="8" y1="12" x2="20" y2="12" stroke={c.primaryDark} strokeWidth="1" />
              <line x1="8" y1="16" x2="14" y2="16" stroke={c.primaryDark} strokeWidth="1" />
            </svg>
          </div>
          <p style={{ fontFamily: c.fontHeading, fontSize: "15px", fontWeight: 700, color: c.heading, marginTop: "12px" }}>Spesifikasi & standar mutu</p>
          <p style={{ fontSize: "12px", color: c.body, marginTop: "3px" }}>Diuji sesuai standar SNI & internasional</p>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px", paddingTop: "16px", borderTop: `0.5px solid ${c.border}` }}>
            {[{ val: "E1", key: "Emisi" }, { val: "V0", key: "Fire rate" }].map(({ val, key }) => (
              <div key={key}>
                <div style={{ fontFamily: c.fontHeading, fontSize: "18px", fontWeight: 700, color: c.primary }}>{val}</div>
                <div style={{ fontSize: "11px", color: c.faint, marginTop: "2px" }}>{key}</div>
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
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: c.body, padding: "9px 0", borderBottom: `0.5px solid ${c.border}` }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: c.primary, flexShrink: 0 }} />
                {label}
                <span style={{ marginLeft: "auto", background: hot ? c.primaryDark : c.tint, color: hot ? "#fff" : c.primaryDark, borderRadius: "20px", padding: "3px 10px", fontSize: "11px", whiteSpace: "nowrap" }}>
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Card Kecil */}
        <div className="md:col-span-1 flex flex-col" style={{ gap: "12px" }}>
          <div style={{ background: c.surface, borderRadius: "16px", border: `0.5px solid ${c.border}`, padding: "22px", flex: 1, boxShadow: cardShadow }}>
            <p style={{ fontSize: "11px", fontWeight: 600, color: c.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Material modern</p>
            <p style={{ fontFamily: c.fontHeading, fontSize: "16px", fontWeight: 700, color: c.heading, lineHeight: 1.3 }}>Pintu aluminium & UPVC</p>
            <p style={{ fontSize: "13px", color: c.body, lineHeight: 1.6, marginTop: "8px" }}>Bobot ringan, bebas karat, dan minim perawatan — pilihan tepat untuk pintu sliding, folding, serta area eksterior yang sering terpapar cuaca.</p>
          </div>
          <div style={{ background: c.surface, borderRadius: "16px", border: `0.5px solid ${c.border}`, padding: "22px", flex: 1, boxShadow: cardShadow }}>
            <p style={{ fontSize: "11px", fontWeight: 600, color: c.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Aksesori & kaca</p>
            <p style={{ fontFamily: c.fontHeading, fontSize: "16px", fontWeight: 700, color: c.heading, lineHeight: 1.3 }}>Pintu kaca tempered</p>
            <p style={{ fontSize: "13px", color: c.body, lineHeight: 1.6, marginTop: "8px" }}>Ketebalan 8–12mm dengan pilihan clear, frosted, dan stopsol — menghadirkan kesan lapang dan modern pada pintu rumah maupun pintu kantor.</p>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div
        className="mx-4 sm:mx-6 lg:mx-8 flex flex-col sm:flex-row sm:items-center sm:justify-between"
        style={{ marginTop: "12px", background: c.secondary, borderRadius: "16px", padding: "24px 28px", gap: "16px" }}
      >
        <p style={{ fontFamily: c.fontHeading, fontSize: "18px", fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>
          Belum yakin material yang tepat? <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>Tim kami siap membantu Anda memilih.</span>
        </p>
        <button
          className="w-full sm:w-auto"
          style={{ background: "#fff", color: c.primaryDark, border: "none", borderRadius: "24px", padding: "12px 28px", fontSize: "14px", fontFamily: c.fontBody, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}
        >
          Konsultasi gratis →
        </button>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8" style={{ gap: "12px", paddingTop: "12px" }}>
        <div style={{ background: c.surface, borderRadius: "16px", border: `0.5px solid ${c.border}`, padding: "22px", boxShadow: cardShadow }}>
          <p style={{ fontSize: "11px", fontWeight: 600, color: c.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Jenis pintu tersedia</p>
          {["Pintu panel kayu solid", "Pintu flush HDF / MDF", "Pintu geser (sliding)", "Pintu lipat (folding)", "Pintu baja & security door", "Pintu kaca frameless"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: c.body, padding: "9px 0", borderBottom: `0.5px solid ${c.border}` }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: c.primary, flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
        <div style={{ background: c.surface, borderRadius: "16px", border: `0.5px solid ${c.border}`, padding: "22px", boxShadow: cardShadow }}>
          <p style={{ fontSize: "11px", fontWeight: 600, color: c.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Testimoni Klien</p>
          <p style={{ fontSize: "14px", color: c.body, fontWeight: 400, lineHeight: 1.6, marginTop: "4px" }}>
            "Kami sudah tiga tahun memakai pintu kayu jati dari EleganceWood untuk proyek perumahan, dan hasil finishing duco-nya masih rapi sampai sekarang. Pengirimannya juga tepat waktu."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "16px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: c.tint, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: c.primaryDark, fontWeight: 600 }}>BW</div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: c.heading }}>Budi Wicaksono</div>
              <div style={{ fontSize: "11px", color: c.faint }}>Kontraktor, Surabaya</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardMockup;
