import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const useRandomValue = (min, max, interval, decimals = 0) => {
  const [value, setValue] = useState(() =>
    parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
  );
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const tick = () => {
      setValue((old) => {
        setPrev(old);
        const delta = (Math.random() - 0.5) * (max - min) * 0.3;
        const next = Math.min(max, Math.max(min, old + delta));
        return parseFloat(next.toFixed(decimals));
      });
    };
    const jitter = interval + Math.random() * (interval * 0.4);
    const id = setInterval(tick, jitter);
    return () => clearInterval(id);
  }, [min, max, interval, decimals]);

  return { value, prev };
};

const useRandomBars = (count, interval) => {
  const [bars, setBars] = useState(() =>
    Array.from({ length: count }, () => Math.floor(Math.random() * 60 + 25))
  );
  useEffect(() => {
    const id = setInterval(() => {
      setBars((old) =>
        old.map((v) => {
          const delta = (Math.random() - 0.5) * 25;
          return Math.min(95, Math.max(15, Math.round(v + delta)));
        })
      );
    }, interval);
    return () => clearInterval(id);
  }, [count, interval]);
  return bars;
};

const AnimatedNumber = ({ value, decimals = 0 }) => {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef(null);

  useEffect(() => {
    const start = display;
    const end = value;
    const duration = 800;
    const startTime = performance.now();
    const step = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const current = start + (end - start) * ease;
      setDisplay(parseFloat(current.toFixed(decimals)));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value]);

  return <span>{display}</span>;
};

const RadarPulse = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-20">
    {[35, 65, 95].map((r, i) => (
      <motion.circle
        key={r} cx="100" cy="100" r={r}
        fill="none" stroke="#10b981" strokeWidth="0.8"
        animate={{ opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
      />
    ))}
    <motion.line
      x1="100" y1="100" x2="100" y2="5"
      stroke="#10b981" strokeWidth="1.2"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 100px" }}
    />
  </svg>
);

const LiveWave = ({ speed }) => {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let frame;
    const tick = () => { setPhase((p) => p + 0.06); frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const amplitude = 6 + ((speed - 30) / 20) * 6;
  const points = Array.from({ length: 13 }, (_, i) => {
    const x = (i / 12) * 120;
    const y = 15 + Math.sin(i * 0.9 + phase) * amplitude;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 120 30" className="w-full h-7">
      <polyline points={points} fill="none" stroke="#10b981" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const LiveBarChart = ({ bars }) => (
  <div className="flex items-end gap-1 h-10">
    {bars.map((h, i) => (
      <motion.div
        key={i} className="flex-1"
        style={{ backgroundColor: i % 2 === 0 ? "#10b981" : "#1e2d40" }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const Hero = () => {
  const speed = useRandomValue(30, 50, 2200, 1);
  const bars = useRandomBars(7, 2800);
  const cpu = useRandomValue(30, 88, 2500);
  const ram = useRandomValue(30, 75, 3100);
  const net = useRandomValue(45, 95, 1900);
  const isSpeedUp = speed.value >= (speed.prev ?? speed.value);

  const systemStats = [
    { label: "CPU", data: cpu },
    { label: "RAM", data: ram },
    { label: "NET", data: net },
  ];

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20" style={{ background: "#0a0f1a", minHeight: "100vh" }}>

      {/* Grid background pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Radial glow */}
      <div className="absolute" style={{
        top: "10%", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "500px",
        background: "radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Full-bleed hero image overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/webprof.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.04,
        }}
      />

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: "#111827",
        borderRadius: "80px 80px 0 0",
      }} />

      <div className="relative" style={{ maxWidth: "1280px", margin: "0 auto", padding: "144px 24px 208px" }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT TEXT */}
          <motion.div
            style={{ maxWidth: "560px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#10b981" }}>
                Intelligent Financial Systems · AI · Real-Time Analytics
              </p>
            </div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(48px, 6.5vw, 88px)",
                lineHeight: 0.95,
                fontWeight: 800,
                color: "#f0f4ff",
                letterSpacing: "-2px",
              }}
            >
              Smart<br />
              <span style={{ color: "#10b981" }}>Financial</span><br />
              Intelligence
            </h1>

            <p style={{ marginTop: "32px", fontSize: "16px", color: "#6b7280", lineHeight: 1.7, maxWidth: "420px" }}>
              Build scalable, secure, and modern financial technology solutions
              with professional engineering and data-driven innovation.
            </p>

            <div style={{ marginTop: "40px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://drive.google.com/file/d/1ulyG-vX8mGfAt61JwukGveJJFpEDBZRr/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
              >
                <button
                  className="text-sm font-semibold transition-all"
                  style={{
                    background: "#10b981",
                    color: "#0a0f1a",
                    borderRadius: "8px",
                    padding: "12px 28px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                  onMouseEnter={e => e.target.style.background = "#059669"}
                  onMouseLeave={e => e.target.style.background = "#10b981"}
                >
                  Download CV
                </button>
              </a>
              <a href="#contact">
                <button
                  className="text-sm font-semibold transition-all"
                  style={{
                    background: "transparent",
                    color: "#f0f4ff",
                    borderRadius: "8px",
                    padding: "12px 28px",
                    border: "1px solid #1e2d40",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = "#10b981"; e.target.style.color = "#10b981"; }}
                  onMouseLeave={e => { e.target.style.borderColor = "#1e2d40"; e.target.style.color = "#f0f4ff"; }}
                >
                  Contact Me
                </button>
              </a>
            </div>

            {/* Stats row */}
            <div style={{ marginTop: "48px", display: "flex", gap: "32px", paddingTop: "32px", borderTop: "1px solid #1e2d40" }}>
              {[
                { value: "$2.4B", label: "Assets Managed" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "0.2ms", label: "Latency" },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontSize: "20px", fontWeight: 800, color: "#f0f4ff", fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</p>
                  <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "2px" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            className="relative"
            style={{ width: "100%", maxWidth: "420px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main panel */}
            <div style={{ background: "#111827", border: "1px solid #1e2d40", borderRadius: "16px", overflow: "hidden" }}>
              {/* Top bar */}
              <div
                className="flex items-center gap-2"
                style={{ padding: "12px 16px", borderBottom: "1px solid #1e2d40", background: "#0d1829" }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#10b981" }}
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280" }}>
                  FINANCE Command Center
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span style={{ fontSize: "9px", fontWeight: 600, color: "#10b981" }}>● LIVE</span>
                </div>
              </div>

              {/* Body grid */}
              <div style={{ padding: "12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>

                {/* Sensor Grid */}
                <div className="relative overflow-hidden flex items-center justify-center" style={{
                  background: "#0d1829",
                  border: "1px solid #1e2d40",
                  borderRadius: "10px",
                  padding: "24px 16px",
                }}>
                  <RadarPulse />
                  <div className="relative z-10 text-center">
                    <p style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px", color: "#6b7280" }}>Portfolio</p>
                    <p style={{ fontSize: "20px", fontWeight: 800, color: "#f0f4ff" }}>
                      24<span style={{ fontSize: "12px", color: "#6b7280" }}>/24</span>
                    </p>
                    <p style={{ fontSize: "9px", marginTop: "2px", color: "#6b7280" }}>assets tracked</p>
                  </div>
                </div>

                {/* Vehicle Speed → Market Price */}
                <div className="flex flex-col justify-between" style={{
                  background: "#0d1829",
                  border: "1px solid #1e2d40",
                  borderRadius: "10px",
                  padding: "12px",
                }}>
                  <p style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280" }}>BTC/USD</p>
                  <div>
                    <p style={{ fontSize: "22px", fontWeight: 800, color: "#f0f4ff", fontVariantNumeric: "tabular-nums" }}>
                      $<AnimatedNumber value={speed.value * 1400} decimals={0} />
                    </p>
                    <LiveWave speed={speed.value} />
                  </div>
                  <motion.p
                    key={isSpeedUp ? "up" : "down"}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: "9px", fontWeight: 700, color: isSpeedUp ? "#10b981" : "#ef4444" }}
                  >
                    {isSpeedUp ? "↑" : "↓"} {(Math.abs(speed.value - (speed.prev ?? speed.value)) * 1.4).toFixed(1)}%
                  </motion.p>
                </div>

                {/* Traffic Flow → Volume */}
                <div className="flex flex-col justify-between" style={{
                  background: "#0d1829",
                  border: "1px solid #1e2d40",
                  borderRadius: "10px",
                  padding: "12px",
                }}>
                  <div className="flex justify-between items-start">
                    <p style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280" }}>Volume 24h</p>
                    <motion.span
                      key={bars[3]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ fontSize: "9px", fontWeight: 700, color: "#10b981" }}
                    >
                      ${bars[3]}M
                    </motion.span>
                  </div>
                  <LiveBarChart bars={bars} />
                  <p style={{ fontSize: "9px", color: "#6b7280" }}>million USD / day</p>
                </div>

                {/* System */}
                <div className="flex flex-col gap-2" style={{
                  background: "#0d1829",
                  border: "1px solid #1e2d40",
                  borderRadius: "10px",
                  padding: "12px",
                }}>
                  <p style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280" }}>Performance</p>
                  {systemStats.map(({ label, data }) => (
                    <div key={label}>
                      <div className="flex justify-between mb-0.5">
                        <span style={{ fontSize: "9px", color: "#6b7280" }}>{label}</span>
                        <motion.span
                          key={data.value}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          style={{ fontSize: "9px", fontWeight: 700, color: "#10b981", fontVariantNumeric: "tabular-nums" }}
                        >
                          <AnimatedNumber value={data.value} />%
                        </motion.span>
                      </div>
                      <div style={{ height: "3px", background: "#1e2d40", borderRadius: "2px" }}>
                        <motion.div
                          style={{ background: "#10b981", height: "3px", borderRadius: "2px" }}
                          animate={{ width: `${data.value}%` }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute flex items-center gap-2"
              style={{
                top: "-36px", right: "16px",
                background: "#10b981",
                color: "#0a0f1a",
                borderRadius: "20px",
                padding: "8px 14px",
              }}
            >
              <span style={{ fontSize: "14px" }}>🤖</span>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, lineHeight: 1 }}>AI Risk Engine</p>
                <p style={{ fontSize: "9px", marginTop: "2px", color: "#065f46" }}>Model v26 active</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute flex items-center gap-2"
              style={{
                right: "-36px", top: "33%",
                background: "#111827",
                border: "1px solid #1e2d40",
                color: "#f0f4ff",
                borderRadius: "20px",
                padding: "8px 14px",
              }}
            >
              <span style={{ fontSize: "14px" }}>📡</span>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, lineHeight: 1 }}>Data Feeds</p>
                <p style={{ fontSize: "9px", marginTop: "2px", color: "#6b7280" }}>24 connected</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute flex items-center gap-2"
              style={{
                bottom: "-32px", left: "24px",
                background: "#111827",
                border: "1px solid #1e2d40",
                color: "#f0f4ff",
                borderRadius: "20px",
                padding: "8px 14px",
              }}
            >
              <span style={{ fontSize: "14px" }}>⚡</span>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, lineHeight: 1 }}>Real-Time Data</p>
                <motion.p
                  key={Math.round(net.value)}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontSize: "9px", marginTop: "2px", color: "#6b7280" }}
                >
                  {Math.round(8 + (net.value / 95) * 20)}ms latency
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
