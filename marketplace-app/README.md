# Nike Marketplace

A modern e-commerce application built with Next.js, TypeScript, TailwindCSS, Drizzle ORM, and Neon PostgreSQL.

## Features

- 🛍️ Product catalog with Nike items
- 🎨 Modern, responsive UI with TailwindCSS
- 🗄️ PostgreSQL database with Drizzle ORM
- 🔄 State management with Zustand
- ⚡ Fast development with Next.js 15
- 🔒 Type-safe with TypeScript

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **State Management**: Zustand
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- A Neon PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd marketplace-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:
```env
DATABASE_URL="postgresql://username:password@host:port/database"
```

4. Set up the database:
```bash
# Generate migration files
npm run db:generate

# Run migrations (you'll need to set up your database first)
npm run db:migrate

# Seed the database with sample Nike products
npm run db:seed
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Schema

The application includes a `products` table with the following structure:

- `id`: Primary key
- `name`: Product name
- `description`: Product description
- `price`: Product price (decimal)
- `category`: Product category
- `brand`: Product brand
- `imageUrl`: Product image URL
- `stock`: Available stock quantity
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   │   └── products/   # Products API
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   └── ProductCard.tsx # Product card component
├── lib/               # Utility libraries
│   ├── db.ts          # Database configuration
│   ├── schema.ts      # Database schema
│   ├── seed.ts        # Database seeding
│   └── store.ts       # Zustand store
└── scripts/           # Utility scripts
    └── seed.ts        # Seed script
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
