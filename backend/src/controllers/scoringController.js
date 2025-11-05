/**
 * Scoring Controller
 * Handles business logic for scoring operations
 */

// In-memory storage for demo (use database in production)
const scoringSessions = new Map();

/**
 * Start a new scoring session
 */
exports.startScoring = (req, res) => {
  try {
    const { platform, userId } = req.body;
    
    // Generate session ID
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Create scoring session
    const scoringSession = {
      sessionId,
      platform: platform || 'unknown',
      userId: userId || 'anonymous',
      status: 'started',
      startTime: new Date().toISOString(),
      score: 0
    };
    
    // Store session
    scoringSessions.set(sessionId, scoringSession);
    
    console.log(`✅ Scoring started - Session: ${sessionId}, Platform: ${platform}`);
    
    res.status(200).json({
      success: true,
      message: 'Scoring session started successfully',
      data: scoringSession
    });
    
  } catch (error) {
    console.error('Error starting scoring:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to start scoring session',
      message: error.message
    });
  }
};

/**
 * Get scoring session status
 */
exports.getScoringStatus = (req, res) => {
  try {
    const { sessionId } = req.params;
    
    const session = scoringSessions.get(sessionId);
    
    if (!session) {
      return res.status(404).json({
        success: false,
        error: 'Session not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: session
    });
    
  } catch (error) {
    console.error('Error getting scoring status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get scoring status',
      message: error.message
    });
  }
};
