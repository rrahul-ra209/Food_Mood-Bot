# Food Mood Bot 🍽️

A beautiful, AI-powered food suggestion bot that recommends perfect meals based on your current mood!

## Features

- **Mood-Based Suggestions**: Enter your mood and get personalized food recommendations
- **Beautiful UI**: Modern, responsive design with Tailwind CSS
- **AI Integration Ready**: Built to work with Gemini API and Imagen API
- **Loading States**: Smooth user experience with animated loading states
- **Image Generation**: Displays beautiful food images for each suggestion
- **Detailed Recipes**: Shows ingredients and descriptions for each food suggestion

## Current Implementation

The app currently uses mock data to demonstrate functionality. To use real AI APIs:

1. Get API keys for:
   - Google Gemini API (for food suggestions)
   - Google Imagen API (for image generation)

2. Add your API keys to the `.env` file:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   IMAGEN_API_KEY=your_imagen_api_key_here
   ```

3. Replace the mock functions in `server.js` with actual API calls

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node server.js
   ```

3. Open your browser to `http://localhost:3000`

## Mock Moods Available

The current mock implementation responds to these moods:
- happy
- sad
- stressed
- energetic
- romantic

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: HTML, CSS (Tailwind), Vanilla JavaScript
- **APIs**: Ready for Gemini API and Imagen API integration
- **Styling**: Tailwind CSS with custom animations

## API Endpoints

- `POST /api/suggest-food`: Get food suggestion based on mood
  - Body: `{ "mood": "your_mood_here" }`
  - Returns: Food name, description, ingredients, and image URL

Enjoy discovering your perfect mood food! 🎉