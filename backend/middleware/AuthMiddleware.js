const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // Get token from Authorization header
  const token = req.header('Authorization');

  // Check if token is present and formatted correctly
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Extract the token part after 'Bearer '
  const tokenParts = token.split(' ');
  const tokenValue = tokenParts[1];

  // Verify token
  try {
    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }

}

module.exports = authMiddleware;
