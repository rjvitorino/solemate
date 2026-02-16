-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  alias TEXT,
  language TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Disallow all selects, updates, and deletes for anon
CREATE POLICY "Deny anon selects" ON waitlist
  FOR SELECT
  TO anon
  USING (false);

CREATE POLICY "Deny anon updates" ON waitlist
  FOR UPDATE
  TO anon
  USING (false);

CREATE POLICY "Deny anon deletes" ON waitlist
  FOR DELETE
  TO anon
  USING (false);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
