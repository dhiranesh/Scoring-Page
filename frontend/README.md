# Frontend - Expo React Native

Cross-platform mobile application built with Expo and React Native.

## Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── StartScoringButton.js
│   ├── platform/            # Platform-specific logic
│   │   ├── android/         # Android-specific code
│   │   ├── ios/             # iOS-specific code
│   │   ├── web/             # Web-specific code
│   │   └── platformSelector.js
│   └── config/              # App configuration
│       └── api.js           # API endpoints
├── App.js                   # Main app component
├── app.json                 # Expo configuration
└── package.json
```

## Installation

```powershell
npm install
```

## Run

```powershell
# Start Expo dev server
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Run on Web
npm run web
```

## Configuration

### Backend URL

When running on a physical device, update the backend URL in `src/config/api.js`:

```javascript
export const API_BASE_URL = Platform.select({
  web: 'http://localhost:4000',
  default: 'http://YOUR_MACHINE_IP:4000',  // e.g., 'http://192.168.1.100:4000'
});
```

To find your machine's IP:
- Windows: `ipconfig` → look for IPv4 Address
- macOS/Linux: `ifconfig` → look for inet address

## Platform-Specific Logic

The app automatically selects the correct platform module:
- `platform/android/` - Android-specific implementations
- `platform/ios/` - iOS-specific implementations
- `platform/web/` - Web-specific implementations

Add platform-specific code in these folders when needed.

## Features

- ✅ Cross-platform (iOS, Android, Web)
- ✅ Clean component structure
- ✅ Platform-specific logic separation
- ✅ Proper API integration
- ✅ Error handling with user feedback
