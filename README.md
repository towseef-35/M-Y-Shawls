# Shawl Elegance

A beautiful, elegant women's shawls website built with Next.js (App Router) and Tailwind CSS.

## Features

- 🏠 **Home Page** - Hero section with featured shawls
- 🧣 **Shawls Listing** - Browse all available shawls
- 📄 **Shawl Detail Pages** - Individual product pages with full details
- ℹ️ **About Page** - Learn about Shawl Elegance
- 📧 **Contact Page** - Get in touch with us
- 📱 **Fully Responsive** - Beautiful on all devices
- 🎨 **Elegant Design** - Clean, feminine, and modern UI

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Next.js Image & Link** components

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── components/       # Reusable components (Navbar, Hero, ProductCard, Footer)
├── data/            # Dummy data for shawls
├── shawls/          # Shawls listing and detail pages
├── about/           # About page
├── contact/         # Contact page
├── layout.tsx       # Root layout with Navbar and Footer
└── page.tsx         # Home page
```

## Pages

- `/` - Home page with hero and featured shawls
- `/shawls` - All shawls listing
- `/shawls/[slug]` - Individual shawl detail page
- `/about` - About page
- `/contact` - Contact page

## Build

```bash
npm run build
```

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
