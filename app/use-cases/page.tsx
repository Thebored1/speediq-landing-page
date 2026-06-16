"use client"

import type { CSSProperties } from "react"
import { Header } from "@/components/navigation/header"
import { Btn, ArrowIcon } from "@/components/marketing/atoms"

const PAGE_CSS = `*, *::before, *::after { box-sizing: border-box; } html, body { margin: 0; padding: 0; background: var(--clr-bg); } .gf { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; } .dot-grid { background-image: radial-gradient(circle, var(--clr-dot) 1px, transparent 1px); background-size: 20px 20px; }`

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

const INDUSTRIES = [
  {
    n: "01",
    industry: "E-commerce",
    query: "ecommerce",
    headline: "Recover carts. Drive repeat sales.",
    body: "Broadcast flash sales over WhatsApp, automate cart recovery sequences via SMS, and send transactional emails — all from a single workflow. Segment VIP customers for exclusive early access.",
    useCases: ["Abandoned cart recovery (WhatsApp + SMS)", "Order confirmation & shipping alerts", "Flash sale broadcasts", "Post-purchase review requests", "Loyalty programme updates"],
    channels: ["WhatsApp", "Email", "SMS"],
  },
  {
    n: "02",
    industry: "Real Estate",
    query: "realestate",
    headline: "Nurture leads. Route enquiries instantly.",
    body: "Send property alerts via WhatsApp the moment a new listing drops. Automate lead-to-agent assignment through the inbox. Run email drip campaigns for long-cycle buyers.",
    useCases: ["New listing WhatsApp broadcasts", "Lead-to-agent inbox assignment", "Viewing reminder SMS", "Post-viewing follow-up sequences", "Buyer newsletter campaigns"],
    channels: ["WhatsApp", "Email", "SMS"],
  },
  {
    n: "03",
    industry: "Education",
    query: "education",
    headline: "Admissions. Fees. Engagement — automated.",
    body: "Guide prospective students from enquiry to enrolment with automated WhatsApp conversations. Send fee-due reminders by SMS. Keep students engaged with email content calendars.",
    useCases: ["Admissions enquiry WhatsApp flows", "Fee reminder SMS sequences", "Exam schedule notifications", "Course update email newsletters", "Student re-engagement campaigns"],
    channels: ["WhatsApp", "Email", "SMS"],
  },
  {
    n: "04",
    industry: "Fintech",
    query: "fintech",
    headline: "OTPs. KYC. Audit trails — all compliant.",
    body: "Deliver OTPs and KYC reminders over SMS within seconds. Send account alerts via WhatsApp. Keep a full audit log of every message sent — required for regulatory review.",
    useCases: ["OTP delivery via SMS", "KYC document reminder sequences", "Account activity alerts", "Payment confirmation WhatsApp messages", "Regulatory audit log (Business plan)"],
    channels: ["WhatsApp", "SMS"],
  },
  {
    n: "05",
    industry: "SaaS",
    query: "saas",
    headline: "Onboard faster. Retain longer.",
    body: "Trigger onboarding email sequences the moment a trial starts. Send WhatsApp check-ins at key activation milestones. Broadcast feature announcements to active users.",
    useCases: ["Trial onboarding email drip", "Activation milestone WhatsApp nudges", "Feature release broadcast campaigns", "Churn-risk re-engagement sequences", "NPS survey delivery"],
    channels: ["WhatsApp", "Email"],
  },
  {
    n: "06",
    industry: "Agencies",
    query: "agency",
    headline: "Manage all your clients from one login.",
    body: "Each client gets their own isolated workspace with separate WhatsApp accounts, contacts, and billing. Switch workspaces in seconds. Bill clients at a per-workspace level.",
    useCases: ["Multi-workspace client management", "Per-client WhatsApp WABA isolation", "Client billing via separate subscriptions", "White-label campaign execution", "Unified reporting across workspaces"],
    channels: ["WhatsApp", "Email", "SMS"],
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
              {([["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"]] as const).map(([label, href]) => (
                <a key={label} href={href} style={{ fontSize: 12, color: "var(--clr-fg3)", textDecoration: "none" }}>{label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function UseCasesPage() {
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
              <Tag>Use cases</Tag>
              <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--clr-fg)", margin: "24px 0 20px", maxWidth: 720 }}>
                SpeedIQ for every industry.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--clr-fg3)", maxWidth: 560, margin: 0 }}>
                Whether you're recovering carts, sending OTPs, or managing clients — SpeedIQ's omnichannel platform adapts to how your team works.
              </p>
            </div>
          </div>

          {/* ── INDUSTRY GRID ── */}
          {INDUSTRIES.map((ind, i) => (
            <div key={ind.n} style={{ borderBottom: "1px solid var(--clr-line)", background: i % 2 === 0 ? "var(--clr-bg3)" : "var(--clr-bg)" }}>
              <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                  {/* Left: meta */}
                  <div style={{ padding: "56px", borderRight: "1px solid var(--clr-line)", display: "flex", flexDirection: "column" as const, justifyContent: "center" }}>
                    <div style={{ fontFamily: '"Courier New", monospace', fontSize: 18, fontWeight: 300, color: "var(--clr-line3)", marginBottom: 12 }}>{ind.n}</div>
                    <Tag>{ind.industry}</Tag>
                    <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--clr-fg)", margin: "16px 0 14px", lineHeight: 1.2 }}>
                      {ind.headline}
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginTop: 8 }}>
                      {ind.channels.map(ch => (
                        <span key={ch} style={{ fontFamily: '"Courier New", monospace', fontSize: 9, color: "var(--clr-fg3)", background: "var(--clr-line)", padding: "4px 9px", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{ch}</span>
                      ))}
                    </div>
                  </div>
                  {/* Right: detail */}
                  <div style={{ padding: "56px", background: i % 2 === 0 ? "var(--clr-bg2)" : "var(--clr-bg3)", display: "flex", flexDirection: "column" as const, justifyContent: "center" }}>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--clr-fg3)", margin: "0 0 28px", maxWidth: 560 }}>{ind.body}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
                      {ind.useCases.map(uc => (
                        <div key={uc} style={{ fontFamily: '"Courier New", monospace', fontSize: 10, letterSpacing: "0.04em", color: "var(--clr-fg4)", lineHeight: 2 }}>
                          {">"} {uc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* ── CTA ── */}
          <div style={{ background: "var(--clr-bg4)", borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "80px 56px", position: "relative" }}>
              <CornerMarks />
              <div style={{ maxWidth: 600 }}>
                <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--clr-fg)", margin: "0 0 20px" }}>
                  See SpeedIQ in action for your industry.
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
