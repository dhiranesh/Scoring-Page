/**
 * Web Platform Info
 * Web-specific platform information and utilities
 */
const webPlatformInfo = {
  name: 'Web',
  version: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
  
  getDeviceInfo() {
    if (typeof navigator === 'undefined') {
      return { type: 'unknown' };
    }

    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    return {
      type: isMobile ? 'mobile-web' : 'desktop-web',
      os: 'Web',
      browser: getBrowserInfo(),
      userAgent: userAgent,
    };
  },

  // Web-specific features
  supportsNativeFeature(featureName) {
    // Example: Check for web API support
    const supportedFeatures = {
      'push-notifications': 'Notification' in window,
      'geolocation': 'geolocation' in navigator,
      'localstorage': typeof Storage !== 'undefined',
      'serviceworker': 'serviceWorker' in navigator,
    };
    return supportedFeatures[featureName] || false;
  },
};

function getBrowserInfo() {
  if (typeof navigator === 'undefined') return 'Unknown';
  
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
  if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
  if (userAgent.indexOf('Safari') > -1) return 'Safari';
  if (userAgent.indexOf('Edge') > -1) return 'Edge';
  if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) return 'Opera';
  
  return 'Unknown';
}

export default webPlatformInfo;
