import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "Andi",
    lastName: "Pratama",
    email: "andi.pratama@email.com",
    phone: "+62 812-3456-7890",
    message:
      "Hello, I am interested in learning more about your services. Please contact me to discuss how your solutions can support our business. Thank you.",
  });
  const [submitted, setSubmitted] = useState(false);

  const contacts = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      sub: "Professional profile",
      href: "https://linkedin.com/in/putragama",
    },
    {
      icon: <Phone size={20} />,
      label: "WhatsApp",
      sub: "Quick chat & discussion",
      href: "https://wa.me/6287845333239",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      sub: "Personal & tech content",
      href: "https://instagram.com/ptrgama_",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      sub: "Send me an email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=putragamas2002@gmail.com&su=Portfolio%20Inquiry&body=Hello%20FINANCE,%0A%0AI%20am%20interested%20in%20working%20with%20you.",
    },
  ];

  const inputStyle = {
    width: "100%",
    background: "#0d1829",
    border: "1px solid #1e2d40",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "13px",
    color: "#f0f4ff",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#6b7280",
    marginBottom: "8px",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{ background: "#0a0f1a", paddingTop: "96px", paddingBottom: "96px" }}
      className="scroll-mt-20"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section label */}
        <div className="flex items-center gap-2" style={{ marginBottom: "16px" }}>
          <div style={{ width: "4px", height: "16px", background: "#10b981", borderRadius: "2px" }} />
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#10b981" }}>
            Contact
          </p>
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            lineHeight: 1.05,
            fontWeight: 800,
            color: "#f0f4ff",
            letterSpacing: "-1px",
          }}
        >
          Let's<br />Connect
        </h2>

        <p style={{ marginTop: "24px", fontSize: "14px", color: "#6b7280", maxWidth: "400px" }}>
          Interested in collaborating, hiring, or discussing a project?
          Reach me through any platform below.
        </p>

        <div style={{ borderTop: "1px solid #1e2d40", marginTop: "48px" }} />

        {/* Contact Links */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "32px 0",
                textDecoration: "none",
                borderRight: i < 3 ? "1px solid #1e2d40" : "none",
                borderBottom: "1px solid #1e2d40",
                paddingLeft: i === 0 ? "0" : "24px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <div style={{ color: "#10b981", marginBottom: "16px" }}>{item.icon}</div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#f0f4ff" }}>{item.label}</p>
              <p style={{ fontSize: "12px", marginTop: "4px", color: "#6b7280" }}>{item.sub}</p>
            </a>
          ))}
        </div>

        {/* ── Contact Form ── */}
        <div
          style={{
            marginTop: "48px",
            background: "#111827",
            border: "1px solid #1e2d40",
            borderRadius: "16px",
            padding: "40px",
          }}
        >
          {/* Form header */}
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#10b981", marginBottom: "8px" }}>
              Send a Message
            </p>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#f0f4ff",
                letterSpacing: "-0.5px",
              }}
            >
              Get in Touch
            </h3>
            <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "6px" }}>
              Fill in the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                background: "#0d1829",
                border: "1px solid #10b981",
                borderRadius: "12px",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>✅</div>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#f0f4ff" }}>Message Sent!</p>
              <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "6px" }}>
                Thank you, {form.firstName}. I'll be in touch shortly.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              {/* Row 1: First Name + Last Name */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#10b981")}
                    onBlur={(e) => (e.target.style.borderColor = "#1e2d40")}
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#10b981")}
                    onBlur={(e) => (e.target.style.borderColor = "#1e2d40")}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#10b981")}
                    onBlur={(e) => (e.target.style.borderColor = "#1e2d40")}
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#10b981")}
                    onBlur={(e) => (e.target.style.borderColor = "#1e2d40")}
                    placeholder="+62 8xx-xxxx-xxxx"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                  onFocus={(e) => (e.target.style.borderColor = "#10b981")}
                  onBlur={(e) => (e.target.style.borderColor = "#1e2d40")}
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={handleSubmit}
                  style={{
                    background: "#10b981",
                    color: "#0a0f1a",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 32px",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#059669")}
                  onMouseLeave={(e) => (e.target.style.background = "#10b981")}
                >
                  Send Message →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #1e2d40",
            marginTop: "64px",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="flex items-center gap-2">
            <div
              style={{
                width: "22px",
                height: "22px",
                background: "linear-gradient(135deg, #10b981, #059669)",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#ffffff", fontSize: "10px", fontWeight: 800 }}>F</span>
            </div>
            <p style={{ fontSize: "12px", color: "#4b5563", fontWeight: 600 }}>© 2025 FINANCE</p>
          </div>
          <p style={{ fontSize: "12px", color: "#4b5563" }}>
            Full-Stack Engineer · IoT · AI Systems
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
