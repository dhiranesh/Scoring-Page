import { Platform } from 'react-native';

/**
 * Android Platform Info
 * Android-specific platform information and utilities
 */
const androidPlatformInfo = {
  name: 'Android',
  version: Platform.Version,
  
  getDeviceInfo() {
    return {
      type: 'mobile',
      os: 'Android',
      osVersion: Platform.Version,
    };
  },

  // Android-specific features can be added here
  supportsNativeFeature(featureName) {
    // Example: Check for Android-specific features
    const supportedFeatures = ['push-notifications', 'biometrics', 'nfc'];
    return supportedFeatures.includes(featureName);
  },
};

export default androidPlatformInfo;
