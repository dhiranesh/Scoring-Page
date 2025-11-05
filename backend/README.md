# Backend - Express API

Express.js REST API for the Scoring App.

## Structure

```
backend/
├── src/
│   ├── routes/           # API route definitions
│   │   └── scoringRoutes.js
│   └── controllers/      # Business logic
│       └── scoringController.js
├── index.js              # Server entry point
└── package.json
```

## Installation

```powershell
npm install
```

## Run

```powershell
# Production
npm start

# Development (auto-restart on file changes)
npm run dev
```

## API Endpoints

### Health Check
```
GET /health
```

### Start Scoring
```
POST /api/scoring/start
Content-Type: application/json

{
  "platform": "iOS",
  "userId": "user123"
}
```

### Get Scoring Status
```
GET /api/scoring/status/:sessionId
```

## Configuration

- Port: `4000` (default) or set `PORT` environment variable
- CORS: Enabled for all origins (configure in production)
