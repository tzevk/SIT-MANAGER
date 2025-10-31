/* eslint-env node */
import express from 'express';
import pool from '../db/connection.js';

const router = express.Router();

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Validate input
    if (!username || !password || !role) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Query database
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE username = ? AND password = ? AND role = ?',
      [username, password, role]
    );

    if (rows.length === 0) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    const user = rows[0];

    // Return success with user data
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

export default router;
