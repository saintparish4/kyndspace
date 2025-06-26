# KyndSpace

A comprehensive wellness and mindfulness platform built with Next.js 15, TypeScript, and modern web technologies. KyndSpace helps users connect, grow, and thrive through meditation, mindfulness practices, wellness tracking, and virtual classes.

## 🌟 Features

### Core Wellness Features
- **Meditation & Mindfulness**: Guided sessions, breathing exercises, and mindfulness practices
- **Virtual Classes**: Live and on-demand wellness classes with expert instructors
- **Habit Tracking**: Daily wellness habit monitoring and progress tracking
- **Journaling**: Personal reflection and wellness journal with date-based entries
- **Sleep Support**: Sleepcasts, audio content, and sleep improvement tools
- **Mental Health Resources**: Articles, tips, and mental wellness content

### User Experience
- **Personal Dashboard**: Comprehensive overview of wellness journey
- **Avatar Management**: User profile customization with Supabase storage
- **Booking System**: Class reservation and management
- **Notifications**: Personalized wellness reminders and updates
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library
- **TanStack Query** - Data fetching and caching

### Backend & Database
- **Prisma** - Database ORM with PostgreSQL
- **Better Auth** - Authentication library
- **Supabase** - Backend-as-a-Service for storage and auth
- **BullMQ** - Job queue management
- **Redis** - Caching and session storage

### Additional Tools
- **Resend** - Email service
- **Node Cron** - Scheduled tasks
- **Date-fns** - Date manipulation utilities

## 📁 Project Structure

```
KyndSpace/
├── app/                          # Next.js App Router
│   ├── (homepages)/             # Route groups for different features
│   │   ├── articles/            # Wellness articles and content
│   │   ├── classes/             # Virtual class management
│   │   ├── dashboard/           # User dashboard
│   │   ├── habits/              # Habit tracking
│   │   ├── journal/             # Personal journaling
│   │   ├── meditation/          # Meditation content
│   │   ├── mental/              # Mental health resources
│   │   ├── mindfulness/         # Mindfulness practices
│   │   └── sleep/               # Sleep improvement tools
│   ├── api/                     # API routes
│   ├── auth/                    # Authentication pages
│   └── globals.css              # Global styles
├── global/                      # Shared components
│   ├── components/              # Reusable UI components
│   └── ui/                      # Base UI components
├── lib/                         # Utility functions and configurations
├── prisma/                      # Database schema and migrations
├── public/                      # Static assets
└── styles/                      # Additional styling
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Redis server (for job queues)
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd KyndSpace
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/kyndspace"

   # Supabase Configuration
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key

   # Authentication (Google OAuth)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # Redis Configuration
   REDIS_URL=redis://localhost:6379

   # Email Service
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev

   # Seed the database (optional)
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Start the background worker** (in a separate terminal)
   ```bash
   npm run worker
   # or
   pnpm worker
   ```

## 🗄️ Database Schema

The application uses PostgreSQL with the following main models:

- **User**: User accounts and profiles
- **Session**: User authentication sessions
- **JournalEntry**: Personal journal entries
- **Habit**: Daily wellness habits and tracking
- **Class**: Virtual wellness classes
- **Booking**: Class reservations
- **Notification**: User notifications and reminders

## 🔧 Configuration

### Supabase Storage Setup

1. Create a storage bucket named `user-avatars` in your Supabase project
2. Set the bucket to public access
3. Configure CORS policies if needed

### Redis Setup

The application uses Redis for:
- Job queue management (BullMQ)
- Session storage
- Caching

Ensure Redis is running and accessible via the `REDIS_URL` environment variable.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run worker` - Start background job worker

## 🐛 Troubleshooting

### Avatar Upload Issues

If you encounter a 500 error when uploading avatars:

1. **Check environment variables**: Ensure `SUPABASE_URL` and `SUPABASE_ANON_KEY` are set
2. **Verify Supabase storage**: Make sure the `user-avatars` bucket exists
3. **Check database connection**: Ensure `DATABASE_URL` is correct and accessible
4. **Review server logs**: Check the console output for detailed error messages

### Database Connection Issues

1. Verify PostgreSQL is running and accessible
2. Check the `DATABASE_URL` format and credentials
3. Ensure Prisma client is generated: `npx prisma generate`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: support@kyndspace.com
- Create an issue in the repository
- Check the documentation in the `/docs` folder

---

**KyndSpace** - Your personal wellness journey companion. Connect, grow, and thrive.

