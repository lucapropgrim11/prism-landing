# Prism - Your Productivity Dashboard

A modern productivity dashboard with AI-powered scheduling, task management, and focus tools.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Modern UI with Tailwind CSS
- 🔐 Supabase Integration
- 📱 Fully Responsive Design
- 🌙 Dark Mode by Default
- 🔄 Pre-registration System

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd prism
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

4. Set up the database:
- Create a Supabase project
- Run the SQL migration in `supabase/migrations/create_pre_registrations.sql`

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app router pages and API routes
- `components/` - React components
- `utils/` - Utility functions and configurations
- `public/` - Static assets
- `supabase/` - Database migrations and configurations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
