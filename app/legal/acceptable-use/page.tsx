import { Header } from "@/components/navigation/header"

const ALLOWED = [
  "Sending marketing messages to contacts who have explicitly opted in.",
  "Transactional messages: order confirmations, OTPs, account alerts.",
  "Customer service conversations initiated by the contact.",
  "Educational content relevant to your product or service.",
  "Event invitations and reminders to existing customers.",
  "Re-engagement campaigns to lapsed subscribers (with appropriate opt-out).",
]

const PROHIBITED = [
  "Sending messages to contacts who have not opted in (spam).",
  "Sending unsolicited bulk messages to purchased or scraped contact lists.",
  "Phishing, fraud, or impersonation of other individuals or organisations.",
  "Distributing malware, viruses, or any harmful code.",
  "Sending content that is illegal, defamatory, hateful, or sexually explicit.",
  "Harassment, threats, or abuse directed at any individual.",
  "Circumventing Meta's WhatsApp Business Policy or carrier regulations.",
  "Reselling SpeedIQ access without a signed reseller agreement.",
  "Mining, scraping, or crawling the SpeedIQ platform or APIs.",
  "Testing or benchmarking SpeedIQ for competitive purposes.",
  "Operating automated bots that simulate human interaction without disclosure.",
]

const CHANNEL_RULES = [
  {
    channel: "WhatsApp",
    rules: [
      "All marketing messages must use Meta-approved templates.",
      "You may not send more than one unsolicited marketing message per 24-hour window per contact.",
      "Contacts must have an active WhatsApp conversation with you within 24 hours to receive free-form messages.",
      "You must honour opt-out requests immediately.",
      "Your WhatsApp Business Profile must accurately represent your brand.",
    ],
  },
  {
    channel: "Email",
    rules: [
      "All email lists must be obtained via confirmed opt-in.",
      "Every email must include a clear and functional unsubscribe link.",
      "Your sender identity must be accurate — no misleading 'From' names or addresses.",
      "You must honour unsubscribe requests within 10 business days.",
      "Email content must not include misleading subject lines.",
    ],
  },
  {
    channel: "SMS",
    rules: [
      "US/Canada SMS requires 10DLC registration for promotional messaging.",
      "All contacts must have provided explicit written consent to receive SMS.",
      "Messages must include opt-out instructions (e.g., 'Reply STOP to unsubscribe').",
      "You must honour opt-out requests immediately and retain opt-out records.",
      "SMS content must comply with TCPA (US) and CASL (Canada) regulations.",
    ],
  },
]

export default function AcceptableUsePage() {
  return (
    <>
      <Header />
      <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", background: "var(--clr-bg)", minHeight: "100vh" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>

          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "80px 56px 56px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: '"Courier New", monospace', fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "var(--clr-tag)", marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, background: "var(--clr-fg)", borderRadius: 1 }} />
                Legal
              </div>
              <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--clr-fg)", margin: "0 0 16px" }}>Acceptable Use Policy</h1>
              <p style={{ fontSize: 14, color: "var(--clr-fg4)", fontFamily: '"Courier New", monospace', letterSpacing: "0.04em", margin: 0 }}>Last updated: June 2026</p>
            </div>
          </div>

          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "64px 56px" }}>
              <div style={{ maxWidth: 760, margin: "0 auto" }}>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--clr-fg3)", marginBottom: 48 }}>
                  This Acceptable Use Policy defines how SpeedIQ may and may not be used. Violations may result in account suspension or termination. By using SpeedIQ, you agree to this policy.
                </p>

                <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 16px" }}>Permitted Uses</h2>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 48 }}>
                  {ALLOWED.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, lineHeight: 1.65, color: "var(--clr-fg3)" }}>
                      <span style={{ color: "var(--clr-fg4)", fontFamily: '"Courier New", monospace', fontSize: 12, flexShrink: 0, marginTop: 2 }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>

                <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 16px" }}>Prohibited Uses</h2>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 48 }}>
                  {PROHIBITED.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, lineHeight: 1.65, color: "var(--clr-fg3)" }}>
                      <span style={{ color: "rgba(255,100,100,0.6)", fontFamily: '"Courier New", monospace', fontSize: 12, flexShrink: 0, marginTop: 2 }}>✗</span>
                      {item}
                    </div>
                  ))}
                </div>

                <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 24px" }}>Channel-Specific Requirements</h2>
                {CHANNEL_RULES.map((ch) => (
                  <div key={ch.channel} style={{ marginBottom: 36 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: '"Courier New", monospace', fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--clr-tag)", marginBottom: 14 }}>
                      <span style={{ width: 6, height: 6, background: "var(--clr-fg)", borderRadius: 1 }} />
                      {ch.channel}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                      {ch.rules.map(rule => (
                        <div key={rule} style={{ fontFamily: '"Courier New", monospace', fontSize: 11, letterSpacing: "0.03em", color: "var(--clr-fg4)", lineHeight: 1.9, borderLeft: "1px solid var(--clr-line2)", paddingLeft: 14 }}>
                          {">"} {rule}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div style={{ borderTop: "1px solid var(--clr-line)", paddingTop: 32, marginTop: 16 }}>
                  <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 12px" }}>Enforcement</h2>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--clr-fg3)" }}>
                    SpeedIQ monitors for policy violations including high bounce rates, spam reports, and carrier flags. Accounts found in violation may be suspended immediately without refund. Repeated or severe violations result in permanent termination. Report abuse to abuse@speediq.ai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer style={{ background: "var(--clr-bg)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
              <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 0 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--clr-line)", paddingTop: 28 }}>
                  <div style={{ fontFamily: '"Courier New", monospace', fontSize: 12, color: "var(--clr-fg4)" }}>© 2026 SpeedIQ. All rights reserved.</div>
                  <div style={{ display: "flex", gap: 28 }}>
                    {([["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"], ["DPA", "/legal/dpa"]] as const).map(([label, href]) => (
                      <a key={label} href={href} style={{ fontSize: 12, color: "var(--clr-fg3)", textDecoration: "none" }}>{label}</a>
                    ))}
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
