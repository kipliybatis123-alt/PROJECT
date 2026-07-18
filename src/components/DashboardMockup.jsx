const DashboardMockup = () => {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#f8f7f4", paddingBottom: "48px" }}>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 32px", background: "#fff", borderBottom: "0.5px solid #e8e6e0" }}>
        <div style={{ fontSize: "15px", fontWeight: 500, color: "#0b0b0b", letterSpacing: "-0.3px" }}>
          EleganceWood<span style={{ color: "#888" }}>.Indonesia</span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Produk", "Jenis Pintu", "Spesifikasi"].map((item) => (
            <a key={item} href="#" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>{item}</a>
          ))}
        </div>
        <button style={{ background: "#0b0b0b", color: "#fff", border: "none", borderRadius: "20px", padding: "8px 20px", fontSize: "13px", cursor: "pointer" }}>
          Minta Penawaran
        </button>
      </nav>

      {/* Hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "380px" }}>
        <div style={{ padding: "48px 40px 40px 32px", background: "#fff", borderRight: "0.5px solid #e8e6e0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "#888", textTransform: "uppercase", marginBottom: "16px" }}>
              Katalog Material Pintu Premium
            </p>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-1.5px", color: "#0b0b0b", margin: 0 }}>
              Satu mitra,<br />segala <span style={{ color: "#aaa" }}>kebutuhan</span><br />material pintu.
            </h1>
            <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.7, marginTop: "20px", maxWidth: "360px" }}>
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
                  background: dark ? "#0b0b0b" : "#f0ede8",
                  color: dark ? "#fff" : "#444",
                  borderRadius: "20px", padding: "6px 16px", fontSize: "12px", fontWeight: 500,
                }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: "40px 32px", background: "#f8f7f4", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }}>
          {[
            { val: "12+", label: "Kategori material tersedia", sub: "Dari kayu, logam, hingga kaca dan komposit" },
            { val: "500+", label: "Varian model & finishing", sub: "Panel, flush, geser, lipat, dan lainnya" },
            { val: "15thn", label: "Pengalaman melayani klien", sub: "Ditopang mutu terjaga dan garansi material" },
          ].map(({ val, label, sub }) => (
            <div key={val} style={{ background: "#fff", borderRadius: "16px", padding: "20px 24px", border: "0.5px solid #e8e6e0" }}>
              <div style={{ fontSize: "28px", fontWeight: 500, color: "#0b0b0b", letterSpacing: "-1px" }}>{val}</div>
              <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>{label}</div>
              <div style={{ fontSize: "11px", color: "#bbb", marginTop: "2px" }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "12px", padding: "12px 32px 0" }}>

        {/* Card Utama */}
        <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #e8e6e0", overflow: "hidden" }}>
          <div style={{ height: "120px", background: "#f0ede8", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="100" height="72" viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <p style={{ fontSize: "16px", fontWeight: 500, color: "#0b0b0b", lineHeight: 1.3 }}>Pintu kayu solid & engineered wood</p>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6, marginTop: "8px" }}>
              Kayu jati, merbau, dan pinus pilihan dengan serat rapat dan struktur stabil, sehingga tidak mudah melengkung meski digunakan bertahun-tahun. Tersedia dalam finishing natural, duco, dan HPL untuk pintu utama, kamar, hingga kamar mandi.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
              {["Jati", "Merbau", "Pinus", "Sungkai"].map((t) => (
                <span key={t} style={{ background: "#f0ede8", color: "#666", borderRadius: "8px", padding: "5px 12px", fontSize: "12px" }}>{t}</span>
              ))}
              <span style={{ background: "#0b0b0b", color: "#fff", borderRadius: "8px", padding: "5px 12px", fontSize: "12px" }}>Best seller</span>
            </div>
          </div>
        </div>

        {/* Profile / Spesifikasi Card */}
        <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #e8e6e0", padding: "24px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#e8e5df", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="2" width="20" height="24" rx="2" stroke="#888" strokeWidth="1.5" fill="none" />
              <line x1="8" y1="8" x2="20" y2="8" stroke="#888" strokeWidth="1" />
              <line x1="8" y1="12" x2="20" y2="12" stroke="#888" strokeWidth="1" />
              <line x1="8" y1="16" x2="14" y2="16" stroke="#888" strokeWidth="1" />
            </svg>
          </div>
          <p style={{ fontSize: "15px", fontWeight: 500, color: "#0b0b0b", marginTop: "12px" }}>Spesifikasi & standar mutu</p>
          <p style={{ fontSize: "12px", color: "#888", marginTop: "3px" }}>Diuji sesuai standar SNI & internasional</p>
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
          <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #e8e6e0", padding: "24px", flex: 1 }}>
            <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Material modern</p>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "#0b0b0b", lineHeight: 1.3 }}>Pintu aluminium & UPVC</p>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6, marginTop: "8px" }}>Bobot ringan, bebas karat, dan minim perawatan — pilihan tepat untuk pintu sliding, folding, serta area eksterior yang sering terpapar cuaca.</p>
          </div>
          <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #e8e6e0", padding: "24px", flex: 1 }}>
            <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Aksesori & kaca</p>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "#0b0b0b", lineHeight: 1.3 }}>Pintu kaca tempered</p>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6, marginTop: "8px" }}>Ketebalan 8–12mm dengan pilihan clear, frosted, dan stopsol — menghadirkan kesan lapang dan modern pada pintu rumah maupun pintu kantor.</p>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div style={{ margin: "12px 32px 0", background: "#0b0b0b", borderRadius: "16px", padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: "20px", fontWeight: 500, color: "#fff", letterSpacing: "-0.5px" }}>
          Belum yakin material yang tepat? <span style={{ color: "#666" }}>Tim kami siap membantu Anda memilih.</span>
        </p>
        <button style={{ background: "#fff", color: "#0b0b0b", border: "none", borderRadius: "24px", padding: "12px 28px", fontSize: "14px", fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap" }}>
          Konsultasi gratis →
        </button>
      </div>

      {/* Bottom Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", padding: "12px 32px 0" }}>
        <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #e8e6e0", padding: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Jenis pintu tersedia</p>
          {["Pintu panel kayu solid", "Pintu flush HDF / MDF", "Pintu geser (sliding)", "Pintu lipat (folding)", "Pintu baja & security door", "Pintu kaca frameless"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#555", padding: "9px 0", borderBottom: "0.5px solid #f0ede8" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0b0b0b", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #e8e6e0", padding: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Testimoni Klien</p>
          <p style={{ fontSize: "14px", color: "#555", fontWeight: 400, lineHeight: 1.6, marginTop: "4px" }}>
            "Kami sudah tiga tahun memakai pintu kayu jati dari EleganceWood untuk proyek perumahan, dan hasil finishing duco-nya masih rapi sampai sekarang. Pengirimannya juga tepat waktu."
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

    </div>
  );
};

export default DashboardMockup;
