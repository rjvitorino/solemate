-- Waitlist consent columns (GDPR). Run in Supabase SQL Editor after initial waitlist table exists.
-- Adds: terms_accepted, terms_version, terms_accepted_at, consent_ip, consent_user_agent

ALTER TABLE waitlist
  ADD COLUMN IF NOT EXISTS terms_accepted boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS terms_version text,
  ADD COLUMN IF NOT EXISTS terms_accepted_at timestamptz,
  ADD COLUMN IF NOT EXISTS consent_ip text,
  ADD COLUMN IF NOT EXISTS consent_user_agent text;
