import { Header } from "@/components/navigation/header"

const COOKIES = [
  { name: "sb-auth-token", type: "Essential", purpose: "Maintains your authenticated session. Required for the platform to function.", duration: "Session / 7 days" },
  { name: "speediq_project", type: "Essential", purpose: "Remembers your last selected workspace so you land in the right project on return.", duration: "30 days" },
  { name: "theme", type: "Preference", purpose: "Stores your light/dark theme preference.", duration: "1 year" },
  { name: "_analytics_id", type: "Analytics", purpose: "Anonymous identifier used to understand aggregate feature usage and improve the product.", duration: "1 year" },
  { name: "_session", type: "Analytics", purpose: "Tracks a single browsing session to group page views and events.", duration: "Session" },
  { name: "stripe_sid", type: "Third-party", purpose: "Set by Stripe to prevent fraud during payment checkout flows.", duration: "Session" },
]

export default function CookiesPage() {
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
              <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--clr-fg)", margin: "0 0 16px" }}>Cookie Policy</h1>
              <p style={{ fontSize: 14, color: "var(--clr-fg4)", fontFamily: '"Courier New", monospace', letterSpacing: "0.04em", margin: 0 }}>Last updated: June 2026</p>
            </div>
          </div>

          <div style={{ borderBottom: "1px solid var(--clr-line)" }}>
            <div style={{ margin: "0 40px", borderLeft: "1px solid var(--clr-line)", borderRight: "1px solid var(--clr-line)", padding: "64px 56px" }}>
              <div style={{ maxWidth: 820, margin: "0 auto" }}>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--clr-fg3)", marginBottom: 48 }}>
                  SpeedIQ uses cookies and similar technologies to operate the platform, remember your preferences, and understand how our product is used. This policy explains what cookies we use and why.
                </p>

                <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 24px" }}>What Are Cookies?</h2>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--clr-fg3)", marginBottom: 48 }}>
                  Cookies are small text files stored on your device by your browser. They allow websites to remember information about your visit and enable features like keeping you signed in. We use first-party cookies (set by SpeedIQ) and a small number of third-party cookies set by trusted services we integrate with.
                </p>

                <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 20px" }}>Cookies We Use</h2>
                <div style={{ border: "1px solid var(--clr-line)", marginBottom: 48 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2fr 1fr", padding: "12px 20px", borderBottom: "1px solid var(--clr-line2)", background: "var(--dropdown-hover)" }}>
                    {["Name", "Type", "Purpose", "Duration"].map(h => (
                      <div key={h} style={{ fontFamily: '"Courier New", monospace', fontSize: 9, letterSpacing: "0.1em", color: "var(--clr-fg5)", textTransform: "uppercase" as const }}>{h}</div>
                    ))}
                  </div>
                  {COOKIES.map((cookie, i) => (
                    <div key={cookie.name} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2fr 1fr", padding: "16px 20px", borderBottom: i < COOKIES.length - 1 ? "1px solid var(--clr-line)" : undefined, background: i % 2 === 0 ? "transparent" : "var(--clr-line)" }}>
                      <div style={{ fontFamily: '"Courier New", monospace', fontSize: 11, color: "var(--clr-fg2)", letterSpacing: "0.02em" }}>{cookie.name}</div>
                      <div style={{ fontSize: 12, color: "var(--clr-tag)" }}>{cookie.type}</div>
                      <div style={{ fontSize: 13, color: "var(--clr-fg3)", lineHeight: 1.5, paddingRight: 16 }}>{cookie.purpose}</div>
                      <div style={{ fontFamily: '"Courier New", monospace', fontSize: 11, color: "var(--clr-fg4)" }}>{cookie.duration}</div>
                    </div>
                  ))}
                </div>

                <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--clr-fg)", margin: "0 0 14px" }}>Managing Cookies</h2>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--clr-fg3)", marginBottom: 28 }}>
                  You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling essential cookies will prevent you from signing in or using the platform.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--clr-fg3)" }}>
                  For questions about our cookie use, contact privacy@speediq.ai.
                </p>
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
