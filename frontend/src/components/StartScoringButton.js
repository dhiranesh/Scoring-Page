import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default function StartScoringButton({ backendUrl, platformName }) {
  const [isLoading, setIsLoading] = useState(false)
  const [resultMessage, setResultMessage] = useState(null)

  async function handleStart() {
    setIsLoading(true)
    setResultMessage(null)
    try {
      const response = await fetch(`${backendUrl}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform: platformName })
      })
      const json = await response.json()
      setResultMessage(json.status + (json.platform ? ` (${json.platform})` : ''))
    } catch (error) {
      setResultMessage('error: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleStart} disabled={isLoading}>
      {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Start Scoring</Text>}
      {resultMessage ? <Text style={styles.result}>{resultMessage}</Text> : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  result: { marginTop: 10, color: '#333' }
})
