"use client"

import type { CSSProperties, ReactNode } from "react"
import Link from "next/link"

// ─── Buttons ───────────────────────────────────────────────────────────────
interface BtnProps {
  children: ReactNode
  variant?: "primary" | "accent" | "ghost" | "plain"
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: () => void
  icon?: ReactNode
  style?: CSSProperties
  type?: "button" | "submit"
}

export function Btn({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon,
  style,
  type = "button",
}: BtnProps) {
  const sizes: Record<string, CSSProperties> = {
    sm: { padding: "7px 12px", fontSize: 13, height: 32 },
    md: { padding: "11px 18px", fontSize: 14, height: 40 },
    lg: { padding: "14px 22px", fontSize: 15, height: 48 },
  }
  const variants: Record<string, CSSProperties> = {
    primary: { background: "var(--fg)", color: "var(--bg)", border: "1px solid var(--fg)" },
    accent: {
      background: "var(--accent)",
      color: "var(--accent-ink)",
      border: "1px solid var(--accent)",
      fontWeight: 600,
    },
    ghost: { background: "transparent", color: "var(--fg)", border: "1px solid var(--line-2)" },
    plain: { background: "transparent", color: "var(--fg)", border: "none" },
  }
  const base: CSSProperties = {
    ...sizes[size],
    ...variants[variant],
    borderRadius: 0,
    fontFamily: "inherit",
    fontWeight: 500,
    letterSpacing: "-0.005em",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    cursor: "pointer",
    transition: "transform .15s ease, opacity .15s ease, background-color .15s ease",
    whiteSpace: "nowrap",
    textDecoration: "none",
    ...style,
  }
  const content = (
    <>
      {children}
      {icon && <span style={{ display: "inline-flex" }}>{icon}</span>}
    </>
  )
  if (href) {
    return (
      <Link href={href} style={base}>
        {content}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} style={base}>
      {content}
    </button>
  )
}

// ─── Italic emphasis ───────────────────────────────────────────────────────
export function ItalicEmph({ children }: { children: ReactNode }) {
  return (
    <em
      style={{
        fontStyle: "italic",
        fontFamily: "inherit",
      }}
    >
      {children}
    </em>
  )
}

// ─── Channel icons ─────────────────────────────────────────────────────────
export function WaIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 21l1.65-4.5A8 8 0 1 1 8 19.4L3 21z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M8.5 9c.2 1.5 1 3 2.3 4.3 1.3 1.3 2.8 2.1 4.2 2.3.5.1 1-.2 1.2-.6l.4-.7c.2-.3.1-.7-.2-.9l-1.4-1c-.3-.2-.7-.1-1 .1l-.6.7c-1.1-.5-2-1.3-2.6-2.6l.7-.6c.2-.2.3-.6.1-1l-1-1.4c-.2-.3-.6-.4-.9-.2l-.7.4c-.4.2-.7.7-.6 1.2z"
        fill={color}
      />
    </svg>
  )
}

export function MailIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function SmsIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 5h16v11H8l-4 4V5z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="9" cy="11" r="1" fill={color} />
      <circle cx="13" cy="11" r="1" fill={color} />
      <circle cx="17" cy="11" r="1" fill={color} />
    </svg>
  )
}

export function PhoneIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.4z" />
    </svg>
  )
}

export function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CheckIcon({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3.5 3.5L13 4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
