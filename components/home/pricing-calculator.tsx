"use client"

import { type CSSProperties, useId, useMemo, useState } from "react"
import { Btn, ArrowIcon } from "@/components/marketing/atoms"

// ─── Theme palettes (mirror dark-page.tsx / light-page.tsx exactly) ──────────

type Mode = "dark" | "light"

function palette(mode: Mode) {
  const dark = mode === "dark"
  const w = (a: number) => (dark ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`)
  return {
    sectionBg: dark ? "#080808" : "#ffffff",
    leftBg: dark ? "#0D0D0D" : "#ebebeb",
    rightBg: dark ? "#0A0A0A" : "#f5f5f5",
    cardBg: dark ? "#0D0D0D" : "#ffffff",
    fg: dark ? "#ffffff" : "#000000",
    fg42: w(0.42),
    fg38: w(0.38),
    fg28: w(0.28),
    fg18: w(0.18),
    tag: w(0.45),
    line: w(0.08),
    line2: w(0.12),
    line3: w(0.18),
    track: w(0.12),
    btnBg: dark ? "#ffffff" : "#000000",
    btnFg: dark ? "#000000" : "#ffffff",
  }
}

const FONT_MONO = '"Courier New", Courier, monospace'
const FONT_SANS = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'

// ─── Data ────────────────────────────────────────────────────────────────────

// Per-message credit costs mirror the /pricing "How credits are consumed" table.
const ROWS = [
  { key: "email", label: "Email sends", cost: 1, max: 20000, step: 500, def: 4000 },
  { key: "waUtil", label: "WhatsApp utility", cost: 3, max: 10000, step: 250, def: 1250 },
  { key: "waMkt", label: "WhatsApp marketing", cost: 5, max: 10000, step: 250, def: 1000 },
  { key: "sms", label: "SMS (domestic)", cost: 5, max: 5000, step: 100, def: 600 },
] as const

type RowKey = (typeof ROWS)[number]["key"]

// Recommendation tiers mirror the /pricing plan cards.
const PLANS = [
  { name: "Starter", credits: 5000, price: "$12" },
  { name: "Pro", credits: 15000, price: "$29" },
  { name: "Business", credits: 50000, price: "$79" },
] as const

const PRODUCTS = [
  {
    n: "01",
    title: "Unified Multi-Channel Messaging",
    body: "WhatsApp, Email, and SMS from one workspace — approved templates, segments, and a shared inbox.",
  },
  {
    n: "02",
    title: "Smart Cross-Channel Automation",
    body: "Trigger-based flows and cross-channel analytics. Set it once and let campaigns run on autopilot.",
  },
] as const

const fmt = (n: number) => n.toLocaleString("en-US")

// ─── Section ─────────────────────────────────────────────────────────────────

export function PricingCalculator({ mode }: { mode: Mode }) {
  const c = palette(mode)
  const slider = useId().replace(/[^a-zA-Z0-9]/g, "")

  const [vals, setVals] = useState<Record<RowKey, number>>(
    () => Object.fromEntries(ROWS.map((r) => [r.key, r.def])) as Record<RowKey, number>,
  )

  const total = useMemo(() => ROWS.reduce((s, r) => s + vals[r.key] * r.cost, 0), [vals])
  const plan = useMemo(() => PLANS.find((p) => total <= p.credits) ?? PLANS[PLANS.length - 1], [total])
  const planIndex = PLANS.indexOf(plan)

  const corner: CSSProperties = {
    position: "absolute", fontFamily: "monospace", fontSize: 11, lineHeight: 1,
    color: c.line3, userSelect: "none", zIndex: 2,
  }

  return (
    <div style={{ background: c.sectionBg, borderBottom: `1px solid ${c.line}` }}>
      <style>{`
        input[type="range"].${slider} {
          -webkit-appearance: none; appearance: none;
          width: 100%; height: 2px; background: ${c.track};
          outline: none; cursor: pointer; margin: 0;
        }
        input[type="range"].${slider}::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 13px; height: 13px; border-radius: 50%;
          background: ${c.fg}; cursor: pointer;
        }
        input[type="range"].${slider}::-moz-range-thumb {
          width: 13px; height: 13px; border: none; border-radius: 50%;
          background: ${c.fg}; cursor: pointer;
        }
      `}</style>

      <div style={{
        margin: "0 40px", position: "relative",
        borderLeft: `1px solid ${c.line}`, borderRight: `1px solid ${c.line}`,
      }}>
        <span aria-hidden style={{ ...corner, top: -1, left: -1 }}>+</span>
        <span aria-hidden style={{ ...corner, top: -1, right: -1 }}>+</span>
        <span aria-hidden style={{ ...corner, bottom: -1, left: -1 }}>+</span>
        <span aria-hidden style={{ ...corner, bottom: -1, right: -1 }}>+</span>

        <div className="pc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {/* ── Left: copy ── */}
          <div style={{
            padding: "64px 56px", background: c.leftBg,
            borderRight: `1px solid ${c.line}`,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              {/* Tag */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: FONT_MONO, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: c.tag,
              }}>
                <span style={{ width: 7, height: 7, background: c.fg, borderRadius: 1 }} />
                Pricing calculator
              </div>

              <h2 style={{
                fontFamily: FONT_SANS, fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.25,
                color: c.fg, margin: "24px 0 0", maxWidth: 460,
              }}>
                Pay only for what you send — across every channel.
              </h2>

              {/* Divider below the title */}
              <div style={{ height: 1, background: c.line2, marginTop: 32 }} />
            </div>

            {/* Two numbered product cards (reference layout) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: 56 }}>
              {PRODUCTS.map((p, i) => (
                <div key={p.n} style={{
                  paddingRight: i === 0 ? 32 : 0,
                  paddingLeft: i === 1 ? 32 : 0,
                  borderLeft: i === 1 ? `1px solid ${c.line2}` : undefined,
                }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 38, height: 38, marginBottom: 18, borderRadius: 6,
                    background: "#3b82f6", color: "#ffffff",
                    fontFamily: FONT_MONO, fontSize: 12, fontWeight: 700, letterSpacing: "0.02em",
                  }}>{p.n}</div>
                  <h3 style={{
                    fontFamily: FONT_SANS, fontSize: 16, fontWeight: 600,
                    color: c.fg, margin: "0 0 10px", letterSpacing: "-0.01em",
                  }}>{p.title}</h3>
                  <p style={{
                    fontFamily: FONT_SANS, fontSize: 13, lineHeight: 1.55,
                    color: c.fg42, margin: 0,
                  }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: calculator ── */}
          <div className="dot-grid" style={{
            padding: "64px 56px", background: c.rightBg,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ width: "100%", maxWidth: 480, border: `1px solid ${c.line}`, background: c.cardBg }}>
              {/* Sliders */}
              <div style={{ padding: "36px 36px 32px", display: "flex", flexDirection: "column", gap: 28 }}>
                {ROWS.map((r) => (
                  <div key={r.key}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                      <span style={{ display: "inline-flex", alignItems: "baseline", gap: 8, minWidth: 0 }}>
                        <span style={{ fontFamily: FONT_SANS, fontSize: 14, fontWeight: 500, color: c.fg }}>{r.label}</span>
                        <span style={{ fontFamily: FONT_MONO, fontSize: 10, color: c.fg28, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{r.cost} cr</span>
                      </span>
                      <span style={{ fontFamily: FONT_MONO, fontSize: 14, fontWeight: 700, color: c.fg, whiteSpace: "nowrap" }}>
                        {fmt(vals[r.key])}
                      </span>
                    </div>
                    <input
                      type="range" className={slider}
                      min={0} max={r.max} step={r.step} value={vals[r.key]}
                      aria-label={r.label}
                      onChange={(e) => setVals((v) => ({ ...v, [r.key]: Number(e.target.value) }))}
                    />
                  </div>
                ))}
              </div>

              {/* Estimate */}
              <div style={{ padding: "32px 36px", borderTop: `1px solid ${c.line}` }}>
                <div style={{
                  fontFamily: FONT_MONO, fontSize: 10, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: c.fg28, marginBottom: 10,
                }}>
                  Estimated credits / month
                </div>
                <div style={{
                  fontFamily: FONT_SANS, fontSize: 64, fontWeight: 600, letterSpacing: "-0.03em",
                  color: c.fg, lineHeight: 1,
                }}>
                  {fmt(total)}
                </div>

                {/* Recommended plan */}
                <div style={{
                  display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12,
                  marginTop: 28, paddingTop: 24, borderTop: `1px solid ${c.line}`,
                }}>
                  <div>
                    <div style={{
                      fontFamily: FONT_MONO, fontSize: 10, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: c.fg28, marginBottom: 8,
                    }}>
                      Recommended plan
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                      <span style={{ fontFamily: FONT_SANS, fontSize: 22, fontWeight: 600, color: c.fg, letterSpacing: "-0.01em" }}>{plan.name}</span>
                      <span style={{ fontFamily: FONT_MONO, fontSize: 12, color: c.fg42 }}>{plan.price}/mo</span>
                    </div>
                  </div>
                  {/* Tier ticks */}
                  <div style={{ display: "flex", gap: 4 }}>
                    {PLANS.map((_, i) => (
                      <span key={i} style={{ width: 18, height: 3, background: i <= planIndex ? c.fg : c.line3 }} />
                    ))}
                  </div>
                </div>

                <Btn
                  href="/auth/sign-up" size="lg" icon={<ArrowIcon />}
                  style={{
                    width: "100%", justifyContent: "center", marginTop: 28,
                    background: c.btnBg, color: c.btnFg, border: "none",
                    fontFamily: FONT_SANS, fontWeight: 500, borderRadius: 0,
                  }}
                >
                  START FREE TRIAL
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stack on narrow viewports */}
      <style>{`
        @media (max-width: 900px) {
          .pc-grid { grid-template-columns: 1fr !important; }
          .pc-grid > div:first-child { border-right: none !important; }
        }
      `}</style>
    </div>
  )
}
