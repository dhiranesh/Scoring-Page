import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from 'react-native';
import { Platform } from 'react-native';
import StartScoringButton from './src/components/StartScoringButton';
import { API_BASE_URL } from './src/config/api';
import getPlatformInfo from './src/platform/platformSelector';

export default function App() {
  const platformInfo = getPlatformInfo();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Scoring App</Text>
          <Text style={styles.subtitle}>
            Platform: {platformInfo.name} {platformInfo.version && `(${platformInfo.version})`}
          </Text>
        </View>

        <View style={styles.mainContent}>
          <StartScoringButton 
            apiUrl={API_BASE_URL}
            platformName={platformInfo.name}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Ready to start scoring
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1976d2',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});
