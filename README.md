# AIRLÉI BIZ™ 

This is the complete source code for the AIRLÉI BIZ™ website, Malaysia's first AICG commercial studio. The website has been updated to version 5.0 with a minimalist Apple-style design.

## Features

- **Minimalist Design**: Clean, Apple-inspired aesthetic with generous whitespace
- **Responsive Layout**: Optimized for all screen sizes
- **AI-Powered Services**: Showcase of AI content generation services
- **Portfolio Showcase**: Display of AI-generated videos and content
- **Contact Form**: Easy way for clients to get in touch
- **Pricing Information**: Transparent pricing for all services

## Technologies Used

- React 18+
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion (for animations)
- Recharts (for data visualization)

## Installation

1. Clone or download the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
4. Open http://localhost:3000 in your browser

## Building for Production

To create a production build:
```bash
npm run build
# or
pnpm build
```

The build files will be generated in the `dist` directory.

## Project Structure

```
├── videos/				# all the videos
├── images/				# images like the hero's photo and the logo
├── src/
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React contexts
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.tsx       # Application entry point
├── index.html         # HTML template
└── package.json       # Project dependencies
```

## Design Specifications (v5.0)

- **Navigation Bar**: Minimalist design with [AIRLÉI BIZ™] Home | Services | Portfolio | About | Contact
- **Color Scheme**: White background (#ffffff), dark gray text (#1d1d1f), brand blue (#6aa3ff) for CTA buttons
- **Typography**: Sans-serif fonts with clear hierarchy (28px main title, 20px subtitles, 16px body text)
- **Layout**: Generous whitespace with left/right margins ≥15% of screen width on desktop
- **Footer**: Single column centered design with brand slogan, links, social media, and copyright

## Version History

- **v5.0**: Minimalist Apple-style redesign with improved navigation, layout, and typography
- **v4.0**: Light theme implementation with improved color contrast and accessibility
- **v3.0**: Core functionality and service offerings implementation
- **v2.0**: Initial responsive design implementation
- **v1.0**: Project inception

© 2025 AIRLÉI BIZ. All rights reserved."# airlei-biz-site" 
