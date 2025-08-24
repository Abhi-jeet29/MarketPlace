# Setup Guide

## Prerequisites

1. **Node.js**: Version 18.18.0 or higher
2. **Neon PostgreSQL Database**: You'll need a Neon account and database

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"
```

**To get your Neon database URL:**
1. Go to [neon.tech](https://neon.tech)
2. Create an account and a new project
3. Copy the connection string from your project dashboard
4. Replace the placeholder in `.env.local`

### 3. Set Up Database

Generate and run migrations:

```bash
# Generate migration files
npm run db:generate

# Run migrations (make sure your DATABASE_URL is set)
npm run db:migrate
```

### 4. Seed the Database

Populate the database with sample Nike products:

```bash
npm run db:seed
```

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your Nike marketplace!

## Troubleshooting

### Database Connection Issues
- Ensure your `DATABASE_URL` is correct
- Check that your Neon database is active
- Verify SSL mode is set to `require`

### Migration Issues
- Make sure you've run `npm run db:generate` before `npm run db:migrate`
- Check that your database URL has write permissions

### Seeding Issues
- Ensure migrations have been run successfully
- Check that the products table exists in your database

## Project Structure

```
marketplace-app/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   ├── lib/             # Database & utilities
│   └── scripts/         # Database scripts
├── drizzle.config.ts    # Drizzle configuration
└── package.json         # Dependencies & scripts
```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
