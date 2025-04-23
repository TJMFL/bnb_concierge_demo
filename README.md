# Concierge AI Demo

A polished demonstration of the ENSPYR AI Concierge platform, designed to showcase the capabilities of our AI concierge service for luxury vacation rental properties.

## Features

- AI-powered virtual concierge for vacation properties
- Guest information portal with check-in details
- Intelligent recommendations based on guest preferences
- Real-time assistance with local information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your `.env` file in the root directory:
   ```
   VITE_GOOGLE_API_KEY=your_google_api_key_here
   ```

4. To obtain a Google Generative AI API key:
   - Visit the [Google AI Studio](https://ai.google.dev/)
   - Sign up and create a Gemini API key
   - Copy the key to your `.env` file

### Running the Development Server

```
npm run dev
```

The app will be available at http://localhost:5173

### Building for Production

```
npm run build
```

## Customizing for Different Locations

The platform is designed to be easily adapted for different locations and property types:

1. Update the guest and property information in `src/lib/googleAI.ts`
2. Customize the AI prompt context to highlight location-specific features
3. Update the background image in `public/` folder (referenced in ChatContainer.tsx)

## Performance Optimization

For the best guest experience, consider the following:

1. Use a dedicated API key with sufficient quota for expected traffic
2. Optimize images for faster loading
3. Consider deploying on a CDN for global accessibility

## License

Copyright © 2025 ENSPYR AI. All rights reserved. 