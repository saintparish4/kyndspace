-- Enable RLS on the storage.objects table (if not already enabled)
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to upload avatars
CREATE POLICY "Authenticated users can upload avatars" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'user-avatars' AND
  auth.role() = 'authenticated'
);

-- Policy to allow users to update their own avatars
-- This checks if the filename starts with their user ID
CREATE POLICY "Users can update their own avatars" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'user-avatars' AND
  auth.uid()::text = split_part(name, '/', 1)
);

-- Policy to allow public read access to avatars
CREATE POLICY "Public read access to avatars" ON storage.objects
FOR SELECT USING (bucket_id = 'user-avatars');

-- Policy to allow users to delete their own avatars
CREATE POLICY "Users can delete their own avatars" ON storage.objects
FOR DELETE USING (
  bucket_id = 'user-avatars' AND
  auth.uid()::text = split_part(name, '/', 1)
);

-- Alternative simpler policy (if you don't need user-specific restrictions)
-- Uncomment the lines below and comment out the above policies if you want this approach:

-- CREATE POLICY "Authenticated users can manage avatars" ON storage.objects
-- FOR ALL USING (
--   bucket_id = 'user-avatars' AND
--   auth.role() = 'authenticated'
-- ); 