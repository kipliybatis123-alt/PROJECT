import { Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Contact = () => {
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

  return (
    <section id="contact" style={{ background: "#0a0f1a", paddingTop: "96px", paddingBottom: "96px" }} className="scroll-mt-20">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

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
              onMouseEnter={e => e.currentTarget.style.opacity = "0.6"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <div style={{ color: "#10b981", marginBottom: "16px" }}>{item.icon}</div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#f0f4ff" }}>{item.label}</p>
              <p style={{ fontSize: "12px", marginTop: "4px", color: "#6b7280" }}>{item.sub}</p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid #1e2d40",
          marginTop: "64px",
          paddingTop: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div className="flex items-center gap-2">
            <div style={{
              width: "22px", height: "22px",
              background: "linear-gradient(135deg, #10b981, #059669)",
              borderRadius: "5px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
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
