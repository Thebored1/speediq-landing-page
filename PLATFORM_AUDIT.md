# SpeedIQ — Full Platform Audit

> Generated: 2026-06-15  
> Coverage: All pages, API routes, background jobs, database tables, third-party integrations, lib services, auth/billing/messaging logic.

---

## Table of Contents

1. [Platform Overview](#1-platform-overview)
2. [Tech Stack](#2-tech-stack)
3. [Public / Marketing Pages](#3-public--marketing-pages)
4. [Auth Flow](#4-auth-flow)
5. [App — Dashboard Pages](#5-app--dashboard-pages)
6. [Admin Panel](#6-admin-panel)
7. [API Routes](#7-api-routes)
8. [Background Jobs (Cron)](#8-background-jobs-cron)
9. [Webhooks](#9-webhooks)
10. [Database Schema](#10-database-schema)
11. [Lib Services](#11-lib-services)
12. [Third-Party Integrations](#12-third-party-integrations)
13. [Billing & Credit System](#13-billing--credit-system)
14. [Security & Access Control](#14-security--access-control)
15. [Environment Variables](#15-environment-variables)

---

## 1. Platform Overview

SpeedIQ is a **multi-channel marketing automation SaaS** built on Next.js 15 (App Router) + Supabase. It lets teams run campaigns, manage live conversations, and track analytics across three channels — **WhatsApp, Email, and SMS** — from a single workspace, billed on a credit-based subscription model.

**Core pillars:**
- Campaign broadcasts (WhatsApp, Email, SMS)
- Live inbox / two-way conversations (WhatsApp, SMS)
- Contact & audience management with segmentation
- Template libraries per channel
- Credit-based billing with Stripe (USD) + Razorpay (INR)
- Multi-project workspaces with role-based team access
- Admin panel for platform operators

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, React Server Components) |
| Database | Supabase (PostgreSQL + RLS) |
| Auth | Supabase Auth (email/password + Google OAuth) |
| Storage | Supabase Storage (media buckets) |
| Email | Resend (primary) + SMTP (fallback) |
| SMS | Twilio |
| WhatsApp | Meta Cloud API (WhatsApp Business) |
| Billing — USD | Stripe (subscriptions + one-time) |
| Billing — INR | Razorpay (subscriptions + payment links) |
| Styling | Tailwind CSS + CSS variables design system |
| Deployment | Vercel (implied by `maxDuration` exports on routes) |

---

## 3. Public / Marketing Pages

All under `app/(marketing)/`.

| Route | File | What it does |
|---|---|---|
| `/` | `page.tsx` | Landing page — hero, features, channel overview, pricing preview, credit calculator, FAQ, CTA |
| `/pricing` | `pricing/page.tsx` | Full pricing — plan comparison table, credit weight table, top-up packs, credit calculator, FAQ |
| `/features` | `features/page.tsx` | Feature overview hub |
| `/features/whatsapp` | `features/whatsapp/page.tsx` | WhatsApp-specific features deep-dive |
| `/features/email` | `features/email/page.tsx` | Email marketing features |
| `/features/inbox` | `features/inbox/page.tsx` | Unified inbox / live chat features |
| `/features/sms` | `features/sms/page.tsx` | SMS features |
| `/compare` | `compare/page.tsx` | Competitive comparison |
| `/use-cases` | `use-cases/page.tsx` | Customer use-case examples |
| `/legal/privacy` | `legal/privacy/page.tsx` | Privacy Policy |
| `/legal/terms` | `legal/terms/page.tsx` | Terms of Service |
| `/legal/cookies` | `legal/cookies/page.tsx` | Cookie Policy |
| `/legal/dpa` | `legal/dpa/page.tsx` | Data Processing Agreement |
| `/legal/refund` | `legal/refund/page.tsx` | Refund Policy |
| `/legal/acceptable-use` | `legal/acceptable-use/page.tsx` | Acceptable Use Policy |
| `/noise` | `app/noise/page.tsx` | Animated ASCII hero — standalone marketing/demo page |

---

## 4. Auth Flow

All under `app/auth/`.

| Route | Purpose |
|---|---|
| `/auth/login` | Email/password login + Google OAuth; redirects to `/projects` or `?redirect=` param |
| `/auth/register` | New account creation (email/password or Google) |
| `/auth/forgot-password` | Send password reset email |
| `/auth/reset-password` | Token-based password reset (from email link) |
| `/auth/verify-email` | Email verification (post-signup or email change) |

**Session management:** `lib/supabase/proxy.ts` (`updateSession`) runs on every request via middleware to refresh Supabase auth tokens and enforce route protection. Public paths (marketing, `/auth/*`, `/invite/*`, `/noise`) bypass auth checks; everything else redirects to `/auth/login` if no session.

---

## 5. App — Dashboard Pages

All protected. Entry point after login is `/projects` (project selector).

### Project Selection

| Route | Purpose |
|---|---|
| `/projects` | Project switcher — lists all workspaces the user belongs to, or prompts to create one |
| `/invite/[token]` | Accept/decline a team invite |
| `/invitations` | User's inbox of pending invitations |

---

### Main Dashboard

| Route | Purpose |
|---|---|
| `/dashboard` | Overview — KPI stats (contacts, campaigns, messages), channel status cards, recent activity |

---

### WhatsApp

| Route | Purpose |
|---|---|
| `/dashboard/whatsapp` | Channel hub — links to sub-sections |
| `/dashboard/whatsapp/campaigns` | List, create, send, retry, delete broadcast campaigns |
| `/dashboard/whatsapp/campaigns/[id]` | Campaign detail / edit |
| `/dashboard/whatsapp/contacts` | Contact list — add, import CSV, tag, search, delete |
| `/dashboard/whatsapp/templates` | Template library (Meta-approved message templates) |
| `/dashboard/whatsapp/templates/new` | Submit new template to Meta |
| `/dashboard/whatsapp/templates/[id]` | View / status |
| `/dashboard/whatsapp/templates/[id]/edit` | Edit template |
| `/dashboard/whatsapp/live-chat` | Real-time two-way WhatsApp inbox — full media support, 15s polling, conversation assignment |

---

### Email

| Route | Purpose |
|---|---|
| `/dashboard/email` | Email hub |
| `/dashboard/email/campaigns` | List/create/send email campaigns (5-step wizard: Details → Audience → Template → Schedule → Review) |
| `/dashboard/email/campaigns/[id]` | Campaign detail / edit |
| `/dashboard/email/templates` | Template library |
| `/dashboard/email/templates/new` | Create HTML email template |
| `/dashboard/email/templates/[id]` | View / edit with live preview |
| `/dashboard/email/subscribers` | Subscriber list — add, import CSV, filter by status, unsubscribe, delete |

---

### SMS

| Route | Purpose |
|---|---|
| `/dashboard/sms` | SMS hub |
| `/dashboard/sms/campaigns` | List/create/send SMS campaigns |
| `/dashboard/sms/campaigns/[id]` | Campaign detail / edit |
| `/dashboard/sms/contacts` | SMS contact management |
| `/dashboard/sms/templates` | SMS template library |
| `/dashboard/sms/live-chat` | Real-time SMS conversation inbox |
| `/dashboard/sms/analytics` | SMS delivery analytics |

---

### Contacts (Unified)

| Route | Purpose |
|---|---|
| `/dashboard/contacts` | All contacts across channels — search, filter by channel, link to channel-specific views |
| `/dashboard/contacts/upload` | Bulk contact import |

---

### Analytics

| Route | Purpose |
|---|---|
| `/dashboard/analytics` | Unified analytics — tabs for WhatsApp and Email. KPI cards: contacts, campaigns, sent/delivered/failed, delivery rate |
| `/dashboard/analytics/whatsapp` | WhatsApp-specific analytics |
| `/dashboard/analytics/email` | Email-specific analytics |

---

### Settings

| Route | Purpose |
|---|---|
| `/dashboard/settings` | Settings hub |
| `/dashboard/settings/whatsapp-account` | Connect/refresh WhatsApp Business Account via Meta OAuth (Embedded Signup) |
| `/dashboard/settings/email` | Email settings — SMTP config, custom domain verification, from address |
| `/dashboard/settings/sms` | SMS/Twilio account connection, phone number management |
| `/dashboard/settings/tags` | Create and manage contact tags (name + colour) |
| `/dashboard/settings/canned-message` | Pre-written quick replies for live chat (with optional media attachment) |

---

### Billing

| Route | Purpose |
|---|---|
| `/dashboard/billing` | Full billing page — active plan, credit wallet, top-up packs, auto-recharge config, usage stats, recent ledger, plan switcher with INR/USD + monthly/yearly toggle, 7-day trial CTA |

---

### Account & Team

| Route | Purpose |
|---|---|
| `/dashboard/account` | Profile — name, phone, company; password change (disabled for OAuth); sign-out everywhere; account metadata |
| `/dashboard/notifications` | Notification preferences — email & in-app toggles per event type, quick presets |
| `/dashboard/team` | Team management — invite members, assign roles (admin/editor/viewer), change roles, revoke invites, copy invite link |

---

## 6. Admin Panel

Accessible only to users with `is_platform_admin = true`. Auto-promoted on sign-in if email is in `PLATFORM_ADMIN_EMAILS` env var.

| Route | Purpose |
|---|---|
| `/admin` | Overview — live billing health, subscriptions by status, credits outstanding, 30-day usage by channel, plans/packs/weights tables, platform settings snapshot, recent ledger |
| `/admin/users` | List users — search by email, toggle `is_platform_admin` flag |
| `/admin/plans` | Edit subscription plans — credits, contact/seat/campaign limits, channel access, features, pricing in INR/USD × monthly/yearly, enable/disable |
| `/admin/credit-packs` | Manage top-up packs — credits and prices, provider IDs |
| `/admin/credit-weights` | Configure credit cost per message type per channel |
| `/admin/transactions` | Paginated credit ledger across all projects — filter by project, reason, date range |
| `/admin/audit-log` | Audit trail of all admin actions |
| `/admin/settings` | Platform-wide settings — trial days, trial credits, annual discount %, default currency, preferred provider (Stripe/Razorpay) per currency, GST rate, billing kill-switch |

---

## 7. API Routes

> All project-scoped routes use `app/api/projects/[id]/` prefix.  
> All require authentication + project membership. Role requirements vary per route.

### Profile

| Method | Route | Description |
|---|---|---|
| GET/PATCH | `/api/profile` | Fetch / update user profile (name, phone, avatar, company) |
| POST | `/api/profile/password` | Change password — verifies current, requires ≥8 chars |
| GET/PATCH | `/api/profile/notifications` | Fetch / update notification preferences |

---

### Projects & Team

| Method | Route | Description |
|---|---|---|
| GET | `/api/projects/select` | List user's projects |
| POST | `/api/projects/select-and-redirect` | Set active project cookie + redirect |
| DELETE | `/api/projects/[id]` | Delete project (owner only) |
| GET | `/api/projects/[id]/team` | Members + pending invites |
| GET/POST | `/api/projects/[id]/invites` | List / create team invites |
| PATCH/DELETE | `/api/projects/[id]/invites/[inviteId]` | Update / revoke invite |
| PATCH/DELETE | `/api/projects/[id]/members/[userId]` | Change role / remove member |
| GET | `/api/invite/[token]` | Fetch invite details (public, no auth) |
| POST | `/api/invite/[token]` | Accept invite |
| POST | `/api/invite/[token]/decline` | Decline invite |
| GET | `/api/invites/pending` | Current user's pending invites |

---

### Billing

| Method | Route | Description |
|---|---|---|
| GET | `/api/projects/[id]/billing` | Subscription, plan, wallet, ledger (last 20), available plans & packs, suggested currency |
| POST | `/api/projects/[id]/billing/checkout` | Create subscription checkout — `{ plan, cycle, currency }` → Stripe/Razorpay session |
| POST | `/api/projects/[id]/billing/topup` | Credit pack purchase → checkout session |
| POST | `/api/projects/[id]/billing/portal` | Redirect to provider customer portal |
| POST | `/api/projects/[id]/billing/cancel` | Cancel subscription (`cancel_at_period_end` default true) |
| PATCH | `/api/projects/[id]/billing/wallet` | Update auto-recharge settings |

---

### WhatsApp — Account

| Method | Route | Description |
|---|---|---|
| GET/PATCH/DELETE | `/api/projects/[id]/whatsapp/account` | Fetch / update / disconnect WA account |
| POST | `/api/projects/[id]/whatsapp/account/register` | Register phone number for Cloud API with 6-digit PIN (fixes Meta error 133010) |
| POST | `/api/projects/[id]/whatsapp/account/refresh` | Re-run OAuth to refresh credentials |
| POST | `/api/projects/[id]/whatsapp/oauth/callback` | Meta OAuth callback — stores access_token, phone_number_id, waba_id |

---

### WhatsApp — Contacts

| Method | Route | Description |
|---|---|---|
| GET | `/api/projects/[id]/whatsapp/contacts` | List contacts — search, tag filter, pagination (default 50, max 200); `all=1` mode pages up to 25k rows |
| POST | `/api/projects/[id]/whatsapp/contacts` | Create contact — validates phone, dedupes on project+phone, returns with hydrated tags |
| GET/PATCH/DELETE | `/api/projects/[id]/whatsapp/contacts/[contactId]` | Individual contact ops |
| GET | `/api/projects/[id]/whatsapp/contacts/[contactId]/profile` | Fetch live profile from Meta (quality rating, verified name) |
| PATCH | `/api/projects/[id]/whatsapp/contacts/bulk-update` | Bulk update tags / fields |
| POST | `/api/projects/[id]/whatsapp/contacts/import` | Bulk import from file |

---

### WhatsApp — Campaigns

| Method | Route | Description |
|---|---|---|
| GET | `/api/projects/[id]/whatsapp/campaigns` | List with per-recipient stats (pending/sent/delivered/read/failed) |
| POST | `/api/projects/[id]/whatsapp/campaigns` | Create — expands tag_ids to contacts, dedupes, filters opted-out, chunks inserts at 1000, validates template is "approved" before send |
| GET/PATCH/DELETE | `/api/projects/[id]/whatsapp/campaigns/[id]` | Individual campaign ops |
| POST | `/api/projects/[id]/whatsapp/campaigns/[id]/send-to` | Add contacts to existing campaign |
| POST | `/api/projects/[id]/whatsapp/campaigns/[id]/retry-failed` | Re-queue failed recipients |
| POST | `/api/projects/[id]/whatsapp/campaigns/[id]/cancel` | Cancel campaign |

---

### WhatsApp — Templates

| Method | Route | Description |
|---|---|---|
| GET/POST | `/api/projects/[id]/whatsapp/templates` | List / submit template to Meta |
| GET/PATCH/DELETE | `/api/projects/[id]/whatsapp/templates/[id]` | Individual template ops |
| POST | `/api/projects/[id]/whatsapp/templates/[id]/refresh-status` | Poll Meta for approval status |
| GET | `/api/projects/[id]/whatsapp/templates/[id]/logs` | Submission history |
| GET | `/api/projects/[id]/whatsapp/templates/meta` | Sync all templates from Meta WABA |

---

### WhatsApp — Conversations (Live Chat)

| Method | Route | Description |
|---|---|---|
| GET | `/api/projects/[id]/whatsapp/conversations` | List conversations — filters: all/unread/assigned/archived; sorted by last_message_at DESC |
| GET/PATCH | `/api/projects/[id]/whatsapp/conversations/[contactId]` | Get / update conversation (archive, assign) |
| GET/POST | `/api/projects/[id]/whatsapp/conversations/[contactId]/messages` | History / send message (text or media, within 24h window) |
| POST | `/api/projects/[id]/whatsapp/conversations/[contactId]/mark-read` | Mark as read, optionally show typing indicator |
| GET | `/api/projects/[id]/whatsapp/conversations/[contactId]/media` | Download inbound media |
| GET | `/api/projects/[id]/whatsapp/media/[messageId]` | Fetch media by message ID |

---

### WhatsApp — Other

| Method | Route | Description |
|---|---|---|
| GET/POST | `/api/projects/[id]/whatsapp/tag-definitions` | List / create contact tags |
| PATCH/DELETE | `/api/projects/[id]/whatsapp/tag-definitions/[id]` | Update / delete tag |
| GET/POST | `/api/projects/[id]/whatsapp/quick-replies` | List / create canned quick replies |
| GET/PATCH/DELETE | `/api/projects/[id]/whatsapp/quick-replies/[id]` | Individual quick-reply ops |
| GET/PATCH | `/api/projects/[id]/whatsapp/settings` | Opt-out/opt-in config, welcome/off-hours messages, working hours |
| POST | `/api/projects/[id]/whatsapp/settings/upload` | Upload media for canned response attachments |
| GET/POST | `/api/projects/[id]/whatsapp/segments` | Audience segments |
| POST | `/api/projects/[id]/whatsapp/audience-count` | Estimated audience count for tag/filter |
| GET | `/api/projects/[id]/whatsapp/analytics` | Campaign delivery stats |

---

### Email

| Method | Route | Description |
|---|---|---|
| GET/POST | `/api/projects/[id]/email/campaigns` | List / create email campaigns; auto-filters to subscribed contacts; status logic: send_now=sending, no-schedule=draft, else scheduled |
| GET/PATCH/DELETE | `/api/projects/[id]/email/campaigns/[id]` | Individual campaign ops |
| POST | `/api/projects/[id]/email/campaigns/[id]/send-one` | Test-send to a single subscriber |
| POST | `/api/projects/[id]/email/campaigns/[id]/send-to` | Add more subscribers to campaign |
| GET/POST | `/api/projects/[id]/email/subscribers` | List (search, status/tag filter, pagination) / create subscriber |
| GET/PATCH/DELETE | `/api/projects/[id]/email/subscribers/[id]` | Individual subscriber ops |
| POST | `/api/projects/[id]/email/subscribers/import` | Bulk import |
| GET/POST | `/api/projects/[id]/email/templates` | List / create email template |
| GET/PATCH/DELETE | `/api/projects/[id]/email/templates/[id]` | Individual template ops |
| POST | `/api/projects/[id]/email/test-send` | Send test email to any address |
| POST | `/api/projects/[id]/email/verify-domain` | Verify custom sending domain via Resend |
| GET/PATCH | `/api/projects/[id]/email/settings` | From address, domain config |
| GET | `/api/projects/[id]/email/analytics` | Delivery stats (sent/opened/clicked/bounced/complained) |

---

### SMS

| Method | Route | Description |
|---|---|---|
| GET/PATCH/DELETE | `/api/projects/[id]/sms/account` | Twilio account connection |
| GET/POST | `/api/projects/[id]/sms/numbers` | List / assign phone numbers |
| GET/POST | `/api/projects/[id]/sms/contacts` | List (search, opt-out filter, limit 500) / create contact (E164 normalization, upsert) |
| GET/PATCH/DELETE | `/api/projects/[id]/sms/contacts/[id]` | Individual contact ops |
| POST | `/api/projects/[id]/sms/contacts/import` | Bulk import |
| GET/POST | `/api/projects/[id]/sms/campaigns` | List / create SMS campaigns; respects opt-out + consent status |
| GET/PATCH/DELETE | `/api/projects/[id]/sms/campaigns/[id]` | Individual campaign ops |
| POST | `/api/projects/[id]/sms/campaigns/[id]/send-to` | Add contacts |
| POST | `/api/projects/[id]/sms/campaigns/[id]/actions` | Pause / resume / cancel |
| GET/POST | `/api/projects/[id]/sms/templates` | List / create templates |
| GET/PATCH/DELETE | `/api/projects/[id]/sms/templates/[id]` | Individual template ops |
| GET/PATCH | `/api/projects/[id]/sms/settings` | Working hours, opt-out/opt-in/help responses |
| GET | `/api/projects/[id]/sms/analytics` | Delivery stats |
| GET | `/api/projects/[id]/sms/conversations` | List conversations |
| GET/POST | `/api/projects/[id]/sms/conversations/[contactId]/messages` | History / send reply |

---

### Admin

| Method | Route | Description |
|---|---|---|
| GET | `/api/admin/overview` | Billing dashboard: subscriptions, credits, usage, plans, packs, weights, settings, ledger |
| GET | `/api/admin/users` | List users (search by email), pagination 50/page |
| PATCH | `/api/admin/users` | Toggle `is_platform_admin` (cannot self-demote) |
| GET/PATCH | `/api/admin/plans` | List / update subscription plans |
| GET/POST/PATCH/DELETE | `/api/admin/credit-packs` | Credit pack CRUD (all changes audit-logged) |
| GET/POST/PATCH/DELETE | `/api/admin/credit-weights` | Credit cost per message type CRUD |
| POST | `/api/admin/credits/adjust` | Manual credit grant or deduction for any project |
| POST | `/api/admin/credits/refund` | Grant refund credits with optional reference ledger entry |
| GET | `/api/admin/projects` | Project list with subscription, wallet, owner info |
| GET/PATCH | `/api/admin/settings` | Platform settings — upsert in bulk |
| GET | `/api/admin/transactions` | Credit ledger across all projects — filter by project/reason/date |
| GET | `/api/admin/audit-log` | Admin action history |

---

## 8. Background Jobs (Cron)

All secured with `Authorization: Bearer {CRON_SECRET}` header except `whatsapp-health` (uses user auth). Hosted as Next.js route handlers invoked by Supabase pg_cron or an external scheduler.

### `/api/cron/whatsapp-send`
- Processes WhatsApp campaigns in "sending" state
- **Batch size**: 300 messages per run, **concurrency**: 10, **delay**: 75ms between sends
- Auto-fails campaigns stuck in "sending" for >30min with 0 pending
- Auto-fails if >80% failure rate with >100 attempts
- Max-retry (≥5 retries) rows marked terminal
- Respects `respect_opt_out_for_campaigns` platform setting
- Atomically deducts credits; refunds on terminal Meta errors
- Records usage events, updates `whatsapp_messages` + `whatsapp_conversations`
- **maxDuration**: 60s

### `/api/cron/email-send`
- Processes email campaigns in "sending" state
- Auto-transitions "scheduled" → "sending" when `scheduled_at` passes
- Calls `processCampaignBatch()` per campaign
- **maxDuration**: 60s

### `/api/cron/sms-send`
- Same pattern as email-send for SMS campaigns via `processSmsCampaignBatch()`
- **maxDuration**: 60s

### `/api/cron/billing-emails`
- Runs hourly; sends proactive billing notification emails
- **trial_ending**: fires 2 days before `trial_ends_at`
- **trial_expired**: fires when subscription transitions to past_due/inactive
- **low_balance**: fires when balance < 20% of plan monthly credits AND auto-recharge is disabled
- All deduped by `ref_id` with 24h window to prevent repeat sends

### `/api/cron/whatsapp-health`
- Checks pg_cron extension reachability
- Verifies `whatsapp-send` job is scheduled and active
- Checks `app_cron_config` presence
- Reports last HTTP response status
- Returns `{ ok, checks[], raw }` — used by the health dashboard in settings

---

## 9. Webhooks

### `/api/webhooks/whatsapp` (Meta)

**GET** — Webhook verification (hub.mode=subscribe + verify_token match)

**POST** — Inbound processing:
- **Inbound messages**: text, image, video, audio, document, sticker, location, contacts, reaction, button, interactive
  - Downloads media from Meta, uploads to `whatsapp-media` Supabase storage bucket
  - Auto-creates or updates contact from sender's phone number
  - Auto-responds: opt-out keyword → unsubscribe + response; opt-in keyword → resubscribe; first-ever inbound → welcome message; outside working hours → off-hours message
  - Stores message row, increments `unread_count`, updates `last_message_at` on conversation
- **Message status updates**: mirrors `sent → delivered → read → failed` onto `whatsapp_campaign_recipients` and `whatsapp_messages`
- **Template status webhooks**: stores approval/rejection from Meta onto `whatsapp_templates`

---

### `/api/webhooks/stripe`

Signature verified with `STRIPE_WEBHOOK_SECRET`.

| Event | Action |
|---|---|
| `checkout.session.completed` | Grant credits for top-up credit pack |
| `customer.subscription.created` | Create subscription row, grant trial credits |
| `customer.subscription.updated` | Update subscription status/period |
| `customer.subscription.deleted` | Mark subscription canceled |
| `invoice.payment_succeeded` | Grant monthly plan credits (idempotent on invoice ID) |
| `invoice.payment_failed` | Mark subscription past_due, send payment-failed email |

---

### `/api/webhooks/razorpay`

Verified with HMAC-SHA256 using `RAZORPAY_KEY_SECRET`.

| Event | Action |
|---|---|
| `subscription.authenticated` | Create subscription, grant trial credits |
| `subscription.activated` / `subscription.charged` | Update subscription, grant monthly credits |
| `subscription.cancelled` / `subscription.completed` | Mark canceled |
| `subscription.halted` / `subscription.paused` | Mark past_due |
| `payment_link.paid` | Grant credits from top-up pack (idempotent on payment_link ID) |

---

### `/api/webhooks/twilio/inbound`

Twilio signature verified (X-Twilio-Signature).
- Auto-creates/updates SMS contact
- Auto-responds to STOP (opt-out), START (opt-in), HELP
- Enforces working hours (off-hours auto-response)
- Stores message, updates conversation
- Returns TwiML XML response

### `/api/webhooks/twilio/status`

Updates `sms_messages` status (queued → sent → delivered → failed).

---

### `/api/webhooks/resend`

Svix HMAC signature verification.

| Event | Action |
|---|---|
| `email.delivered` | Update `email_sends` status |
| `email.delivery_delayed` | Mark delivery_delayed |
| `email.bounced` | Hard bounce: suppress subscriber; soft bounce: log only |
| `email.complained` | Spam complaint: immediately unsubscribe |

---

## 10. Database Schema

### Projects & Team

| Table | Key Columns | Notes |
|---|---|---|
| `projects` | id, owner_id, name, whatsapp_registration_completed_at | Root workspace entity |
| `project_members` | project_id, user_id, role | Roles: owner / admin / editor / viewer |
| `project_invites` | project_id, email, role, token, expires_at | Token-based email invites |
| `profiles` | id (→ auth.users), full_name, phone, avatar_url, company | Extended user info |
| `notification_preferences` | user_id, email_billing, email_low_balance, email_campaign_completed, email_weekly_digest, email_product_updates, email_team_invites, inapp_team_activity, inapp_campaign_status, inapp_credit_alerts, marketing_emails | Per-user notification toggles |

---

### WhatsApp

| Table | Key Columns | Notes |
|---|---|---|
| `whatsapp_accounts` | project_id, phone_number_id, waba_id, access_token, phone_number, display_name, quality_rating, health_data, token_expires_at, connection_type | One per project; connection_type: manual / embedded_signup |
| `whatsapp_contacts` | project_id, phone (unique/project), name, email, custom_fields (jsonb), tags, profile_picture_url, opt_out, last_inbound_at | |
| `whatsapp_tag_definitions` | project_id, name, color | Tag labels for contacts |
| `whatsapp_conversations` | project_id, contact_id, assigned_to, last_message_at, unread_count, is_archived | One per contact per project |
| `whatsapp_messages` | project_id, contact_id, direction (in/out), type, body, media_url, media_type, meta_message_id, meta_timestamp, status | Full message history |
| `whatsapp_templates` | project_id, name, category, language, status (draft/pending/approved/rejected/disabled), body, header, footer, buttons, variables, meta_template_id | Meta template sync |
| `whatsapp_campaigns` | project_id, name, template_id, status (draft/scheduled/sending/completed/failed), scheduled_at, started_at, completed_at | Broadcast campaigns |
| `whatsapp_campaign_recipients` | campaign_id, contact_id, status (pending/sent/delivered/read/failed), sent_at, meta_message_id, error_code, retry_count | Per-recipient delivery tracking |
| `whatsapp_quick_replies` | project_id, name, body, media_type, media_url | Canned messages for live chat |
| `whatsapp_account_settings` | project_id, opt_out_keywords, opt_in_keywords, opt_out/opt_in response text + enabled flags, welcome_message, off_hours_message, working_hours (jsonb), timezone | Automation config |
| `contact_segments` | project_id, name, filter_json | Saved audience filter |

---

### Email

| Table | Key Columns | Notes |
|---|---|---|
| `email_subscribers` | project_id, email (unique/project), name, tags, status (subscribed/unsubscribed/bounced), subscribed_at, unsubscribed_at | |
| `email_templates` | project_id, name, subject, body_html, body_text, variables (jsonb) | |
| `email_campaigns` | project_id, name, template_id, status (draft/scheduled/sending/completed/failed), scheduled_at | |
| `email_campaign_recipients` | campaign_id, recipient_id, status (pending/sent/delivered/failed/bounced/unsubscribed), sent_at, error_code | |
| `project_email_settings` | project_id, from_email, from_email_verified, custom_domain, domain_verified_at | Per-project email config |
| `email_sends` | project_id, kind (campaign/transactional/billing/test/invite/auth), recipient_email, from_email, subject, provider (resend/smtp), status, error_message | Full send audit log |

---

### SMS

| Table | Key Columns | Notes |
|---|---|---|
| `sms_accounts` | project_id, twilio_account_sid, messaging_service_sid, default_from, onboarding_state | Twilio connection |
| `sms_numbers` | project_id, phone_number_e164, twilio_phone_number_sid, capabilities (jsonb), status, is_default | Assigned numbers |
| `sms_contacts` | project_id, phone (unique/project), name, email, custom_fields, opt_out, consent_status, last_inbound_at | |
| `sms_templates` | project_id, name, body, variables (jsonb) | |
| `sms_campaigns` | project_id, name, template_id, status, scheduled_at | |
| `sms_campaign_recipients` | campaign_id, recipient_id, status, twilio_message_sid, error_code, error_message | |
| `sms_messages` | project_id, contact_id, direction, body, twilio_message_sid, status, provider_payload (jsonb) | |
| `sms_account_settings` | project_id, opt_out/opt_in/help keywords, welcome/off_hours responses, working_hours, timezone | |

---

### Billing

| Table | Key Columns | Notes |
|---|---|---|
| `subscription_plans` | id, name, monthly_credits, max_contacts, max_seats, max_campaigns_per_month, channels (jsonb), features (jsonb), pricing, stripe_price_ids, active, sort_order | Managed by admin |
| `project_subscriptions` | project_id, plan_id, status (inactive/trialing/active/past_due/canceled), stripe_customer_id, stripe_subscription_id, current_period_start/end, trial_ends_at, canceled_at | |
| `credit_wallets` | project_id, balance, auto_recharge_enabled, auto_recharge_threshold, auto_recharge_pack_id | |
| `credit_ledger` | project_id, amount, reason, ref_type, ref_id, metadata (jsonb), created_at | Immutable credit audit trail |
| `credit_packs` | id, name, credits, price_inr, price_usd, stripe_price_id_inr, stripe_price_id_usd, sort_order | Top-up offerings |

---

### Storage Buckets (Supabase)

| Bucket | Purpose |
|---|---|
| `whatsapp-media` | Inbound media downloaded from Meta (images, video, audio, documents) |
| `canned-messages-storage` | Media attachments for WhatsApp quick replies / opt-out responses |

---

## 11. Lib Services

### Billing (`lib/billing/`)

| File | What it does |
|---|---|
| `config.ts` | Plan definitions, credit weights, pack definitions, Stripe price ID mappings |
| `credits.ts` | `deductCredits()` (atomic RPC), `grantCredits()`, `getCreditBalance()`, `recordUsageEvent()` |
| `auto-recharge.ts` | Triggers auto top-up when balance drops below threshold; stampede-guarded |
| `billing-emails.ts` | Sends trial_ending / trial_expired / low_balance / payment_failed emails; 24h dedup |
| `subscription.ts` | `getActivePlanForProject()`, `upsertProjectSubscription()` |
| `gating.ts` | Feature flag checks against plan limits (channels, seats, contacts) |
| `cost.ts` | Calculate credit cost per message type |
| `geo.ts` | `suggestedCurrencyFromHeaders()` — detect INR vs USD from IP |
| `admin.ts` | `requireAdmin()` guard, `writeAudit()` audit log writer |
| `providers/router.ts` | Route checkout to Stripe or Razorpay based on currency + platform settings |
| `providers/stripe-provider.ts` | Stripe checkout / topup / portal |
| `providers/razorpay-provider.ts` | Razorpay payment link / subscription |

---

### Email (`lib/email/`)

| File | What it does |
|---|---|
| `client.ts` | `sendEmail()` — dual provider (Resend API or SMTP nodemailer); LIST-UNSUBSCRIBE header injection; audit logging to `email_sends` |
| `project-settings.ts` | Fetch verified domain + from_email per project; `getEffectiveFromAddress()` with fallback domain |
| `process-campaign-batch.ts` | Batch send email campaigns — fetch subscribers, template, deduct credits, mark sent/failed |
| `template.ts` | Template rendering + variable substitution |
| `variables.ts` | Extract / render `{{first_name}}`, `{{email}}`, custom fields |
| `unsubscribe.ts` | Unsubscribe link generation + validation |
| `encrypt.ts` | Encrypt contact_id for secure unsubscribe tokens |
| `resend-domains.ts` | Resend domain verification API helpers |
| `send-team-invite.ts` | Transactional team invite email |
| `platform-email-settings.ts` | Global email provider config |

---

### SMS (`lib/sms/`)

| File | What it does |
|---|---|
| `client.ts` | `sendSmsForProject()` — Twilio API call; deducts credits; returns sid/status/error |
| `phone.ts` | `normalizeSmsPhone()` (E164), `isValidSmsPhone()` |
| `numbers.ts` | Twilio number provisioning helpers |
| `template.ts` | SMS template variable substitution |
| `status.ts` | Map Twilio status strings to internal enum |
| `errors.ts` | `getFriendlySmsErrorMessage()` — user-readable Twilio error messages |
| `twilio-oauth.ts` | OAuth flow + `twilioApiRequest()` authenticated helper |
| `webhook-signature.ts` | `isValidTwilioWebhookSignature()` |
| `process-campaign-batch.ts` | Batch SMS campaign sending |

---

### WhatsApp (`lib/whatsapp/`)

| File | What it does |
|---|---|
| `api.ts` | **670-line core** — all Meta API interactions (see breakdown below) |
| `phone.ts` | `normalizePhone()`, `validatePhone()` |
| `audience.ts` | `getContactIdsForTags()`, `filterOptedInContacts()`, `withFetchRetry()` |
| `oauth.ts` | Meta OAuth flow helpers |

**`lib/whatsapp/api.ts` breakdown:**
- `getWhatsAppAccountToken()` — fetch credentials from DB
- `sendTemplateMessage()` — send with variables + header media; exponential backoff on 429/5xx; handles 132001 language mismatch fallback
- `sendTextMessage()` — free-form within 24h window
- `sendMediaMessage()` — image/video/audio/document with caption
- `markMessageAsRead()` — marks read + optional typing indicator
- `submitTemplateToMeta()` — create template via Meta API with validation hints
- `fetchMessageTemplatesFromMeta()` — paginated sync from WABA
- `resolveTemplateLanguageForSend()` — finds the exact approved language for a template (prevents 132001)
- `uploadMediaToMetaResumable()` — two-step resumable media upload
- `downloadWhatsAppMedia()` — fetch inbound media from Meta short-lived URL
- `resolveHeaderMediaForSend()` — convert stored path → signed URL for Meta
- `getVariableValuesForContact()` — resolve `{{1}}`, `{{2}}` etc. from contact fields (first_name, last_name, name, email, phone, custom:*)
- `getPhoneNumberInfo()` — number quality rating + health
- `registerPhoneNumberForCloudApi()` — 6-digit PIN registration
- `getFriendlyErrorMessage()` — user-facing text for common Meta error codes (131026, 131047, 132001, 133010, etc.)
- `isWithin24hWindow()` — check if contact sent inbound in last 24h

---

### Auth & Utilities

| File | What it does |
|---|---|
| `lib/auth/auth-context.tsx` | Browser React context for current user / session |
| `lib/auth/use-auth.ts` | `useAuth()` hook |
| `lib/profiles.ts` | `fetchProfile()`, `updateProfile()` |
| `lib/team.ts` | `getProjectRole()`, `getProjectMembers()`, `getProjectInvites()`, `acceptInviteRpc()` |
| `lib/projects.ts` | `fetchProjectById()`, `createProject()`, `deleteProject()` |
| `lib/projects/constants.ts` | `ACTIVE_PROJECT_COOKIE` name + max-age |
| `lib/features.ts` | Feature flags: `BILLING_ENABLED`, `EMAIL_ENABLED`, `SMS_ENABLED` |
| `lib/utils.ts` | `cn()` (clsx+tailwind-merge), `hasEnvVars` check |
| `lib/api/route-error.ts` | `withRouteErrorHandler()` — standardised error wrapper for API routes |
| `lib/marketing/plans.ts` | Plan marketing copy + pricing data |
| `lib/marketing/currency.ts` | Currency formatting + locale detection |

---

## 12. Third-Party Integrations

| Service | Type | Auth | Purpose |
|---|---|---|---|
| **Supabase** | BaaS | API key + JWT | Database (PostgreSQL), Auth, Storage, RLS, pg_cron |
| **Meta / WhatsApp Cloud API** | Messaging | OAuth Bearer token | WhatsApp campaigns, templates, live chat, media, webhooks |
| **Resend** | Email | API key | Transactional + campaign email, domain verification, webhooks |
| **SMTP** | Email | User/pass | Fallback email provider |
| **Twilio** | SMS | Account SID + Token | SMS campaigns, inbound, status callbacks, number provisioning |
| **Stripe** | Billing | API key | USD subscriptions, one-time top-ups, customer portal |
| **Razorpay** | Billing | API key | INR subscriptions, payment links |
| **Google** | OAuth | Client ID/Secret | Social sign-in via Supabase Auth |
| **Facebook** | OAuth | App ID/Secret | WhatsApp Embedded Signup OAuth flow |

---

## 13. Billing & Credit System

### Plans

| Plan | Credits/mo | Contacts | Seats | Channels |
|---|---|---|---|---|
| Starter | 5,000 | 5,000 | 3 | Email + WhatsApp |
| Pro | 15,000 | 25,000 | 10 | Email + WhatsApp + SMS + API |
| Business | 50,000 | 100,000 | Unlimited | All + AI assist |

Trial: **7 days / 200 credits** on any plan.

### Credit Weights (cost per send)

| Channel | Message Type | Credits |
|---|---|---|
| Email | Any | 1 |
| WhatsApp | Session message | 2 |
| WhatsApp | Utility / Authentication template | 3 |
| WhatsApp | Marketing template | 5 |
| SMS | Domestic | 5 |
| SMS | MMS | 8 |
| SMS | International | 15 |
| AI | Generation | 10 |

### Credit Flow
1. **Grant**: on trial start, monthly plan renewal (via Stripe/Razorpay `invoice.payment_succeeded`), top-up pack purchase, admin manual adjustment, refund
2. **Deduct**: atomically per message sent (`deduct_credits` Supabase RPC); refunded on terminal channel errors
3. **Ledger**: every change written to `credit_ledger` with reason + ref_id (idempotent)
4. **Auto-recharge**: if balance drops below threshold and auto-recharge is enabled, triggers a top-up purchase automatically
5. **Wallet**: `credit_wallets` table holds real-time balance per project

### Payment Routing
- Currency detected from IP geolocation or user selection
- **INR** → Razorpay (preferred) or Stripe
- **USD** → Stripe (preferred) or Razorpay
- Platform admin can override preferred provider per currency in settings

---

## 14. Security & Access Control

### Row-Level Security
- RLS enabled on all data tables
- Helper functions: `user_can_access_project()`, `user_is_project_owner_or_admin()`, `user_is_project_owner()`
- Webhooks and cron jobs use **service-role** client to bypass RLS for system writes

### Role Matrix

| Action | Owner | Admin | Editor | Viewer |
|---|---|---|---|---|
| Delete project | ✅ | ❌ | ❌ | ❌ |
| Manage billing | ✅ | ❌ | ❌ | ❌ |
| Manage team | ✅ | ✅ | ❌ | ❌ |
| Configure settings | ✅ | ✅ | ❌ | ❌ |
| Create/send campaigns | ✅ | ✅ | ✅ | ❌ |
| Manage contacts | ✅ | ✅ | ✅ | ❌ |
| View analytics | ✅ | ✅ | ✅ | ✅ |

### Webhook Security
| Provider | Method |
|---|---|
| Stripe | `stripe.webhooks.constructEvent()` HMAC-SHA256 |
| Razorpay | HMAC-SHA256 with `RAZORPAY_KEY_SECRET` |
| Twilio | X-Twilio-Signature validation |
| Resend | Svix HMAC signature |
| WhatsApp | `hub.verify_token` on registration; no sig on message events (scoped by phone_number_id) |

### Other
- Cron endpoints: `Authorization: Bearer {CRON_SECRET}` required
- Unsubscribe links: HMAC-signed with `UNSUBSCRIBE_SECRET`
- Email content encryption: `ENCRYPTION_KEY`
- Admin auto-promotion: `PLATFORM_ADMIN_EMAILS` env list — checked on every sign-in

---

## 15. Environment Variables

```env
# ── Supabase ────────────────────────────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# ── App ─────────────────────────────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=              # Used for OAuth redirect URIs and link generation

# ── WhatsApp (Meta) ─────────────────────────────────────────────────────────
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
WHATSAPP_CONFIG_ID=               # Meta config ID for Embedded Signup
WHATSAPP_VERIFY_TOKEN=            # Token for webhook verification GET challenge

# ── Email ────────────────────────────────────────────────────────────────────
EMAIL_PROVIDER=resend             # "resend" or "smtp"
RESEND_API_KEY=
RESEND_WEBHOOK_SECRET=
RESEND_INBOUND_WEBHOOK_SECRET=
RESEND_INBOUND_DOMAIN=           # Domain for inbound email parsing
EMAIL_FROM=                       # Default from address
EMAIL_FALLBACK_DOMAIN=           # Fallback for projects without verified domain
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=

# ── SMS (Twilio) ─────────────────────────────────────────────────────────────
# (project-level Twilio credentials stored in DB; no global Twilio vars required)

# ── Billing ──────────────────────────────────────────────────────────────────
# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
# Stripe price IDs for each plan/cycle/currency (many vars — see lib/billing/config.ts)

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

# ── Security ─────────────────────────────────────────────────────────────────
CRON_SECRET=                      # Protects /api/cron/* endpoints
ENCRYPTION_KEY=                   # Email content encryption
UNSUBSCRIBE_SECRET=               # Unsubscribe link HMAC
INBOUND_TOKEN_SECRET=             # Inbound email parsing auth

# ── Feature Flags ─────────────────────────────────────────────────────────────
NEXT_PUBLIC_BILLING_ENABLED=true
NEXT_PUBLIC_EMAIL_ENABLED=true
NEXT_PUBLIC_SMS_ENABLED=true

# ── Admin ────────────────────────────────────────────────────────────────────
PLATFORM_ADMIN_EMAILS=            # Comma-separated; auto-promoted to platform_admin on sign-in
```

---

*End of audit. Total: ~120 API routes, 5 cron jobs, 5 webhook receivers, 35+ DB tables, 9 third-party integrations.*
