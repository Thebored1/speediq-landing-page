"use client"

import type { CSSProperties } from "react"
import { Header } from "@/components/navigation/header"
import { Btn, CheckIcon, ArrowIcon } from "@/components/marketing/atoms"

const PAGE_CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--clr-bg); }
  .gf { --font-mono: "Courier New", Courier, monospace; --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
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

const PLANS = [
  {
    name: "Starter",
    price: "$12",
    credits: "5,000",
    contacts: "5,000",
    seats: "3",
    channels: ["WhatsApp", "Email"],
    features: ["Basic automations", "30-day analytics", "Custom email domains", "CSV contact import", "Unified inbox"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    credits: "15,000",
    contacts: "25,000",
    seats: "10",
    channels: ["WhatsApp", "Email", "SMS"],
    features: ["Full automations + branching", "90-day analytics", "API access", "Advanced segmentation", "10 seats"],
    highlight: true,
  },
  {
    name: "Business",
    price: "$79",
    credits: "50,000",
    contacts: "100,000",
    seats: "Unlimited",
    channels: ["WhatsApp", "Email", "SMS", "Calls (soon)"],
    features: ["AI assist", "1-year analytics", "Audit logs", "Priority support + 99.9% SLA", "Custom roles"],
    highlight: false,
  },
]

const CREDIT_ROWS = [
  { type: "Email campaign", credits: "1 credit" },
  { type: "WhatsApp session message", credits: "2 credits" },
  { type: "WhatsApp utility / auth template", credits: "3 credits" },
  { type: "WhatsApp marketing template", credits: "5 credits" },
  { type: "SMS domestic (US/Canada)", credits: "5 credits" },
  { type: "SMS MMS", credits: "8 credits" },
  { type: "SMS international", credits: "15 credits" },
  { type: "AI assist (per generation)", credits: "10 credits" },
]

const TOPUPS = [
  { credits: "5,000", price: "$6" },
  { credits: "25,000", price: "$24" },
  { credits: "100,000", price: "$85" },
  { credits: "500,000", price: "$339" },
]

const FAQS = [
  { q: "What is a credit?", a: "Credits are the unit of consumption across all SpeedIQ channels. Each message type costs a different number of credits based on the underlying carrier costs." },
  { q: "Do unused credits roll over?", a: "Yes — unused credits roll over for up to 30 days. They never disappear mid-cycle." },
  { q: "Can I change my plan?", a: "Yes, upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the start of the next billing cycle." },
  { q: "Is there a free trial?", a: "Yes — 7 days with 200 credits included. No credit card required to start." },
  { q: "What happens when I run out of credits?", a: "Sends pause automatically. No surprise overages. You can enable auto-recharge to top up at a threshold you set." },
  { q: "Which payment methods do you accept?", a: "All major credit cards via Stripe. Indian customers can also pay in INR via Razorpay." },
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

export default function PricingPage() {
  return (
    <>
      <style>{PAGE_CSS}</style>
      <Header />
      <div className="gf" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "var(--clr-bg)" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>

          {/* ── HERO ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "100px 56px 80px", position: "relative" }}>
              <CornerMarks />
              <Tag>Pricing</Tag>
              <h1 style={{ fontFamily: "inherit", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--clr-fg)", margin: "24px 0 20px", maxWidth: 680 }}>
                Simple, transparent pricing.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--clr-fg3)", maxWidth: 540, margin: "0 0 32px" }}>
                Start free with 200 credits and no credit card required. Scale as your team grows.
              </p>
              <div style={{ display: "inline-flex", gap: 4, padding: "4px", background: "var(--clr-line)", borderRadius: 8, fontFamily: '"Courier New", monospace', fontSize: 11, letterSpacing: "0.05em" }}>
                <div style={{ padding: "8px 16px", background: "var(--clr-cta)", color: "var(--clr-cta-fg)", borderRadius: 6, fontWeight: 700 }}>MONTHLY</div>
                <div style={{ padding: "8px 16px", color: "var(--clr-tag)" }}>YEARLY — 20% OFF</div>
              </div>
            </div>
          </div>

          {/* ── PLAN CARDS ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)", background: "var(--clr-bg2)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "56px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
                {PLANS.map((plan) => (
                  <div key={plan.name} className={plan.highlight ? "pricing-highlight" : undefined} style={{ border: plan.highlight ? "1px solid var(--clr-fg4)" : "1px solid var(--clr-line2)", background: plan.highlight ? "#111" : "var(--clr-bg3)", padding: "40px", position: "relative" }}>
                    {plan.highlight && (
                      <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", background: "var(--clr-cta)", color: "var(--clr-cta-fg)", fontFamily: '"Courier New", monospace', fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", padding: "4px 14px", whiteSpace: "nowrap" }}>
                        MOST POPULAR
                      </div>
                    )}
                    <div style={{ fontFamily: '"Courier New", monospace', fontSize: 11, letterSpacing: "0.1em", color: "var(--clr-fg3)", textTransform: "uppercase" as const, marginBottom: 20 }}>{plan.name}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                      <span style={{ fontSize: 46, fontWeight: 600, color: "var(--clr-fg)", letterSpacing: "-0.03em" }}>{plan.price}</span>
                      <span style={{ fontSize: 14, color: "var(--clr-fg4)" }}>/ month</span>
                    </div>
                    <div style={{ fontFamily: '"Courier New", monospace', fontSize: 10, color: "var(--clr-fg4)", letterSpacing: "0.04em", marginBottom: 32 }}>Annual billing saves 20%</div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 32 }}>
                      {([["Credits", plan.credits + "/mo"], ["Contacts", plan.contacts], ["Seats", plan.seats]] as const).map(([label, value]) => (
                        <div key={label} style={{ background: "var(--dropdown-hover)", padding: "12px", borderRadius: 6 }}>
                          <div style={{ fontFamily: '"Courier New", monospace', fontSize: 9, color: "var(--clr-fg4)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 4 }}>{label}</div>
                          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--clr-fg)" }}>{value}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginBottom: 28 }}>
                      <div style={{ fontFamily: '"Courier New", monospace', fontSize: 9, color: "var(--clr-fg4)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 10 }}>Channels</div>
                      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                        {plan.channels.map(ch => (
                          <span key={ch} style={{ fontFamily: '"Courier New", monospace', fontSize: 10, color: "var(--clr-fg3)", background: "var(--clr-line)", padding: "4px 9px", borderRadius: 4 }}>{ch}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 36 }}>
                      {plan.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--clr-fg3)" }}>
                          <CheckIcon size={13} color="var(--clr-tag)" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <Btn href="/auth/sign-up" variant={plan.highlight ? "primary" : "ghost"} size="lg"
                      style={{ width: "100%", justifyContent: "center", background: plan.highlight ? "var(--clr-cta)" : "transparent", color: plan.highlight ? "var(--clr-cta-fg)" : "var(--clr-fg)", border: plan.highlight ? "none" : "1px solid var(--clr-line)", fontFamily: "inherit" }}>
                      Start free trial
                    </Btn>
                  </div>
                ))}
              </div>
              <p style={{ textAlign: "center", fontFamily: '"Courier New", monospace', fontSize: 10, color: "var(--clr-fg4)", letterSpacing: "0.06em", marginTop: 24 }}>
                7-DAY FREE TRIAL · 200 CREDITS INCLUDED · NO CREDIT CARD REQUIRED
              </p>
            </div>
          </div>

          {/* ── CREDIT COSTS ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "72px 56px" }}>
              <div style={{ maxWidth: 800, margin: "0 auto" }}>
                <Tag>Credit consumption</Tag>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--clr-fg)", margin: "20px 0 40px" }}>
                  How credits are consumed
                </h2>
                <div style={{ border: "1px solid var(--clr-line)" }}>
                  {CREDIT_ROWS.map((row, i) => (
                    <div key={row.type} style={{ display: "grid", gridTemplateColumns: "1fr auto", padding: "16px 24px", borderBottom: i < CREDIT_ROWS.length - 1 ? "1px solid var(--clr-line)" : undefined, background: i % 2 === 0 ? "transparent" : "var(--dropdown-hover)" }}>
                      <span style={{ fontSize: 14, color: "var(--clr-fg3)" }}>{row.type}</span>
                      <span style={{ fontFamily: '"Courier New", monospace', fontSize: 12, color: "var(--clr-fg)", letterSpacing: "0.04em", fontWeight: 700 }}>{row.credits}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "var(--clr-fg4)", marginTop: 14, fontFamily: '"Courier New", monospace', letterSpacing: "0.03em" }}>
                  {">"} Unused credits roll over 30 days. Sends pause at zero — no surprise charges.
                </p>
              </div>
            </div>
          </div>

          {/* ── TOP-UP PACKS ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)", background: "var(--clr-bg2)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "72px 56px" }}>
              <Tag>One-time top-ups</Tag>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--clr-fg)", margin: "20px 0 8px" }}>
                Need extra credits?
              </h2>
              <p style={{ fontSize: 15, color: "var(--clr-fg4)", margin: "0 0 40px" }}>Buy once, use anytime. Volume discounts apply automatically.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 860 }}>
                {TOPUPS.map((pack) => (
                  <div key={pack.credits} style={{ border: "1px solid var(--clr-line2)", padding: "28px 24px", background: "var(--clr-bg3)" }}>
                    <div style={{ fontFamily: '"Courier New", monospace', fontSize: 20, fontWeight: 700, color: "var(--clr-fg)", letterSpacing: "-0.01em", marginBottom: 2 }}>{pack.credits}</div>
                    <div style={{ fontFamily: '"Courier New", monospace', fontSize: 9, color: "var(--clr-fg4)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 20 }}>credits</div>
                    <div style={{ fontSize: 26, fontWeight: 600, color: "var(--clr-fg)", letterSpacing: "-0.02em" }}>{pack.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FAQ ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "72px 56px" }}>
              <div style={{ maxWidth: 800, margin: "0 auto" }}>
                <Tag>FAQ</Tag>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--clr-fg)", margin: "20px 0 40px" }}>Common questions</h2>
                <div style={{ display: "flex", flexDirection: "column" as const }}>
                  {FAQS.map((faq, i) => (
                    <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--clr-line)" }}>
                      <div style={{ fontSize: 15, fontWeight: 500, color: "var(--clr-fg)", marginBottom: 10 }}>{faq.q}</div>
                      <div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--clr-fg3)" }}>{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div style={{ background: "var(--clr-bg4)", borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "80px 56px", position: "relative" }}>
              <CornerMarks />
              <div style={{ maxWidth: 600 }}>
                <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--clr-fg)", margin: "0 0 20px" }}>
                  Start your 7-day free trial.
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--clr-fg3)", margin: "0 0 36px" }}>
                  200 credits included. No credit card required.
                </p>
                <Btn href="/auth/sign-up" variant="primary" size="lg" icon={<ArrowIcon />}
                  style={{ background: "var(--clr-cta)", color: "var(--clr-cta-fg)", border: "none", fontFamily: "inherit" }}>
                  GET STARTED FREE
                </Btn>
              </div>
            </div>
          </div>

          <SiteFooter />
        </div>
      </div>
    </>
  )
}
