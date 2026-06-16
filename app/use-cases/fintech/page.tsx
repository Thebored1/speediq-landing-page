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
  { n: "01", title: "Transaction OTPs via WhatsApp & SMS", body: "Send OTPs for high-value transactions via WhatsApp for high-trust delivery, with SMS as failover. SpeedIQ handles dual-channel routing automatically and logs delivery receipts for compliance.", channels: ["WhatsApp", "SMS"], stat: "99.7% OTP delivery rate with failover" },
  { n: "02", title: "Account Alerts & Fraud Notifications", body: "Trigger instant WhatsApp notifications for suspicious logins, large transfers, and unusual spending patterns. Embed a one-tap 'This wasn't me' action link to initiate the freeze flow directly from chat.", channels: ["WhatsApp", "SMS"], stat: "Sub-5 second alert delivery time" },
  { n: "03", title: "Loan & Credit Journey Nurture", body: "Guide applicants through the credit journey with automated milestone messages: application received, documents uploaded, credit decision made, disbursement initiated. Keep users informed without manual outreach.", channels: ["WhatsApp", "Email"], stat: "42% reduction in support tickets during loan process" },
  { n: "04", title: "KYC & Compliance Communications", body: "Automate document expiry reminders, KYC re-verification nudges, and regulatory notices. Log all outbound communications with timestamps for audit trails. Maintain full GDPR and DPDP compliance.", channels: ["Email", "WhatsApp"], stat: "KYC completion rate up 38% with WhatsApp nudges" },
]

const OTHERS = [["E-commerce", "/use-cases/ecommerce"], ["SaaS", "/use-cases/saas"], ["Agencies", "/use-cases/agency"], ["Real Estate", "/use-cases/real-estate"], ["Education", "/use-cases/education"]]

export default function FintechUseCasePage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, padding: "80px 56px 56px" }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" as const }}>
                <Tag>Use Cases</Tag>
                <span style={{ fontSize: 10, color: T.num, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", textTransform: "uppercase" as const, display: "flex", alignItems: "center" }}>/ Fintech</span>
              </div>
              <h1 style={{ fontSize: "clamp(28px, 4.5vw, 56px)", fontWeight: 500, letterSpacing: "-0.03em", color: T.fg, margin: "0 0 20px", lineHeight: 1.05, maxWidth: 700 }}>Secure alerts, OTPs, and compliance at scale.</h1>
              <p style={{ fontSize: 16, color: T.fg4, maxWidth: 560, lineHeight: 1.7, margin: "0 0 36px" }}>SpeedIQ helps fintech platforms deliver instant OTPs, fraud alerts, and compliance communications via WhatsApp and SMS — with full audit trails and 99.7%+ delivery rates.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <Link href="/auth/sign-up" style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", background: T.cta, color: T.ctaFg, fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none" }}>Start Free Trial</Link>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", background: "transparent", color: T.fg3, fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, textDecoration: "none", border: `1px solid ${T.line3}` }}>Talk to Sales</Link>
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
