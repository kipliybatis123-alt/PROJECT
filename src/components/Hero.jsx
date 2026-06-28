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
        fill="none" stroke="#111111" strokeWidth="0.8"
        animate={{ opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
      />
    ))}
    <motion.line
      x1="100" y1="100" x2="100" y2="5"
      stroke="#111111" strokeWidth="1.2"
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
      <polyline points={points} fill="none" stroke="#111111" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const LiveBarChart = ({ bars }) => (
  <div className="flex items-end gap-1 h-10">
    {bars.map((h, i) => (
      <motion.div
        key={i} className="flex-1"
        style={{ backgroundColor: i % 2 === 0 ? "#111111" : "#cacacb" }}
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
    <section id="home" className="relative overflow-hidden scroll-mt-20" style={{ background: "#111111", minHeight: "100vh" }}>

      {/* Full-bleed hero image overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/webprof.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.18,
        }}
      />

      {/* Bottom white curve */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "#ffffff", borderRadius: "80px 80px 0 0" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-52 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT TEXT — Nike campaign lockup */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#707072" }}>
            Full-Stack Engineer · IoT · AI Systems
          </p>
          <h1
            className="font-black uppercase leading-none"
            style={{
              fontSize: "clamp(52px, 7vw, 96px)",
              lineHeight: 0.9,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            Designing<br />
            Smart<br />
            Systems
          </h1>
          <p className="mt-8 text-base" style={{ color: "#9e9ea0", maxWidth: "440px" }}>
            Build scalable, secure, and modern technology solutions
            with professional engineering and innovation mindset.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1ulyG-vX8mGfAt61JwukGveJJFpEDBZRr/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
            >
              <button
                className="text-sm font-semibold px-8 py-3 transition-opacity hover:opacity-80"
                style={{ background: "#ffffff", color: "#111111", borderRadius: "30px" }}
              >
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button
                className="text-sm font-semibold px-8 py-3 transition-opacity hover:opacity-70"
                style={{ background: "transparent", color: "#ffffff", borderRadius: "30px", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                Contact Me
              </button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT PANEL — flat Nike card */}
        <motion.div
          className="relative w-[300px] sm:w-[420px] lg:w-[480px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {/* Main panel */}
          <div style={{ background: "#f5f5f5", borderRadius: "0px", border: "none" }}>
            {/* Top bar */}
            <div
              className="flex items-center gap-2 px-5 py-3"
              style={{ borderBottom: "1px solid #cacacb", background: "#ffffff" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "#111111" }} />
              <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "#707072" }}>
                IoT Command Center
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#007d48" }}
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="text-[9px] font-semibold" style={{ color: "#007d48" }}>LIVE</span>
              </div>
            </div>

            {/* Body grid */}
            <div className="p-4 grid grid-cols-2 gap-3">

              {/* Sensor Grid */}
              <div className="relative overflow-hidden flex items-center justify-center" style={{ background: "#ffffff", border: "1px solid #e5e5e5", padding: "24px 16px" }}>
                <RadarPulse />
                <div className="relative z-10 text-center">
                  <p className="text-[9px] font-semibold tracking-widest uppercase mb-1" style={{ color: "#707072" }}>Sensor Grid</p>
                  <p className="text-xl font-bold" style={{ color: "#111111" }}>
                    24<span className="text-xs" style={{ color: "#9e9ea0" }}>/24</span>
                  </p>
                  <p className="text-[9px] mt-0.5" style={{ color: "#9e9ea0" }}>nodes online</p>
                </div>
              </div>

              {/* Vehicle Speed */}
              <div className="flex flex-col justify-between p-3" style={{ background: "#ffffff", border: "1px solid #e5e5e5" }}>
                <p className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: "#707072" }}>Vehicle Speed</p>
                <div>
                  <p className="text-2xl font-bold tabular-nums" style={{ color: "#111111" }}>
                    <AnimatedNumber value={speed.value} decimals={1} />
                    <span className="text-sm font-normal" style={{ color: "#9e9ea0" }}> km/h</span>
                  </p>
                  <LiveWave speed={speed.value} />
                </div>
                <motion.p
                  key={isSpeedUp ? "up" : "down"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[9px] font-semibold"
                  style={{ color: isSpeedUp ? "#007d48" : "#d30005" }}
                >
                  {isSpeedUp ? "↑" : "↓"} {Math.abs(speed.value - (speed.prev ?? speed.value)).toFixed(1)} km/h
                </motion.p>
              </div>

              {/* Traffic Flow */}
              <div className="flex flex-col justify-between p-3" style={{ background: "#ffffff", border: "1px solid #e5e5e5" }}>
                <div className="flex justify-between items-start">
                  <p className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: "#707072" }}>Traffic Flow</p>
                  <motion.span
                    key={bars[3]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[9px] font-mono font-semibold"
                    style={{ color: "#111111" }}
                  >
                    {bars[3]} v/h
                  </motion.span>
                </div>
                <LiveBarChart bars={bars} />
                <p className="text-[9px]" style={{ color: "#9e9ea0" }}>vehicles / hour</p>
              </div>

              {/* System */}
              <div className="flex flex-col gap-2 p-3" style={{ background: "#ffffff", border: "1px solid #e5e5e5" }}>
                <p className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: "#707072" }}>System</p>
                {systemStats.map(({ label, data }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[9px] font-medium" style={{ color: "#707072" }}>{label}</span>
                      <motion.span
                        key={data.value}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[9px] font-semibold tabular-nums"
                        style={{ color: "#111111" }}
                      >
                        <AnimatedNumber value={data.value} />%
                      </motion.span>
                    </div>
                    <div className="h-1" style={{ background: "#f5f5f5" }}>
                      <motion.div
                        className="h-1"
                        style={{ background: "#111111" }}
                        animate={{ width: `${data.value}%` }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating chips — Nike pill style */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 right-4 flex items-center gap-2 px-4 py-2"
            style={{ background: "#111111", color: "#ffffff", borderRadius: "30px" }}
          >
            <span className="text-base">🤖</span>
            <div>
              <p className="text-[11px] font-bold leading-none">AI Computer Vision</p>
              <p className="text-[9px] mt-0.5" style={{ color: "#9e9ea0" }}>YOLO v26 active</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-8 top-1/3 flex items-center gap-2 px-4 py-2"
            style={{ background: "#111111", color: "#ffffff", borderRadius: "30px" }}
          >
            <span className="text-base">📡</span>
            <div>
              <p className="text-[11px] font-bold leading-none">IoT Device</p>
              <p className="text-[9px] mt-0.5" style={{ color: "#9e9ea0" }}>24 connected</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 left-6 flex items-center gap-2 px-4 py-2"
            style={{ background: "#111111", color: "#ffffff", borderRadius: "30px" }}
          >
            <span className="text-base">⚡</span>
            <div>
              <p className="text-[11px] font-bold leading-none">Real-Time Data</p>
              <motion.p
                key={Math.round(net.value)}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[9px] mt-0.5"
                style={{ color: "#9e9ea0" }}
              >
                {Math.round(8 + (net.value / 95) * 20)}ms latency
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
