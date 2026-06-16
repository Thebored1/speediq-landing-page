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
  { n: "01", title: "Multi-Client Campaign Management", body: "Manage WhatsApp, Email, and SMS campaigns for multiple clients from a single SpeedIQ workspace. Switch between client sub-accounts without logging out. Track performance per client.", channels: ["WhatsApp", "Email", "SMS"], stat: "Agencies manage 8+ clients avg from one seat" },
  { n: "02", title: "White-Label Reporting", body: "Export campaign analytics with custom branding. Share real-time delivery, open rate, and reply rate dashboards with clients. Schedule automated reports to land in client inboxes every Monday.", channels: ["Email"], stat: "Save 4 hrs/week on manual reporting" },
  { n: "03", title: "Batch Campaign Scheduling", body: "Pre-schedule an entire month of client campaigns in one session. Use SpeedIQ's approval queue to get client sign-off on copy before broadcasts go live. No missed deadlines.", channels: ["WhatsApp", "Email", "SMS"], stat: "Reduces campaign go-live delays by 80%" },
  { n: "04", title: "Cross-Client Template Library", body: "Build a library of approved WhatsApp and email templates across clients. Reuse, adapt, and share best-performing templates. Stay compliant with Meta's WhatsApp Business API policies.", channels: ["WhatsApp", "Email"], stat: "60% faster campaign briefing-to-live time" },
]

const OTHERS = [["E-commerce", "/use-cases/ecommerce"], ["SaaS", "/use-cases/saas"], ["Real Estate", "/use-cases/real-estate"], ["Education", "/use-cases/education"], ["Fintech", "/use-cases/fintech"]]

export default function AgencyUseCasePage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>
          <div style={{ borderBottom: `1px solid ${T.line}` }}>
            <div style={{ margin: "0 40px", borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, padding: "80px 56px 56px" }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" as const }}>
                <Tag>Use Cases</Tag>
                <span style={{ fontSize: 10, color: T.num, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", textTransform: "uppercase" as const, display: "flex", alignItems: "center" }}>/ Agencies</span>
              </div>
              <h1 style={{ fontSize: "clamp(28px, 4.5vw, 56px)", fontWeight: 500, letterSpacing: "-0.03em", color: T.fg, margin: "0 0 20px", lineHeight: 1.05, maxWidth: 700 }}>Run all your clients from one workspace.</h1>
              <p style={{ fontSize: 16, color: T.fg4, maxWidth: 560, lineHeight: 1.7, margin: "0 0 36px" }}>SpeedIQ gives marketing agencies a single control center for WhatsApp, Email, and SMS campaigns across every client — with sub-accounts, white-label reporting, and bulk scheduling.</p>
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
