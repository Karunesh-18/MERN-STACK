const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.UserData = { id: decoded.id, email: decoded.email, role: decoded.role };
        next();
    } catch (error) {
        return res.status(401).json({ error: "Authorization failed", message: error.message });
    }
}

module.exports = authMiddleware;