"use client"

import Link from "next/link"
import { Header } from "@/components/navigation/header"

const GREEN = "#25D366"

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

/* Chat bubble preview */
function WaChatPreview() {
  const bubbles = [
    { side: "left",  text: "Hi! I saw your offer on Instagram 👀",  time: "10:21" },
    { side: "right", text: "Hey! Yes — 30% off on all plans this week only. Want me to send you the details?", time: "10:22" },
    { side: "left",  text: "Yes please! Also do you have a Business plan?", time: "10:22" },
    { side: "right", text: "Absolutely. Our Business plan includes 5,000 credits/mo, unlimited contacts, and dedicated support. Here's the link 👇\n\nspeediq.ai/pricing", time: "10:23" },
    { side: "left",  text: "Perfect, signing up now ✅", time: "10:24" },
  ]
  return (
    <div style={{ background: "#0d1117", border: `1px solid ${T.line2}`, borderRadius: 12, overflow: "hidden", width: "100%", maxWidth: 340, fontFamily: "-apple-system, sans-serif" }}>
      {/* WA header */}
      <div style={{ background: "#1a2332", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: GREEN, display: "grid", placeItems: "center", fontSize: 15, color: "var(--clr-fg)", fontWeight: 700 }}>A</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--clr-fg)" }}>Acme Support</div>
          <div style={{ fontSize: 11, color: GREEN }}>online</div>
        </div>
      </div>
      {/* Messages */}
      <div style={{ background: "#0a0f1a", padding: "12px 10px", display: "flex", flexDirection: "column", gap: 8, minHeight: 260 }}>
        {bubbles.map((b, i) => (
          <div key={i} style={{ display: "flex", justifyContent: b.side === "right" ? "flex-end" : "flex-start" }}>
            <div style={{ maxWidth: "78%", background: b.side === "right" ? "#1a5c38" : "#1f2937", borderRadius: b.side === "right" ? "12px 12px 3px 12px" : "12px 12px 12px 3px", padding: "7px 10px" }}>
              <div style={{ fontSize: 12, color: "#e5e7eb", lineHeight: 1.5, whiteSpace: "pre-line" }}>{b.text}</div>
              <div style={{ fontSize: 9.5, color: "var(--clr-fg4)", textAlign: "right", marginTop: 3, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 3 }}>
                {b.time}
                {b.side === "right" && <span style={{ color: GREEN }}>✓✓</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Input bar */}
      <div style={{ background: "#1a2332", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ flex: 1, background: "#0d1117", borderRadius: 20, padding: "8px 14px", fontSize: 12, color: "var(--clr-fg4)" }}>Message...</div>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: GREEN, display: "grid", placeItems: "center", fontSize: 14 }}>🎙</div>
      </div>
    </div>
  )
}

const SECTIONS = [
  {
    n: "01", tag: "Official Meta API",
    title: "Connect via Meta's Embedded Signup — no developer needed.",
    body: "SpeedIQ uses the official Meta Business API. Connect your WhatsApp Business Account in minutes with Embedded Signup. We manage the API layer; you manage the messaging.",
    items: ["Retain full ownership of your WABA", "Multi-WABA support per workspace", "Auto-syncs phone number registration status", "No manual API credentials"],
    accent: GREEN,
  },
  {
    n: "02", tag: "Templates",
    title: "Build, submit, and test Meta-approved templates.",
    body: "Design WhatsApp message templates with header images, body variables, and CTA buttons. Submit to Meta for approval and get notified instantly. Test before broadcasting.",
    items: ["Drag-and-drop template builder", "Auto-approval status sync", "Test send before going live", "Variable substitution: {{first_name}}, custom fields"],
    accent: GREEN,
  },
  {
    n: "03", tag: "Broadcasts",
    title: "Schedule campaigns to segmented audiences.",
    body: "Filter your contacts with AND/OR logic, pick a template, and schedule your broadcast. Watch per-contact delivery, read receipts, and reply rates in real-time.",
    items: ["Segment with AND/OR logic", "Real-time delivery and read tracking", "Automatic retry on failure", "Schedule for optimal send windows"],
    accent: GREEN,
  },
  {
    n: "04", tag: "Live Chat Inbox",
    title: "Turn broadcast replies into live conversations.",
    body: "Every reply to a broadcast lands in the unified SpeedIQ inbox. Assign to team members, use quick-reply templates, and close the loop — all inside WhatsApp.",
    items: ["Unified inbox for all WA replies", "Team thread assignment", "Quick-reply and note templates", "Customer profile sidebar per conversation"],
    accent: GREEN,
  },
]

const STATS = [
  { value: "98%+", label: "Message delivery rate" },
  { value: "5×", label: "Higher open rate vs email" },
  { value: "2B+", label: "Monthly active WhatsApp users" },
]

export default function WhatsAppFeaturePage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>

          {/* Hero — split with chat mockup */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 500 }}>
                {/* Left: copy */}
                <div style={{ padding: "72px 56px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24, borderRight: `1px solid ${T.line}` }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Courier New', monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: T.tag }}>
                    <span style={{ width: 7, height: 7, background: GREEN, borderRadius: 1 }} />
                    WhatsApp Campaigns
                  </div>
                  <h1 style={{ fontSize: "clamp(28px, 3.8vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", color: T.fg, margin: 0, lineHeight: 1.1, maxWidth: 480 }}>
                    WhatsApp marketing that scales with your audience.
                  </h1>
                  <p style={{ fontSize: 16, color: T.fg4, lineHeight: 1.7, margin: 0, maxWidth: 440 }}>
                    Official Meta Business API. Template submissions. Live chat inbox. All from a single workspace — no separate BSP needed.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
                    <Link href="/auth/sign-up" style={{ display: "inline-flex", alignItems: "center", padding: "11px 24px", background: GREEN, color: "var(--clr-fg)", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none" }}>
                      Start Free Trial
                    </Link>
                    <Link href="/features" style={{ display: "inline-flex", alignItems: "center", padding: "11px 24px", background: "transparent", color: T.fg3, fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", border: `1px solid ${T.line3}` }}>
                      All Features
                    </Link>
                  </div>

                  {/* Stats row */}
                  <div style={{ display: "flex", gap: 32, paddingTop: 24, borderTop: `1px solid ${T.line}`, marginTop: 8 }}>
                    {STATS.map((s, i) => (
                      <div key={i}>
                        <div style={{ fontSize: 22, fontWeight: 600, color: GREEN, letterSpacing: "-0.02em" }}>{s.value}</div>
                        <div style={{ fontSize: 11, color: T.mono, fontFamily: "'Courier New', monospace", letterSpacing: "0.04em", marginTop: 2 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: chat mockup */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 56px", background: T.bg2 }}>
                  <WaChatPreview />
                </div>
              </div>
            </div>
          </div>

          {/* Feature sections */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              {SECTIONS.map((sec, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1.4fr" : "1.4fr 1fr", borderBottom: i < SECTIONS.length - 1 ? `1px solid ${T.line}` : undefined, minHeight: 180 }}>
                  {i % 2 === 0 ? (
                    <>
                      <div style={{ padding: "48px 56px", background: i % 4 < 2 ? T.bg : T.bg2, borderRight: `1px solid ${T.line}`, display: "flex", flexDirection: "column", gap: 12 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "'Courier New', monospace", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: GREEN }}>
                          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 300, color: T.num }}>{sec.n}</span>
                          {sec.tag}
                        </div>
                        <h2 style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 500, letterSpacing: "-0.02em", color: T.fg, margin: 0, lineHeight: 1.3 }}>{sec.title}</h2>
                      </div>
                      <div style={{ padding: "48px 56px", display: "flex", flexDirection: "column", gap: 16 }}>
                        <p style={{ fontSize: 15, color: T.fg3, lineHeight: 1.75, margin: 0 }}>{sec.body}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {sec.items.map((item, j) => (
                            <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                              <span style={{ color: GREEN, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
                              <span style={{ fontSize: 13, color: T.fg4, lineHeight: 1.6 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ padding: "48px 56px", display: "flex", flexDirection: "column", gap: 16 }}>
                        <p style={{ fontSize: 15, color: T.fg3, lineHeight: 1.75, margin: 0 }}>{sec.body}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {sec.items.map((item, j) => (
                            <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                              <span style={{ color: GREEN, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
                              <span style={{ fontSize: 13, color: T.fg4, lineHeight: 1.6 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ padding: "48px 56px", background: i % 4 < 2 ? T.bg : T.bg2, borderLeft: `1px solid ${T.line}`, display: "flex", flexDirection: "column", gap: 12 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "'Courier New', monospace", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: GREEN }}>
                          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 300, color: T.num }}>{sec.n}</span>
                          {sec.tag}
                        </div>
                        <h2 style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 500, letterSpacing: "-0.02em", color: T.fg, margin: 0, lineHeight: 1.3 }}>{sec.title}</h2>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
              <div>
                <h2 style={{ fontSize: "clamp(20px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: T.fg, margin: "0 0 10px" }}>Ready to launch your first WhatsApp campaign?</h2>
                <p style={{ fontSize: 15, color: T.fg4, margin: 0 }}>200 free credits on sign-up. No credit card required.</p>
              </div>
              <Link href="/auth/sign-up" style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", padding: "14px 32px", background: GREEN, color: "var(--clr-fg)", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", whiteSpace: "nowrap" as const }}>
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
