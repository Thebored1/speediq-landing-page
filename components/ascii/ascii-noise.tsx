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

// Matches the original CSS metrics (0.7rem / 1.15 line-height / 0.06em letter-spacing on Courier New)
const FONT_PX = 11.2
const CHAR_W  = 7.4
const CHAR_H  = 12.88

export interface AsciiNoiseProps {
  cols?: number
  rows?: number
  scale?: number
  speed?: number
  flowAngle?: number
  octaves?: number
  persistence?: number
  contrast?: number
  charSet?: CharSetKey | string
  invert?: boolean
  seed?: number
  className?: string
  style?: React.CSSProperties
}

interface State extends Omit<Required<AsciiNoiseProps>, "className" | "style" | "seed"> {
  t: number
  perm: Uint8Array
  prevSeed: number | undefined
  rowBuf: string[]
  fg: string
  bg: string
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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)
  const stateRef  = useRef<State>({
    t: 0,
    perm: buildPerm(seed),
    prevSeed: seed,
    rowBuf: [],
    fg: typeof style?.color === "string" ? style.color : "#d4d4d4",
    bg: typeof style?.background === "string" ? style.background : (typeof style?.backgroundColor === "string" ? style.backgroundColor : "#080808"),
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
    if (typeof style?.color === "string") s.fg = style.color
    if (typeof style?.background === "string") s.bg = style.background
    else if (typeof style?.backgroundColor === "string") s.bg = style.backgroundColor
  }, [cols, rows, scale, speed, flowAngle, octaves, persistence, contrast, charSet, invert, seed, style?.color, style?.background, style?.backgroundColor])

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    const dpr = window.devicePixelRatio || 1
    const s = stateRef.current

    let lastTs = 0

    function tick(now: number) {
      const dt = lastTs === 0 ? 0 : Math.min((now - lastTs) / 1000, 0.05)
      lastTs = now
      s.t += dt * s.speed

      // Resize the drawing buffer when cols/rows change.
      // CSS (width: 100% / height: 100%) scales it back down — on a 2× display
      // the buffer is 2× wide, CSS renders it at 1× = crisp DPR-aware output.
      const needW = Math.round(s.cols * CHAR_W * dpr)
      const needH = Math.round(s.rows * CHAR_H * dpr)
      if (canvas.width !== needW || canvas.height !== needH) {
        canvas.width  = needW
        canvas.height = needH
      }

      // Resize the per-row scratch buffer when cols change
      if (s.rowBuf.length !== s.cols) s.rowBuf = new Array(s.cols).fill("")

      const tx = s.t * Math.cos(s.flowAngle)
      const ty = s.t * Math.sin(s.flowAngle)
      const chars = (CHAR_SETS as Record<string, string>)[s.charSet] ?? s.charSet
      const len   = chars.length

      // Clear background — no DOM nodes, straight to GPU
      ctx.fillStyle = s.bg
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = s.fg
      ctx.font = `${FONT_PX * dpr}px "Courier New", Courier, monospace`
      if ("letterSpacing" in ctx) {
        ;(ctx as any).letterSpacing = `${0.06 * FONT_PX * dpr}px`
      }

      // One fillText call per row — bypasses DOM text layout entirely
      for (let r = 0; r < s.rows; r++) {
        for (let c = 0; c < s.cols; c++) {
          let n = fbm(s.perm, c * s.scale + tx, r * s.scale + ty, s.octaves, s.persistence)
          if (s.contrast !== 1) n = Math.max(0, Math.min(1, 0.5 + (n - 0.5) * s.contrast))
          if (s.invert) n = 1 - n
          s.rowBuf[c] = chars[Math.min((n * len) | 0, len - 1)]
        }
        // y = baseline position: top of row + font ascent approximation
        ctx.fillText(s.rowBuf.join(""), 0, (r + 1) * CHAR_H * dpr - (CHAR_H - FONT_PX) * 0.3 * dpr)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{
        display: "block",
        userSelect: "none",
        // Pass through layout props (position, flex, etc.) from the caller
        ...style,
        // These are handled by the canvas context, not CSS
        color:         undefined,
        background:    undefined,
        fontSize:      undefined,
        lineHeight:    undefined,
        letterSpacing: undefined,
        fontFamily:    undefined,
        padding:       undefined,
        whiteSpace:    undefined,
      }}
    />
  )
}
