# Scoring-Page (subBranch)

This repository contains a minimal separated frontend and backend scaffold for the "Scoring" single-page app.

Structure
- `frontend/` — React + Vite single-page app. The app shows a "Start Scoring" button and a small UI.
- `backend/` — Minimal Express server with a health endpoint and a `/start` endpoint used by the frontend.

Quick start (develop)

1. Open two terminals.

Frontend:
```
cd frontend
npm install
npm run dev
```

Backend:
```
cd backend
npm install
node index.js
```

The frontend dev server will run on Vite's default (usually http://localhost:5173) and the backend on port 4000.

Notes
- This is a minimal scaffold. You can expand the backend with database, auth, or API routes as needed.
- The frontend is intentionally a single page with a "Start Scoring" button to match the requested UI.

Expo frontend notes
- The frontend has been converted to an Expo React Native app. From `frontend/` use the following commands:

```powershell
cd frontend
npm install
npm run start   # expo start (Metro + dev tools)
npm run android # run on Android device/emulator
npm run ios     # run on iOS simulator (macOS only)
npm run web     # run the app in the browser
```

Backend notes
- Start the backend from the `backend/` folder:

```powershell
cd backend
npm install
npm start
```

The frontend expects the backend at `http://localhost:4000` by default. When you run Expo on a device, use the machine IP or a tunnel URL and update `backendUrl` in `frontend/App.js`.
# Scoring-Page
**Page 1: Start Scoring – the user begins by clicking the “Start Scoring” button.

Page 2: Select the number of overs for the match.

Page 3: Enter the names of Team A and Team B players, assign team captains, and select the striker, non-striker, bowler, and wicketkeeper.

Page 4: Display the toss result – show which team won the toss and their decision to bat or bowl.

Page 5: Scoring page**
