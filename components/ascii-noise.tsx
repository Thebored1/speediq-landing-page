"use client"

import { useEffect, useRef } from "react"

// ---------------------------------------------------------------------------
// Perlin noise internals
// ---------------------------------------------------------------------------

const G2: [number, number][] = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [0, 1], [0, -1],
]

function buildPerm(seed?: number): Uint8Array {
  let s = seed !== undefined ? seed | 0 : (Math.random() * 0xffffffff) | 0
  const rng = () => {
    s = Math.imul(s ^ (s >>> 15), s | 1) ^ (s ^ (s >>> 7)) * 0x9e3779f3
    return ((s ^ (s >>> 14)) >>> 0) / 0xffffffff
  }
  const arr = Array.from({ length: 256 }, (_, i) => i)
  for (let i = 255; i > 0; i--) {
    const j = (rng() * (i + 1)) | 0
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  const p = new Uint8Array(512)
  for (let i = 0; i < 512; i++) p[i] = arr[i & 255]
  return p
}

function fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10) }
function lerp(a: number, b: number, t: number) { return a + t * (b - a) }
function dot([gx, gy]: [number, number], x: number, y: number) { return gx * x + gy * y }

function perlin(p: Uint8Array, x: number, y: number): number {
  const X = Math.floor(x) & 255
  const Y = Math.floor(y) & 255
  const xf = x - Math.floor(x)
  const yf = y - Math.floor(y)
  const u = fade(xf)
  const v = fade(yf)
  const aa = p[p[X] + Y]
  const ba = p[p[X + 1] + Y]
  const ab = p[p[X] + Y + 1]
  const bb = p[p[X + 1] + Y + 1]
  return lerp(
    lerp(dot(G2[aa & 7], xf, yf), dot(G2[ba & 7], xf - 1, yf), u),
    lerp(dot(G2[ab & 7], xf, yf - 1), dot(G2[bb & 7], xf - 1, yf - 1), u),
    v,
  ) * 0.5 + 0.5
}

function fbm(p: Uint8Array, x: number, y: number, octaves: number, persistence: number): number {
  let v = 0, amp = 1, freq = 1, max = 0
  for (let i = 0; i < octaves; i++) {
    v += perlin(p, x * freq, y * freq) * amp
    max += amp
    amp *= persistence
    freq *= 2
  }
  return v / max
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export const CHAR_SETS = {
  subtle:  " ·∙•◦",
  minimal: " .",
  classic: " .:-=+*#%@",
  blocks:  " ░▒▓█",
  sparse:  "  ·",
  braille: " ⠁⠃⠇⠿",
  bars:    " ╌─═",
} as const

export type CharSetKey = keyof typeof CHAR_SETS

export interface AsciiNoiseProps {
  /** Character columns */
  cols?: number
  /** Character rows */
  rows?: number
  /** Noise spatial scale — smaller = zoomed in. Range: 0.02–0.15 */
  scale?: number
  /** Animation speed in noise-units/sec. 0 = frozen */
  speed?: number
  /** Flow direction in radians. 0 = right, Math.PI/2 = down */
  flowAngle?: number
  /** FBM octave count — more = finer detail */
  octaves?: number
  /** FBM roughness per octave (0–1) */
  persistence?: number
  /** Contrast multiplier. >1 = eroded/sharp, <1 = soft */
  contrast?: number
  /** Named preset or raw character string ordered dark→light */
  charSet?: CharSetKey | string
  /** Invert brightness */
  invert?: boolean
  /** Integer seed for reproducible noise. Omit for random */
  seed?: number
  className?: string
  style?: React.CSSProperties
}

interface State extends Omit<Required<AsciiNoiseProps>, "className" | "style" | "seed"> {
  t: number
  perm: Uint8Array
  prevSeed: number | undefined
}

export function AsciiNoise({
  cols        = 80,
  rows        = 24,
  scale       = 0.06,
  speed       = 0.35,
  flowAngle   = 0,
  octaves     = 4,
  persistence = 0.5,
  contrast    = 1,
  charSet     = "subtle",
  invert      = false,
  seed,
  className,
  style,
}: AsciiNoiseProps) {
  const preRef = useRef<HTMLPreElement>(null)
  const rafRef = useRef<number>(0)
  const stateRef = useRef<State>({
    t: 0,
    perm: buildPerm(seed),
    prevSeed: seed,
    cols, rows, scale, speed, flowAngle,
    octaves, persistence, contrast, charSet, invert,
  })

  useEffect(() => {
    const s = stateRef.current
    if (seed !== s.prevSeed) {
      s.perm = buildPerm(seed)
      s.prevSeed = seed
    }
    Object.assign(s, { cols, rows, scale, speed, flowAngle, octaves, persistence, contrast, charSet, invert })
  }, [cols, rows, scale, speed, flowAngle, octaves, persistence, contrast, charSet, invert, seed])

  useEffect(() => {
    const el = preRef.current
    if (!el) return
    let lastTs = 0

    function tick(now: number) {
      const dt = lastTs === 0 ? 0 : Math.min((now - lastTs) / 1000, 0.05)
      lastTs = now
      const s = stateRef.current
      s.t += dt * s.speed
      const tx = s.t * Math.cos(s.flowAngle)
      const ty = s.t * Math.sin(s.flowAngle)
      const chars = (CHAR_SETS as Record<string, string>)[s.charSet] ?? s.charSet
      const len = chars.length
      let out = ""
      for (let r = 0; r < s.rows; r++) {
        for (let c = 0; c < s.cols; c++) {
          let n = fbm(s.perm, c * s.scale + tx, r * s.scale + ty, s.octaves, s.persistence)
          if (s.contrast !== 1) n = Math.max(0, Math.min(1, 0.5 + (n - 0.5) * s.contrast))
          if (s.invert) n = 1 - n
          out += chars[Math.min((n * len) | 0, len - 1)]
        }
        if (r < s.rows - 1) out += "\n"
      }
      ;(el as HTMLPreElement).textContent = out
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <pre
      ref={preRef}
      aria-hidden
      className={className}
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: "0.7rem",
        lineHeight: "1.15",
        letterSpacing: "0.06em",
        color: "#d4d4d4",
        background: "#080808",
        margin: 0,
        padding: "1rem",
        overflow: "hidden",
        userSelect: "none",
        whiteSpace: "pre",
        ...style,
      }}
    />
  )
}
