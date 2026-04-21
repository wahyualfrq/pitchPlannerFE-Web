# 🏏 PitchPlanner: Smart Match Scheduling System

PitchPlanner is a high-performance web application designed for professional sports tournament scheduling. It utilizes an intelligent **Greedy Optimization Algorithm** to resolve venue conflicts, minimize travel overhead, and ensure a balanced schedule for teams.

Built with a **Premium Dark Aesthetic**, it offers a cinematic experience for analysts and tournament organizers.

## ✨ Core Features

- **AI-Powered Optimization**: Automatically generates conflict-free schedules using advanced heuristics.
- **Interactive Control Panel**: Manually adjust kickoff times and venues with real-time conflict validation.
- **Cinematic UI/UX**: Professional-grade interface featuring glassmorphism, floating animations, and fluid transitions.
- **Dynamic Data Support**: Import custom CSV datasets and preview them instantly.
- **Comprehensive Analytics**: Monitor efficiency, match counts, and optimization scores.
- **Production Ready**: Optimized for Netlify deployment with SPA routing and environment variable support.

## 🛠️ Technology Stack

- **Frontend**: React 19 (Vite 8)
- **Styling**: Tailwind CSS (PostCSS)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend API**: Python Flask (Optimized for Render)

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/wahyualfrq/pitchPlannerFE-Web.git
cd pitchPlannerFE-Web
npm install
```

### 2. Environment Setup
Create a `.env` file in the root:
```env
VITE_API_URL=https://pitchplannerbe-model.onrender.com/api/optimize
```

### 3. Development
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## 🌐 Deployment (Netlify)

This project is configured for seamless deployment on Netlify:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Redirects**: SPA routing is handled via `public/_redirects` and `netlify.toml`.

## 📂 Architecture

```text
src/
├── components/      # Modular UI components (Navbar, Hero, Timeline, etc.)
├── pages/           # Page layouts (Home.jsx)
├── index.css        # Global design system & utilities
└── App.jsx          # Application Entry Point
```

---
*Developed with focus on Performance, Stability, and Luxury UX.*
