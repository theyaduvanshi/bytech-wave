# ByTech Wave - Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Build the project locally: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 2: Git Deployment (Recommended)
1. Push this project to GitHub/GitLab/Bitbucket
2. Connect your repo at [Netlify](https://app.netlify.com/)
3. Build settings are pre-configured in `netlify.toml`

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --prod --dir=dist
```

## 📁 Project Structure

```
bytech-wave-export/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app component
│   ├── index.css        # Global styles + Tailwind
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── netlify.toml         # Netlify config
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite configuration
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

- **Primary Color**: Soft Light Orange (`#F97316`)
- **Secondary Color**: Soft Light Blue (`#3B82F6`)
- **Background**: Light, soft, elegant gradients
- **Typography**: Sora (headings), Inter (body)
- **Effects**: Glassmorphism, subtle shadows, smooth animations

## 📱 Features

- ✅ Premium animated background (low opacity, non-distracting)
- ✅ Smooth scroll reveal animations
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navigation with mobile hamburger menu
- ✅ Hero section with animated waves
- ✅ Services, About, Testimonials, CTA sections
- ✅ SEO optimized with proper meta tags
- ✅ Fast loading with Vite build optimization

## 🔧 Netlify Configuration

The `netlify.toml` file includes:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules for React Router
- Node.js version 20

## 📞 Support

For issues or questions:
- Check the [Netlify Docs](https://docs.netlify.com/)
- Review [Vite Docs](https://vitejs.dev/guide/)
- See [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Built with ❤️ using React + Vite + Tailwind CSS + shadcn/ui**
