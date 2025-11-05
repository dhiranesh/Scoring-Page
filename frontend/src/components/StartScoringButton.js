import React, { useState } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  View,
  Alert 
} from 'react-native';
import { API_ENDPOINTS } from '../config/api';

export default function StartScoringButton({ apiUrl, platformName }) {
  const [isLoading, setIsLoading] = useState(false);
  const [sessionInfo, setSessionInfo] = useState(null);

  const handleStartScoring = async () => {
    setIsLoading(true);
    setSessionInfo(null);

    try {
      const response = await fetch(`${apiUrl}${API_ENDPOINTS.START_SCORING}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: platformName,
          userId: 'test_user',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSessionInfo(data.data);
        Alert.alert(
          'Success!',
          `Scoring started successfully\nSession: ${data.data.sessionId}`,
          [{ text: 'OK' }]
        );
      } else {
        throw new Error(data.error || 'Failed to start scoring');
      }
    } catch (error) {
      console.error('Error starting scoring:', error);
      Alert.alert(
        'Error',
        `Could not start scoring: ${error.message}`,
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={handleStartScoring}
        disabled={isLoading}
        activeOpacity={0.7}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text style={styles.buttonText}>Start Scoring</Text>
        )}
      </TouchableOpacity>

      {sessionInfo && (
        <View style={styles.sessionInfo}>
          <Text style={styles.sessionLabel}>Active Session:</Text>
          <Text style={styles.sessionId}>{sessionInfo.sessionId}</Text>
          <Text style={styles.sessionStatus}>Status: {sessionInfo.status}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonDisabled: {
    backgroundColor: '#90caf9',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  sessionInfo: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    width: '100%',
    maxWidth: 300,
  },
  sessionLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  sessionId: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1976d2',
    marginBottom: 8,
  },
  sessionStatus: {
    fontSize: 14,
    color: '#333',
  },
});
