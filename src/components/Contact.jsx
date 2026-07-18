import { useState } from "react";

const c = {
  bg: "#F8F8F6",
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

const WHATSAPP_NUMBER = "6285121952847";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.firstName || !form.email || !form.message) return;

    const waText =
      `Halo EleganceWood Indonesia, saya ingin mengajukan penawaran material pintu.\n\n` +
      `Nama: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      `No. HP: ${form.phone || "-"}\n\n` +
      `Kebutuhan:\n${form.message}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: c.bg,
    border: `0.5px solid ${c.border}`,
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "13px",
    color: c.heading,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 300ms ease",
    fontFamily: c.fontBody,
  };

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: c.muted,
    marginBottom: "8px",
  };

  const channels = [
    { label: "WhatsApp", sub: "Konsultasi cepat dengan tim penjualan kami", href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { label: "Email", sub: "Kirim pertanyaan atau dokumen proyek Anda", href: "mailto:info@pintumaterial.id" },
    { label: "Instagram", sub: "Lihat portofolio dan inspirasi desain pintu", href: "https://instagram.com/pintumaterial" },
    { label: "Showroom", sub: "Lihat dan rasakan langsung material kami", href: "#" },
  ];

  return (
    <section
      id="kontak"
      style={{ background: c.bg, paddingTop: "48px", paddingBottom: "48px", fontFamily: c.fontBody, borderTop: `0.5px solid ${c.border}` }}
    >
      <div className="px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <div style={{ width: "4px", height: "16px", background: c.primary, borderRadius: "2px" }} />
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: c.primary }}>
            Kontak
          </p>
        </div>

        <h2 style={{ fontFamily: c.fontHeading, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: c.heading, letterSpacing: "-1px", margin: 0, lineHeight: 1.1 }}>
          Hubungi kami,<br /><span style={{ color: c.muted }}>mari diskusikan proyek Anda.</span>
        </h2>

        <p style={{ marginTop: "16px", fontSize: "14px", color: c.body, maxWidth: "400px", lineHeight: 1.7 }}>
          Sampaikan kebutuhan pintu Anda — jenis material, ukuran, finishing, hingga estimasi anggaran. Tim kami akan menyusun penawaran yang sesuai dengan kebutuhan proyek Anda.
        </p>

        <div style={{ borderTop: `0.5px solid ${c.border}`, marginTop: "40px" }} />

        {/* Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "12px", marginBottom: "40px" }}>
          {channels.map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                display: "block", padding: "24px",
                textDecoration: "none",
                background: c.surface,
                border: `0.5px solid ${c.border}`,
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(31,41,51,0.04)",
                transition: "transform 300ms ease, box-shadow 300ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(47,93,80,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(31,41,51,0.04)";
              }}
            >
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px",
                background: "rgba(47, 93, 80, 0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "14px",
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: c.accent }} />
              </div>
              <p style={{ fontSize: "14px", fontWeight: 600, color: c.heading }}>{item.label}</p>
              <p style={{ fontSize: "12px", marginTop: "4px", color: c.faint, lineHeight: 1.5 }}>{item.sub}</p>
            </a>
          ))}
        </div>

        {/* Form */}
        <div
          className="px-5 sm:px-8 lg:px-10"
          style={{
            marginTop: "40px",
            background: c.surface,
            border: `0.5px solid ${c.border}`,
            borderRadius: "16px",
            paddingTop: "32px",
            paddingBottom: "32px",
            boxShadow: "0 4px 24px rgba(31,41,51,0.05)",
          }}
        >
          <p style={{ fontSize: "11px", fontWeight: 600, color: c.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
            Formulir Penawaran
          </p>
          <h3 style={{ fontFamily: c.fontHeading, fontSize: "18px", fontWeight: 700, color: c.heading, letterSpacing: "-0.5px", margin: "0 0 6px" }}>
            Ajukan penawaran gratis
          </h3>
          <p style={{ fontSize: "13px", color: c.faint, marginBottom: "32px" }}>
            Lengkapi formulir di bawah ini — permintaan Anda akan langsung terkirim ke WhatsApp tim kami untuk direspon secepatnya.
          </p>

          {submitted ? (
            <div
              style={{
                background: c.bg,
                border: `0.5px solid ${c.border}`,
                borderRadius: "12px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "28px", marginBottom: "12px", color: c.primary }}>✓</p>
              <p style={{ fontSize: "16px", fontWeight: 600, color: c.heading }}>Terhubung ke WhatsApp!</p>
              <p style={{ fontSize: "13px", color: c.body, marginTop: "6px" }}>
                Terima kasih, {form.firstName}. Jika tab WhatsApp belum terbuka otomatis, klik tombol di bawah untuk melanjutkan chat dengan tim kami.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block", marginTop: "16px",
                  background: c.primaryDark, color: "#fff",
                  borderRadius: "20px", padding: "10px 24px",
                  fontSize: "13px", fontWeight: 600, textDecoration: "none",
                }}
              >
                Buka WhatsApp →
              </a>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px" }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = c.primary)}
                    onBlur={(e) => (e.target.style.borderColor = c.border)}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = c.primary)}
                    onBlur={(e) => (e.target.style.borderColor = c.border)}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = c.primary)}
                    onBlur={(e) => (e.target.style.borderColor = c.border)}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+62 8xx-xxxx-xxxx"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = c.primary)}
                    onBlur={(e) => (e.target.style.borderColor = c.border)}
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Ceritakan kebutuhan pintu Anda — jenis material, ukuran, finishing, dan perkiraan jumlah unit..."
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                  onFocus={(e) => (e.target.style.borderColor = c.primary)}
                  onBlur={(e) => (e.target.style.borderColor = c.border)}
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto"
                  style={{
                    background: c.primaryDark, color: "#fff",
                    border: "none", borderRadius: "20px",
                    padding: "12px 28px", fontSize: "13px",
                    fontFamily: c.fontBody,
                    fontWeight: 600, cursor: "pointer",
                    transition: "opacity 300ms ease, transform 300ms ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Kirim via WhatsApp →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
          style={{
            borderTop: `0.5px solid ${c.border}`,
            marginTop: "48px",
            paddingTop: "28px",
            gap: "12px",
          }}
        >
          <div style={{ fontFamily: c.fontHeading, fontSize: "15px", fontWeight: 700, color: c.heading, letterSpacing: "-0.3px" }}>
            EleganceWood<span style={{ color: c.primary }}>.Indonesia</span>
          </div>
          <p style={{ fontSize: "12px", color: c.faint }}>
            © 2025 EleganceWood Indonesia · Seluruh hak cipta dilindungi undang-undang
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
