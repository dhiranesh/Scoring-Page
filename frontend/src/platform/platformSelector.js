import { Platform } from 'react-native';
import androidPlatformInfo from './android/platformInfo';
import iosPlatformInfo from './ios/platformInfo';
import webPlatformInfo from './web/platformInfo';

/**
 * Platform Selector
 * Returns the appropriate platform-specific module based on the current platform
 */
export default function getPlatformInfo() {
  switch (Platform.OS) {
    case 'android':
      return androidPlatformInfo;
    case 'ios':
      return iosPlatformInfo;
    case 'web':
      return webPlatformInfo;
    default:
      return {
        name: 'Unknown',
        version: null,
        getDeviceInfo: () => ({ type: 'unknown' }),
      };
  }
}
