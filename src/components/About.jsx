const About = () => {
  const skills = [
    { label: "Embedded Systems", sub: "& Firmware Development" },
    { label: "Computer Vision", sub: "Machine Learning & Edge AI" },
    { label: "IoT Systems", sub: "Sensors & Microcontrollers" },
    { label: "Real-time Monitoring", sub: "Data Logging & Dashboards" },
  ];

  const expertise = [
    "Python", "C/C++", "Computer Vision (YOLO)", "Embedded Linux",
    "ESP32", "Industrial Instrumentation", "REST API", "WebSocket",
    "Real-time Web Dashboard",
  ];

  return (
    <section id="about" style={{ background: "#111827", paddingTop: "96px", paddingBottom: "96px" }} className="scroll-mt-20">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        <div className="flex items-center gap-2" style={{ marginBottom: "16px" }}>
          <div style={{ width: "4px", height: "16px", background: "#10b981", borderRadius: "2px" }} />
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#10b981" }}>
            About
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
          About Me
        </h2>

        <div style={{ borderTop: "1px solid #1e2d40", marginTop: "48px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginTop: "48px" }}>

          <div>
            <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.75 }}>
              I am an Electrical Engineering graduate with a strong focus on
              embedded systems, IoT, and AI-powered applications. My work
              combines computer vision, machine learning, and real-time systems
              to solve real-world engineering problems.
            </p>

            <p style={{ marginTop: "20px", fontSize: "14px", color: "#9ca3af", lineHeight: 1.75 }}>
              I have hands-on experience developing intelligent monitoring
              systems using YOLO-based computer vision for vehicle detection,
              speed estimation, and traffic analysis, integrated with web
              dashboards, databases, and physical display devices.
            </p>

            <div style={{ marginTop: "40px", borderTop: "1px solid #1e2d40" }}>
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 0",
                    borderBottom: "1px solid #1e2d40",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "#f0f4ff" }}>{skill.label}</p>
                    <p style={{ fontSize: "11px", marginTop: "2px", color: "#6b7280" }}>{skill.sub}</p>
                  </div>
                  <span style={{ color: "#10b981", fontSize: "16px" }}>→</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              background: "#0d1829",
              padding: "32px",
              border: "1px solid #1e2d40",
              borderRadius: "12px",
            }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px", color: "#6b7280" }}>
                Core Expertise
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {expertise.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: "12px", fontWeight: 500,
                      padding: "6px 14px",
                      background: "#111827",
                      color: "#9ca3af",
                      border: "1px solid #1e2d40",
                      borderRadius: "20px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "12px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 24px",
                background: "#10b981",
                borderRadius: "12px",
              }}
            >
              <div>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#0a0f1a" }}>Open to opportunities</p>
                <p style={{ fontSize: "11px", marginTop: "2px", color: "#065f46" }}>Full-time · Freelance · Collaboration</p>
              </div>
              <a href="#contact">
                <button
                  style={{
                    fontSize: "12px", fontWeight: 700,
                    padding: "8px 20px",
                    background: "#0a0f1a",
                    color: "#10b981",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  Let's Talk
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
