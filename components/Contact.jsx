import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Phone, MapPin, Clock, TrendingUp } from "lucide-react";

const contacts = [
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    sub: "Connect professionally",
    href: "https://linkedin.com/in/finaleyas",
    color: "#0077b5",
  },
  {
    icon: <Phone size={20} />,
    label: "WhatsApp",
    sub: "+62 878 4533 3239",
    href: "https://wa.me/6287845333239",
    color: "#25d366",
  },
  {
    icon: <Instagram size={20} />,
    label: "Instagram",
    sub: "@finaleyas",
    href: "https://instagram.com/finaleyas",
    color: "#e1306c",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    sub: "hello@finaleyas.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=putragamas2002@gmail.com",
    color: "var(--accent)",
  },
];

const offices = [
  { city: "Jakarta", country: "Indonesia", flag: "🇮🇩" },
  { city: "Singapore", country: "Singapore", flag: "🇸🇬" },
  { city: "London", country: "United Kingdom", flag: "🇬🇧" },
];

const Contact = () => (
  <section id="contact" style={{ background: "var(--navy)" }} className="fin-section">
    <div className="fin-container">

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "flex-end", marginBottom: 64 }}
        className="responsive-contact-header"
      >
        <div>
          <div className="fin-eyebrow" style={{ color: "var(--accent-light)" }}>Contact Us</div>
          <h2 className="fin-h2 fin-h2-white" style={{ marginBottom: 0 }}>
            Let's Build<br />Something Together
          </h2>
        </div>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>
          Ready to explore a mandate or simply want to learn more? Our advisory team responds
          to all enquiries within one business day.
        </p>
      </motion.div>

      {/* contact channels */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "var(--radius-lg)", overflow: "hidden",
        marginBottom: 48,
      }} className="responsive-contact-grid">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.45 }}
            style={{
              display: "block", padding: "32px 28px",
              textDecoration: "none",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: `${c.color}1a`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: c.color, marginBottom: 18,
            }}>
              {c.icon}
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#ffffff", marginBottom: 4 }}>{c.label}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{c.sub}</div>
          </motion.a>
        ))}
      </div>

      {/* offices + hours */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="responsive-contact-bottom">
        <div style={{
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "var(--radius-lg)", padding: "28px 32px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <MapPin size={16} color="var(--accent-light)" />
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)" }}>
              Global Offices
            </span>
          </div>
          {offices.map((o, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "12px 0",
              borderBottom: i < offices.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 22 }}>{o.flag}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "#ffffff" }}>{o.city}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{o.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "var(--radius-lg)", padding: "28px 32px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Clock size={16} color="var(--accent-light)" />
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)" }}>
              Business Hours
            </span>
          </div>
          {[
            { day: "Monday – Friday", hrs: "08:00 – 18:00 WIB" },
            { day: "Saturday",        hrs: "09:00 – 13:00 WIB" },
            { day: "Sunday",          hrs: "Closed"             },
          ].map((row, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between",
              padding: "12px 0",
              borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{row.day}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#ffffff" }}>{row.hrs}</span>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        marginTop: 64, paddingTop: 32,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <TrendingUp size={16} color="#ffffff" />
          </div>
          <span style={{ fontWeight: 800, fontSize: 15, color: "#ffffff" }}>Finaleyas</span>
        </div>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © 2026 Finaleyas Investment Management. All rights reserved.
        </p>

        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms of Use", "Regulatory Info"].map(l => (
            <a key={l} href="#contact" style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.7)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 860px) {
        .responsive-contact-header { grid-template-columns: 1fr !important; gap: 24px !important; }
        .responsive-contact-grid { grid-template-columns: 1fr 1fr !important; }
        .responsive-contact-grid > a { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .responsive-contact-bottom { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 500px) {
        .responsive-contact-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default Contact;
