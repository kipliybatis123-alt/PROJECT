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
    <section id="about" style={{ background: "#f5f5f5", paddingTop: "96px", paddingBottom: "96px" }} className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#707072" }}>
          About
        </p>
        <h2
          className="font-black uppercase"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.0, color: "#111111" }}
        >
          About Me
        </h2>

        <div style={{ borderTop: "1px solid #cacacb", marginTop: "48px" }} />

        <div className="grid md:grid-cols-2 gap-16 mt-12">

          <div>
            <p className="text-sm" style={{ color: "#39393b", lineHeight: 1.75 }}>
              I am an Electrical Engineering graduate with a strong focus on
              embedded systems, IoT, and AI-powered applications. My work
              combines computer vision, machine learning, and real-time systems
              to solve real-world engineering problems.
            </p>

            <p className="mt-5 text-sm" style={{ color: "#39393b", lineHeight: 1.75 }}>
              I have hands-on experience developing intelligent monitoring
              systems using YOLO-based computer vision for vehicle detection,
              speed estimation, and traffic analysis, integrated with web
              dashboards, databases, and physical display devices.
            </p>

            <div className="mt-10" style={{ borderTop: "1px solid #cacacb" }}>
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex justify-between items-center py-4"
                  style={{ borderBottom: "1px solid #cacacb" }}
                >
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#111111" }}>{skill.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#707072" }}>{skill.sub}</p>
                  </div>
                  <span style={{ color: "#cacacb", fontSize: "18px" }}>→</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ background: "#ffffff", padding: "32px", border: "none" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#707072" }}>
                Core Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-4 py-2"
                    style={{ background: "#f5f5f5", color: "#111111", borderRadius: "30px" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="mt-2 flex items-center justify-between px-6 py-5"
              style={{ background: "#111111" }}
            >
              <div>
                <p className="text-sm font-bold" style={{ color: "#ffffff" }}>Open to opportunities</p>
                <p className="text-xs mt-0.5" style={{ color: "#9e9ea0" }}>Full-time · Freelance · Collaboration</p>
              </div>
              <a href="#contact">
                <button
                  className="text-xs font-semibold px-5 py-2 transition-opacity hover:opacity-80"
                  style={{ background: "#ffffff", color: "#111111", borderRadius: "30px" }}
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
