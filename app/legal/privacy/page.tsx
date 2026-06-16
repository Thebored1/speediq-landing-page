import { Header } from "@/components/navigation/header"

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly when creating an account, adding contacts, or configuring integrations. This includes:

• Account data: name, email address, company name, and password.
• Billing data: payment card details processed by Stripe or Razorpay (we do not store raw card numbers).
• Contact data: phone numbers, email addresses, and custom fields you upload or sync into SpeedIQ.
• Usage data: pages visited, features used, campaign performance metrics, and event logs.
• Channel credentials: WhatsApp Business Account tokens (held in encrypted storage), Twilio credentials, and email provider API keys.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide and improve the SpeedIQ platform and its features.
• Process payments and manage your subscription.
• Deliver messages on your behalf via WhatsApp, Email, and SMS channels.
• Send you transactional emails (receipts, security alerts, account changes).
• Provide customer support and respond to enquiries.
• Monitor platform performance and prevent abuse.
• Comply with legal obligations.

We do not sell your personal data or your contact data to third parties.`,
  },
  {
    title: "3. Data Storage & Retention",
    content: `Your data is stored on servers in the European Union and the United States. We retain:

• Account data for the duration of your subscription and 90 days after deletion.
• Message logs according to your plan's analytics retention (30 days on Starter, 90 days on Pro, 1 year on Business).
• Billing records for 7 years as required by tax law.
• Contact data until you delete it or close your account.

You may request deletion of your data at any time by contacting support.`,
  },
  {
    title: "4. Sharing & Disclosure",
    content: `We share your information with:

• Sub-processors that power our platform (Twilio for SMS, Meta for WhatsApp, Resend/SMTP providers for email, Stripe/Razorpay for billing, Supabase for database infrastructure).
• Legal authorities when required by law or to protect the rights and safety of SpeedIQ and its users.
• Acquirers in the event of a merger or acquisition, subject to the same privacy obligations.

A full list of our sub-processors is available in our Data Processing Agreement (DPA).`,
  },
  {
    title: "5. Your Rights",
    content: `Depending on your location, you may have the right to:

• Access the personal data we hold about you.
• Correct inaccurate or incomplete data.
• Delete your data (right to erasure).
• Port your data to another service.
• Object to or restrict certain processing activities.
• Withdraw consent where processing is based on consent.

To exercise any of these rights, contact us at privacy@speediq.ai.`,
  },
  {
    title: "6. Cookies",
    content: `SpeedIQ uses essential cookies to maintain your session and remember your preferences. We also use analytics cookies to understand how the platform is used and improve it. You can manage cookie preferences in our Cookie Policy page or via your browser settings.`,
  },
  {
    title: "7. Security",
    content: `We implement industry-standard security measures including:

• TLS encryption in transit for all data.
• AES-256 encryption at rest for sensitive credentials.
• Regular penetration testing and security audits.
• Role-based access control within the platform.
• Audit logging on the Business plan.

No system is perfectly secure. If you believe your account has been compromised, contact security@speediq.ai immediately.`,
  },
  {
    title: "8. Contact Us",
    content: `For privacy questions, data requests, or concerns:

Email: privacy@speediq.ai
Data Controller: SpeedIQ, Inc.

For EU/UK residents, our representative can be reached at the same address. We aim to respond to all privacy requests within 30 days.`,
  },
]

export default function PrivacyPage() {
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
                Privacy Policy
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
                  SpeedIQ ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you use the SpeedIQ platform.
                </p>
                {SECTIONS.map((section) => (
                  <div key={section.title} style={{ marginBottom: 44 }}>
                    <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 14px", letterSpacing: "-0.01em" }}>{section.title}</h2>
                    <div style={{ fontSize: 14, lineHeight: 1.8, color: "var(--clr-fg3)", whiteSpace: "pre-line" as const }}>
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <footer style={{ background: "var(--clr-bg)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)" }}>
              <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 0 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--clr-line)", paddingTop: 28 }}>
                  <div style={{ fontFamily: '"Courier New", monospace', fontSize: 12, color: "var(--clr-fg4)" }}>© 2026 SpeedIQ. All rights reserved.</div>
                  <div style={{ display: "flex", gap: 28 }}>
                    {([["Terms", "/legal/terms"], ["DPA", "/legal/dpa"], ["Cookies", "/legal/cookies"]] as const).map(([label, href]) => (
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
