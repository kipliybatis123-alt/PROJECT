const DashboardMockup = () => {
  return (
    <section style={{ background: "#111827", paddingTop: "96px", paddingBottom: "96px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>

        <div>
          <div className="flex items-center gap-2" style={{ marginBottom: "16px" }}>
            <div style={{ width: "4px", height: "16px", background: "#10b981", borderRadius: "2px" }} />
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#10b981" }}>
              Core Capability
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
            Embedded AI<br />&amp; Smart Systems
          </h2>

          <p style={{ marginTop: "24px", fontSize: "15px", color: "#6b7280", lineHeight: 1.7 }}>
            Designing intelligent embedded systems, computer vision pipelines,
            and real-time monitoring dashboards for industrial and smart-city
            applications.
          </p>

          <ul style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { icon: "⚡", text: "YOLOv26-based real-time detection" },
              { icon: "📡", text: "Jetson Nano & ESP32 / IoT integration" },
              { icon: "📊", text: "Live dashboard & analytics" },
              { icon: "🧠", text: "Edge AI optimization" },
            ].map((item) => (
              <li key={item.text} style={{
                display: "flex", alignItems: "center", gap: "12px",
                fontSize: "14px", fontWeight: 500, color: "#9ca3af",
                padding: "12px 16px",
                background: "#0d1829",
                border: "1px solid #1e2d40",
                borderRadius: "8px",
              }}>
                <span>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Browser chrome mockup */}
          <div style={{ border: "1px solid #1e2d40", borderRadius: "12px", overflow: "hidden" }}>
            <div
              className="flex items-center gap-2"
              style={{ padding: "10px 16px", background: "#0d1829", borderBottom: "1px solid #1e2d40" }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              <div style={{
                marginLeft: "8px", flex: 1,
                background: "#111827", border: "1px solid #1e2d40",
                padding: "3px 12px", fontSize: "10px", color: "#6b7280",
                borderRadius: "4px",
              }}>
                finance-monitor.local/dashboard
              </div>
            </div>
            <div style={{ background: "#0a0f1a" }}>
              <img
                src="/assets/traffic-monitoring.png"
                alt="Traffic Monitoring"
                className="w-full object-cover object-top"
                style={{ maxHeight: "280px" }}
              />
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 text-center"
              style={{ borderTop: "1px solid #1e2d40" }}
            >
              {[
                { value: "$2.4B", label: "Processed" },
                { value: "130+", label: "Clients" },
                { value: "98%", label: "Accuracy" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 0",
                    borderRight: i < 2 ? "1px solid #1e2d40" : "none",
                    background: "#0d1829",
                  }}
                >
                  <p style={{ fontSize: "18px", fontWeight: 800, color: "#10b981", fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</p>
                  <p style={{ fontSize: "11px", marginTop: "4px", color: "#6b7280" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "11px", fontWeight: 700,
                padding: "6px 16px",
                background: "#10b981",
                color: "#0a0f1a",
                borderRadius: "20px",
              }}
            >
              Real-Time Financial Intelligence Platform
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardMockup;
