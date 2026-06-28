import { motion } from "framer-motion";
import {
  BarChart3, PieChart, LineChart, Shield, Briefcase,
  TrendingUp, Users, Award, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <BarChart3 size={22} />,
    title: "Portfolio Management",
    desc: "Diversified, institutional-grade portfolios crafted for long-term alpha generation and risk-adjusted returns.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Equity Research",
    desc: "In-depth fundamental and quantitative analysis across global equity markets, powered by proprietary models.",
  },
  {
    icon: <Shield size={22} />,
    title: "Risk Advisory",
    desc: "Comprehensive risk identification, stress testing, and hedging strategies to protect your capital.",
  },
  {
    icon: <PieChart size={22} />,
    title: "Asset Allocation",
    desc: "Strategic asset allocation across equities, fixed income, alternatives, and real assets for optimal diversification.",
  },
  {
    icon: <Briefcase size={22} />,
    title: "Private Wealth",
    desc: "Bespoke wealth management solutions including estate planning, tax optimization, and generational transfer.",
  },
  {
    icon: <LineChart size={22} />,
    title: "Market Intelligence",
    desc: "Real-time market data, economic research, and proprietary signals delivered through our analytics platform.",
  },
];

const stats = [
  { icon: <TrendingUp size={20} />, value: "$4.8B+", label: "Assets Under Management" },
  { icon: <Users size={20} />,      value: "320+",   label: "Institutional Clients"    },
  { icon: <Award size={20} />,      value: "18 yrs", label: "Market Experience"         },
  { icon: <Shield size={20} />,     value: "99.7%",  label: "Client Retention Rate"     },
];

const DashboardMockup = () => {
  const card = (delay) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: [0.4,0,0.2,1], delay },
  });

  return (
    <>
      {/* ─── Services Section ─── */}
      <section id="services" className="fin-section" style={{ background: "#ffffff" }}>
        <div className="fin-container">
          <motion.div {...card(0)} style={{ maxWidth: 560, marginBottom: 56 }}>
            <div className="fin-eyebrow">What We Offer</div>
            <h2 className="fin-h2">Comprehensive Financial Services</h2>
            <p className="fin-body" style={{ marginTop: 16 }}>
              From portfolio construction to risk management, our suite of services
              covers every dimension of sophisticated investing.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="responsive-grid-3">
            {services.map((svc, i) => (
              <motion.div key={i} {...card(i * 0.07)} className="fin-card" style={{ cursor: "default" }}>
                <div className="fin-icon" style={{ marginBottom: 20 }}>{svc.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)" }}>
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats Band ─── */}
      <section style={{ background: "var(--navy)", padding: "56px 0" }}>
        <div className="fin-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }} className="responsive-grid-4">
            {stats.map((s, i) => (
              <motion.div key={i} {...card(i * 0.08)} style={{
                textAlign: "center", padding: "24px 16px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(37,99,235,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent-light)", margin: "0 auto 12px",
                }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 34, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .responsive-grid-3 { grid-template-columns: 1fr !important; }
          .responsive-grid-4 { grid-template-columns: 1fr 1fr !important; }
          .responsive-grid-4 > div { border-right: none !important; }
        }
      `}</style>
    </>
  );
};

export default DashboardMockup;
