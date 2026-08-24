# ZB Karalius — Professional Plumbing Services

Live site: [zb-plumber-karalius.vercel.app](https://zb-plumber-karalius.vercel.app/)

A modern, responsive business website built for a plumbing client in the USA. The site is designed to help the client generate leads, showcase services, and build trust with local customers.

## Overview

This project is a single-page marketing website for a plumbing business, covering services offered, business credibility (about/testimonials), and a clear path for visitors to get in touch or request a quote.

> Note: sections below are based on a typical plumbing business site structure. Update them to match your actual page sections and copy.

## Features

- Responsive design (mobile, tablet, desktop)
- Hero section with call-to-action (call now / request a quote)
- Services section (repair, installation, emergency plumbing, etc.)
- About section highlighting experience and service area
- Testimonials / reviews section
- Contact section with phone, form, or booking CTA
- Fast load times via Vite's optimized build
- Deployed on Vercel with continuous deployment from GitHub

## Tech Stack

- **React** — UI library
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Vercel** — hosting and deployment

## Project Structure

```
zb-plumber-karalius/
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── components/      # Reusable UI components (Navbar, Hero, Services, Footer, etc.)
│   ├── assets/          # Images, icons
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind base styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zb-coderZ/zb-plumber-karalius.git
cd zb-plumber-karalius

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

### Build for Production

```bash
npm run build
```

The optimized build output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is deployed on **Vercel** with automatic deployments triggered on every push to the main branch.

Live URL: [https://zb-plumber-karalius.vercel.app/](https://zb-plumber-karalius.vercel.app/)

## Client

Built for a plumbing services client based in the USA as part of freelance web development work.

## Author

**Zohaib Zulfiqar**
Web Developer | DevOps Engineer | Founder, HAYTHIX AI
GitHub: [@zb-coderZ](https://github.com/zb-coderZ)

## License

This project is proprietary and built for a specific client. Not intended for redistribution without permission.