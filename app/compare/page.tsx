"use client"

import type { CSSProperties } from "react"
import { Header } from "@/components/navigation/header"
import { Btn, ArrowIcon, CheckIcon } from "@/components/marketing/atoms"

const PAGE_CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--clr-bg); }
  .gf { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
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

const YES = <CheckIcon size={14} color="var(--clr-fg)" />
const NO = <span style={{ fontFamily: '"Courier New", monospace', fontSize: 13, color: "var(--clr-line)" }}>—</span>
const PARTIAL = <span style={{ fontFamily: '"Courier New", monospace', fontSize: 11, color: "var(--clr-fg4)" }}>Partial</span>

type Cell = React.ReactNode

const COMPARE_ROWS: { feature: string; speediq: Cell; esp: Cell; bsp: Cell; sms: Cell }[] = [
  { feature: "WhatsApp Business API", speediq: YES, esp: NO, bsp: YES, sms: NO },
  { feature: "Email campaigns", speediq: YES, esp: YES, bsp: NO, sms: NO },
  { feature: "SMS (global + 10DLC)", speediq: YES, esp: NO, bsp: NO, sms: YES },
  { feature: "Unified inbox (all channels)", speediq: YES, esp: NO, bsp: PARTIAL, sms: NO },
  { feature: "Drag-and-drop email builder", speediq: YES, esp: YES, bsp: NO, sms: NO },
  { feature: "WhatsApp template submission", speediq: YES, esp: NO, bsp: YES, sms: NO },
  { feature: "Audience segmentation", speediq: YES, esp: PARTIAL, bsp: PARTIAL, sms: NO },
  { feature: "Automation workflows", speediq: YES, esp: PARTIAL, bsp: NO, sms: NO },
  { feature: "Cross-channel analytics", speediq: YES, esp: NO, bsp: NO, sms: NO },
  { feature: "Team roles & permissions", speediq: YES, esp: YES, bsp: PARTIAL, sms: PARTIAL },
  { feature: "CSV contact import", speediq: YES, esp: YES, bsp: PARTIAL, sms: PARTIAL },
  { feature: "API access", speediq: YES, esp: YES, bsp: YES, sms: YES },
  { feature: "Credit-based pricing (no per-user)", speediq: YES, esp: NO, bsp: NO, sms: NO },
  { feature: "AI message assist", speediq: YES, esp: PARTIAL, bsp: NO, sms: NO },
  { feature: "7-day free trial (no card)", speediq: YES, esp: PARTIAL, bsp: NO, sms: NO },
]

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "One workspace for three channels",
    body: "Most teams run WhatsApp, email, and SMS from separate tools. SpeedIQ puts all three under one login — same contacts, same analytics, same inbox.",
  },
  {
    n: "02",
    title: "Credit pricing that scales linearly",
    body: "No per-seat fees that penalize growth. Credits scale with your sending volume, not headcount. Unused credits roll over for 30 days.",
  },
  {
    n: "03",
    title: "WhatsApp + Email — natively",
    body: "Most ESPs bolt on WhatsApp as an afterthought. We built WhatsApp and Email as equal first-class channels from day one.",
  },
  {
    n: "04",
    title: "Close the loop between inbox and campaign",
    body: "Reply in the inbox. Trigger a follow-up broadcast. Tag the contact. All in the same workspace, same data, no handoffs.",
  },
]

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

export default function ComparePage() {
  const COLS = [
    { label: "SpeedIQ", sub: "Omnichannel", highlight: true },
    { label: "Generic ESP", sub: "Email only", highlight: false },
    { label: "WhatsApp BSP", sub: "WhatsApp only", highlight: false },
    { label: "SMS Platform", sub: "SMS only", highlight: false },
  ]
  const fields = ["speediq", "esp", "bsp", "sms"] as const

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
              <Tag>Compare</Tag>
              <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--clr-fg)", margin: "24px 0 20px", maxWidth: 720 }}>
                SpeedIQ vs single-channel tools.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--clr-fg3)", maxWidth: 540, margin: 0 }}>
                Most marketing stacks are three separate tools stitched together. SpeedIQ is the alternative — one workspace that does all of it.
              </p>
            </div>
          </div>

          {/* ── COMPARISON TABLE ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)", background: "var(--clr-bg2)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "56px" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                  <thead>
                    <tr>
                      <th style={{ padding: "0 24px 20px 0", textAlign: "left", width: "36%" }}>
                        <div style={{ fontFamily: '"Courier New", monospace', fontSize: 9, color: "var(--clr-fg4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Feature</div>
                      </th>
                      {COLS.map((col) => (
                        <th key={col.label} style={{ padding: "0 16px 20px", textAlign: "center", verticalAlign: "bottom" }}>
                          <div style={{ display: "inline-block", padding: "12px 20px", background: col.highlight ? "var(--clr-cta)" : "var(--dropdown-hover)", border: col.highlight ? "none" : "1px solid var(--clr-line)", borderRadius: 0 }}>
                            <div style={{ fontSize: 13, fontWeight: 600, color: col.highlight ? "var(--clr-cta-fg)" : "var(--clr-fg)", marginBottom: 4 }}>{col.label}</div>
                            <div style={{ fontFamily: '"Courier New", monospace', fontSize: 9, color: col.highlight ? "rgba(0,0,0,0.5)" : "var(--clr-fg5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{col.sub}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((row, i) => (
                      <tr key={row.feature} style={{ borderTop: "1px solid var(--clr-line)", background: i % 2 === 0 ? "transparent" : "var(--clr-line)" }}>
                        <td style={{ padding: "14px 24px 14px 0", fontSize: 13, color: "var(--clr-fg3)" }}>{row.feature}</td>
                        {fields.map((f) => (
                          <td key={f} style={{ padding: "14px 16px", textAlign: "center", background: f === "speediq" ? "var(--clr-line)" : undefined }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>{row[f]}</div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontFamily: '"Courier New", monospace', fontSize: 10, color: "var(--clr-line3)", letterSpacing: "0.04em", marginTop: 20 }}>
                {">"} Comparison reflects general category capabilities, not any specific vendor.
              </p>
            </div>
          </div>

          {/* ── DIFFERENTIATORS ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "56px 56px 24px" }}>
              <Tag>Why SpeedIQ wins</Tag>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--clr-fg)", margin: "20px 0 0", maxWidth: 580 }}>
                Built differently from the ground up.
              </h2>
            </div>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                {DIFFERENTIATORS.map((d, i) => (
                  <div key={d.n} style={{
                    padding: "40px 48px",
                    background: i % 2 === 0 ? "var(--clr-bg3)" : "var(--clr-bg2)",
                    borderRight: i % 2 === 0 ? "1px solid var(--clr-line)" : undefined,
                    borderBottom: i < 2 ? "1px solid var(--clr-line)" : undefined,
                  }}>
                    <div style={{ fontFamily: '"Courier New", monospace', fontSize: 18, fontWeight: 300, color: "var(--clr-line3)", marginBottom: 12 }}>{d.n}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 500, color: "var(--clr-fg)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>{d.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--clr-fg3)", margin: 0, maxWidth: 400 }}>{d.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div style={{ background: "var(--clr-bg4)", borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "80px 56px", position: "relative" }}>
              <CornerMarks />
              <div style={{ maxWidth: 600 }}>
                <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--clr-fg)", margin: "0 0 20px" }}>
                  See the difference yourself.
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--clr-fg3)", margin: "0 0 36px" }}>
                  7-day free trial. 200 credits. No credit card required.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
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
