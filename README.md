# SONIVIO - Experience Music

SONIVIO is a modern, high-performance music streaming application built with React, TypeScript, and Tailwind CSS. It leverages the YouTube Data API v3 to provide a vast library of music, combined with a sleek, interactive user interface.

![SONIVIO Preview](public/playing.gif)

## 🚀 Features

- **YouTube API Integration:** Search and stream millions of tracks directly from YouTube.
- **Modern UI/UX:** A beautiful, responsive interface designed with Framer Motion for smooth animations.
- **Smart Search:** Find your favorite artists, albums, and songs with ease.
- **Interactive Player:** Full playback controls, volume management, and a dedicated queue system.
- **Glassmorphism Design:** A modern aesthetic with blurred backgrounds and vibrant accents.
- **Fast Performance:** Optimized with Vite and Zustand for efficient state management.

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router 7
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **API:** YouTube Data API v3 (via Axios)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A YouTube Data API Key (from [Google Cloud Console](https://console.cloud.google.com/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vijaybarhate/SONIVIO-Music-Player.git
   cd SONIVIO-Music-Player
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your API key:
   ```env
   VITE_YOUTUBE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🚀 Deployment

The project is configured for deployment on GitHub Pages.

To deploy your own version:
1. Update the `base` in `vite.config.ts` to match your repository name.
2. Run the deployment script:
   ```bash
   npm run deploy
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ by [Vijay Barhate](https://github.com/vijaybarhate)
