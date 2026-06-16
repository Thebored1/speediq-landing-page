import { Header } from "@/components/navigation/header"
import Link from "next/link"

const T = {
  bg:    "var(--clr-bg)",
  bg2:   "var(--clr-bg2)",
  fg:    "var(--clr-fg)",
  fg3:   "var(--clr-fg3)",
  fg4:   "var(--clr-fg4)",
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
      <span style={{ width: 7, height: 7, background: T.fg, borderRadius: 1 }} />
      {children}
    </div>
  )
}

const SCENARIOS = [
  { n: "01", title: "Lead Nurture Sequences", body: "When a prospect fills out an enquiry form, automatically send a WhatsApp response in under 60 seconds. Follow up with an email including property brochures, then schedule an SMS reminder 48 hours before the site visit.", channels: ["WhatsApp", "Email", "SMS"], stat: "Contact-to-visit rate improves by 34%" },
  { n: "02", title: "Property Launch Broadcasts", body: "Segment your contact database by location, budget, and property type. Broadcast a pre-launch WhatsApp announcement to qualified leads 48 hours before public listing. Include property images and booking links.", channels: ["WhatsApp", "Email"], stat: "72% open rate on launch day announcements" },
  { n: "03", title: "Site Visit Reminders", body: "Automated SMS and WhatsApp reminders 24 hours and 2 hours before scheduled site visits. Include a one-click reschedule link. Dramatically reduce no-shows and last-minute cancellations.", channels: ["WhatsApp", "SMS"], stat: "No-show rate reduced by 58%" },
  { n: "04", title: "Post-Sale Referral Program", body: "After a successful purchase closes, trigger a thank-you WhatsApp message with a referral link. Follow up 30 days later with an email asking for a testimonial. Automate your word-of-mouth engine.", channels: ["WhatsApp", "Email"], stat: "Referral revenue up 19% in first quarter" },
]

const OTHERS = [["E-commerce", "/use-cases/ecommerce"], ["SaaS", "/use-cases/saas"], ["Agencies", "/use-cases/agency"], ["Education", "/use-cases/education"], ["Fintech", "/use-cases/fintech"]]

export default function RealEstateUseCasePage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, padding: "80px 56px 56px" }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" as const }}>
                <Tag>Use Cases</Tag>
                <span style={{ fontSize: 10, color: T.num, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", textTransform: "uppercase" as const, display: "flex", alignItems: "center" }}>/ Real Estate</span>
              </div>
              <h1 style={{ fontSize: "clamp(28px, 4.5vw, 56px)", fontWeight: 500, letterSpacing: "-0.03em", color: T.fg, margin: "0 0 20px", lineHeight: 1.05, maxWidth: 700 }}>Nurture leads and fill every showing.</h1>
              <p style={{ fontSize: 16, color: T.fg4, maxWidth: 560, lineHeight: 1.7, margin: "0 0 36px" }}>SpeedIQ helps real estate teams respond instantly to enquiries, automate site visit reminders, and run property launch broadcasts to the right segment of qualified buyers.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <Link href="/auth/sign-up" style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", background: T.cta, color: T.ctaFg, fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none" }}>Start Free Trial</Link>
                <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", background: "transparent", color: T.fg3, fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", border: `1px solid ${T.line3}` }}>See Pricing</Link>
              </div>
            </div>
          </div>

          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}` }}>
              {SCENARIOS.map((sc, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", borderBottom: i < SCENARIOS.length - 1 ? `1px solid ${T.line}` : undefined }}>
                  <div style={{ padding: "48px 56px", background: i % 2 === 0 ? T.bg : T.bg2, borderRight: `1px solid ${T.line}`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "'Courier New', monospace", fontSize: 18, fontWeight: 300, color: T.num, marginBottom: 12 }}>{sc.n}</div>
                      <h2 style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 500, letterSpacing: "-0.015em", color: T.fg, margin: "0 0 16px" }}>{sc.title}</h2>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
                      {sc.channels.map(ch => <span key={ch} style={{ padding: "4px 10px", border: `1px solid ${T.line2}`, fontFamily: "'Courier New', monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: T.mono }}>{ch}</span>)}
                    </div>
                  </div>
                  <div style={{ padding: "48px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20 }}>
                    <p style={{ fontSize: 15, color: T.fg3, lineHeight: 1.75, margin: 0 }}>{sc.body}</p>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: T.mono, letterSpacing: "0.06em" }}>→ {sc.stat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, padding: "40px 56px" }}>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: T.tag, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 20 }}>OTHER INDUSTRIES</div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const }}>
                {OTHERS.map(([label, href]) => <Link key={label} href={href} style={{ padding: "8px 16px", border: `1px solid ${T.line2}`, fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: T.fg4, textDecoration: "none" }}>{label}</Link>)}
              </div>
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
