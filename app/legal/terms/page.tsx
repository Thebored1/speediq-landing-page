import { Header } from "@/components/navigation/header"

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: `By creating an account on SpeedIQ or using any part of the service, you agree to be bound by these Terms of Service. If you are using SpeedIQ on behalf of a company or other legal entity, you represent that you have authority to bind that entity.

If you do not agree to these terms, do not use the service.`,
  },
  {
    title: "2. Description of Service",
    content: `SpeedIQ is a SaaS marketing automation platform that enables users to send messages via WhatsApp, Email, and SMS channels. Features include campaigns, templates, audience segmentation, live inbox, automations, analytics, and team management.

We reserve the right to modify, suspend, or discontinue any part of the service at any time, with reasonable notice where possible.`,
  },
  {
    title: "3. Account Registration",
    content: `You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials. You must notify us immediately of any unauthorized access to your account.

You may not share your account with multiple organizations. Each workspace is intended for a single organisation or agency client.`,
  },
  {
    title: "4. Acceptable Use",
    content: `You agree to use SpeedIQ only for lawful purposes and in accordance with our Acceptable Use Policy. You must not:

• Send unsolicited messages (spam) to contacts who have not opted in.
• Use SpeedIQ to send illegal content, phishing messages, or malware.
• Attempt to circumvent Meta's WhatsApp Business Policy or carrier messaging regulations.
• Resell or resub-license SpeedIQ without prior written agreement.
• Reverse-engineer, decompile, or extract source code from the platform.

Violation of the Acceptable Use Policy may result in immediate account suspension.`,
  },
  {
    title: "5. Credits and Billing",
    content: `SpeedIQ operates on a credit-based system. Credits are consumed when messages are sent according to the published credit weight table. Credits included in your plan roll over for up to 30 days. Top-up credits do not expire.

Subscription fees are billed monthly or annually in advance. All fees are non-refundable except as described in our Refund Policy. We reserve the right to change pricing with 30 days' notice.`,
  },
  {
    title: "6. WhatsApp & Channel Compliance",
    content: `Use of WhatsApp through SpeedIQ is subject to Meta's WhatsApp Business Policy and Commerce Policy. You are responsible for ensuring your use of WhatsApp templates complies with Meta's guidelines. Template rejections, account suspensions, or quality rating drops arising from policy violations are your responsibility.

For SMS, you are responsible for complying with applicable telecommunications regulations including 10DLC registration requirements in the US.`,
  },
  {
    title: "7. Data and Privacy",
    content: `Our collection and use of personal data is governed by our Privacy Policy. By using SpeedIQ, you agree to our data practices as described in that policy.

You retain ownership of all contact data and message content you upload or create in SpeedIQ. We process this data only as instructed by you and as described in our Data Processing Agreement (DPA).`,
  },
  {
    title: "8. Intellectual Property",
    content: `SpeedIQ and its original content, features, and functionality are and will remain the exclusive property of SpeedIQ, Inc. Our trademarks and trade dress may not be used without prior written consent.

You grant SpeedIQ a limited, non-exclusive license to process your content solely as necessary to provide the service.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, SpeedIQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the service.

Our total liability to you for any claim shall not exceed the amount you paid to SpeedIQ in the 12 months preceding the event giving rise to the claim.`,
  },
  {
    title: "10. Termination",
    content: `You may terminate your account at any time by cancelling your subscription from the billing settings. We may terminate or suspend your account immediately if you breach these Terms.

Upon termination, your right to use the service ceases. We will retain your data for 90 days after termination before deleting it, unless otherwise required by law.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association.`,
  },
  {
    title: "12. Changes to Terms",
    content: `We may update these Terms from time to time. We will notify you of material changes via email or a notice within the platform. Continued use of the service after changes take effect constitutes acceptance of the updated Terms.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <Header />
      <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", background: "var(--clr-bg)", minHeight: "100vh" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto" }}>

          {/* ── HERO ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "80px 56px 56px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: '"Courier New", monospace', fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "var(--clr-tag)", marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, background: "var(--clr-fg)", borderRadius: 1 }} />
                Legal
              </div>
              <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--clr-fg)", margin: "0 0 16px" }}>
                Terms of Service
              </h1>
              <p style={{ fontSize: 14, color: "var(--clr-fg4)", fontFamily: '"Courier New", monospace', letterSpacing: "0.04em", margin: 0 }}>
                Last updated: June 2026
              </p>
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "64px 56px" }}>
              <div style={{ maxWidth: 760, margin: "0 auto" }}>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--clr-fg3)", marginBottom: 48 }}>
                  These Terms of Service ("Terms") govern your access to and use of the SpeedIQ platform. Please read them carefully.
                </p>
                {SECTIONS.map((section) => (
                  <div key={section.title} style={{ marginBottom: 40 }}>
                    <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>{section.title}</h2>
                    <div style={{ fontSize: 14, lineHeight: 1.8, color: "var(--clr-fg3)", whiteSpace: "pre-line" as const }}>
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <footer style={{ background: "var(--clr-bg)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
              <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 0 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--clr-line)", paddingTop: 28 }}>
                  <div style={{ fontFamily: '"Courier New", monospace', fontSize: 12, color: "var(--clr-fg4)" }}>© 2026 SpeedIQ. All rights reserved.</div>
                  <div style={{ display: "flex", gap: 28 }}>
                    {([["Privacy", "/legal/privacy"], ["DPA", "/legal/dpa"], ["Cookies", "/legal/cookies"]] as const).map(([label, href]) => (
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
