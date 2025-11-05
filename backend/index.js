const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' })
})

// Start scoring endpoint — accepts optional platform data
app.post('/start', (req, res) => {
  const requestPlatform = req.body.platform || 'unknown'
  // In a real app you'd trigger scoring logic here, enqueue a job, etc.
  res.json({ status: 'scoring_started', platform: requestPlatform })
})

app.listen(PORT, () => {
  console.log(`Scoring backend listening on port ${PORT}`)
})
