import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ShieldCheck, TrendingUp, BarChart3, ChevronDown } from "lucide-react";

/* ── animated counter ── */
const useCounter = (end, duration = 1800) => {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(ease * end));
      if (t < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [end, duration]);
  return val;
};

/* ── sparkline ── */
const Sparkline = ({ color = "var(--accent)" }) => {
  const pts = [18,24,16,28,22,30,20,34,26,38,30,42,36];
  const w = 120, h = 48;
  const min = Math.min(...pts), max = Math.max(...pts);
  const px = (i) => (i / (pts.length - 1)) * w;
  const py = (v) => h - ((v - min) / (max - min)) * (h - 8) - 4;
  const d = pts.map((v, i) => `${i === 0 ? "M" : "L"}${px(i)},${py(v)}`).join(" ");
  const fill = pts.map((v, i) => `${i === 0 ? "M" : "L"}${px(i)},${py(v)}`).join(" ")
    + ` L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 48 }}>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#sg)" />
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/* ── live ticker value ── */
const useTicker = (base, range, interval) => {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setV(b => parseFloat((b + (Math.random() - 0.48) * range).toFixed(2)));
    }, interval);
    return () => clearInterval(id);
  }, [base, range, interval]);
  return v;
};

const Hero = () => {
  const aum    = useCounter(4.8);
  const clients= useCounter(320);
  const returns= useCounter(28);
  const price  = useTicker(185.4, 0.8, 1400);
  const prev   = useRef(185.4);
  const isUp   = price >= prev.current;
  useEffect(() => { prev.current = price; }, [price]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay },
  });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0a1628 0%, #1e3a5f 55%, #0f2a4a 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* background grid pattern */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }} />
      {/* accent glow */}
      <div style={{
        position: "absolute", top: "-20%", right: "-5%",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="fin-container" style={{ flex: 1, display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", width: "100%" }}>

          {/* LEFT */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="fin-badge" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.15)" }}>
                <ShieldCheck size={12} /> Trusted by 320+ Institutional Clients
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 800, lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginTop: 24, marginBottom: 0,
            }}>
              Smart Capital.<br />
              <span style={{ color: "var(--accent-light)" }}>Intelligent</span><br />
              Growth.
            </motion.h1>

            <motion.p {...fadeUp(0.2)} style={{
              fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.65)",
              marginTop: 24, maxWidth: 460,
            }}>
              Finaleyas delivers institutional-grade portfolio management, risk analysis,
              and strategic financial advisory — empowering investors to achieve
              sustainable returns.
            </motion.p>

            <motion.div {...fadeUp(0.3)} style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
              <a href="#contact" className="fin-btn-primary" style={{ fontSize: 14, padding: "14px 30px" }}>
                Start Investing <ArrowRight size={16} />
              </a>
              <a href="#portofolio" className="fin-btn-outline" style={{
                color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.25)",
                fontSize: 14,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
              >
                View Portfolio
              </a>
            </motion.div>

            {/* stat row */}
            <motion.div {...fadeUp(0.4)} style={{
              display: "flex", gap: 32, marginTop: 48,
              paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)",
            }}>
              {[
                { value: `$${aum}B+`, label: "AUM" },
                { value: `${clients}+`,  label: "Clients" },
                { value: `${returns}%`,  label: "Avg. Annual Return" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>{value}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4, fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — dashboard card */}
          <motion.div {...fadeUp(0.25)} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* main chart card */}
            <div style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 20, padding: 28, backdropFilter: "blur(12px)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Portfolio Value
                  </div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", marginTop: 4 }}>
                    $2.84M
                  </div>
                </div>
                <span style={{
                  background: "rgba(34,197,94,0.15)", color: "#4ade80",
                  fontSize: 12, fontWeight: 700, padding: "5px 12px", borderRadius: 50,
                }}>
                  +18.4%
                </span>
              </div>
              <Sparkline color="var(--accent-light)" />
              <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                YTD Performance · Updated daily
              </div>
            </div>

            {/* two small cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>

              {/* live price */}
              <div style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 16, padding: 20, backdropFilter: "blur(12px)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <TrendingUp size={16} color="rgba(255,255,255,0.5)" />
                  <motion.span
                    key={isUp ? "up" : "dn"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ fontSize: 11, fontWeight: 700, color: isUp ? "#4ade80" : "#f87171" }}
                  >
                    {isUp ? "↑" : "↓"}
                  </motion.span>
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>FLYN · Finaleyas ETF</div>
                <motion.div
                  key={price.toFixed(2)}
                  initial={{ scale: 0.97 }}
                  animate={{ scale: 1 }}
                  style={{ fontSize: 22, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}
                >
                  ${price.toFixed(2)}
                </motion.div>
              </div>

              {/* risk rating */}
              <div style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 16, padding: 20, backdropFilter: "blur(12px)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                  <BarChart3 size={16} color="rgba(255,255,255,0.5)" />
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginBottom: 6 }}>Risk Score</div>
                <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} style={{
                      flex: 1, height: 6, borderRadius: 3,
                      background: i <= 3 ? "var(--accent-light)" : "rgba(255,255,255,0.12)",
                    }} />
                  ))}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#60a5fa" }}>Conservative</div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 28,
          color: "rgba(255,255,255,0.35)", gap: 6, fontSize: 11, fontWeight: 600,
          letterSpacing: "0.1em", textTransform: "uppercase",
        }}
      >
        Scroll <ChevronDown size={16} />
      </motion.div>

      {/* bottom curve */}
      <div style={{
        position: "absolute", bottom: -1, left: 0, right: 0,
        height: 64, background: "#ffffff",
        borderRadius: "60px 60px 0 0",
      }} />
    </section>
  );
};

export default Hero;
