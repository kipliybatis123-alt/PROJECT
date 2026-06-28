const portfolioItems = [
  {
    title: "Smart Traffic Monitoring",
    desc: "Embedded AI system for vehicle detection, speed estimation, and traffic analysis.",
  },
  {
    title: "Industrial IoT Dashboard",
    desc: "Real-time monitoring dashboard with sensor integration and data visualization.",
    image: "/assets/monitoring.png",
    type: "dashboard",
  },
  {
    title: "Computer Vision System",
    desc: "YOLO-based computer vision for object detection and intelligent monitoring.",
  },
  {
    title: "Android App Based on UMKM Business",
    desc: "Flutter-based Android application designed to support UMKM business operations.",
    video: "/assets/proyek/UMKM.mp4",
    type: "mobile",
  },
];

const Portofolio = () => {
  const dashboardItem = portfolioItems.find((item) => item.type === "dashboard");
  const otherItems = portfolioItems.filter((item) => item.type !== "dashboard");

  const renderCard = (item, i, fullWidth = false) => (
    <div
      key={i}
      className={`flex ${fullWidth && item.type === "dashboard" ? "flex-row gap-10 items-start" : "flex-col"}`}
      style={{
        background: "#111827",
        border: "1px solid #1e2d40",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {item.video && (
        <div className="flex justify-center" style={{ padding: "24px 24px 0" }}>
          <div
            style={{
              width: "200px",
              height: "420px",
              borderRadius: "24px",
              border: "4px solid #1e2d40",
              background: "#0a0f1a",
              overflow: "hidden",
            }}
          >
            <video
              src={item.video}
              autoPlay loop muted playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {item.type === "dashboard" && item.image && (
        <div className={fullWidth ? "flex-1 min-w-0" : ""} style={{ overflow: "hidden" }}>
          <div style={{
            background: "#0d1829", borderBottom: "1px solid #1e2d40",
            padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px",
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
            <div style={{
              marginLeft: "8px", flex: 1, background: "#111827",
              border: "1px solid #1e2d40", padding: "2px 12px",
              fontSize: "10px", color: "#6b7280", borderRadius: "4px",
            }}>
              finance-monitor.local/dashboard
            </div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover object-top"
              style={{ maxHeight: fullWidth ? "320px" : "200px" }}
            />
          </div>
        </div>
      )}

      <div
        className={fullWidth && item.type === "dashboard" ? "flex flex-col justify-center flex-shrink-0" : ""}
        style={{ padding: "24px", width: fullWidth && item.type === "dashboard" ? "260px" : "auto" }}
      >
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: fullWidth ? "20px" : "14px",
            lineHeight: 1.1,
            fontWeight: 700,
            color: "#f0f4ff",
            letterSpacing: "-0.3px",
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </h3>

        <p style={{ marginTop: "12px", fontSize: "13px", color: "#6b7280", lineHeight: 1.6 }}>
          {item.desc}
        </p>

        {item.type === "mobile" && (
          <span
            style={{
              display: "inline-block", marginTop: "16px",
              fontSize: "11px", fontWeight: 700,
              padding: "5px 14px",
              background: "#10b981",
              color: "#0a0f1a",
              borderRadius: "20px",
            }}
          >
            Flutter · Android App
          </span>
        )}

        {item.type === "dashboard" && (
          <span
            style={{
              display: "inline-block", marginTop: "16px",
              fontSize: "11px", fontWeight: 700,
              padding: "5px 14px",
              background: "#10b981",
              color: "#0a0f1a",
              borderRadius: "20px",
            }}
          >
            HTML · CSS · JavaScript
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section id="portofolio" style={{ background: "#0a0f1a", paddingTop: "96px", paddingBottom: "96px" }} className="scroll-mt-20">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        <div className="flex items-center gap-2" style={{ marginBottom: "16px" }}>
          <div style={{ width: "4px", height: "16px", background: "#10b981", borderRadius: "2px" }} />
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#10b981" }}>
            Work
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
          Selected<br />Portfolio
        </h2>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#6b7280", maxWidth: "480px" }}>
          A collection of embedded systems, AI-driven applications, and real-time monitoring solutions.
        </p>

        <div style={{ marginTop: "64px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {dashboardItem && renderCard(dashboardItem, "dashboard", true)}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
            {otherItems.map((item, i) => renderCard(item, i, false))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portofolio;
