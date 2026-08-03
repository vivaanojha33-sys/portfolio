# Vivaan Ojha — Portfolio

Modern full-stack portfolio built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and a **Node.js/Express** backend.

## Features

- Elegant dark theme with glassmorphism and gradient accents
- Animated hero with typewriter effect
- Interactive skills grid and technology radar
- Expandable experience timeline with enterprise project details
- Featured personal projects + enterprise work showcase
- Contact form with Express API validation (Zod)
- Fully responsive design
- SEO meta tags

## Quick Start

```bash
# Install root dependencies
npm install

# Install client & server dependencies
npm install --prefix client
npm install --prefix server

# Copy server env
cp server/.env.example server/.env

# Run both frontend and backend
npm run dev
```

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run client + server concurrently |
| `npm run dev:client` | Vite dev server only |
| `npm run dev:server` | Express API only |
| `npm run build` | Build client for production |
| `npm start` | Start production server |

## Production Deployment (Render)

1. Build the client: `npm run build --prefix client`
2. Set `NODE_ENV=production` on the server
3. Deploy server — it serves the built client from `client/dist`
4. Optionally configure SMTP env vars for contact form emails

## Customize

Edit `client/src/data/portfolio.ts` to update:
- Personal info, links, and contact details
- Skills, experience, education
- Project URLs and descriptions

## Tech Stack

**Frontend:** React 19, TypeScript, Vite 8, Tailwind CSS 4, Framer Motion, Lucide Icons

**Backend:** Node.js, Express 5, TypeScript, Zod, Nodemailer
