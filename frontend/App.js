import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Platform } from 'react-native'
import StartScoringButton from './src/components/StartScoringButton'
import AndroidPlatformLogic from './src/platform/android/platformLogic'
import IOSPlatformLogic from './src/platform/ios/platformLogic'
import WebPlatformLogic from './src/platform/web/platformLogic'

const platformLogic = Platform.OS === 'android'
  ? AndroidPlatformLogic
  : Platform.OS === 'ios'
    ? IOSPlatformLogic
    : WebPlatformLogic

export default function App() {
  const platformName = platformLogic.getPlatformName()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Scoring</Text>
        <Text style={styles.subtitle}>Platform: {platformName}</Text>
        <StartScoringButton backendUrl="http://localhost:4000" platformName={platformName} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 16 }
})
