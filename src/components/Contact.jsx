import { useState } from "react";

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
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "#f8f7f4",
    border: "0.5px solid #e8e6e0",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "13px",
    color: "#0b0b0b",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    fontFamily: "sans-serif",
  };

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#aaa",
    marginBottom: "8px",
  };

  const channels = [
    { label: "WhatsApp", sub: "Konsultasi cepat dengan tim penjualan kami", href: "https://wa.me/6287845333239" },
    { label: "Email", sub: "Kirim pertanyaan atau dokumen proyek Anda", href: "mailto:info@pintumaterial.id" },
    { label: "Instagram", sub: "Lihat portofolio dan inspirasi desain pintu", href: "https://instagram.com/pintumaterial" },
    { label: "Showroom", sub: "Lihat dan rasakan langsung material kami", href: "#" },
  ];

  return (
    <section
      id="kontak"
      style={{ background: "#f8f7f4", paddingTop: "64px", paddingBottom: "64px", fontFamily: "sans-serif", borderTop: "0.5px solid #e8e6e0" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <div style={{ width: "4px", height: "16px", background: "#0b0b0b", borderRadius: "2px" }} />
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888" }}>
            Kontak
          </p>
        </div>

        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, color: "#0b0b0b", letterSpacing: "-1px", margin: 0, lineHeight: 1.1 }}>
          Hubungi kami,<br /><span style={{ color: "#aaa" }}>mari diskusikan proyek Anda.</span>
        </h2>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#888", maxWidth: "400px", lineHeight: 1.7 }}>
          Sampaikan kebutuhan pintu Anda — jenis material, ukuran, finishing, hingga estimasi anggaran. Tim kami akan menyusun penawaran yang sesuai dengan kebutuhan proyek Anda.
        </p>

        <div style={{ borderTop: "0.5px solid #e8e6e0", marginTop: "40px" }} />

        {/* Channel Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {channels.map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                display: "block", padding: "28px 0",
                textDecoration: "none",
                borderRight: i < 3 ? "0.5px solid #e8e6e0" : "none",
                borderBottom: "0.5px solid #e8e6e0",
                paddingLeft: i === 0 ? "0" : "24px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#0b0b0b" }}>{item.label}</p>
              <p style={{ fontSize: "12px", marginTop: "4px", color: "#aaa" }}>{item.sub}</p>
            </a>
          ))}
        </div>

        {/* Form */}
        <div
          style={{
            marginTop: "40px",
            background: "#fff",
            border: "0.5px solid #e8e6e0",
            borderRadius: "16px",
            padding: "40px",
          }}
        >
          <p style={{ fontSize: "11px", fontWeight: 500, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
            Formulir Penawaran
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#0b0b0b", letterSpacing: "-0.5px", margin: "0 0 6px" }}>
            Ajukan penawaran gratis
          </h3>
          <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "32px" }}>
            Lengkapi formulir di bawah ini dan tim kami akan menghubungi Anda dalam waktu 1×24 jam kerja.
          </p>

          {submitted ? (
            <div
              style={{
                background: "#f8f7f4",
                border: "0.5px solid #e8e6e0",
                borderRadius: "12px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "28px", marginBottom: "12px" }}>✓</p>
              <p style={{ fontSize: "16px", fontWeight: 500, color: "#0b0b0b" }}>Permintaan penawaran terkirim!</p>
              <p style={{ fontSize: "13px", color: "#888", marginTop: "6px" }}>
                Terima kasih, {form.firstName}. Tim kami akan segera menghubungi Anda untuk membahas kebutuhan proyek.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Row 1 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#0b0b0b")}
                    onBlur={(e) => (e.target.style.borderColor = "#e8e6e0")}
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
                    onFocus={(e) => (e.target.style.borderColor = "#0b0b0b")}
                    onBlur={(e) => (e.target.style.borderColor = "#e8e6e0")}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#0b0b0b")}
                    onBlur={(e) => (e.target.style.borderColor = "#e8e6e0")}
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
                    onFocus={(e) => (e.target.style.borderColor = "#0b0b0b")}
                    onBlur={(e) => (e.target.style.borderColor = "#e8e6e0")}
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
                  onFocus={(e) => (e.target.style.borderColor = "#0b0b0b")}
                  onBlur={(e) => (e.target.style.borderColor = "#e8e6e0")}
                />
              </div>

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={handleSubmit}
                  style={{
                    background: "#0b0b0b", color: "#fff",
                    border: "none", borderRadius: "20px",
                    padding: "12px 28px", fontSize: "13px",
                    fontWeight: 500, cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Kirim permintaan penawaran →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "0.5px solid #e8e6e0",
            marginTop: "48px",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "15px", fontWeight: 500, color: "#0b0b0b", letterSpacing: "-0.3px" }}>
            EleganceWood<span style={{ color: "#888" }}>.Indonesia</span>
          </div>
          <p style={{ fontSize: "12px", color: "#bbb" }}>
            © 2025 EleganceWood Indonesia · Seluruh hak cipta dilindungi undang-undang
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
