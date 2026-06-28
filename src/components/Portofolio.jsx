import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Star, Quote, ChevronDown } from "lucide-react";

/* ── Portfolio / Case Studies ── */
const portfolioItems = [
  {
    tag: "Equity Fund",
    title: "Global Growth Equity",
    desc: "A concentrated portfolio of 25–35 high-conviction global equities, delivering 32% annualised return over 5 years.",
    return: "+32%",
    aum: "$640M",
    period: "5-Year",
    color: "#2563eb",
  },
  {
    tag: "Fixed Income",
    title: "IG Credit Strategy",
    desc: "Investment-grade corporate bond ladder optimised for duration and credit spread, preserving capital through rate cycles.",
    return: "+11%",
    aum: "$1.2B",
    period: "3-Year",
    color: "#0891b2",
  },
  {
    tag: "Multi-Asset",
    title: "Balanced Allocation",
    desc: "Dynamic 60/40 allocation enhanced with alternatives overlay, achieving risk-adjusted Sharpe ratio of 1.62.",
    return: "+22%",
    aum: "$880M",
    period: "4-Year",
    color: "#7c3aed",
  },
  {
    tag: "Private Equity",
    title: "Growth Capital Fund III",
    desc: "Late-stage venture and growth equity targeting fintech and SaaS sectors across South-East Asia.",
    return: "+48%",
    aum: "$320M",
    period: "6-Year",
    color: "#059669",
  },
];

/* ── Pricing ── */
const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    desc: "For individual investors seeking professional guidance.",
    features: [
      "Up to $250K AUM",
      "Quarterly portfolio review",
      "Basic risk assessment",
      "Email support",
      "Market newsletter",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$1,999",
    period: "/month",
    desc: "For high-net-worth clients requiring active management.",
    features: [
      "Up to $5M AUM",
      "Monthly portfolio review",
      "Advanced risk modelling",
      "Dedicated advisor",
      "Priority access",
      "Tax optimisation",
    ],
    featured: true,
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    desc: "Bespoke solutions for family offices and institutions.",
    features: [
      "Unlimited AUM",
      "Daily oversight",
      "Full risk suite",
      "C-level access",
      "Custom reporting",
      "White-glove service",
    ],
    featured: false,
  },
];

/* ── Team ── */
const team = [
  { initials: "JW", name: "James Whitmore", role: "Chief Investment Officer", exp: "22 yrs" },
  { initials: "SA", name: "Sarah Adeyemi",  role: "Head of Risk",             exp: "15 yrs" },
  { initials: "ML", name: "Marcus Liu",     role: "Portfolio Manager",         exp: "12 yrs" },
  { initials: "EP", name: "Elena Petrov",   role: "Research Director",         exp: "18 yrs" },
];

/* ── Testimonials ── */
const testimonials = [
  {
    quote: "Finaleyas transformed our endowment strategy. Their disciplined approach to risk-adjusted returns has consistently outperformed our benchmarks.",
    name: "David Chen",
    title: "CIO, Meridian Endowment Fund",
    rating: 5,
  },
  {
    quote: "The level of personalisation and transparency we received was exceptional. We always knew exactly where our capital was and why.",
    name: "Amina Rauf",
    title: "CFO, Rauf Family Office",
    rating: 5,
  },
  {
    quote: "Their equity research team uncovered opportunities we would never have identified independently. Our portfolio is stronger for it.",
    name: "Thomas Bergmann",
    title: "Head of Investments, Bergmann Capital",
    rating: 5,
  },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "What is the minimum investment amount?",
    a: "Our Starter plan supports portfolios from $100,000. For our Professional and Institutional tiers, minimum AUM is $1M and $20M respectively. We can discuss custom arrangements for strategic relationships.",
  },
  {
    q: "How is my capital protected?",
    a: "Client assets are held in segregated custodial accounts at tier-1 prime brokers, fully separated from Finaleyas operating capital. We maintain comprehensive professional indemnity and cyber insurance.",
  },
  {
    q: "What fee structure do you use?",
    a: "We offer transparent, flat management fees plus an optional performance fee structure aligned with your success. No hidden charges — all fees are detailed in your IMA before onboarding.",
  },
  {
    q: "How often will I receive performance reports?",
    a: "All clients receive monthly performance reports and quarterly strategy reviews. Institutional clients receive daily reporting via our secure client portal and direct API access.",
  },
  {
    q: "Do you offer ESG or sustainable investing options?",
    a: "Yes. We maintain dedicated ESG-screened strategies across equity, fixed income, and multi-asset mandates, aligned to SFDR Article 8 and 9 classifications.",
  },
];

/* ── Blog ── */
const posts = [
  {
    tag: "Market Outlook",
    date: "Jun 2026",
    title: "Navigating Rate Cycles: A Framework for Fixed Income Allocation",
    excerpt: "With central bank policy diverging across major economies, we examine how to position bond portfolios for volatility ahead.",
    readTime: "7 min",
    color: "#2563eb",
  },
  {
    tag: "Research",
    date: "May 2026",
    title: "The Compounding Premium: Why Quality Equities Outperform Over Decades",
    excerpt: "Our quantitative study of 3,000 global stocks reveals the persistent return advantage of high-return-on-equity businesses.",
    readTime: "10 min",
    color: "#7c3aed",
  },
  {
    tag: "Risk Management",
    date: "Apr 2026",
    title: "Tail Risk Hedging Without Sacrificing Returns",
    excerpt: "We explore cost-efficient options overlays and alternative risk premia strategies that protect downside without drag.",
    readTime: "8 min",
    color: "#059669",
  },
];

const FadeCard = ({ children, delay = 0, style = {} }) => (
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

const Portofolio = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ─── Portfolio / Case Studies ─── */}
      <section id="portofolio" className="fin-section" style={{ background: "var(--bg-section)" }}>
        <div className="fin-container">
          <FadeCard>
            <div className="fin-eyebrow">Our Track Record</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
              <h2 className="fin-h2" style={{ maxWidth: 440, marginBottom: 0 }}>
                Selected Investment Strategies
              </h2>
              <a href="#contact" className="fin-btn-outline" style={{ flexShrink: 0 }}>
                View All <ArrowUpRight size={15} />
              </a>
            </div>
          </FadeCard>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="responsive-grid-2">
            {portfolioItems.map((item, i) => (
              <FadeCard key={i} delay={i * 0.08}>
                <div className="fin-card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <span className="fin-badge" style={{
                      background: `${item.color}14`, color: item.color,
                    }}>
                      {item.tag}
                    </span>
                    <span style={{
                      fontSize: 22, fontWeight: 800, color: "#22c55e", letterSpacing: "-0.02em",
                    }}>
                      {item.return}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 24 }}>
                    {item.desc}
                  </p>
                  <div style={{
                    display: "flex", gap: 24, paddingTop: 20,
                    borderTop: "1px solid var(--border)",
                  }}>
                    <div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>AUM</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)" }}>{item.aum}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Period</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)" }}>{item.period}</div>
                    </div>
                  </div>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="fin-section" style={{ background: "#ffffff" }}>
        <div className="fin-container">
          <FadeCard style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="fin-eyebrow" style={{ justifyContent: "center" }}>Transparent Pricing</div>
            <h2 className="fin-h2" style={{ maxWidth: 440, margin: "0 auto" }}>
              Simple, Aligned Fee Structure
            </h2>
            <p className="fin-body" style={{ maxWidth: 460, margin: "16px auto 0" }}>
              No hidden charges. No conflicts of interest. Fees that scale with your success.
            </p>
          </FadeCard>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }} className="responsive-grid-3">
            {plans.map((plan, i) => (
              <FadeCard key={i} delay={i * 0.1}>
                <div className="fin-pricing" style={{ height: "100%", ...(plan.featured ? { background: "var(--navy)", borderColor: "var(--navy)" } : {}) }}>
                  {plan.featured && (
                    <div style={{
                      background: "var(--accent)", color: "#fff",
                      fontSize: 11, fontWeight: 700, padding: "4px 14px",
                      borderRadius: 50, display: "inline-block", marginBottom: 20,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ fontSize: 14, fontWeight: 600, color: plan.featured ? "rgba(255,255,255,0.6)" : "var(--text-secondary)", marginBottom: 8 }}>
                    {plan.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                    <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.03em", color: plan.featured ? "#ffffff" : "var(--navy)" }}>
                      {plan.price}
                    </span>
                    <span style={{ fontSize: 14, color: plan.featured ? "rgba(255,255,255,0.5)" : "var(--text-muted)" }}>{plan.period}</span>
                  </div>
                  <p style={{ fontSize: 14, color: plan.featured ? "rgba(255,255,255,0.6)" : "var(--text-secondary)", lineHeight: 1.6, marginBottom: 28 }}>
                    {plan.desc}
                  </p>
                  <div style={{ borderTop: plan.featured ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--border)", paddingTop: 24, marginBottom: 28 }}>
                    {plan.features.map((f, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "center" }}>
                        <div style={{
                          width: 18, height: 18, borderRadius: "50%",
                          background: plan.featured ? "rgba(59,130,246,0.25)" : "var(--accent-pale)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 10 10">
                            <polyline points="2,5 4,7.5 8,3" fill="none" stroke="var(--accent-light)" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </div>
                        <span style={{ fontSize: 14, color: plan.featured ? "rgba(255,255,255,0.8)" : "var(--text-secondary)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className={plan.featured ? "fin-btn-primary" : "fin-btn-outline"} style={{ width: "100%", justifyContent: "center" }}>
                    Get Started
                  </a>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section id="team" className="fin-section" style={{ background: "var(--bg-section)" }}>
        <div className="fin-container">
          <FadeCard style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
            <div>
              <div className="fin-eyebrow">Leadership</div>
              <h2 className="fin-h2" style={{ maxWidth: 360 }}>Meet the Team</h2>
            </div>
            <p className="fin-body" style={{ maxWidth: 360 }}>
              A team of seasoned professionals with deep expertise across global markets
              and asset classes.
            </p>
          </FadeCard>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="responsive-grid-4">
            {team.map((m, i) => (
              <FadeCard key={i} delay={i * 0.08}>
                <div className="fin-team-card">
                  <div className="fin-avatar">{m.initials}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "var(--navy)" }}>{m.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4 }}>{m.role}</div>
                  <div className="fin-badge" style={{ marginTop: 14 }}>
                    {m.exp} exp.
                  </div>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="fin-section" style={{ background: "#ffffff" }}>
        <div className="fin-container">
          <FadeCard style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="fin-eyebrow" style={{ justifyContent: "center" }}>Client Voices</div>
            <h2 className="fin-h2">What Our Clients Say</h2>
          </FadeCard>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="responsive-grid-3">
            {testimonials.map((t, i) => (
              <FadeCard key={i} delay={i * 0.09}>
                <div className="fin-testimonial">
                  <Quote size={28} color="var(--accent)" style={{ marginBottom: 16, opacity: 0.5 }} />
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 24 }}>
                    "{t.quote}"
                  </p>
                  <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} color="#f59e0b" fill="#f59e0b" />
                    ))}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--navy)" }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{t.title}</div>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="fin-section" style={{ background: "var(--bg-section)" }}>
        <div className="fin-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="responsive-grid-faq">
            <FadeCard>
              <div className="fin-eyebrow">FAQ</div>
              <h2 className="fin-h2" style={{ maxWidth: 360 }}>
                Frequently Asked Questions
              </h2>
              <p className="fin-body" style={{ marginTop: 16 }}>
                Everything you need to know about working with Finaleyas.
              </p>
              <a href="#contact" className="fin-btn-primary" style={{ marginTop: 28, display: "inline-flex" }}>
                Still have questions? <ArrowRight size={15} />
              </a>
            </FadeCard>

            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="fin-faq-item">
                  <button className="fin-faq-trigger" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <ChevronDown size={18} style={{
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s",
                      flexShrink: 0,
                      color: "var(--text-muted)",
                    }} />
                  </button>
                  {openFaq === i && (
                    <div className="fin-faq-body">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Blog ─── */}
      <section className="fin-section" style={{ background: "#ffffff" }}>
        <div className="fin-container">
          <FadeCard style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
            <div>
              <div className="fin-eyebrow">Insights</div>
              <h2 className="fin-h2" style={{ maxWidth: 320 }}>Latest Research</h2>
            </div>
            <a href="#contact" className="fin-btn-outline">View All Posts <ArrowUpRight size={15} /></a>
          </FadeCard>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="responsive-grid-3">
            {posts.map((post, i) => (
              <FadeCard key={i} delay={i * 0.09}>
                <div className="fin-blog-card">
                  <div style={{
                    height: 6, background: `linear-gradient(90deg, ${post.color}, ${post.color}80)`,
                  }} />
                  <div style={{ padding: "28px 28px 32px" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
                      <span className="fin-badge" style={{ background: `${post.color}14`, color: post.color }}>
                        {post.tag}
                      </span>
                      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{post.date}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--navy)", lineHeight: 1.4, marginBottom: 12 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{post.readTime} read</span>
                      <a href="#contact" style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                        Read more <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .responsive-grid-2 { grid-template-columns: 1fr !important; }
          .responsive-grid-3 { grid-template-columns: 1fr 1fr !important; }
          .responsive-grid-4 { grid-template-columns: 1fr 1fr !important; }
          .responsive-grid-faq { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .responsive-grid-3 { grid-template-columns: 1fr !important; }
          .responsive-grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
};

export default Portofolio;
