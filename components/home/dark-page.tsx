"use client"

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react"
import { AsciiNoise } from "@/components/ascii/ascii-noise"
import { Header } from "@/components/navigation/header"
import {
  ArrowIcon,
  Btn,
  CheckIcon,
  ItalicEmph,
  MailIcon,
  PhoneIcon,
  SmsIcon,
  WaIcon,
} from "@/components/marketing/atoms"

const CHAR_W = 7.4
const CHAR_H = 12.88

// ─── Design atoms ──────────────────────────────────────────────────────────

function Tag({ children, color = "#ffffff" }: { children: string; color?: string }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
      textTransform: "uppercase" as const,
      color: "rgba(255,255,255,0.45)",
    }}>
      <span style={{ width: 7, height: 7, background: color, borderRadius: 1, flexShrink: 0 }} />
      {children}
    </div>
  )
}

function Num({ children }: { children: string }) {
  return (
    <span style={{
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em",
    }}>
      {children}
    </span>
  )
}

function CornerMarks() {
  const base: CSSProperties = {
    position: "absolute",
    fontFamily: "monospace", fontSize: 11, lineHeight: 1,
    color: "rgba(255,255,255,0.18)", userSelect: "none", zIndex: 2,
  }
  return (
    <>
      <span aria-hidden style={{ ...base, top: -1, left: -1 }}>+</span>
      <span aria-hidden style={{ ...base, top: -1, right: -1 }}>+</span>
      <span aria-hidden style={{ ...base, bottom: -1, left: -1 }}>+</span>
      <span aria-hidden style={{ ...base, bottom: -1, right: -1 }}>+</span>
    </>
  )
}

// ─── Self-sizing ASCII panel ───────────────────────────────────────────────

function AsciiPanel({ 
  style,
  charSet = "subtle",
  fgColor,
  bgColor = "#0A0A0A",
  scale = 0.035
}: { 
  style?: CSSProperties,
  charSet?: string,
  fgColor?: string,
  bgColor?: string,
  scale?: number
}) {
  const ref  = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ cols: 60, rows: 20 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      const { width, height } = el.getBoundingClientRect()
      setDims({
        cols: Math.max(4, Math.floor(width  / CHAR_W)),
        rows: Math.max(4, Math.floor(height / CHAR_H)),
      })
    }
    const ro = new ResizeObserver(update)
    ro.observe(el)
    update()
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", ...style }}>
      <AsciiNoise
        cols={dims.cols} rows={dims.rows}
        scale={scale} octaves={4} persistence={0.5}
        contrast={1.6} speed={0.012} charSet={charSet}
        style={{ width: "100%", height: "100%", background: bgColor, color: fgColor }}
      />
    </div>
  )
}

// ─── Concentric market circles ─────────────────────────────────────────────

function MarketCircles() {
  const cx = 130, cy = 130
  const tiers = [
    { r: 120, label: "TAM", value: "$58B",  sublabel: "Marketing automation" },
    { r: 78,  label: "SAM", value: "$7.2B", sublabel: "Conversational tools" },
    { r: 38,  label: "SOM", value: "$280M", sublabel: "Multi-channel SMB" },
  ]
  return (
    <svg viewBox="0 0 260 260" style={{ width: "100%", maxWidth: 320, height: "auto" }}>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .spin-ring-1 { animation: spin-slow 60s linear infinite; transform-origin: 130px 130px; }
        .spin-ring-2 { animation: spin-slow-reverse 45s linear infinite; transform-origin: 130px 130px; }
      `}</style>
      {tiers.map((t, i) => {
        const topY = cy - t.r
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={t.r} fill="none"
              stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray={i > 0 ? "3 4" : undefined}
              className={i === 1 ? "spin-ring-1" : i === 2 ? "spin-ring-2" : ""}
            />
            <text x={cx} y={topY + 13}
              textAnchor="middle" fontFamily="'Courier New', monospace"
              fontSize="8" letterSpacing="0.12em"
              fill="rgba(255,255,255,0.3)"
            >{t.label}</text>
            <text x={cx} y={topY + 29}
              textAnchor="middle" fontFamily="'Courier New', monospace"
              fontSize={i === 0 ? 18 : i === 1 ? 15 : 12} fontWeight="700"
              fill="#fff"
            >{t.value}</text>
          </g>
        )
      })}
      {/* Centre dot */}
      <circle cx={cx} cy={cy} r={2} fill="rgba(255,255,255,0.15)" />
    </svg>
  )
}

// ─── Page data ─────────────────────────────────────────────────────────────

const CHANNELS = [
  { key: "wa", label: "WhatsApp", color: "#ffffff", icon: <WaIcon size={13} color="#fff" /> },
  { key: "em", label: "Email",    color: "#3b82f6", icon: <MailIcon size={13} color="#fff" /> },
  { key: "sm", label: "SMS",      color: "#a855f7", icon: <SmsIcon size={13} color="#fff" /> },
  { key: "ph", label: "Calls",    color: "#f59e0b", icon: <PhoneIcon size={13} color="#fff" /> },
]

const PAIN_LINES = [
  "TOOL SPRAWL — AVG 3.4 MARKETING PLATFORMS PER TEAM",
  "TEMPLATE DELAYS — 4+ DAYS TO WHATSAPP APPROVAL",
  "INBOX CHAOS — 62% OF BROADCAST REPLIES NEVER ACTIONED",
  "ANALYTICS GAPS — NO CROSS-CHANNEL CONVERSION VIEW",
]

const PLATFORM_COLS = [
  {
    n: "01", title: "Unified Inbox",
    items: ["Manage conversations across apps", "Assign threads to team members", "Quick replies and templates", "Nothing falls through the cracks"],
  },
  {
    n: "02", title: "Broadcasts & Segments",
    items: ["Filter audiences with AND/OR logic", "Schedule cross-channel campaigns", "Use approved WhatsApp templates", "Track delivery in real-time"],
  },
  {
    n: "03", title: "Analytics & Templates",
    items: ["Drag-and-drop email builder", "Monitor open and reply rates", "See cross-channel attribution", "Up to 1-year data retention"],
  },
]

const VALUES = [
  {
    title: "Built to scale",
    body: "From 100 contacts to 10 million. SpeedIQ batches, queues, and rate-limits so you never hit a wall.",
    accent: "#ffffff",
  },
  {
    title: "No-code first",
    body: "Anyone on your team can build a broadcast, set up a segment, or template — no engineering required.",
    accent: "#ffffff",
  },
  {
    title: "All channels native",
    body: "Not a bolt-on integration. WhatsApp, email, and SMS were designed in from the start.",
    accent: "#ffffff",
  },
  {
    title: "Inbox to campaign",
    body: "Close the loop between a reply in the inbox and a follow-up broadcast — same workspace, same data.",
    accent: "#ffffff",
  },
]

// ─── Feature visuals ───────────────────────────────────────────────────────

function InboxVisual() {
  return (
    <svg viewBox="0 0 300 300" width="100%" height="100%" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
      <defs>
        <filter id="shadow-1">
          <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#ffffff" floodOpacity="0.2" />
        </filter>
      </defs>
      <g transform="translate(0, 30)">
        {/* Tray bottom */}
        <path d="M 150 200 L 250 150 L 150 100 L 50 150 Z" fill="rgba(255,255,255,0.02)" filter="url(#shadow-1)" />
        {/* Tray walls */}
        <path d="M 50 150 L 150 200 L 150 220 L 50 170 Z" fill="rgba(255,255,255,0.05)" />
        <path d="M 150 200 L 250 150 L 250 170 L 150 220 Z" fill="rgba(255,255,255,0.1)" />
        
        {/* Paper 1 */}
        <path d="M 150 170 L 230 130 L 150 90 L 70 130 Z" fill="#0A0A0A" stroke="#ffffff" strokeWidth="1.5" filter="url(#shadow-1)"/>
        <path d="M 110 130 L 170 100" stroke="rgba(255,255,255,0.5)" />
        <path d="M 120 145 L 180 115" stroke="rgba(255,255,255,0.5)" />
      </g>
    </svg>
  )
}

function BroadcastVisual() {
  return (
    <svg viewBox="0 0 300 300" width="100%" height="100%" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
      <defs>
        <filter id="shadow-2">
          <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#ffffff" floodOpacity="0.15" />
        </filter>
      </defs>
      <g transform="translate(0, 40)">
        <path d="M 150 220 L 260 165 L 150 110 L 40 165 Z" fill="rgba(255,255,255,0.02)" filter="url(#shadow-2)" />
        <ellipse cx="150" cy="165" rx="80" ry="40" strokeDasharray="4 6" stroke="rgba(255,255,255,0.2)" />
        <ellipse cx="150" cy="165" rx="50" ry="25" strokeDasharray="4 6" stroke="rgba(255,255,255,0.3)" />
        <path d="M 130 165 L 130 90 A 20 10 0 0 0 170 90 L 170 165" fill="#0A0A0A" stroke="#ffffff" />
        <ellipse cx="150" cy="90" rx="20" ry="10" fill="rgba(255,255,255,0.1)" stroke="#ffffff" />
      </g>
    </svg>
  )
}

function AnalyticsVisual() {
  return (
    <svg viewBox="0 0 300 300" width="100%" height="100%" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinejoin="round">
      <defs>
        <filter id="shadow-3">
          <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#ffffff" floodOpacity="0.2" />
        </filter>
      </defs>
      <g transform="translate(0, 50)">
        <path d="M 150 220 L 250 170 L 150 120 L 50 170 Z" fill="rgba(255,255,255,0.02)" filter="url(#shadow-3)" />
        <path d="M 100 145 L 200 195 M 200 145 L 100 195" stroke="rgba(255,255,255,0.1)" />
        
        <path d="M 100 170 L 120 160 L 120 120 L 100 130 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.5)" />
        <path d="M 80 160 L 100 170 L 100 130 L 80 120 Z" fill="#0A0A0A" stroke="rgba(255,255,255,0.5)" />
        <path d="M 80 120 L 100 130 L 120 120 L 100 110 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" />

        <path d="M 140 190 L 160 180 L 160 90 L 140 100 Z" fill="rgba(255,255,255,0.1)" stroke="#ffffff" />
        <path d="M 120 180 L 140 190 L 140 100 L 120 90 Z" fill="#0A0A0A" stroke="#ffffff" />
        <path d="M 120 90 L 140 100 L 160 90 L 140 80 Z" fill="rgba(255,255,255,0.3)" stroke="#ffffff" />
        
        <path d="M 180 170 L 200 160 L 200 130 L 180 140 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.5)" />
        <path d="M 160 160 L 180 170 L 180 140 L 160 130 Z" fill="#0A0A0A" stroke="rgba(255,255,255,0.5)" />
        <path d="M 160 130 L 180 140 L 200 130 L 180 120 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" />
      </g>
    </svg>
  )
}

function TemplateVisual() {
  return (
    <svg viewBox="0 0 300 300" width="100%" height="100%" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
      <defs>
        <filter id="shadow-4">
          <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#ffffff" floodOpacity="0.15" />
        </filter>
      </defs>
      <g transform="translate(0, 30)">
        <path d="M 150 230 L 230 190 L 150 150 L 70 190 Z" fill="rgba(255,255,255,0.02)" filter="url(#shadow-4)" />
        <path d="M 150 200 L 230 160 L 150 120 L 70 160 Z" fill="#0A0A0A" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
        <path d="M 150 170 L 230 130 L 150 90 L 70 130 Z" fill="#0A0A0A" stroke="#ffffff" strokeWidth="2" filter="url(#shadow-4)" />
        <path d="M 130 130 L 160 115" stroke="rgba(255,255,255,0.5)" strokeWidth="4" />
        <path d="M 140 145 L 190 120" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <path d="M 150 160 L 180 145" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      </g>
    </svg>
  )
}

const FEATURES: { title: string; body: string; visual: ReactNode }[] = [
  {
    title: "Visual Workflow Builder",
    body: "Drag-and-drop automations with triggers, branching logic, and webhooks. Automatically respond to email replies or inbound SMS.",
    visual: <InboxVisual />,
  },
  {
    title: "Advanced Segmentation",
    body: "Filter your audience using AND/OR logic. See real-time audience size estimations and apply dynamic tagging to contacts.",
    visual: <BroadcastVisual />,
  },
  {
    title: "Unified Team Inbox",
    body: "Manage conversations across WhatsApp and SMS in one place. Assign threads, use quick replies, and attach media seamlessly.",
    visual: <AnalyticsVisual />,
  },
  {
    title: "Cross-Channel Analytics",
    body: "Track delivery, open, click, and reply rates across WhatsApp, Email, and SMS. Store data up to 1 year on enterprise plans.",
    visual: <TemplateVisual />,
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────

export function DarkPage() {
  
  
  const containerRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ cols: 120, rows: 40 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const { width, height } = el.getBoundingClientRect()
      setDims({ 
        cols: Math.max(10, Math.floor(width / CHAR_W)), 
        rows: Math.max(10, Math.floor(height / CHAR_H)) 
      })
    }
    const ro = new ResizeObserver(update)
    ro.observe(el)
    update()
    return () => ro.disconnect()
  }, [])

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: #000; }
        .gf {
          --font-display: Georgia, "Times New Roman", serif;
          --font-mono: "Courier New", Courier, monospace;
          --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          --fg: #fff;
          --bg: #080808;
          --line: rgba(255,255,255,0.08);
          --line-2: rgba(255,255,255,0.18);
          --fg-3: rgba(255,255,255,0.48);
          --fg-4: rgba(255,255,255,0.28);
          --accent: #ffffff;
          --radius-lg: 12px;
          --radius-sm: 6px;
        }
        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

      <Header />
      <div className="gf" style={{ fontFamily: "var(--font-sans)", background: "#080808" }}>
        <div style={{ maxWidth: 1920, margin: "0 auto", position: "relative", overflow: "hidden" }}>

        {/* ── NAV + HERO ────────────────────── */}
        <div>
          <div style={{ position: "relative" }}>
            {/* Nav removed because global Header is used */}

            {/* Hero */}
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ margin: "0 40px", position: "relative" }}>
                  <div
                  ref={containerRef}
                  style={{
                    height: "clamp(1000px, 95vh, 1200px)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                    borderRight: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
              {/* ASCII fills the frame */}
              <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <AsciiNoise
                  cols={dims.cols} rows={dims.rows}
                  scale={0.015} octaves={8} persistence={0.2}
                  contrast={4} speed={0.02} charSet="classic"
                  style={{ width: "100%", height: "100%", background: "#080808", color: "#d4d4d4" }}
                />
              </div>
              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.7) 45%, rgba(8,8,8,0) 100%)", pointerEvents: "none", zIndex: 1,
              }} />
              {/* Strong bottom shadow fade */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "80%",
                background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0) 100%)",
                pointerEvents: "none", zIndex: 2,
              }} />

              {/* Content Column (Top Copy + Bottom Preview) */}
              <div style={{
                position: "relative", flex: 1, zIndex: 10,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "flex-start",
                padding: "80px 40px 0",
                width: "100%",
                gap: 60,
              }}>
                
                {/* Top Copy */}
                <div style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  gap: 24,
                  width: "100%",
                  maxWidth: "1100px", // Align with dashboard width
                }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase" as const,
                    color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.05)",
                    padding: "6px 12px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)"
                  }}>
                    <span style={{ width: 8, height: 8, background: "#fff", borderRadius: "50%" }} />
                    OMNICHANNEL AUTOMATION
                  </div>

                  <h1 style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(38px, 5.2vw, 68px)",
                    lineHeight: 1.05, letterSpacing: "-0.03em",
                    fontWeight: 500, margin: 0, color: "#fff", maxWidth: "800px",
                    textShadow: "0 4px 40px rgba(0,0,0,0.8)",
                  }}>
                    One inbox for WhatsApp,<br />
                    <ItalicEmph>Email & SMS.</ItalicEmph>
                  </h1>

                  <p style={{
                    fontSize: 16, lineHeight: 1.6, margin: 0,
                    color: "rgba(255,255,255,0.52)", maxWidth: 600,
                    textShadow: "0 1px 12px rgba(0,0,0,0.9)",
                  }}>
                    A SaaS marketing automation platform consolidating broadcasts, templates, segments, and analytics into a unified workspace. Automate, engage, and scale.
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4, color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                     <div style={{ display: "flex", gap: 2 }}>
                        {[1,2,3,4,5].map(i => <span key={i} style={{color: "#fff", fontSize: 16}}>★</span>)}
                     </div>
                     <div>4.9 • 5.5k Ratings <span style={{textDecoration: "underline", color: "rgba(255,255,255,0.4)", marginLeft: 4, cursor: "pointer"}}>10K+ Reviews</span></div>
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const, justifyContent: "flex-start", marginTop: 8 }}>
                    <Btn href="/auth/sign-up" variant="primary" size="lg"
                      style={{ background: "#fff", color: "#000", border: "none", fontFamily: "inherit", fontWeight: 500 }}>
                      START FREE TRIAL
                    </Btn>
                    <Btn href="/compare" variant="ghost" size="lg"
                      style={{ background: "#111", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "inherit" }}>
                      Try CRM for free
                    </Btn>
                  </div>
                </div>

                {/* Bottom Preview Window (Absolutely positioned to prevent container stretch and enforce bottom crop) */}
                <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%) scale(0.733)", transformOrigin: "top center", top: "560px", width: "1500px", zIndex: 1 }}>
                  <DashboardPreview />
                </div>
              </div>

              {/* Scroll cue */}
              <div style={{
                position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
                fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.16em",
                color: "rgba(255,255,255,0.18)", textTransform: "uppercase" as const,
                pointerEvents: "none",
              }}>
                <span>SCROLL</span>
                <span style={{ width: 1, height: 22, background: "rgba(255,255,255,0.12)" }} />
              </div>
                </div>
              </div>
            </div>

            {/* Empty separator row to separate hero from grid below */}
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#080808" }}>
              <div style={{
                  margin: "0 40px",
                  position: "relative",
                  padding: "18px 40px",
                  borderLeft: "1px solid rgba(255,255,255,0.08)",
                  borderRight: "1px solid rgba(255,255,255,0.08)"
              }}>
                <div style={{ height: 14 }} />
              </div>
            </div>

          </div>
        </div>



        {/* ── PROBLEM / GOAL / PLATFORM (reference-style grid) ─────────── */}
        <div style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{
            margin: "0 40px",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            position: "relative"
          }}>
              <CornerMarks />

              {/* ── Row 1: Problem copy | ASCII animation ── */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                minHeight: 440,
              }}>
                {/* Problem copy */}
                <div style={{
                  padding: "64px 56px",
                  background: "#0D0D0D",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}>
                  <div>
                    <Tag color="#ffffff">THE PROBLEM</Tag>
                    <h2 style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(24px, 3vw, 40px)",
                      fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.25,
                      color: "#fff", margin: "24px 0 0",
                    }}>
                      Marketing teams run on 3+ fragmented tools with no unified view of the customer.
                    </h2>
                  </div>

                  {/* Monospace pain-point list */}
                  <div style={{ marginTop: 48 }}>
                    <div style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.28)", marginBottom: 12,
                      textTransform: "uppercase" as const,
                    }}>
                      {">"} KEY PAIN POINTS ARE MULTIPLYING...
                    </div>
                    {PAIN_LINES.map((line, i) => (
                      <div key={i} style={{
                        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em",
                        color: "rgba(255,255,255,0.38)", lineHeight: 2,
                        borderLeft: "1px solid rgba(255,255,255,0.1)",
                        paddingLeft: 12, marginBottom: 4,
                      }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Centered smaller square ASCII panel */}
                <div className="dot-grid" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "#0A0A0A",
                }}>
                  <div style={{
                    width: 320, height: 320,
                    border: "1px solid rgba(255,255,255,0.08)",
                    position: "relative"
                  }}>
                    <AsciiPanel style={{ width: "100%", height: "100%" }} />
                  </div>
                </div>
              </div>

              {/* ── Row 2: Market circles | Goal ── */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                minHeight: 380,
              }}>
                {/* Concentric circles */}
                <div style={{
                  padding: "64px 56px", background: "#0A0A0A",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32,
                }}>
                  <MarketCircles />
                  <div style={{
                    display: "flex", gap: 24, flexWrap: "wrap" as const, justifyContent: "center",
                  }}>
                    {[
                      { label: "TAM", sub: "Marketing automation" },
                      { label: "SAM", sub: "Conversational tools" },
                      { label: "SOM", sub: "Multi-channel SMB" },
                    ].map((t, i) => (
                      <div key={i} style={{ textAlign: "center" }}>
                        <div style={{
                          fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.1em",
                          color: "rgba(255,255,255,0.28)", textTransform: "uppercase" as const,
                        }}>{t.label}</div>
                        <div style={{
                          fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(255,255,255,0.18)",
                          letterSpacing: "0.04em", marginTop: 4,
                        }}>{t.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Goal */}
                <div style={{
                  padding: "64px 56px", background: "#0D0D0D",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                }}>
                  <Tag color="#ffffff">The goal</Tag>
                  <h2 style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(24px, 3vw, 40px)",
                    fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.25,
                    color: "#fff", margin: "24px 0 24px",
                  }}>
                    Build the workspace that makes channel fragmentation impossible.
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7,
                    color: "rgba(255,255,255,0.42)", margin: 0, maxWidth: 460,
                  }}>
                    One login for campaigns, conversations, analytics, and templates — across WhatsApp, Email, SMS, and Calls.
                  </p>
                </div>
              </div>

              {/* ── Row 3: Platform pillars ── */}
              </div>
            </div>
            
            {/* ── PLATFORM LABEL (Full width line) ── */}
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#080808" }}>
              <div style={{
                margin: "0 40px",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                padding: "18px 40px",
              }}>
                <Tag color="#ffffff">The platform</Tag>
              </div>
            </div>

            {/* ── PLATFORM GRID ── */}
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{
                margin: "0 40px",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                position: "relative"
              }}>
                {/* Three columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                  {PLATFORM_COLS.map((col, i) => (
                    <div key={i} style={{
                      padding: "32px 36px",
                      background: i % 2 === 0 ? "#0D0D0D" : "#0A0A0A",
                      borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                    }}>
                      <div style={{
                        fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 300,
                        color: "rgba(255,255,255,0.18)", letterSpacing: "0.02em", marginBottom: 10,
                      }}>{col.n}</div>
                      <h3 style={{
                        fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500,
                        color: "#fff", margin: "0 0 18px", letterSpacing: "-0.01em",
                      }}>{col.title}</h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        {col.items.map((item, j) => (
                          <div key={j} style={{
                            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em",
                            color: "rgba(255,255,255,0.38)", lineHeight: 2,
                          }}>
                            {">"} {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

        {/* ── SPACER ──────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{
            margin: "0 40px",
            height: "50px",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)"
          }} />
        </div>

        {/* ── OUR SOLUTION (2x2 Grid) ─────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{
            margin: "0 40px",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            position: "relative",
            background: "#0A0A0A"
          }}>
            <CornerMarks />

            <div style={{
              padding: "72px 56px 40px",
            }}>
              <h2 style={{
                fontFamily: "var(--font-sans)", fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.1,
                color: "#fff", margin: "0 0 16px", maxWidth: 600,
              }}>
                Unified Workspace for Modern Marketing
              </h2>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6,
                color: "rgba(255,255,255,0.46)", margin: 0, maxWidth: 540,
              }}>
                From building visual workflows to running cross-channel broadcasts, SpeedIQ brings your entire marketing stack under one roof—ensuring seamless engagement without compromising speed or scale.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", padding: "0 56px 72px" }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{
                  display: "flex", flexDirection: "column",
                  border: "1px dashed rgba(255,255,255,0.2)",
                  padding: "48px 48px 0",
                  position: "relative",
                  background: "#0A0A0A",
                }}>
                  <div style={{ marginBottom: 40 }}>
                    <h3 style={{
                      fontFamily: "var(--font-sans)", fontSize: 22, fontWeight: 500,
                      color: "#fff", margin: "0 0 12px", letterSpacing: "-0.01em",
                    }}>{f.title}</h3>
                    <p style={{
                      fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6,
                      color: "rgba(255,255,255,0.42)", margin: 0, maxWidth: 400,
                    }}>{f.body}</p>
                  </div>

                  <div style={{
                    marginTop: "auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24,
                    paddingBottom: 48,
                  }}>
                    <a href="#" style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em",
                      color: "#ffffff", textDecoration: "none", textTransform: "uppercase" as const,
                      display: "inline-flex", alignItems: "center", gap: 7,
                      borderBottom: `1px solid rgba(255,255,255,0.25)`, paddingBottom: 4,
                      marginBottom: 16,
                    }}>
                      LEARN MORE
                    </a>

                    <div style={{
                      position: "absolute",
                      right: -10, bottom: 0,
                      width: 380, height: 380,
                      pointerEvents: "none",
                    }}>
                      {f.visual}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>        {/* ── SPACER ──────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{
            margin: "0 40px",
            height: "50px",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)"
          }} />
        </div>

        {/* ── CHANNELS ──────────────────────────────────────────────── */}
        <div style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ margin: "0 40px", borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
            
            <div style={{ padding: "64px 40px 80px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: 24 }}>
                Omnichannel marketing designed for scale.
              </div>
              
              <h2 style={{
                fontFamily: "var(--font-sans)", fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.1,
                color: "#fff", maxWidth: 800, margin: 0,
              }}>
                Unified campaigns across WhatsApp, Email, and SMS.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 3fr 3fr 1fr", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div />
              {[
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
                  title: "WhatsApp.",
                  desc: "Engage customers globally with official Meta Business API. Send rich templates, automate replies, and handle live chats seamlessly."
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>,
                  title: "Email.",
                  desc: "Build beautiful emails with our drag-and-drop HTML builder. Schedule campaigns, track open rates, and manage subscriptions with ease."
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>,
                  title: "SMS.",
                  desc: "Deliver critical alerts, OTPs, and promotional texts directly to users' phones with Twilio-powered global SMS and 10DLC support."
                }
              ].map((step, i) => (
                <div key={i} style={{
                  padding: "120px 40px 48px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  borderLeft: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <div style={{ marginBottom: 32, color: "#fff" }}>
                    {step.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-sans)", fontSize: 24, fontWeight: 500,
                    color: "#fff", margin: "0 0 16px", letterSpacing: "-0.015em",
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6,
                    color: "rgba(255,255,255,0.6)", margin: 0,
                  }}>{step.desc}</p>
                </div>
              ))}
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }} />
            </div>

          </div>
        </div>

        {/* ── SPACER ──────────────────────────────────────────────────────── */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{
            margin: "0 40px",
            height: "50px",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)"
          }} />
        </div>

        {/* ── CTA WITH ASCII ────────────────────────────────────────────── */}
        <div style={{ background: "#050505", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
          <div style={{ margin: "0 40px", borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
            
            {/* ASCII Background Map */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none", opacity: 0.7 }}>
              <AsciiPanel
                scale={0.035} fgColor="rgba(255,255,255,0.55)" bgColor="#050505" charSet="classic"
                style={{ width: "100%", height: "100%" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #050505 0%, transparent 20%, transparent 80%, #050505 100%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #050505 0%, transparent 20%, transparent 80%, #050505 100%)" }} />
              {/* Extra gradient behind text for legibility */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.7) 45%, transparent 100%)", zIndex: 0 }} />
            </div>

            <div style={{ padding: "80px 0", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
              <CornerMarks />
              <div style={{ maxWidth: 800 }}>
                <h2 style={{
                  fontFamily: "var(--font-sans)", fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.05,
                  color: "#fff", margin: "0 0 24px",
                }}>
                  Start scaling your marketing today.
                </h2>
                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.6,
                  color: "rgba(255,255,255,0.6)", margin: "0 0 48px", maxWidth: 500,
                }}>
                  Sign up for a 7-day free trial. Get 200 free credits to test WhatsApp, Email, and SMS campaigns—no credit card required.
                </p>
                <div style={{ display: "flex", gap: 16 }}>
                  <Btn href="/auth/sign-up" variant="primary" size="lg" icon={<ArrowIcon />}
                    style={{ background: "#ffffff", color: "#000", border: "1px solid #ffffff", fontFamily: "inherit" }}>
                    START FREE TRIAL
                  </Btn>
                  <Btn href="/docs" variant="ghost" size="lg" icon={<span style={{fontSize: 12}}>📄</span>}
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "inherit" }}>
                    VIEW DOCS
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer style={{ background: "#080808" }}>
          <div style={{ margin: "0 40px", borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 0 40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 80 }}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 700,
                    color: "#fff", letterSpacing: "0.1em", marginBottom: 24,
                  }}>SPEEDIQ</div>
                </div>
                
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 20 }}>Products</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {["WhatsApp API", "Email Marketing", "SMS & 10DLC", "Unified Inbox"].map(link => (
                      <a key={link} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{link}</a>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 20 }}>Resources</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {["API Docs", "Use Cases", "Pricing", "Customer Stories"].map(link => (
                      <a key={link} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{link}</a>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 20 }}>Resources</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {["Documentation", "API Reference", "Support"].map(link => (
                      <a key={link} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{link}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                  © 2026 SpeedIQ. All rights reserved.
                </div>
                <div style={{ display: "flex", gap: 32 }}>
                  {["Privacy Policy", "Terms of Service", "Security"].map(link => (
                    <a key={link} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{link}</a>
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

function DashboardPreview() {
  return (
    <div style={{
      width: "1500px",
      height: "1000px",
      background: "#050505",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "16px",
      display: "flex",
      overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
    }}>
      {/* Sidebar */}
      <div style={{ width: "220px", background: "#020202", borderRight: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", padding: "20px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
             <div style={{ width: 28, height: 28, background: "#fff", borderRadius: 6, display: "flex", flexWrap: "wrap", gap: 2, padding: 4 }}>
                <div style={{ width: "40%", height: "40%", background: "#000", borderRadius: 2 }} />
                <div style={{ width: "40%", height: "40%", background: "#000", borderRadius: 2 }} />
                <div style={{ width: "40%", height: "40%", background: "#000", borderRadius: 2 }} />
                <div style={{ width: "40%", height: "40%", background: "#000", borderRadius: 2 }} />
             </div>
             <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>Company</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", fontFamily: "var(--font-sans)" }}>SpeedIQ ™</div>
             </div>
          </div>
          {/* Menu Items */}
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px 12px", borderRadius: 8, color: "rgba(255,255,255,0.8)", fontSize: 14, display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
             <span style={{opacity: 0.5}}>🔍</span> Search <span style={{marginLeft: "auto", fontSize: 10, opacity: 0.5}}>⌘F</span>
          </div>
          <div style={{ padding: "10px 12px", color: "rgba(255,255,255,0.8)", fontSize: 14, display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
             <span style={{opacity: 0.5}}>📬</span> Inbox <div style={{ background: "#fff", color: "#000", fontSize: 10, padding: "2px 6px", borderRadius: 10, marginLeft: "auto", fontWeight: 600 }}>4</div>
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)", marginBottom: 12, paddingLeft: 12 }}>MAIN MENU</div>
          {[
            { n: "Dashboard", a: true, i: "⌂" },
            { n: "Campaigns", a: false, i: "📢" },
            { n: "Templates", a: false, i: "📝" },
            { n: "Contacts", a: false, i: "👥" },
            { n: "Live Chat", a: false, i: "💬" }
          ].map(m => (
            <div key={m.n} style={{ padding: "10px 12px", borderRadius: 8, color: m.a ? "#000" : "rgba(255,255,255,0.6)", background: m.a ? "#fff" : "transparent", fontSize: 14, fontWeight: m.a ? 500 : 400, marginBottom: 4, display: "flex", gap: 10, alignItems: "center" }}>
               <span style={{ opacity: m.a ? 1 : 0.5, width: 16 }}>{m.i}</span> {m.n}
            </div>
          ))}
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)", marginTop: 20, marginBottom: 12, paddingLeft: 12 }}>MANAGEMENT</div>
          {[
            { n: "Billing", i: "💳" },
            { n: "Team", i: "👥" },
            { n: "Settings", i: "⚙️" },
          ].map(m => (
            <div key={m.n} style={{ padding: "10px 12px", borderRadius: 8, color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 4, display: "flex", gap: 10, alignItems: "center" }}>
               <span style={{ opacity: 0.5, width: 16 }}>{m.i}</span> {m.n}
            </div>
          ))}
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#050505" }}>
         {/* Top Header */}
         <div style={{ height: "60px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: 8 }}>
               ⌂ Dashboard
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
               <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Updated 2 min ago</div>
               <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: 6, background: "transparent", cursor: "pointer" }}>
                  <span style={{fontSize: 14}}>↻</span> Reload
               </div>
            </div>
         </div>
         
         {/* Scrollable Content */}
         <div style={{ flex: 1, padding: "24px", display: "flex", gap: 24 }}>
            {/* Left Column */}
            <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: 24 }}>
               {/* Quick Actions */}
               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 600, color: "#fff", fontFamily: "var(--font-sans)" }}>Quick Actions</div>
                  <div style={{ display: "flex", gap: 8 }}>
                     <div style={{ background: "#fff", color: "#000", padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>New Campaign</div>
                     <div style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", padding: "8px 16px", borderRadius: 20, fontSize: 13 }}>Import Contacts</div>
                  </div>
               </div>

               {/* Metrics & Breakdown */}
               <div style={{ display: "flex", gap: 20 }}>
                  <div style={{ flex: 1, border: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A", borderRadius: 12, padding: "24px" }}>
                     <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 12 }}>Active Contacts <span style={{fontSize: 16}}>👥</span></div>
                     <div style={{ fontSize: 36, fontWeight: 600, color: "#fff", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>125,400</div>
                        <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "4px 10px", fontSize: 12, fontWeight: 400, display: "flex", alignItems: "center", gap: 6 }}>
                           <span style={{color: "#fff", fontSize: 14}}>●</span> All Channels ⌄
                        </div>
                     </div>
                     <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ color: "#fff", fontSize: 12, fontWeight: 500, background: "rgba(255,255,255,0.1)", padding: "4px 8px", borderRadius: 20 }}>+12.5%</div>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>+14,200 new subscribers this month</div>
                     </div>
                  </div>
                  <div style={{ flex: 1.5, border: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A", borderRadius: 12, padding: "24px" }}>
                     <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 24 }}>Audience by Channel <span>ℹ</span></div>
                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
                        {[
                          { c: "#fff", l: "WhatsApp", p: "55%", v: "68,970" },
                          { c: "rgba(255,255,255,0.7)", l: "Email", p: "35%", v: "43,890" },
                          { c: "rgba(255,255,255,0.4)", l: "SMS", p: "10%", v: "12,540" },
                        ].map(ch => (
                          <div key={ch.l} style={{ textAlign: "center" }}>
                             <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: ch.c }} /> {ch.l} • {ch.p}
                             </div>
                             <div style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>{ch.v}</div>
                          </div>
                        ))}
                     </div>
                     <div style={{ height: 24, borderRadius: 12, display: "flex", overflow: "hidden", gap: 2 }}>
                        <div style={{ flex: 5.5, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.3) 2px, transparent 2px, transparent 4px)" }} />
                        <div style={{ flex: 3.5, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2) 2px, transparent 2px, transparent 4px)" }} />
                        <div style={{ flex: 1, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 2px, transparent 2px, transparent 4px)" }} />
                     </div>
                  </div>
               </div>

               {/* Chart */}
               <div style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A", borderRadius: 12, padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                     <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Messages Delivered</div>
                     <div style={{ color: "rgba(255,255,255,0.5)" }}>⋮</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                     <div style={{ fontSize: 28, fontWeight: 600, color: "#fff" }}>1,482,900</div>
                     <div style={{ color: "#fff", fontSize: 12, fontWeight: 500, background: "rgba(255,255,255,0.1)", padding: "4px 8px", borderRadius: 20 }}>98.5% Delivery Rate</div>
                     <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>last 30 days</div>
                  </div>
                  {/* Dotted Chart */}
                  <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingTop: 20, position: "relative" }}>
                     {[3, 4, 2, 3, 5, 12, 6, 7, 5, 8, 4, 6].map((v, i) => (
                        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
                           {Array.from({ length: 12 }).map((_, j) => (
                              <div key={j} style={{ width: 8, height: 8, borderRadius: "50%", background: (12-j) <= v ? (i === 5 ? "#fff" : "rgba(255,255,255,0.2)") : "rgba(255,255,255,0.03)" }} />
                           ))}
                           <div style={{ fontSize: 11, color: i === 5 ? "#fff" : "rgba(255,255,255,0.4)", fontWeight: i === 5 ? 600 : 400, marginTop: 12 }}>{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}</div>
                        </div>
                     ))}
                     
                     {/* Tooltip on Jun */}
                     <div style={{ position: "absolute", left: "45%", top: "20%", background: "#fff", color: "#000", padding: "16px", borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.5)", zIndex: 10 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Jun, 2026</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                           <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#000" }} />
                           <span style={{ color: "rgba(0,0,0,0.6)" }}>Messages Sent</span>
                           <span style={{ fontWeight: 600 }}>142,500</span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

            {/* Right Column (Quick Broadcast Box) */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
               <div style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A", borderRadius: 12, padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                     <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Quick Broadcast</div>
                     <div style={{ color: "rgba(255,255,255,0.5)" }}>⋮</div>
                  </div>
                  
                  <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "24px", background: "#050505", marginTop: 8 }}>
                     <div style={{ display: "flex", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
                        <span>Channel</span> <span style={{color: "#fff", marginLeft: 8, display: "flex", alignItems: "center", gap: 4}}><div style={{width: 12, height: 12, borderRadius: "50%", background: "#fff"}}/> WhatsApp ⌄</span>
                     </div>
                     <div style={{ fontSize: 24, fontWeight: 600, color: "#fff", textAlign: "center", marginBottom: 16 }}>Summer Sale 2026</div>
                     <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textAlign: "center" }}>Template: <span style={{color: "#fff"}}>promo_discount_v2</span></div>
                  </div>

                  <div style={{ textAlign: "center", margin: "-18px 0", zIndex: 2 }}>
                     <div style={{ display: "inline-flex", width: 36, height: 36, background: "#fff", borderRadius: "50%", alignItems: "center", justifyContent: "center", border: "4px solid #0A0A0A", color: "#000", fontSize: 18 }}>
                        ↓
                     </div>
                  </div>

                  <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "24px", background: "#050505" }}>
                     <div style={{ display: "flex", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
                        <span>Audience</span> <span style={{color: "#fff", marginLeft: 8, display: "flex", alignItems: "center", gap: 4}}><div style={{width: 12, height: 12, borderRadius: "50%", background: "rgba(255,255,255,0.7)"}}/> VIP Customers ⌄</span>
                     </div>
                     <div style={{ fontSize: 32, fontWeight: 600, color: "#fff", textAlign: "center" }}>15,200 <span style={{fontSize: 16, color: "rgba(255,255,255,0.4)"}}>recipients</span></div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 12 }}>
                     <div style={{ display: "flex", justifyContent: "space-between" }}><span>Credit Cost (Est)</span><span style={{color: "#fff", fontWeight: 500}}>76,000</span></div>
                     <div style={{ display: "flex", justifyContent: "space-between" }}><span>Available Credits</span><span style={{color: "#fff", fontWeight: 500}}>145,000</span></div>
                     <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 500, color: "#fff", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}><span>Schedule</span><span style={{color: "#fff"}}>Send Now</span></div>
                  </div>

                  <div style={{ background: "#fff", color: "#000", padding: "16px", borderRadius: 8, textAlign: "center", fontWeight: 600, marginTop: 16, fontSize: 15 }}>
                     Send Campaign
                  </div>

                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>
                     <div style={{ fontWeight: 500, color: "#fff", marginBottom: 4 }}>Compliance ℹ</div>
                     All recipients have opted-in to marketing messages.
                  </div>

               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
