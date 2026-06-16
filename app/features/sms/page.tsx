"use client"

import Link from "next/link"
import { Header } from "@/components/navigation/header"

const PURPLE = "#a855f7"

const T = {
  bg:   "var(--clr-bg)",
  bg2:  "var(--clr-bg2)",
  bg3:  "var(--clr-bg3)",
  fg:   "var(--clr-fg)",
  fg2:  "var(--clr-fg2)",
  fg3:  "var(--clr-fg3)",
  fg4:  "var(--clr-fg4)",
  mono: "var(--clr-mono)",
  tag:  "var(--clr-tag)",
  num:  "var(--clr-num)",
  line: "var(--clr-line)",
  line2:"var(--clr-line2)",
  line3:"var(--clr-line3)",
  cta:  "var(--clr-cta)",
  ctaFg:"var(--clr-cta-fg)",
}

function SmsPhonePreview() {
  const msgs = [
    { from: "ACMEBANK", text: "Your OTP for transaction ending 4821 is: 739201. Valid for 5 minutes. Do not share.", type: "otp" },
    { from: "ACME", text: "Hi Jane! Your order #8821 has shipped. Track: acme.co/track/8821", type: "alert" },
    { from: "ACME", text: "Flash sale 🎉 30% OFF today only. Shop: acme.co/sale\nREPLY STOP to opt out", type: "promo" },
  ]
  return (
    <div style={{ background: "#1a1a2e", border: `1px solid ${T.line2}`, borderRadius: 24, overflow: "hidden", width: 260, fontFamily: "-apple-system, sans-serif", padding: "0 0 8px" }}>
      <div style={{ background: "#0d0d1a", padding: "10px 16px 8px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, color: "var(--clr-fg3)", fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 11, color: "var(--clr-fg3)" }}>●●● LTE</span>
      </div>
      <div style={{ background: "#0d0d1a", padding: "6px 16px 12px", textAlign: "center", borderBottom: "1px solid var(--clr-line)" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--clr-fg)" }}>Messages</div>
      </div>
      <div style={{ padding: "8px 0" }}>
        {msgs.map((msg, i) => (
          <div key={i} style={{ padding: "10px 14px", borderBottom: i < msgs.length - 1 ? "1px solid var(--clr-line)" : undefined, display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: i === 0 ? PURPLE : i === 1 ? "#6366f1" : "#8b5cf6", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700, color: "var(--clr-fg)", flexShrink: 0 }}>
              {msg.from[0]}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--clr-fg)" }}>{msg.from}</span>
                <span style={{ fontSize: 9, color: "var(--clr-fg4)" }}>now</span>
              </div>
              <div style={{ fontSize: 10.5, color: "var(--clr-fg3)", lineHeight: 1.45, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}>{msg.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === 1 ? PURPLE : "var(--clr-line2)" }} />)}
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  { n: "01", tag: "10DLC Compliance", title: "US 10DLC registration handled for you.", body: "SpeedIQ automatically registers your brand and campaigns with The Campaign Registry (TCR) for US A2P 10DLC messaging. No manual carrier filings.", stat: "Carrier approval in 1–3 business days", color: PURPLE },
  { n: "02", tag: "Global Reach", title: "Send to 190+ countries from a single platform.", body: "Route messages through the optimal carrier per country. SpeedIQ automatically selects the best local route for every destination, maximising delivery and minimising latency.", stat: "190+ countries, optimal routing", color: "#8b5cf6" },
  { n: "03", tag: "OTP & Alerts", title: "Transactional SMS with sub-second delivery.", body: "Send OTPs, delivery confirmations, fraud alerts, and appointment reminders reliably. Automatic failover ensures OTPs always arrive, even during carrier issues.", stat: "Sub-second delivery · 99.9% SLA", color: "#6366f1" },
  { n: "04", tag: "MMS & Rich Media", title: "Send images, GIFs, and vouchers via MMS.", body: "Attach product images, discount vouchers, or event banners. MMS outperforms plain SMS on CTR for promotional messages by 15–20% on average.", stat: "Up to 1MB media per MMS", color: PURPLE },
]

const STATS = [
  { value: "0.5 cr", label: "Per SMS sent" },
  { value: "190+", label: "Countries supported" },
  { value: "<1s", label: "OTP delivery time" },
]

export default function SmsFeaturePage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>

          {/* Hero — centered phone with copy flanking */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", minHeight: 480, alignItems: "center" }}>
                <div style={{ padding: "72px 56px", display: "flex", flexDirection: "column", gap: 24, justifyContent: "center", borderRight: `1px solid ${T.line}` }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Courier New', monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: T.tag }}>
                    <span style={{ width: 7, height: 7, background: PURPLE, borderRadius: 1 }} />
                    SMS Messaging
                  </div>
                  <h1 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 500, letterSpacing: "-0.03em", color: T.fg, margin: 0, lineHeight: 1.1 }}>
                    Global SMS with compliance built in.
                  </h1>
                  <p style={{ fontSize: 15, color: T.fg4, lineHeight: 1.7, margin: 0 }}>
                    OTPs, promotions, and transactional alerts across 190+ countries. Carrier compliance handled automatically.
                  </p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Link href="/auth/sign-up" style={{ display: "inline-flex", alignItems: "center", padding: "11px 24px", background: PURPLE, color: "var(--clr-fg)", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none" }}>Start Free</Link>
                    <Link href="/features" style={{ display: "inline-flex", alignItems: "center", padding: "11px 24px", background: "transparent", color: T.fg3, fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", border: `1px solid ${T.line3}` }}>All Features</Link>
                  </div>
                </div>

                <div style={{ padding: "48px 56px", display: "flex", alignItems: "center", justifyContent: "center", background: T.bg2, borderRight: `1px solid ${T.line}` }}>
                  <SmsPhonePreview />
                </div>

                <div style={{ padding: "72px 56px", display: "flex", flexDirection: "column", gap: 32, justifyContent: "center" }}>
                  {STATS.map((s, i) => (
                    <div key={i} style={{ paddingBottom: i < STATS.length - 1 ? 32 : 0, borderBottom: i < STATS.length - 1 ? `1px solid ${T.line}` : undefined }}>
                      <div style={{ fontSize: 28, fontWeight: 600, color: PURPLE, letterSpacing: "-0.025em" }}>{s.value}</div>
                      <div style={{ fontSize: 12, color: T.mono, fontFamily: "'Courier New', monospace", letterSpacing: "0.04em", marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards — 2×2 grid */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {FEATURES.map((f, i) => (
                  <div key={i} style={{ padding: "52px 52px", borderRight: i % 2 === 0 ? `1px solid ${T.line}` : undefined, borderBottom: i < 2 ? `1px solid ${T.line}` : undefined, display: "flex", flexDirection: "column", gap: 16, background: i === 1 || i === 2 ? T.bg2 : T.bg }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontFamily: "'Courier New', monospace", fontSize: 13, fontWeight: 300, color: T.num }}>{f.n}</span>
                      <span style={{ fontFamily: "'Courier New', monospace", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: f.color }}>{f.tag}</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(16px, 2vw, 21px)", fontWeight: 500, letterSpacing: "-0.02em", color: T.fg, margin: 0, lineHeight: 1.3 }}>{f.title}</h2>
                    <p style={{ fontSize: 14, color: T.fg3, lineHeight: 1.75, margin: 0 }}>{f.body}</p>
                    <div style={{ paddingTop: 12, borderTop: `1px solid ${T.line}`, fontFamily: "'Courier New', monospace", fontSize: 11, color: T.mono, letterSpacing: "0.04em" }}>
                      → {f.stat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
              <div>
                <h2 style={{ fontSize: "clamp(20px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: T.fg, margin: "0 0 10px" }}>Ready to add SMS to your stack?</h2>
                <p style={{ fontSize: 15, color: T.fg4, margin: 0 }}>0.5 credits per SMS. No monthly minimums. Cancel anytime.</p>
              </div>
              <Link href="/auth/sign-up" style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", padding: "14px 32px", background: PURPLE, color: "var(--clr-fg)", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", whiteSpace: "nowrap" as const }}>
                Start Free Trial →
              </Link>
            </div>
          </div>

          <footer style={{ background: T.bg }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 0 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${T.line}`, paddingTop: 28 }}>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: 12, color: T.mono }}>© 2026 SpeedIQ. All rights reserved.</div>
                  <div style={{ display: "flex", gap: 28 }}>
                    {[["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"], ["DPA", "/legal/dpa"]].map(([l, h]) => <a key={l} href={h} style={{ fontSize: 12, color: T.fg4, textDecoration: "none" }}>{l}</a>)}
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
