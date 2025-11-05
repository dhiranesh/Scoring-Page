# Frontend (Expo React Native)

This folder contains an Expo-based React Native app scaffold for the single-page "Scoring" flow.

Commands (from `frontend/`):

```powershell
# install dependencies
npm install

# start Metro / expo dev tools (open QR or web)
npm run start

# run on Android device/emulator
npm run android

# run on iOS simulator (macOS only)
npm run ios

# run on web
npm run web
```

Notes:
- The `App.js` imports platform-specific logic from `src/platform/{android,ios,web}`. Put any OS-specific logic there.
- The `StartScoringButton` component invokes the backend at `http://localhost:4000/start` by default; change the `backendUrl` prop in `App.js` as needed for remote servers or tunnels (e.g., Expo tunnel URL).
