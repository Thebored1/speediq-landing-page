import { Header } from "@/components/navigation/header"

const SECTIONS = [
  {
    title: "1. Scope and Purpose",
    content: `This Data Processing Agreement ("DPA") supplements the SpeedIQ Terms of Service and governs the processing of personal data by SpeedIQ on behalf of the Customer.

This DPA applies where SpeedIQ processes personal data (including contact phone numbers and email addresses) on behalf of the Customer as a data processor under applicable data protection law, including the EU General Data Protection Regulation (GDPR) and the UK Data Protection Act 2018.`,
  },
  {
    title: "2. Definitions",
    content: `"Customer" means the entity that has subscribed to SpeedIQ.
"Personal Data" means any information relating to an identified or identifiable natural person.
"Data Subject" means any individual whose Personal Data is processed.
"Processing" has the meaning given in applicable data protection law.
"Sub-processor" means any third party engaged by SpeedIQ to process Personal Data on the Customer's behalf.`,
  },
  {
    title: "3. Roles and Responsibilities",
    content: `The Customer is the data controller and SpeedIQ is the data processor in respect of Contact Data uploaded into SpeedIQ.

SpeedIQ processes Contact Data only on the documented instructions of the Customer. The purpose of processing is to deliver the SpeedIQ services as described in the Terms of Service — specifically, to facilitate message delivery across WhatsApp, Email, and SMS channels.`,
  },
  {
    title: "4. Customer Obligations",
    content: `The Customer warrants that:

• All personal data provided to SpeedIQ has been collected lawfully.
• All contacts in the Customer's account have provided appropriate consent to receive marketing or transactional messages.
• The Customer complies with applicable data protection laws in its use of SpeedIQ.
• The Customer will notify SpeedIQ promptly of any changes in applicable law that may affect SpeedIQ's processing obligations.`,
  },
  {
    title: "5. SpeedIQ Obligations",
    content: `SpeedIQ will:

• Process Personal Data only in accordance with Customer instructions and applicable law.
• Implement appropriate technical and organisational measures to protect Personal Data.
• Ensure that staff who process Personal Data are bound by confidentiality obligations.
• Notify the Customer without undue delay of any Personal Data breach affecting Customer data.
• Assist the Customer in responding to Data Subject requests.
• Delete or return all Customer Personal Data upon termination of the service.`,
  },
  {
    title: "6. Sub-processors",
    content: `SpeedIQ uses the following categories of sub-processor:

• Messaging providers: Twilio (SMS delivery), Meta (WhatsApp delivery), Resend (Email delivery).
• Infrastructure: Supabase (database and storage), cloud infrastructure providers.
• Billing: Stripe (payments), Razorpay (INR payments).

SpeedIQ will notify the Customer of any intended changes to sub-processors with at least 14 days' notice. The Customer may object to new sub-processors within this period.`,
  },
  {
    title: "7. International Transfers",
    content: `SpeedIQ may transfer Personal Data outside the European Economic Area (EEA) where necessary to provide the service (e.g., to Twilio or Meta infrastructure). Such transfers are conducted under standard contractual clauses or other appropriate safeguards as required by applicable law.`,
  },
  {
    title: "8. Data Retention",
    content: `SpeedIQ retains Contact Data for the duration of the Customer's subscription and deletes it within 90 days of account termination, unless a longer retention period is required by applicable law.

Message logs are retained according to the Customer's plan: 30 days (Starter), 90 days (Pro), or 1 year (Business).`,
  },
  {
    title: "9. Security Measures",
    content: `SpeedIQ maintains the following technical and organisational security measures:

• TLS encryption for all data in transit.
• AES-256 encryption at rest for sensitive credentials and contact data.
• Role-based access controls within the platform.
• Regular security audits and penetration testing.
• Incident response procedures and breach notification processes.`,
  },
  {
    title: "10. Contact",
    content: `For DPA-related questions or to request a signed copy of this DPA:

Email: privacy@speediq.ai
Subject: "DPA Request"

We will respond within 5 business days.`,
  },
]

export default function DpaPage() {
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
              <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--clr-fg)", margin: "0 0 16px" }}>
                Data Processing Agreement
              </h1>
              <p style={{ fontSize: 14, color: "var(--clr-fg4)", fontFamily: '"Courier New", monospace', letterSpacing: "0.04em", margin: 0 }}>
                Last updated: June 2026
              </p>
            </div>
          </div>

          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "64px 56px" }}>
              <div style={{ maxWidth: 760, margin: "0 auto" }}>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--clr-fg3)", marginBottom: 48 }}>
                  This DPA is entered into between SpeedIQ, Inc. and the Customer identified in the associated SpeedIQ account. It forms part of the agreement between the parties.
                </p>
                {SECTIONS.map((section) => (
                  <div key={section.title} style={{ marginBottom: 40 }}>
                    <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 12px" }}>{section.title}</h2>
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
                    {([["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"], ["Cookies", "/legal/cookies"]] as const).map(([label, href]) => (
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
