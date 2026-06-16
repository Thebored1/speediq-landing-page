"use client"

import Link from "next/link"
import { Header } from "@/components/navigation/header"

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
}

export default function SignInPage() {
  return (
    <>
      <Header />
      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
        <div style={{ width: "100%", maxWidth: 400 }}>

          {/* Logo mark */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
            <div style={{ width: 28, height: 28, background: "#FF4F00", display: "grid", placeItems: "center", color: "var(--clr-fg)", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>S</div>
            <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em", color: T.fg }}>SpeedIQ</span>
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 500, letterSpacing: "-0.025em", color: T.fg, margin: "0 0 8px" }}>
            Welcome back
          </h1>
          <p style={{ fontSize: 14, color: T.fg4, margin: "0 0 32px" }}>
            Sign in to your SpeedIQ account.
          </p>

          {/* Form card */}
          <div style={{ background: T.bg2, border: `1px solid ${T.line2}`, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 20 }}>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.fg3, fontFamily: "'Courier New', monospace" }}>Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                style={{ width: "100%", padding: "10px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.fg3, fontFamily: "'Courier New', monospace" }}>Password</label>
                <Link href="/auth/forgot-password" style={{ fontSize: 11, color: T.mono, textDecoration: "none", fontFamily: "'Courier New', monospace", letterSpacing: "0.04em" }}>Forgot?</Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                style={{ width: "100%", padding: "10px 14px", background: T.bg3, border: `1px solid ${T.line2}`, color: T.fg, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
              />
            </div>

            <button
              style={{ width: "100%", padding: "12px 0", background: T.cta, color: T.ctaFg, fontWeight: 600, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", cursor: "pointer", fontFamily: "'Courier New', monospace", marginTop: 4 }}
            >
              Sign in
            </button>

          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px 0" }}>
            <div style={{ flex: 1, height: 1, background: T.line2 }} />
            <span style={{ fontSize: 11, color: T.mono, fontFamily: "'Courier New', monospace", letterSpacing: "0.08em" }}>OR</span>
            <div style={{ flex: 1, height: 1, background: T.line2 }} />
          </div>

          {/* Sign up link */}
          <p style={{ textAlign: "center", fontSize: 13, color: T.fg4 }}>
            No account?{" "}
            <Link href="/auth/sign-up" style={{ color: T.fg, fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 3 }}>
              Start your free trial
            </Link>
          </p>

          {/* Legal */}
          <p style={{ textAlign: "center", fontSize: 11, color: T.mono, marginTop: 32, fontFamily: "'Courier New', monospace", letterSpacing: "0.04em", lineHeight: 1.8 }}>
            By signing in you agree to our{" "}
            <Link href="/legal/terms" style={{ color: T.fg4, textDecoration: "underline" }}>Terms</Link>
            {" "}&amp;{" "}
            <Link href="/legal/privacy" style={{ color: T.fg4, textDecoration: "underline" }}>Privacy Policy</Link>
          </p>

        </div>
      </div>
    </>
  )
}
