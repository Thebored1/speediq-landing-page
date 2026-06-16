"use client"

import Link from "next/link"
import { Header } from "@/components/navigation/header"
import { CheckIcon } from "@/components/marketing/atoms"

const T = {
  bg:    "var(--clr-bg)",
  bg2:   "var(--clr-bg2)",
  bg3:   "var(--clr-bg3)",
  fg:    "var(--clr-fg)",
  fg2:   "var(--clr-fg2)",
  fg3:   "var(--clr-fg3)",
  fg4:   "var(--clr-fg4)",
  line:  "var(--clr-line)",
  line2: "var(--clr-line2)",
  line3: "var(--clr-line3)",
  cta:   "var(--clr-cta)",
  ctaFg: "var(--clr-cta-fg)",
  mono:  "var(--clr-mono)",
  tag:   "var(--clr-tag)",
}

const PERKS = [
  "7-day free trial, no credit card required",
  "200 free credits to explore all channels",
  "Access to WhatsApp, Email & SMS",
  "Cancel anytime",
]

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", padding: "80px 24px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

          {/* Left: perks */}
          <div style={{ paddingTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
              <div style={{ width: 28, height: 28, background: "#FF4F00", display: "grid", placeItems: "center", color: "var(--clr-fg)", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>S</div>
              <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em", color: T.fg }}>SpeedIQ</span>
            </div>

            <h1 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 500, letterSpacing: "-0.025em", color: T.fg, margin: "0 0 12px", lineHeight: 1.15 }}>
              Start your free trial today.
            </h1>
            <p style={{ fontSize: 15, color: T.fg4, margin: "0 0 40px", lineHeight: 1.7 }}>
              Join 10,000+ teams using SpeedIQ to run WhatsApp, Email, and SMS from one workspace.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PERKS.map((perk, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <CheckIcon size={16} color="var(--clr-fg)" />
                  <span style={{ fontSize: 14, color: T.fg2 }}>{perk}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, padding: "24px", border: `1px solid ${T.line2}`, background: T.bg2 }}>
              <div style={{ fontSize: 11, fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: T.tag, marginBottom: 12 }}>STARTER PLAN INCLUDED</div>
              <div style={{ fontSize: 22, fontWeight: 500, color: T.fg, marginBottom: 4 }}>$12 <span style={{ fontSize: 13, fontWeight: 400, color: T.fg4 }}>/ month</span></div>
              <div style={{ fontSize: 13, color: T.fg4, lineHeight: 1.7 }}>500 credits/month · WhatsApp, Email & SMS · 2 seats · 1,000 contacts</div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div style={{ background: T.bg2, border: `1px solid ${T.line2}`, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 18 }}>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.fg3, fontFamily: "'Courier New', monospace" }}>First name</label>
                  <input type="text" placeholder="Jane" style={{ width: "100%", padding: "10px 12px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.fg3, fontFamily: "'Courier New', monospace" }}>Last name</label>
                  <input type="text" placeholder="Smith" style={{ width: "100%", padding: "10px 12px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.fg3, fontFamily: "'Courier New', monospace" }}>Work email</label>
                <input type="email" placeholder="you@company.com" style={{ width: "100%", padding: "10px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.fg3, fontFamily: "'Courier New', monospace" }}>Company name</label>
                <input type="text" placeholder="Acme Inc." style={{ width: "100%", padding: "10px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.fg3, fontFamily: "'Courier New', monospace" }}>Password</label>
                <input type="password" placeholder="Min. 8 characters" style={{ width: "100%", padding: "10px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
              </div>

              <button style={{ width: "100%", padding: "13px 0", background: T.cta, color: T.ctaFg, fontWeight: 600, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", cursor: "pointer", fontFamily: "'Courier New', monospace", marginTop: 4 }}>
                Start Free Trial
              </button>

              <p style={{ fontSize: 11, color: T.mono, textAlign: "center", fontFamily: "'Courier New', monospace", letterSpacing: "0.04em", lineHeight: 1.8 }}>
                By signing up you agree to our{" "}
                <Link href="/legal/terms" style={{ color: T.fg4, textDecoration: "underline" }}>Terms</Link>
                {" "}&amp;{" "}
                <Link href="/legal/privacy" style={{ color: T.fg4, textDecoration: "underline" }}>Privacy Policy</Link>
              </p>
            </div>

            <p style={{ textAlign: "center", fontSize: 13, color: T.fg4, marginTop: 20 }}>
              Already have an account?{" "}
              <Link href="/auth/sign-in" style={{ color: T.fg, fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 3 }}>Sign in</Link>
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
