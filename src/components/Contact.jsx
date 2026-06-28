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
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=putragamas2002@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Putra,%0A%0AI%20am%20interested%20in%20working%20with%20you.",
    },
  ];

  return (
    <section id="contact" style={{ background: "#111111", paddingTop: "96px", paddingBottom: "96px" }} className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#707072" }}>
          Contact
        </p>
        <h2
          className="font-black uppercase"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.0, color: "#ffffff" }}
        >
          Let's<br />Connect
        </h2>
        <p className="mt-6 text-sm" style={{ color: "#9e9ea0", maxWidth: "400px" }}>
          Interested in collaborating, hiring, or discussing a project?
          Reach me through any platform below.
        </p>

        <div style={{ borderTop: "1px solid #39393b", marginTop: "48px" }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ marginTop: "0px" }}>
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-8 transition-opacity hover:opacity-60"
              style={{
                borderRight: i < 3 ? "1px solid #39393b" : "none",
                borderBottom: "1px solid #39393b",
                paddingLeft: i === 0 ? "0" : "24px",
              }}
            >
              <div style={{ color: "#ffffff", marginBottom: "16px" }}>{item.icon}</div>
              <p className="text-sm font-bold" style={{ color: "#ffffff" }}>{item.label}</p>
              <p className="text-xs mt-1" style={{ color: "#707072" }}>{item.sub}</p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{ borderTop: "1px solid #39393b", marginTop: "64px", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p className="text-xs" style={{ color: "#4b4b4d" }}>
            © 2025 Putra Gama Supriyadi
          </p>
          <p className="text-xs" style={{ color: "#4b4b4d" }}>
            Full-Stack Engineer · IoT · AI Systems
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
