# VoiceBridge Frontend

Modern, voice-enabled web and desktop application for VoiceBridge, built with **React**, **Vite**, **Tailwind CSS**, and **Electron**.

## Features

- **Voice Assistant Integration**: Interactive AI-powered voice assistant interface.
- **Email & Gmail Integration**: Compose, read, and manage inbox via voice and modern UI.
- **Admin & Employee Portals**: Comprehensive dashboard, attendance, task tracking, analytics, and messaging.
- **Cross-Platform**: Run seamlessly as a high-performance web app or as a native desktop app with Electron.
- **Modern UI/UX**: Built with Tailwind CSS, Framer Motion animations, and Recharts visualization.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Desktop Runtime**: [Electron](https://www.electronjs.org/)
- **Styling**: Tailwind CSS v4 & Custom CSS
- **Routing**: React Router v7
- **Icons & Animation**: React Icons, Framer Motion, Lottie React
- **Notifications**: React Hot Toast
- **Authentication**: JWT & `@react-oauth/google`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- VoiceBridge Backend server running (default: `http://localhost:5000`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Santhoshkumar010904/voicefrontend.git
   cd voicefrontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Set your backend API endpoint:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

### Running the Application

- **Web Development Server**:
  ```bash
  npm run dev
  ```
  Open [http://localhost:5173](http://localhost:5173) in your browser.

- **Desktop (Electron) Development**:
  ```bash
  npm run electron:dev
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

## Project Structure

```
frontend/
├── electron/          # Electron main and preload scripts
├── public/            # Static assets and icons
├── src/
│   ├── components/    # Reusable UI components & Voice Assistant
│   ├── context/       # React Context providers (Task, Theme, Employee)
│   ├── pages/         # Application views (Landing, Inbox, Admin, Employee)
│   ├── styles/        # Global and modular CSS stylesheets
│   ├── App.jsx        # Root component
│   ├── main.jsx       # Entry point
│   └── routes.jsx     # Route configurations
├── .env.example       # Sample environment configuration
├── package.json
└── vite.config.js
```
