import { Header } from "@/components/navigation/header"

const SECTIONS = [
  {
    title: "General Policy",
    content: `SpeedIQ's subscription fees are generally non-refundable. When you subscribe to a SpeedIQ plan, you are committing to the billing cycle you selected (monthly or annual).

However, we understand that circumstances change, and we handle refund requests on a case-by-case basis in the situations described below.`,
  },
  {
    title: "7-Day Free Trial",
    content: `All new SpeedIQ accounts receive a 7-day free trial with 200 credits. No credit card is required to start a trial.

You will not be charged during the trial period. If you do not subscribe before the trial ends, your account will downgrade to a read-only state and no charge will be applied.`,
  },
  {
    title: "Subscription Refunds",
    content: `We offer refunds in the following circumstances:

• Double-charged: If you were charged twice for the same billing period, we will refund the duplicate charge in full.
• Service outage: If SpeedIQ experiences a significant platform outage (>4 hours in a billing month) and we fail to meet our stated SLA, affected Business plan customers may request a prorated service credit.
• Accidental annual upgrade: If you accidentally upgrade to an annual plan and contact us within 48 hours, we will refund the annual charge and revert you to a monthly subscription.

Refunds are not available for:
• Monthly subscription fees after the billing period has started.
• Unused credits remaining on a plan at cancellation.
• One-time credit top-up packs that have been (fully or partially) consumed.`,
  },
  {
    title: "Annual Plan Cancellation",
    content: `If you cancel an annual plan mid-year, your account will remain active until the end of the paid period. We do not provide prorated refunds for unused months on annual plans.

If you cancel within 48 hours of purchasing an annual plan (and have not sent more than 100 messages), you may be eligible for a full refund. Contact support@speediq.ai within the 48-hour window.`,
  },
  {
    title: "Credit Top-Up Packs",
    content: `Credit top-up packs are non-refundable once purchased. They do not expire and carry over until consumed, so we encourage you to start with a smaller pack if you are unsure of your credit requirements.

If you purchased a top-up pack and your account is subsequently suspended due to a policy violation, the unused credits are forfeited and non-refundable.`,
  },
  {
    title: "How to Request a Refund",
    content: `To request a refund, email support@speediq.ai with:

• Your account email address.
• The date and amount of the charge.
• The reason for your refund request.

We will respond within 3 business days. Approved refunds are processed within 5–10 business days depending on your payment provider (Stripe or Razorpay).`,
  },
]

export default function RefundPage() {
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
              <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--clr-fg)", margin: "0 0 16px" }}>Refund Policy</h1>
              <p style={{ fontSize: 14, color: "var(--clr-fg4)", fontFamily: '"Courier New", monospace', letterSpacing: "0.04em", margin: 0 }}>Last updated: June 2026</p>
            </div>
          </div>

          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "64px 56px" }}>
              <div style={{ maxWidth: 760, margin: "0 auto" }}>
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
