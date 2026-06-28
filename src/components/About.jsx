import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, TrendingUp, Users, Globe, BarChart2 } from "lucide-react";

const values = [
  {
    icon: <TrendingUp size={20} />,
    title: "Performance Driven",
    desc: "We measure everything by your risk-adjusted returns, not short-term noise.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Fiduciary Standard",
    desc: "We are legally bound to act in your best interest — always, without exception.",
  },
  {
    icon: <Globe size={20} />,
    title: "Global Perspective",
    desc: "Our research spans 45 countries and 12 asset classes for true diversification.",
  },
  {
    icon: <BarChart2 size={20} />,
    title: "Evidence-Based",
    desc: "Every allocation decision is backed by rigorous quantitative and fundamental analysis.",
  },
];

const expertise = [
  "Long/Short Equity", "Fixed Income Credit", "Macro Strategy", "Private Credit",
  "Systematic Quant", "ESG Integration", "Derivatives Overlay", "Real Assets",
  "FX Hedging", "Emerging Markets", "Alternative Risk Premia", "Factor Investing",
];

const FadeIn = ({ children, delay = 0, style = {} }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, ease: [0.4,0,0.2,1], delay }}
    style={style}
  >
    {children}
  </motion.div>
);

const About = () => (
  <>
    {/* ─── About Section ─── */}
    <section id="about" className="fin-section" style={{ background: "var(--bg-section)" }}>
      <div className="fin-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="responsive-about">

          {/* LEFT */}
          <FadeIn>
            <div className="fin-eyebrow">About Finaleyas</div>
            <h2 className="fin-h2" style={{ marginBottom: 20 }}>
              Eighteen Years of Disciplined Capital Stewardship
            </h2>
            <p className="fin-body" style={{ marginBottom: 16 }}>
              Founded in 2006, Finaleyas is an independent investment management firm
              serving family offices, institutional investors, and high-net-worth
              individuals across APAC, EMEA, and the Americas.
            </p>
            <p className="fin-body" style={{ marginBottom: 32 }}>
              Our philosophy is simple: protect capital first, grow it second. We combine
              rigorous fundamental research with systematic risk management to construct
              portfolios designed for all market conditions.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 36 }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  display: "flex", gap: 16, padding: "18px 0",
                  borderBottom: "1px solid var(--border)",
                  alignItems: "flex-start",
                }}>
                  <div className="fin-icon" style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0 }}>
                    {v.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "var(--navy)", marginBottom: 4 }}>{v.title}</div>
                    <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="fin-btn-primary">
              Learn More <ArrowRight size={15} />
            </a>
          </FadeIn>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <FadeIn delay={0.15}>
              {/* expertise cloud */}
              <div className="fin-card" style={{ borderRadius: "var(--radius-xl)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>
                  Areas of Expertise
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {expertise.map((tag) => (
                    <span key={tag} className="fin-badge">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.22}>
              {/* open to mandate */}
              <div style={{
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                borderRadius: "var(--radius-xl)", padding: "32px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Accepting New Mandates
                  </span>
                </div>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#ffffff", lineHeight: 1.5, marginBottom: 20 }}>
                  Minimum $100K investment. Onboarding in 5 business days.
                </p>
                <a href="#contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.12)", color: "#ffffff",
                  fontSize: 13, fontWeight: 600, padding: "11px 22px",
                  borderRadius: 50, textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
                >
                  Schedule a Call <ArrowRight size={14} />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              {/* trust badges */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "SEC Registered", sub: "Investment Adviser" },
                  { label: "FCA Authorised", sub: "UK Regulatory Body"  },
                  { label: "ISO 27001",        sub: "Data Security"       },
                  { label: "CFA Institute",    sub: "Member Firm"         },
                ].map((b, i) => (
                  <div key={i} style={{
                    background: "#ffffff", border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)", padding: "14px 16px",
                  }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)" }}>{b.label}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{b.sub}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>

    {/* ─── CTA Section ─── */}
    <section className="fin-section" style={{ background: "#ffffff" }}>
      <div className="fin-container">
        <FadeIn>
          <div className="fin-cta-section">
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="fin-eyebrow" style={{ justifyContent: "center", color: "rgba(255,255,255,0.7)" }}>
                Ready to Begin?
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.1 }}>
                Start Growing Your Wealth Today
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 460, margin: "0 auto 36px", lineHeight: 1.7 }}>
                Speak with a Finaleyas advisor and receive a complimentary portfolio
                analysis — no commitment required.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="#contact" className="fin-btn-primary" style={{
                  background: "#ffffff", color: "var(--navy)",
                  padding: "15px 32px",
                }}>
                  Book a Free Consultation <ArrowRight size={16} />
                </a>
                <a href="#portofolio" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "rgba(255,255,255,0.8)",
                  fontSize: 14, fontWeight: 600, padding: "14px 28px",
                  borderRadius: 50, textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                }}>
                  Explore Strategies
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    <style>{`
      @media (max-width: 860px) {
        .responsive-about { grid-template-columns: 1fr !important; gap: 40px !important; }
      }
    `}</style>
  </>
);

export default About;
