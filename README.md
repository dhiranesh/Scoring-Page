# Scoring App# Scoring-Page (subBranch)



A cross-platform scoring application built with **Expo React Native** (frontend) and **Express.js** (backend).This repository contains a minimal separated frontend and backend scaffold for the "Scoring" single-page app.



## Project StructureStructure



```- `frontend/` — React + Vite single-page app. The app shows a "Start Scoring" button and a small UI.

Scoring-Page-subBranch/- `backend/` — Minimal Express server with a health endpoint and a `/start` endpoint used by the frontend.

├── frontend/          # Expo React Native app (iOS, Android, Web)

│   ├── src/Quick start (develop)

│   │   ├── components/    # Reusable UI components

│   │   ├── platform/      # Platform-specific logic (android, ios, web)1. Open two terminals.

│   │   └── config/        # App configuration

│   ├── App.js         # Main app entryFrontend:

│   ├── app.json       # Expo configuration

│   └── package.json```

│cd frontend

├── backend/           # Express.js REST APInpm install

│   ├── src/npm run dev

│   │   ├── routes/    # API routes```

│   │   └── controllers/   # Business logic

│   ├── index.js       # Server entryBackend:

│   └── package.json

│```

└── README.mdcd backend

```npm install

node index.js

## Quick Start```



### PrerequisitesThe frontend dev server will run on Vite's default (usually http://localhost:5173) and the backend on port 4000.

- Node.js 16+ installed

- npm or yarn package managerNotes

- For mobile: Expo Go app on your device (iOS/Android)

- This is a minimal scaffold. You can expand the backend with database, auth, or API routes as needed.

### Backend Setup- The frontend is intentionally a single page with a "Start Scoring" button to match the requested UI.



```powershellExpo frontend notes

cd backend

npm install- The frontend has been converted to an Expo React Native app. From `frontend/` use the following commands:

npm start

``````powershell

cd frontend

Backend runs on: `http://localhost:4000`npm install

npm run start   # expo start (Metro + dev tools)

### Frontend Setupnpm run android # run on Android device/emulator

npm run ios     # run on iOS simulator (macOS only)

```powershellnpm run web     # run the app in the browser

cd frontend```

npm install

npm startBackend notes

```

- Start the backend from the `backend/` folder:

This opens Expo Dev Tools. From there:

- **For Web**: Press `w` to open in browser```powershell

- **For Mobile**: Scan QR code with Expo Go app (iOS) or Camera app (Android)cd backend

- **For Android Emulator**: Press `a`npm install

- **For iOS Simulator**: Press `i` (macOS only)npm start

```

## Available Scripts

The frontend expects the backend at `http://localhost:4000` by default. When you run Expo on a device, use the machine IP or a tunnel URL and update `backendUrl` in `frontend/App.js`.

### Frontend (`frontend/` folder)

- `npm start` - Start Expo dev server# Scoring-Page

- `npm run android` - Run on Android device/emulator

- `npm run ios` - Run on iOS simulator (macOS only)\*\*Page 1: Start Scoring – the user begins by clicking the “Start Scoring” button.

- `npm run web` - Run in web browser

Page 2: Select the number of overs for the match.

### Backend (`backend/` folder)

- `npm start` - Start Express server on port 4000Page 3: Enter the names of Team A and Team B players, assign team captains, and select the striker, non-striker, bowler, and wicketkeeper.

- `npm run dev` - Start with nodemon (auto-restart on changes)

Page 4: Display the toss result – show which team won the toss and their decision to bat or bowl.

## Features

Page 5: Scoring page\*\*

- ✅ Cross-platform support (iOS, Android, Web)
- ✅ Platform-specific logic separated by OS
- ✅ Clean REST API architecture
- ✅ Single-page "Start Scoring" UI
- ✅ Properly named variables and structured code

## Platform-Specific Logic

Platform-specific code is organized in `frontend/src/platform/`:
- `android/` - Android-specific implementations
- `ios/` - iOS-specific implementations  
- `web/` - Web-specific implementations

The app automatically selects the correct platform logic at runtime.

## API Endpoints

- `GET /health` - Health check endpoint
- `POST /api/scoring/start` - Start scoring process

## Configuration

### Backend URL
When running on a physical device, update the backend URL in `frontend/src/config/api.js`:
- For local testing: Use your machine's IP address (e.g., `http://192.168.1.100:4000`)
- For production: Update to your deployed backend URL

## Troubleshooting

**Backend not accessible from mobile device:**
- Ensure both devices are on the same network
- Use your machine's IP address instead of `localhost`
- Check firewall settings

**Expo not starting:**
- Clear Expo cache: `expo start -c`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

## License

Private project - All rights reserved
