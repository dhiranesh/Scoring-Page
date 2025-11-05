import { Platform } from 'react-native';

// API Configuration
// Update this when running on physical device or in production
export const API_BASE_URL = Platform.select({
  // For web and simulators, localhost works
  web: 'http://localhost:4000',
  // For physical devices, replace with your machine's IP address
  // Example: 'http://192.168.1.100:4000'
  default: 'http://localhost:4000',
});

export const API_ENDPOINTS = {
  HEALTH: '/health',
  START_SCORING: '/api/scoring/start',
  SCORING_STATUS: '/api/scoring/status',
};
