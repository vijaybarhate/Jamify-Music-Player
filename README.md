# SONIVIO — Experience Music

<img width="1918" height="909" alt="SONIVIO Preview" src="https://github.com/user-attachments/assets/0874eef9-4626-4d93-b7fd-a3de7e15d439" />

Live demo: [https://vijaybarhate.github.io/SONIVIO-Music-Player/](https://vijaybarhate.github.io/SONIVIO-Music-Player/)

SONIVIO is a modern, fast, and beautiful music streaming web app that uses the YouTube Data API v3 to search and play music. Built with React, TypeScript, and Tailwind CSS, it focuses on smooth animations, responsive design, and excellent performance.

## 🚀 Highlights

- Search and stream music via the YouTube Data API v3
- Responsive, accessible UI with smooth animations (Framer Motion)
- Lightweight state management with Zustand
- Fast builds and dev experience powered by Vite
- Clean glassmorphism-inspired design

## ✨ Features

- Search YouTube for songs, artists, and playlists
- Persistent playback queue with play / pause / skip controls
- Volume control, seek bar, and track progress
- Smooth transitions and animations (Framer Motion)
- Mobile-friendly and responsive layout

## 🧰 Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Zustand (state management)
- React Router
- Framer Motion (animations)
- Axios (YouTube API requests)

## 📦 Getting Started

### Prerequisites

- Node.js v18 or newer
- A YouTube Data API v3 key (create one in [Google Cloud Console](https://console.cloud.google.com/))

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/vijaybarhate/SONIVIO-Music-Player.git
   cd SONIVIO-Music-Player
   ```

2. Install dependencies

   ```bash
   npm install
   # or yarn
   ```

3. Create a `.env` file in the project root and add your YouTube API key:

   ```env
   VITE_YOUTUBE_API_KEY=your_api_key_here
   ```

4. Start the dev server

   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## ⚙️ Available scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run preview` — locally preview production build
- `npm run deploy` — deploy to GitHub Pages (configured)

## 🚀 Deployment (GitHub Pages)

To deploy the app to GitHub Pages:

1. Make sure `base` in `vite.config.ts` is set to `/SONIVIO-Music-Player/` (or your repo name).
2. Build and deploy:

   ```bash
   npm run deploy
   ```

Your site will be available at: `https://vijaybarhate.github.io/SONIVIO-Music-Player/`

## 🔒 Security

- Never commit API keys. Keep `VITE_YOUTUBE_API_KEY` in `.env` and add `.env` to `.gitignore`.
- For public demos, consider using a server-side proxy or serverless function to protect your API key and apply usage limits.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a branch: `git checkout -b feat/my-feature`
3. Commit your changes and open a PR describing the change

Please open issues for bugs or feature requests.

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Vijay Barhate](https://github.com/vijaybarhate)
