"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import { Header } from "@/components/navigation/header"
import { Btn, ArrowIcon, WaIcon, MailIcon, SmsIcon } from "@/components/marketing/atoms"

const PAGE_CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--clr-bg); }
  .gf { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
  .dot-grid { background-image: radial-gradient(circle, var(--clr-dot) 1px, transparent 1px); background-size: 20px 20px; }
`

function Tag({ children }: { children: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: '"Courier New", monospace', fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "var(--clr-tag)" }}>
      <span style={{ width: 7, height: 7, background: "var(--clr-fg)", borderRadius: 1, flexShrink: 0 }} />
      {children}
    </div>
  )
}

function CornerMarks() {
  const b: CSSProperties = { position: "absolute", fontFamily: "monospace", fontSize: 11, lineHeight: 1, color: "var(--clr-line3)", userSelect: "none", zIndex: 2 }
  return (
    <>
      <span aria-hidden style={{ ...b, top: -1, left: -1 }}>+</span>
      <span aria-hidden style={{ ...b, top: -1, right: -1 }}>+</span>
      <span aria-hidden style={{ ...b, bottom: -1, left: -1 }}>+</span>
      <span aria-hidden style={{ ...b, bottom: -1, right: -1 }}>+</span>
    </>
  )
}

const CHANNEL_FEATURES = [
  {
    icon: <WaIcon size={20} color="var(--clr-fg)" />,
    title: "WhatsApp Campaigns",
    href: "/features/whatsapp",
    desc: "Send rich template messages, run live chat, and manage broadcasts via the official Meta Business API.",
    highlights: ["Meta-approved template submission", "Live conversation inbox", "Broadcast scheduling", "Delivery analytics"],
  },
  {
    icon: <MailIcon size={20} color="var(--clr-fg)" />,
    title: "Email Marketing",
    href: "/features/email",
    desc: "Build beautiful campaigns with a drag-and-drop editor. Custom domains, open tracking, and full automation support.",
    highlights: ["Drag-and-drop HTML builder", "Custom sending domain", "Open & click tracking", "Unsubscribe management"],
  },
  {
    icon: <SmsIcon size={20} color="var(--clr-fg)" />,
    title: "SMS & 10DLC",
    href: "/features/sms",
    desc: "Reach any phone globally with Twilio-powered SMS. Full 10DLC compliance for US/Canada plus international routing.",
    highlights: ["10DLC registration support", "Global carrier routing", "OTPs & transactional alerts", "MMS support"],
  },
  {
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--clr-fg)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Unified Inbox",
    href: "/features/inbox",
    desc: "Every WhatsApp and SMS reply lands in one shared inbox. Assign conversations to team members and respond with saved templates.",
    highlights: ["Cross-channel thread merging", "Team assignment", "Quick reply shortcuts", "Media attachments"],
  },
]

const PLATFORM_FEATURES = [
  {
    n: "01", title: "Campaigns",
    body: "Schedule broadcasts to any channel with live delivery tracking, retry on failure, and per-contact send logs.",
  },
  {
    n: "02", title: "Templates",
    body: "Build WhatsApp templates and submit to Meta for approval. Drag-and-drop email builder with variable substitution.",
  },
  {
    n: "03", title: "Segments",
    body: "Create reusable audience filters using AND/OR logic. Real-time audience size estimates before every send.",
  },
  {
    n: "04", title: "Automations",
    body: "Drag-and-drop workflow builder. Triggers, conditional branching, webhooks, and automated follow-ups.",
  },
  {
    n: "05", title: "Analytics",
    body: "Delivery, open, click, and reply rates per channel. Data retention up to 1 year on Business plan.",
  },
  {
    n: "06", title: "Contacts",
    body: "Unified contact list with bulk CSV import, custom fields, tags, and conversation history per contact.",
  },
  {
    n: "07", title: "Team & Roles",
    body: "Multi-seat workspaces with four permission levels: Owner, Admin, Editor, Viewer. Email-based invitations.",
  },
]

const WORKFLOW = [
  { n: "01", title: "Import", body: "Bring contacts in via CSV, API, or native web form capture." },
  { n: "02", title: "Segment", body: "Slice your audience with AND/OR filters and live size estimates." },
  { n: "03", title: "Compose", body: "Pick a channel, drop in a template, personalize with variables." },
  { n: "04", title: "Broadcast", body: "Schedule the send and watch delivery land in real time." },
]

const PLATFORM_STATS = [
  { v: "3", l: "channels, one workspace" },
  { v: "98%+", l: "average delivery rate" },
  { v: "<2s", l: "median send latency" },
  { v: "1 yr", l: "data retention on Business" },
]

const TRUST = ["10DLC Registered", "Meta Business API", "GDPR & DPA Ready", "99.9% Uptime SLA", "SOC 2 Practices"]

function SiteFooter() {
  return (
    <footer style={{ background: "var(--clr-bg)" }}>
      <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--clr-line)", paddingTop: 32 }}>
            <div style={{ fontFamily: '"Courier New", monospace', fontSize: 12, color: "var(--clr-fg4)" }}>© 2026 SpeedIQ. All rights reserved.</div>
            <div style={{ display: "flex", gap: 32 }}>
              {([["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"], ["DPA", "/legal/dpa"]] as const).map(([label, href]) => (
                <a key={label} href={href} style={{ fontSize: 12, color: "var(--clr-fg3)", textDecoration: "none" }}>{label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function FeaturesPage() {
  return (
    <>
      <style>{PAGE_CSS}</style>
      <Header />
      <div className="gf" style={{ background: "var(--clr-bg)" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>

          {/* ── HERO ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "100px 56px 80px", position: "relative" }}>
              <CornerMarks />
              <Tag>Features</Tag>
              <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--clr-fg)", margin: "24px 0 20px", maxWidth: 700 }}>
                Everything your marketing team needs — in one workspace.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--clr-fg3)", maxWidth: 560, margin: 0 }}>
                From building automation workflows to broadcasting across WhatsApp, Email, and SMS — SpeedIQ handles it all without the tool sprawl.
              </p>
            </div>
          </div>

          {/* ── CHANNEL FEATURES (4 cards) ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
              <div style={{ padding: "56px 56px 24px" }}>
                <Tag>Channels</Tag>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--clr-fg)", margin: "20px 0 0", maxWidth: 580 }}>
                  Native integrations, not bolt-ons.
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                {CHANNEL_FEATURES.map((f, i) => (
                  <Link key={f.title} href={f.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <div style={{
                      height: "100%",
                      padding: "48px 52px",
                      borderRight: i % 2 === 0 ? "1px solid var(--clr-line)" : undefined,
                      borderBottom: i < 2 ? "1px solid var(--clr-line)" : undefined,
                      background: i % 2 === 0 ? "var(--clr-bg3)" : "var(--clr-bg2)",
                      cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--dropdown-hover)")}
                    onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? "var(--clr-bg3)" : "var(--clr-bg2)")}
                    >
                      <div style={{ marginBottom: 20, color: "var(--clr-fg)" }}>{f.icon}</div>
                      <h3 style={{ fontSize: 20, fontWeight: 500, color: "var(--clr-fg)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>
                        {f.title} <span style={{ fontFamily: '"Courier New", monospace', fontSize: 11, color: "var(--clr-fg4)", letterSpacing: "0.06em", verticalAlign: "middle" }}>→</span>
                      </h3>
                      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--clr-fg3)", margin: "0 0 24px", maxWidth: 400 }}>{f.desc}</p>
                      <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                        {f.highlights.map(h => (
                          <div key={h} style={{ fontFamily: '"Courier New", monospace', fontSize: 10, letterSpacing: "0.04em", color: "var(--clr-fg5)", lineHeight: 2 }}>
                            {">"} {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── PLATFORM TOOLS (spec sheet) ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr" }}>
                {/* Left: intro */}
                <div style={{ padding: "56px 56px", borderRight: "1px solid var(--clr-line)", background: "var(--clr-bg)", display: "flex", flexDirection: "column" as const, gap: 20 }}>
                  <Tag>Platform tools</Tag>
                  <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--clr-fg)", margin: 0, lineHeight: 1.1, maxWidth: 360 }}>
                    One toolkit behind every channel.
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--clr-fg3)", margin: 0, maxWidth: 340 }}>
                    Segmentation, automation, analytics, and team controls all run on shared infrastructure — so a contact, a template, or a report means the same thing everywhere.
                  </p>
                  <div style={{ fontFamily: '"Courier New", monospace', fontSize: 11, letterSpacing: "0.08em", color: "var(--clr-fg5)", marginTop: "auto" }}>
                    {"// "}{PLATFORM_FEATURES.length} core modules
                  </div>
                </div>
                {/* Right: tool list */}
                <div>
                  {PLATFORM_FEATURES.map((f, i) => (
                    <div key={f.n} style={{
                      display: "grid",
                      gridTemplateColumns: "56px 1fr",
                      gap: 16,
                      padding: "24px 40px",
                      background: i % 2 === 0 ? "var(--clr-bg3)" : "var(--clr-bg2)",
                      borderBottom: i < PLATFORM_FEATURES.length - 1 ? "1px solid var(--clr-line)" : undefined,
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--dropdown-hover)")}
                    onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? "var(--clr-bg3)" : "var(--clr-bg2)")}
                    >
                      <div style={{ fontFamily: '"Courier New", monospace', fontSize: 18, fontWeight: 300, color: "var(--clr-line3)", letterSpacing: "0.02em", paddingTop: 2 }}>{f.n}</div>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 500, color: "var(--clr-fg)", margin: "0 0 6px", letterSpacing: "-0.01em" }}>{f.title}</h3>
                        <p style={{ fontFamily: '"Courier New", monospace', fontSize: 11, letterSpacing: "0.04em", color: "var(--clr-fg4)", lineHeight: 1.85, margin: 0, maxWidth: 440 }}>{f.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── WORKFLOW (4 steps) ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
              <div style={{ padding: "56px 56px 28px" }}>
                <Tag>Workflow</Tag>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--clr-fg)", margin: "20px 0 0", maxWidth: 560 }}>
                  From contact list to delivered — in four steps.
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--clr-line)" }}>
                {WORKFLOW.map((s, i) => (
                  <div key={s.n} style={{
                    padding: "40px 36px 48px",
                    borderRight: i < WORKFLOW.length - 1 ? "1px solid var(--clr-line)" : undefined,
                    background: i % 2 === 0 ? "var(--clr-bg3)" : "var(--clr-bg2)",
                  }}>
                    <div style={{ fontFamily: '"Courier New", monospace', fontSize: 28, fontWeight: 300, color: "var(--clr-line3)", letterSpacing: "0.02em", marginBottom: 16 }}>{s.n}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 500, color: "var(--clr-fg)", margin: "0 0 10px", letterSpacing: "-0.01em" }}>{s.title}</h3>
                    <p style={{ fontFamily: '"Courier New", monospace', fontSize: 11, letterSpacing: "0.04em", color: "var(--clr-fg4)", lineHeight: 1.85, margin: 0 }}>{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── STATS BAND ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)", background: "var(--clr-bg)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                {PLATFORM_STATS.map((s, i) => (
                  <div key={s.l} style={{
                    padding: "44px 40px",
                    borderRight: i < PLATFORM_STATS.length - 1 ? "1px solid var(--clr-line)" : undefined,
                  }}>
                    <div style={{ fontSize: 34, fontWeight: 600, color: "var(--clr-fg)", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontFamily: '"Courier New", monospace', fontSize: 11, letterSpacing: "0.05em", color: "var(--clr-fg4)", marginTop: 12 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── TRUST / COMPLIANCE STRIP ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "32px 56px", display: "flex", alignItems: "center", flexWrap: "wrap" as const, gap: 14 }}>
              <span style={{ fontFamily: '"Courier New", monospace', fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "var(--clr-tag)", marginRight: 8 }}>
                Compliance &amp; infra //
              </span>
              {TRUST.map(t => (
                <span key={t} style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  color: "var(--clr-fg3)",
                  border: "1px solid var(--clr-line)",
                  borderRadius: 2,
                  padding: "7px 12px",
                  background: "var(--clr-bg2)",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div style={{ background: "var(--clr-bg4)", borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "80px 56px", position: "relative" }}>
              <CornerMarks />
              <div style={{ maxWidth: 600 }}>
                <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--clr-fg)", margin: "0 0 20px" }}>
                  Ready to bring your channels together?
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--clr-fg3)", margin: "0 0 36px" }}>
                  Sign up free — 7-day trial, 200 credits, no card needed.
                </p>
                <div style={{ display: "flex", gap: 12 }}>
                  <Btn href="/auth/sign-up" variant="primary" size="lg" icon={<ArrowIcon />}
                    style={{ background: "var(--clr-cta)", color: "var(--clr-cta-fg)", border: "none", fontFamily: "inherit" }}>
                    START FREE TRIAL
                  </Btn>
                  <Btn href="/pricing" variant="ghost" size="lg"
                    style={{ background: "transparent", color: "var(--clr-fg)", border: "1px solid var(--clr-line)", fontFamily: "inherit" }}>
                    VIEW PRICING
                  </Btn>
                </div>
              </div>
            </div>
          </div>

          <SiteFooter />
        </div>
      </div>
    </>
  )
}
