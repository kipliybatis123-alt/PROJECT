const DashboardMockup = () => {
  return (
    <section style={{ background: "#ffffff", paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#707072" }}>
            Core Capability
          </p>
          <h2
            className="font-black uppercase"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.0, color: "#111111" }}
          >
            Embedded AI<br />& Smart Systems
          </h2>

          <p className="mt-6 text-base" style={{ color: "#707072", lineHeight: 1.6 }}>
            Designing intelligent embedded systems, computer vision pipelines,
            and real-time monitoring dashboards for industrial and smart-city
            applications.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "⚡  YOLOv26-based real-time detection",
              "📡  Jetson Nano & ESP32 / IoT integration",
              "📊  Live dashboard & analytics",
              "🧠  Edge AI optimization",
            ].map((item) => (
              <li key={item} className="text-sm font-medium" style={{ color: "#39393b" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Browser chrome mockup */}
          <div style={{ border: "1px solid #cacacb" }}>
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{ background: "#f5f5f5", borderBottom: "1px solid #cacacb" }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#cacacb" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#cacacb" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#cacacb" }} />
              <div
                className="ml-2 flex-1 px-3 py-0.5 text-[10px]"
                style={{ background: "#ffffff", border: "1px solid #cacacb", color: "#707072" }}
              >
                pltu-monitor.local/dashboard
              </div>
            </div>
            <div style={{ background: "#ffffff" }}>
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
              style={{ borderTop: "1px solid #cacacb" }}
            >
              {[
                { value: "25 km/h", label: "Avg Speed" },
                { value: "130", label: "Vehicles" },
                { value: "98%", label: "Accuracy" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="py-5"
                  style={{ borderRight: i < 2 ? "1px solid #cacacb" : "none" }}
                >
                  <p className="text-lg font-bold" style={{ color: "#111111" }}>{stat.value}</p>
                  <p className="text-xs mt-1" style={{ color: "#707072" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <span
              className="inline-block text-xs font-semibold px-4 py-2"
              style={{ background: "#111111", color: "#ffffff", borderRadius: "30px" }}
            >
              Vehicle Speed Monitoring Traffic System
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardMockup;
