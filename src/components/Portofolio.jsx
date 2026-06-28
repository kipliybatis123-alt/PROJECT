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
      style={{ background: "#f5f5f5", border: "none" }}
    >
      {item.video && (
        <div className="flex justify-center" style={{ padding: "24px 24px 0" }}>
          <div
            style={{
              width: "200px",
              height: "420px",
              borderRadius: "24px",
              border: "4px solid #111111",
              background: "#000000",
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
        <div className={fullWidth ? "flex-1 min-w-0" : ""}>
          <div style={{ background: "#e5e5e5", borderBottom: "1px solid #cacacb", padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#cacacb", display: "inline-block" }} />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#cacacb", display: "inline-block" }} />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#cacacb", display: "inline-block" }} />
            <div style={{ marginLeft: "8px", flex: 1, background: "#ffffff", border: "1px solid #cacacb", padding: "2px 12px", fontSize: "10px", color: "#9e9ea0" }}>
              pltu-monitor.local/dashboard
            </div>
          </div>
          <div style={{ overflow: "hidden", borderTop: "none" }}>
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
          className="font-bold uppercase"
          style={{ fontSize: fullWidth ? "20px" : "14px", lineHeight: 1.1, color: "#111111", letterSpacing: "-0.3px" }}
        >
          {item.title}
        </h3>

        <p className="mt-3" style={{ fontSize: "13px", color: "#707072", lineHeight: 1.6 }}>
          {item.desc}
        </p>

        {item.type === "mobile" && (
          <span
            className="inline-block mt-4 text-xs font-semibold px-4 py-1.5"
            style={{ background: "#111111", color: "#ffffff", borderRadius: "30px" }}
          >
            Flutter · Android App
          </span>
        )}

        {item.type === "dashboard" && (
          <span
            className="inline-block mt-4 text-xs font-semibold px-4 py-1.5"
            style={{ background: "#111111", color: "#ffffff", borderRadius: "30px" }}
          >
            HTML · CSS · JavaScript
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section id="portofolio" style={{ background: "#ffffff", paddingTop: "96px", paddingBottom: "96px" }} className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#707072" }}>
          Work
        </p>
        <h2
          className="font-black uppercase"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.0, color: "#111111" }}
        >
          Selected<br />Portofolio
        </h2>
        <p className="mt-4 text-sm" style={{ color: "#707072", maxWidth: "480px" }}>
          A collection of embedded systems, AI-driven applications, and real-time monitoring solutions.
        </p>

        <div className="mt-16 flex flex-col" style={{ gap: "2px" }}>
          {dashboardItem && renderCard(dashboardItem, "dashboard", true)}
          <div className="grid md:grid-cols-3" style={{ gap: "2px" }}>
            {otherItems.map((item, i) => renderCard(item, i, false))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portofolio;
