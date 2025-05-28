const jwt = require('jsonwebtoken')

// function to create new token
const createJWT = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });
  };

// Validate a token
const isTokenValid = (token) => {
  try {
      return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
      return null; // or handle error as needed
  }
};

// Attach cookies to response
const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT(user); // Fixed to call createJWT
  const oneDay = 1000 * 60 * 60 * 24; // 1 day in milliseconds
  res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === "production",
      signed: true,
  });
};

module.exports = { createJWT, isTokenValid, attachCookiesToResponse };