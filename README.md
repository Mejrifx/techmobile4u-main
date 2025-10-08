# TechMobile4U - Mobile Device Marketplace

A professional, responsive front-end web application for buying and selling mobile electronics.

## Features

- **Buy Phones & Tablets**: Browse devices by brand (Apple, Samsung, Google, etc.)
- **Sell Your Device**: Submit device details for quotes
- **Responsive Design**: Built with TailwindCSS and shadcn/ui components
- **Modern UI**: Clean, user-friendly e-commerce interface

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: TailwindCSS + shadcn/ui
- **Routing**: React Router DOM
- **Components**: Radix UI primitives

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── data/          # Mock data
```

## Development

This is currently a front-end only application. Backend integration with Supabase and payment processing with Stripe are planned for future development.

## License

MIT License