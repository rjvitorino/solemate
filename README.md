# SoleMate 👟

A matching platform for people to find their "sole mate" and split pairs of shoes. Connect with others who need the opposite shoe size, coordinate purchases, and reduce waste.

## Features

- 🌍 **Bilingual Support** - English and Portuguese
- 🎯 **Smart Matching** - Find compatible partners by size, side, and style
- 📧 **Early Access Waitlist** - Join the list to be notified when we launch
- 🎨 **Modern UI** - Beautiful, responsive design built with Next.js and Tailwind CSS
- 🔒 **Privacy-First** - Region-only location data, no exact addresses

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Resend account (optional, for email functionality)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd SoleMate
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_ANON_KEY=your_anon_key
RESEND_API_KEY=your_resend_api_key
```

4. Set up the database:

  - Open your Supabase dashboard
  - Go to SQL Editor
  - Run the migration file: `supabase_waitlist_migration.sql`

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```yaml
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── waitlist/      # Waitlist endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── LandingPage.tsx   # Main landing page
│   └── ...
├── lib/                  # Utilities and helpers
│   ├── translations.ts   # i18n translations
│   └── utils.ts          # Utility functions
└── supabase_waitlist_migration.sql  # Database migration
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SUPABASE_URL` | Your Supabase project URL | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `RESEND_API_KEY` | Resend API key for emails | No |

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The project is optimized for Vercel deployment with zero configuration.

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

## Database Setup

1. Create a Supabase project
2. Run the migration SQL file in the Supabase SQL Editor:

   ```sql
   -- See supabase_waitlist_migration.sql
   ```

3. Configure RLS policies as defined in the migration

## API Endpoints

### POST `/api/waitlist`

Join the early access waitlist.

**Request Body:**
```json
{
  "email": "user@example.com",
  "alias": "John_Sneakers", // optional
  "language": "en" // or "pt"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "alias": "John_Sneakers",
    "language": "en",
    "created_at": "2026-02-16T12:00:00Z"
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on GitHub.

---

Made with ❤️ for finding your sole mate
