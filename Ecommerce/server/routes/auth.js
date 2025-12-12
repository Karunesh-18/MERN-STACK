const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const validUsers = {
    admin: { password: 'admin123', role: 'admin' },
    user: { password: 'user123', role: 'user' }
  };

  if (validUsers[username] && validUsers[username].password === password) {
    req.session.isLoggedIn = true;
    req.session.username = username;
    req.session.role = validUsers[username].role;
    
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        username,
        role: validUsers[username].role
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

module.exports = router;
