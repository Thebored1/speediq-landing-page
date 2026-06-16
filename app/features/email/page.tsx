"use client"

import Link from "next/link"
import { Header } from "@/components/navigation/header"

const BLUE = "#3b82f6"

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

/* Email inbox preview mockup */
function EmailInboxPreview() {
  const emails = [
    { from: "SpeedIQ", subject: "Your campaign sent successfully ✅", preview: "125,400 contacts reached. Open rate: 28.4%", time: "2m", unread: true },
    { from: "Analytics", subject: "Weekly performance report", preview: "Click rate up 14% from last week — 3 top links", time: "1h", unread: false },
    { from: "Sarah K.", subject: "Re: Summer promo campaign", preview: "Looks great! Let's schedule for Tuesday morning", time: "3h", unread: false },
    { from: "Resend", subject: "Domain verification complete", preview: "marketing@acme.com is ready to send", time: "1d", unread: false },
  ]
  return (
    <div style={{ background: "var(--clr-bg2)", border: `1px solid ${T.line2}`, borderRadius: 10, overflow: "hidden", width: "100%", maxWidth: 380, fontFamily: "-apple-system, sans-serif" }}>
      {/* Toolbar */}
      <div style={{ background: "var(--clr-bg3)", padding: "10px 14px", display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${T.line}` }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: T.fg }}>Inbox</div>
        <div style={{ flex: 1, background: "var(--clr-bg)", borderRadius: 6, padding: "5px 10px", fontSize: 11, color: T.mono }}>Search...</div>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: BLUE, display: "grid", placeItems: "center", fontSize: 14 }}>✏</div>
      </div>
      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${T.line}` }}>
        {["All", "Unread", "Starred"].map((tab, i) => (
          <div key={tab} style={{ padding: "8px 14px", fontSize: 11, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? BLUE : T.mono, borderBottom: i === 0 ? `2px solid ${BLUE}` : "2px solid transparent" }}>{tab}</div>
        ))}
      </div>
      {/* Email rows */}
      <div>
        {emails.map((email, i) => (
          <div key={i} style={{ padding: "11px 14px", borderBottom: `1px solid ${T.line}`, display: "flex", gap: 10, alignItems: "flex-start", background: email.unread ? "var(--clr-line)" : "transparent" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: i === 0 ? BLUE : "var(--clr-bg3)", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 600, color: T.fg, flexShrink: 0 }}>
              {email.from[0]}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <span style={{ fontSize: 12, fontWeight: email.unread ? 600 : 400, color: T.fg }}>{email.from}</span>
                <span style={{ fontSize: 10, color: T.mono }}>{email.time}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: email.unread ? 600 : 400, color: T.fg2, marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{email.subject}</div>
              <div style={{ fontSize: 11, color: T.mono, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{email.preview}</div>
            </div>
            {email.unread && <div style={{ width: 7, height: 7, borderRadius: "50%", background: BLUE, flexShrink: 0, marginTop: 4 }} />}
          </div>
        ))}
      </div>
    </div>
  )
}

const SECTIONS = [
  { n: "01", tag: "Campaign Builder", title: "Drag-and-drop email editor — no HTML required.", body: "Build rich HTML emails with our visual editor. Add images, buttons, columns, and dividers. Preview on desktop and mobile before sending.", items: ["Block-based drag-and-drop editor", "Dynamic variables: {{first_name}}, custom fields", "Plain text and HTML fallback", "Desktop & mobile preview"] },
  { n: "02", tag: "Custom Domains", title: "Send from your own domain for maximum deliverability.", body: "Connect your sending domain via Resend or SMTP. SpeedIQ walks you through DKIM and SPF setup so your emails land in the inbox, not spam.", items: ["Custom sending domain support", "DKIM and SPF verification wizard", "Resend integration or bring your own SMTP", "Domain warm-up guidance"] },
  { n: "03", tag: "Campaigns & Scheduling", title: "Schedule broadcasts and track delivery in real time.", body: "Choose your audience, pick a template, and schedule for the optimal send time. Track delivery, opens, clicks, and unsubscribes as they happen.", items: ["Scheduled or immediate sending", "Per-contact delivery logs", "Open rate and click tracking", "Unsubscribe management"] },
  { n: "04", tag: "Analytics", title: "See which emails drive revenue — not just opens.", body: "Cross-channel attribution dashboard shows which email campaign led to a WhatsApp reply, a purchase, or a subscription upgrade. Data retained up to 1 year.", items: ["Per-campaign open, click, and reply metrics", "Cross-channel attribution (Email → WhatsApp)", "Heatmap of link clicks per email", "1-year data retention on Business plan"] },
]

const STATS = [
  { value: "1 cr", label: "Per email sent" },
  { value: "99.9%", label: "Delivery SLA uptime" },
  { value: "∞", label: "Contacts on all plans" },
]

export default function EmailFeaturePage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>

          {/* Hero — split with inbox mockup */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", minHeight: 500 }}>
                {/* Left: copy */}
                <div style={{ padding: "72px 56px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24, borderRight: `1px solid ${T.line}` }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Courier New', monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: T.tag }}>
                    <span style={{ width: 7, height: 7, background: BLUE, borderRadius: 1 }} />
                    Email Marketing
                  </div>
                  <h1 style={{ fontSize: "clamp(28px, 3.8vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", color: T.fg, margin: 0, lineHeight: 1.1, maxWidth: 500 }}>
                    Email marketing built for modern teams.
                  </h1>
                  <p style={{ fontSize: 16, color: T.fg4, lineHeight: 1.7, margin: 0, maxWidth: 440 }}>
                    Drag-and-drop campaigns, custom sending domains, subscriber management, and full analytics — all alongside your WhatsApp and SMS channels.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
                    <Link href="/auth/sign-up" style={{ display: "inline-flex", alignItems: "center", padding: "11px 24px", background: BLUE, color: "var(--clr-fg)", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none" }}>
                      Start Free Trial
                    </Link>
                    <Link href="/features" style={{ display: "inline-flex", alignItems: "center", padding: "11px 24px", background: "transparent", color: T.fg3, fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", border: `1px solid ${T.line3}` }}>
                      All Features
                    </Link>
                  </div>
                  <div style={{ display: "flex", gap: 32, paddingTop: 24, borderTop: `1px solid ${T.line}`, marginTop: 8 }}>
                    {STATS.map((s, i) => (
                      <div key={i}>
                        <div style={{ fontSize: 22, fontWeight: 600, color: BLUE, letterSpacing: "-0.02em" }}>{s.value}</div>
                        <div style={{ fontSize: 11, color: T.mono, fontFamily: "'Courier New', monospace", letterSpacing: "0.04em", marginTop: 2 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: inbox mockup */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 40px", background: T.bg3 }}>
                  <EmailInboxPreview />
                </div>
              </div>
            </div>
          </div>

          {/* Feature sections — vertical card stack, alternating accent */}
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              {SECTIONS.map((sec, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr 1fr", borderBottom: i < SECTIONS.length - 1 ? `1px solid ${T.line}` : undefined }}>
                  {/* Number + tag column */}
                  <div style={{ padding: "40px 28px", background: T.bg2, borderRight: `1px solid ${T.line}`, display: "flex", flexDirection: "column", gap: 8, justifyContent: "flex-start" }}>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 24, fontWeight: 300, color: T.num }}>{sec.n}</div>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: BLUE }}>{sec.tag}</div>
                  </div>
                  {/* Title */}
                  <div style={{ padding: "40px 40px", borderRight: `1px solid ${T.line}`, display: "flex", alignItems: "center" }}>
                    <h2 style={{ fontSize: "clamp(15px, 1.8vw, 20px)", fontWeight: 500, letterSpacing: "-0.02em", color: T.fg, margin: 0, lineHeight: 1.35 }}>{sec.title}</h2>
                  </div>
                  {/* Body + list */}
                  <div style={{ padding: "40px 40px", display: "flex", flexDirection: "column", gap: 12 }}>
                    <p style={{ fontSize: 14, color: T.fg3, lineHeight: 1.75, margin: 0 }}>{sec.body}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      {sec.items.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <span style={{ color: BLUE, fontSize: 12, flexShrink: 0, marginTop: 1 }}>→</span>
                          <span style={{ fontSize: 12, color: T.fg4, lineHeight: 1.6 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ borderBottom: `1px solid ${T.line}`, background: T.bg2 }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
              <div>
                <h2 style={{ fontSize: "clamp(20px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: T.fg, margin: "0 0 10px" }}>Send your first email campaign for free.</h2>
                <p style={{ fontSize: 15, color: T.fg4, margin: 0 }}>200 free credits on sign-up. 1 credit per email sent.</p>
              </div>
              <Link href="/auth/sign-up" style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", padding: "14px 32px", background: BLUE, color: "var(--clr-fg)", fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", whiteSpace: "nowrap" as const }}>
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
