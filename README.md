# KUTX AGENCY - AI-powered Web & Automation Solutions

A premium, modern digital agency website built with Next.js, Tailwind CSS, and Supabase. Features stunning animations, responsive design, and a complete admin dashboard.

## 🚀 Features

- **Premium Design**: Apple-style black theme with neon purple/blue accents
- **Smooth Animations**: Framer Motion powered interactions and transitions
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Web Services Section**: Live services with pricing and features
- **AI Services Section**: Coming soon pages with waitlist functionality
- **Contact Forms**: Integrated with Supabase database
- **Admin Panel**: Protected dashboard to manage submissions
- **Glassmorphism UI**: Modern glass-effect components
- **SEO Optimized**: Meta tags and structured data

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

### Backend & Database
- **Supabase** - Open source Firebase alternative
- **PostgreSQL** - Reliable relational database
- **Supabase Auth** - User authentication (ready for production)

### Development & Deployment
- **Vercel** - Recommended hosting platform (free)
- **Netlify** - Alternative hosting option (free)
- **GitHub** - Version control and CI/CD

## 📋 Project Structure

```
kutx-agency/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/             # Admin panel routes
│   │   ├── ai-agents/         # AI agents page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── services/          # Services page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable React components
│   │   ├── AboutHero.tsx      # About page hero
│   │   ├── AIAgentFeatures.tsx # AI features section
│   │   ├── AIAgentsHero.tsx   # AI agents hero
│   │   ├── AIServices.tsx     # AI services section
│   │   ├── AboutHero.tsx      # About page hero
│   │   ├── ContactForm.tsx    # Contact form component
│   │   ├── ContactHero.tsx    # Contact page hero
│   │   ├── ContactInfo.tsx    # Contact information
│   │   ├── CoreValues.tsx     # Core values section
│   │   ├── Dashboard.tsx      # Admin dashboard
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Header.tsx         # Site navigation
│   │   ├── Hero.tsx           # Home page hero
│   │   ├── MissionVision.tsx  # Mission & vision section
│   │   ├── ServicesOverview.tsx # Services overview
│   │   ├── TechStack.tsx      # Technology stack display
│   │   ├── WaitlistForm.tsx   # AI waitlist form
│   │   ├── WebServices.tsx    # Web services section
│   │   ├── WhoWeAre.tsx       # About section
│   │   └── WhyChooseUs.tsx    # Why choose us section
│   ├── lib/
│   │   └── supabase.ts        # Supabase client configuration
│   └── styles/
│       ├── globals.css        # Global styles and animations
│       └── mobile.css         # Mobile responsive optimizations
├── supabase-schema.sql        # Database schema
├── .env.local                # Environment variables (create this)
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.mjs           # Next.js configuration
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Git
- Supabase account (free)

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd kutx-agency
npm install
```

### 2. Set up Supabase

1. **Create a new Supabase project**
   - Go to [supabase.com](https://supabase.com)
   - Click "Start your project" 
   - Sign up/login and create a new project
   - Choose a database password and region

2. **Get your credentials**
   - In your Supabase project, go to Settings → API
   - Copy the Project URL and Anon Key

3. **Set up the database schema**
   - Go to the SQL Editor in your Supabase project
   - Copy and paste the contents of `supabase-schema.sql`
   - Click "Run" to create all tables

4. **Create environment file**
   Create `.env.local` in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Click "Deploy"

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder or connect GitHub
   - Add environment variables in Netlify dashboard
   - Deploy

## 🔧 Admin Panel

**Access**: `/admin`
**Default Credentials**: 
- Email: `admin@kutx.com`
- Password: `admin123`

> **Security Note**: For production, replace the simple login with proper Supabase Auth integration.

## 📱 Features Overview

### 🌟 Pages
- **Home**: Hero section, services overview, tech stack
- **Services**: Web services (live) + AI services (coming soon)
- **About**: Company info, mission, vision, values
- **Contact**: Contact form + business information
- **AI Agents**: Coming soon page with waitlist
- **Admin**: Protected dashboard to manage submissions

### 🎨 Design Features
- Glassmorphism effects throughout
- Smooth scroll animations
- Neon purple/blue color scheme
- Apple-style clean layout
- Mobile-responsive navigation
- Hover states and micro-interactions

### 💼 Business Features
- Contact form submissions stored in database
- AI agents waitlist with email capture
- Admin dashboard to view/manage submissions
- Professional pricing displays
- Service comparison tables

## 🔮 Future Enhancements

- [ ] Supabase Auth integration for admin
- [ ] Blog section
- [ ] Portfolio/showcase
- [ ] Client testimonials
- [ ] Live chat integration
- [ ] Appointment booking system
- [ ] Payment integration for services
- [ ] Multi-language support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](issues).

## 📞 Support

For support, email rajkeerti@zohomail.in or call +91 7084499198.

---

**Built with ❤️ by KUTX AGENCY**
