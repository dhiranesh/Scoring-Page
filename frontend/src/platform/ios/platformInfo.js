import { Platform } from 'react-native';

/**
 * iOS Platform Info
 * iOS-specific platform information and utilities
 */
const iosPlatformInfo = {
  name: 'iOS',
  version: Platform.Version,
  
  getDeviceInfo() {
    return {
      type: 'mobile',
      os: 'iOS',
      osVersion: Platform.Version,
      isPad: Platform.isPad,
      isTVOS: Platform.isTVOS,
    };
  },

  // iOS-specific features can be added here
  supportsNativeFeature(featureName) {
    // Example: Check for iOS-specific features
    const supportedFeatures = ['push-notifications', 'biometrics', 'faceid', 'touchid'];
    return supportedFeatures.includes(featureName);
  },
};

export default iosPlatformInfo;
