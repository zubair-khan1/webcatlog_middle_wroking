-- Allow admins to send system messages (e.g. "Marked as Resolved")
-- Safe version: drops only if exists, creates only if not exists

-- Drop the old policy if it exists
DROP POLICY IF EXISTS "Admins can send admin messages" ON support_messages;

-- Drop the new policy name too in case we're re-running
DROP POLICY IF EXISTS "Admins can send admin and system messages" ON support_messages;

-- Create the updated policy that allows both 'admin' and 'system' sender types
CREATE POLICY "Admins can send admin and system messages"
ON support_messages
FOR INSERT
WITH CHECK (
  sender_type IN ('admin', 'system')
  AND
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'admin'
  )
);
