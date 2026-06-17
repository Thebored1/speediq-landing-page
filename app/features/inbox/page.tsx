"use client"

import Link from "next/link"
import { Header } from "@/components/navigation/header"

const AMBER = "#f59e0b"

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

function InboxPreview() {
  const convos = [
    { name: "Maria S.", channel: "WA", preview: "Yes, I'm interested in the Pro plan!", time: "now", badge: 2, color: "#25D366" },
    { name: "Tom K.", channel: "EM", preview: "Can you resend the invoice?", time: "3m", badge: 0, color: "#3b82f6" },
    { name: "+1 555 0134", channel: "SMS", preview: "Confirm apt for Thu 2pm?", time: "12m", badge: 1, color: "#a855f7" },
    { name: "Priya M.", channel: "WA", preview: "Thank you, received ✓", time: "1h", badge: 0, color: "#25D366" },
  ]
  const messages = [
    { side: "in", text: "Hi! I just saw your email about the Pro plan. Can you tell me more?", time: "10:14", channel: "Email" },
    { side: "out", text: "Hi Maria! Absolutely. Pro gives you 2,000 credits/mo, 3 team seats, and all three channels. Want me to share the pricing page?", time: "10:15" },
    { side: "in", text: "Yes please! Also do you offer annual billing?", time: "10:16", channel: "Email" },
    { side: "out", text: "Yes — 20% off on annual plans. Here's the link: speediq.ai/pricing\n\nHappy to jump on a quick call too if helpful 📞", time: "10:17" },
    { side: "in", text: "Yes, I'm interested in the Pro plan!", time: "10:18", channel: "WhatsApp" },
  ]
  return (
    <div style={{ display: "flex", border: `1px solid ${T.line2}`, borderRadius: 10, overflow: "hidden", width: "100%", maxWidth: 620, height: 340, background: "var(--clr-bg2)", fontFamily: "-apple-system, sans-serif" }}>
      {/* Sidebar */}
      <div style={{ width: 190, borderRight: `1px solid ${T.line}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "10px 12px", borderBottom: `1px solid ${T.line}`, display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ flex: 1, background: "var(--clr-bg3)", borderRadius: 6, padding: "5px 8px", fontSize: 10, color: T.mono }}>Search...</div>
          <div style={{ width: 22, height: 22, borderRadius: 5, background: AMBER, display: "grid", placeItems: "center", fontSize: 11, color: "#000000", fontWeight: 700 }}>+</div>
        </div>
        {convos.map((c, i) => (
          <div key={i} style={{ padding: "9px 12px", borderBottom: `1px solid ${T.line}`, display: "flex", gap: 8, alignItems: "center", background: i === 0 ? "var(--clr-line)" : "transparent" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--clr-bg3)", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 600, color: T.fg, flexShrink: 0, position: "relative" }}>
              {c.name[0]}
              <div style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, borderRadius: "50%", background: c.color, border: "1.5px solid var(--clr-bg2)", fontSize: 6, display: "grid", placeItems: "center", color: "#ffffff", fontWeight: 700 }}>{c.channel[0]}</div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: T.fg }}>{c.name}</span>
                <span style={{ fontSize: 9, color: T.mono }}>{c.time}</span>
              </div>
              <div style={{ fontSize: 10, color: T.mono, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.preview}</div>
            </div>
            {c.badge > 0 && <div style={{ width: 16, height: 16, borderRadius: "50%", background: AMBER, display: "grid", placeItems: "center", fontSize: 9, fontWeight: 700, color: "#000000", flexShrink: 0 }}>{c.badge}</div>}
          </div>
        ))}
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "10px 14px", borderBottom: `1px solid ${T.line}`, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--clr-bg3)", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 600, color: T.fg }}>M</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: T.fg }}>Maria S.</div>
            <div style={{ fontSize: 9, color: T.mono }}>via Email → WhatsApp</div>
          </div>
          <div style={{ padding: "4px 8px", background: AMBER, borderRadius: 4, fontSize: 9, fontWeight: 700, color: "#000000", fontFamily: "'Courier New', monospace", letterSpacing: "0.08em" }}>ASSIGN</div>
        </div>
        <div style={{ flex: 1, padding: "10px 12px", overflow: "hidden", display: "flex", flexDirection: "column", gap: 7 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: m.side === "out" ? "flex-end" : "flex-start" }}>
              {m.side === "in" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <div style={{ background: "var(--clr-bg3)", borderRadius: "8px 8px 8px 2px", padding: "6px 9px", maxWidth: 200 }}>
                    <div style={{ fontSize: 10, color: T.fg2, lineHeight: 1.45, whiteSpace: "pre-line" }}>{m.text}</div>
                  </div>
                  <div style={{ fontSize: 8.5, color: T.mono, marginTop: 2 }}>{m.time} · {m.channel}</div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <div style={{ background: "#1c1c3a", borderRadius: "8px 8px 2px 8px", padding: "6px 9px", maxWidth: 200 }}>
                    <div style={{ fontSize: 10, color: "#e5e7eb", lineHeight: 1.45, whiteSpace: "pre-line" }}>{m.text}</div>
                  </div>
                  <div style={{ fontSize: 8.5, color: T.mono, marginTop: 2 }}>{m.time}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ padding: "8px 10px", borderTop: `1px solid ${T.line}`, display: "flex", gap: 6, alignItems: "center" }}>
          <div style={{ flex: 1, background: "var(--clr-bg3)", borderRadius: 6, padding: "6px 10px", fontSize: 10, color: T.mono }}>Reply via WhatsApp...</div>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: AMBER, display: "grid", placeItems: "center", fontSize: 12, color: "#000000" }}>→</div>
        </div>
      </div>
    </div>
  )
}

const PILLARS = [
  { n: "01", tag: "Unified View", title: "All channels, one inbox — zero context switching.", body: "WhatsApp, Email, and SMS conversations all live in a single inbox. Jump between channels without losing thread history or customer context. SpeedIQ cross-references contact records automatically." },
  { n: "02", tag: "Team Assignment", title: "Assign threads to the right person, automatically.", body: "Set routing rules based on language, channel, or contact tag. Manually assign conversations with a single click. Track team response times with built-in SLA monitoring." },
  { n: "03", tag: "Quick Replies", title: "Respond 5× faster with saved reply templates.", body: "Build a library of approved response templates per channel. Type / to search and insert. Full variable support ({{customer_name}}, {{order_id}}) for personalised instant replies." },
  { n: "04", tag: "Cross-Channel Context", title: "See the full journey — broadcast to conversation.", body: "When a customer replies to a WhatsApp broadcast, SpeedIQ links the reply to the original campaign and shows which segment they came from. Turn campaign replies into sales opportunities." },
]

const STATS = [
  { value: "3", label: "Channels in one inbox" },
  { value: "5×", label: "Faster response times" },
  { value: "0", label: "Context switches needed" },
]

export default function InboxFeaturePage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>

          {/* Hero */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              <div style={{ padding: "64px 56px 48px", borderBottom: `1px solid ${T.line}`, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Courier New', monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: T.tag }}>
                    <span style={{ width: 7, height: 7, background: AMBER, borderRadius: 1 }} />
                    Unified Inbox
                  </div>
                  <h1 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 500, letterSpacing: "-0.03em", color: T.fg, margin: 0, lineHeight: 1.1, maxWidth: 600 }}>
                    One inbox for every customer conversation.
                  </h1>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end", minWidth: 280 }}>
                  <p style={{ fontSize: 15, color: T.fg4, lineHeight: 1.7, margin: 0, textAlign: "right" }}>
                    WhatsApp, Email, and SMS threads — unified. No tab switching, no lost context.
                  </p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Link href="/auth/sign-up" style={{ display: "inline-flex", alignItems: "center", padding: "11px 24px", background: AMBER, color: "#000000", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none" }}>Start Free</Link>
                    <Link href="/features" style={{ display: "inline-flex", alignItems: "center", padding: "11px 24px", background: "transparent", color: T.fg3, fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", border: `1px solid ${T.line3}` }}>All Features</Link>
                  </div>
                </div>
              </div>

              {/* Inbox mockup */}
              <div style={{ padding: "56px", background: T.bg2, borderBottom: `1px solid ${T.line}`, display: "flex", justifyContent: "center" }}>
                <InboxPreview />
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                {STATS.map((s, i) => (
                  <div key={i} style={{ padding: "28px 40px", borderRight: i < 2 ? `1px solid ${T.line}` : undefined, display: "flex", gap: 16, alignItems: "center" }}>
                    <div style={{ fontSize: 30, fontWeight: 600, color: AMBER, letterSpacing: "-0.025em", flexShrink: 0 }}>{s.value}</div>
                    <div style={{ fontSize: 13, color: T.fg4, lineHeight: 1.5 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature pillars */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              {PILLARS.map((p, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1.5fr", borderBottom: i < PILLARS.length - 1 ? `1px solid ${T.line}` : undefined, minHeight: 140 }}>
                  <div style={{ borderRight: `1px solid ${T.line}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "32px 0", gap: 6 }}>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 16, fontWeight: 300, color: T.num }}>{p.n}</div>
                    <div style={{ width: 2, flex: 1, background: T.line }} />
                  </div>
                  <div style={{ padding: "36px 40px", borderRight: `1px solid ${T.line}`, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center", background: i % 2 === 1 ? T.bg2 : T.bg }}>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: AMBER }}>{p.tag}</div>
                    <h2 style={{ fontSize: "clamp(15px, 1.8vw, 20px)", fontWeight: 500, letterSpacing: "-0.02em", color: T.fg, margin: 0, lineHeight: 1.3 }}>{p.title}</h2>
                  </div>
                  <div style={{ padding: "36px 40px", display: "flex", alignItems: "center", background: i % 2 === 1 ? T.bg2 : T.bg }}>
                    <p style={{ fontSize: 14, color: T.fg3, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
              <div>
                <h2 style={{ fontSize: "clamp(20px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: T.fg, margin: "0 0 10px" }}>Unify your customer conversations today.</h2>
                <p style={{ fontSize: 15, color: T.fg4, margin: 0 }}>200 free credits included. All 3 channels from day one.</p>
              </div>
              <Link href="/auth/sign-up" style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", padding: "14px 32px", background: AMBER, color: "#000000", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", whiteSpace: "nowrap" as const }}>
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
