"use client"

import { Header } from "@/components/navigation/header"

const T = {
  bg:    "var(--clr-bg)",
  bg2:   "var(--clr-bg2)",
  bg3:   "var(--clr-bg3)",
  fg:    "var(--clr-fg)",
  fg2:   "var(--clr-fg2)",
  fg3:   "var(--clr-fg3)",
  fg4:   "var(--clr-fg4)",
  fg6:   "var(--clr-fg6)",
  line:  "var(--clr-line)",
  line2: "var(--clr-line2)",
  line3: "var(--clr-line3)",
  cta:   "var(--clr-cta)",
  ctaFg: "var(--clr-cta-fg)",
  mono:  "var(--clr-mono)",
  tag:   "var(--clr-tag)",
  num:   "var(--clr-num)",
}

function Tag({ children }: { children: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Courier New', monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: T.tag }}>
      <span style={{ width: 7, height: 7, background: T.fg, borderRadius: 1, flexShrink: 0 }} />
      {children}
    </div>
  )
}

const CONTACT_OPTIONS = [
  {
    label: "Sales",
    desc: "Interested in Enterprise pricing or need a custom plan?",
    email: "sales@speediq.ai",
    cta: "Talk to sales",
  },
  {
    label: "Support",
    desc: "Technical issues, billing questions, account help.",
    email: "support@speediq.ai",
    cta: "Open a ticket",
  },
  {
    label: "Press",
    desc: "Media enquiries, partnerships, and brand assets.",
    email: "press@speediq.ai",
    cta: "Email press team",
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>

          {/* Hero */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, padding: "80px 56px 56px" }}>
              <Tag>Contact</Tag>
              <h1 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 500, letterSpacing: "-0.03em", color: T.fg, margin: "20px 0 16px", lineHeight: 1.1 }}>
                We&apos;d love to<br />hear from you.
              </h1>
              <p style={{ fontSize: 16, color: T.fg4, maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
                Whether it&apos;s a sales question, technical help, or just an idea — our team typically responds within one business day.
              </p>
            </div>
          </div>

          {/* Contact options grid */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                {CONTACT_OPTIONS.map((opt, i) => (
                  <div key={i} style={{ padding: "48px 40px", borderRight: i < 2 ? `1px solid ${T.line}` : undefined, display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: T.tag }}>{opt.label}</div>
                    <p style={{ fontSize: 15, color: T.fg3, lineHeight: 1.7, margin: 0 }}>{opt.desc}</p>
                    <a href={`mailto:${opt.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.06em", color: T.mono, textDecoration: "none" }}>
                      {opt.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main contact form */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 560 }}>

                {/* Left: info */}
                <div style={{ padding: "64px 56px", borderRight: `1px solid ${T.line}`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <Tag>Send a message</Tag>
                    <h2 style={{ fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: T.fg, margin: "20px 0 16px", lineHeight: 1.2 }}>
                      Tell us what you need.
                    </h2>
                    <p style={{ fontSize: 14, color: T.fg4, lineHeight: 1.75, margin: 0, maxWidth: 380 }}>
                      Fill in the form and we&apos;ll route it to the right team. For urgent technical issues, use the support portal for faster response times.
                    </p>
                  </div>

                  <div style={{ marginTop: 48 }}>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: T.num, marginBottom: 16 }}>RESPONSE TIMES</div>
                    {[
                      ["Sales enquiries", "Within 4 hours (business days)"],
                      ["Support tickets", "Within 24 hours"],
                      ["Press & partnerships", "Within 2 business days"],
                    ].map(([type, time]) => (
                      <div key={type} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px solid ${T.line}` }}>
                        <span style={{ fontSize: 13, color: T.fg3 }}>{type}</span>
                        <span style={{ fontSize: 12, fontFamily: "'Courier New', monospace", color: T.mono, letterSpacing: "0.04em" }}>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: form */}
                <div style={{ padding: "64px 56px", background: T.bg2, display: "flex", flexDirection: "column", gap: 20 }}>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: T.tag, fontFamily: "'Courier New', monospace" }}>First name</label>
                      <input type="text" placeholder="Jane" style={{ width: "100%", padding: "11px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: T.tag, fontFamily: "'Courier New', monospace" }}>Last name</label>
                      <input type="text" placeholder="Smith" style={{ width: "100%", padding: "11px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: T.tag, fontFamily: "'Courier New', monospace" }}>Work email</label>
                    <input type="email" placeholder="you@company.com" style={{ width: "100%", padding: "11px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: T.tag, fontFamily: "'Courier New', monospace" }}>Company</label>
                    <input type="text" placeholder="Acme Inc." style={{ width: "100%", padding: "11px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: T.tag, fontFamily: "'Courier New', monospace" }}>Subject</label>
                    <select style={{ width: "100%", padding: "11px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box", appearance: "none" }}>
                      <option>Sales / Pricing</option>
                      <option>Technical support</option>
                      <option>Partnership / Press</option>
                      <option>Billing question</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: T.tag, fontFamily: "'Courier New', monospace" }}>Message</label>
                    <textarea rows={4} placeholder="Tell us more..." style={{ width: "100%", padding: "11px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box", resize: "vertical" }} />
                  </div>

                  <button style={{ width: "100%", padding: "13px 0", background: T.cta, color: T.ctaFg, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" as const, border: "none", cursor: "pointer", fontFamily: "'Courier New', monospace" }}>
                    Send Message
                  </button>

                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer style={{ background: T.bg }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 0 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${T.line}`, paddingTop: 28 }}>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: 12, color: T.mono }}>© 2026 SpeedIQ. All rights reserved.</div>
                  <div style={{ display: "flex", gap: 28 }}>
                    {([["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"], ["DPA", "/legal/dpa"]] as const).map(([label, href]) => (
                      <a key={label} href={href} style={{ fontSize: 12, color: T.fg4, textDecoration: "none" }}>{label}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  )
}
