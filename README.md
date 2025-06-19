# KyndSpace

Testing out a new auth library called "better-auth" for a login/signup page.

## Avatar Upload Setup

To enable avatar upload functionality, you need to configure the following environment variables:

### Required Environment Variables

Create a `.env.local` file in the root directory with:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Database Configuration
DATABASE_URL=your_database_connection_string

# Auth Configuration (if using Google OAuth)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Supabase Storage Setup

1. Create a storage bucket named `user-avatars` in your Supabase project
2. Set the bucket to public access
3. Configure CORS policies if needed

### Troubleshooting Avatar Upload

If you encounter a 500 error when uploading avatars:

1. **Check environment variables**: Ensure `SUPABASE_URL` and `SUPABASE_ANON_KEY` are set
2. **Verify Supabase storage**: Make sure the `user-avatars` bucket exists
3. **Check database connection**: Ensure `DATABASE_URL` is correct and accessible
4. **Review server logs**: Check the console output for detailed error messages

The avatar upload API now includes comprehensive error logging to help identify issues. 

