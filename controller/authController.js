const User = require('../models/userModel')
const { StatusCodes } = require('http-status-codes')
const Address = require('../models/addressModel')
const { createJWT, isTokenValid, attachCookiesToResponse, comparePassword, hashPassword } = require('../utils');
const {sendVerificationEmail, sendForgotPassword} = require('../config/email')

//sigup user
const signup = async (req, res) => {
  try {
    const emailAlreadyExists = await User.findOne({ where: { email: req.body.email } })
    if (emailAlreadyExists) {
      return res.status(400).send({ message: "Email already exists" });
    }

    const user = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      user_type: req.body.user_type,
      gender: req.body.gender,
      password: hashPassword(req.body.password)
    })

    const token = createJWT(user)
    attachCookiesToResponse({ res, user: token })
    return res.status(200).send({ user, token })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//signin user
const signin = async (req, res) => {
  try {
    const { email, password } = req.body

    // Validate the input
    if (!email || !password) {
      return res.status(400).json({ msg: "Please provide email and password" })
    }

    // Find the user by email and active status
    const user = await User.findOne({ where: { email: email, status: 'yes' } });
    if (!user) {
      return res.status(400).json({ user: tokenUser, msg: "Login successful!" })
    }

    // Check if the password is correct using bcrypt (assuming you store hashed passwords)
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).send({ message: "Invalid Credentials" });
    }

    // Generate the JWT token
    const tokenUser = createJWT(user)
    attachCookiesToResponse({ res, user: tokenUser })
    return res.status(200).json({ user: user, token: tokenUser, message: "Login successful!" })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//current all user
const current = async (req, res) => {
  try {
    // 1. Extract the token from the Authorization header
    const token = req.cookies.refreshToken || req.headers.authorization?.split(' ')[1];  // 'Bearer <token>'

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // 2. Verify the token using your secret key from environment variables
    const decoded = isTokenValid(token);  // JWT secret key should be stored in .env

    // 3. Retrieve the user associated with the token
    const user = await User.findAll();  // Assuming the token has a userId field   

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);  // Returning the clients data as JSON
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const getMe = async (req, res) => {
  try {
    // Extract the token from the Authorization header
    const token = req.cookies.refreshToken || req.headers.authorization?.split(' ')[1];  // 'Bearer <token>'

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Verify the token using the secret key (from .env or a config file)
    const decoded = isTokenValid(token);  // Use your JWT secret key here

    // Retrieve user data from the database using the decoded payload (typically userId)
    const user = await User.findByPk(decoded.userId);  // Assuming userId is stored in the token payload

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user data (excluding sensitive information like password)
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateMe = async (req, res) => {
  try {
    const token = req.cookies.refreshToken || req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'No token provided' });
    }

    const decoded = isTokenValid(token)
    const user = await User.findByPk(decoded.id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userDetails = req.body;
    const updatedData = {};

    if (req.body.name) {
      updatedData.name = req.body.name;
    }

    if (req.body.email) {
      updatedData, email = req.body.email
    }

    if (req.body.gender) {
      updatedData.gender = req.body.gender
    }

    await user.update(updatedData);
    return res.status(200).json({
      message: 'User data updated successfully',
      user: {
        id: user.id,
        username: user.name,
        email: user.email,
        gender: user.gender
      }
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// refreshTokens User
const refreshTokens = async (req, res) => {
  try {
    const token = req.cookies.refreshToken || req.authorization.headers?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Refresh token missing' });
    }
    const decoded = isTokenValid(token)
    if (!decoded) {
      return res.status(403).json({ message: 'Invalid or expired refresh token' });
    }
    const user = await User.findByPk(decoded.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const tokenUser = createJWT(user)
    attachCookiesToResponse({ res, user: tokenUser })
    return res.status(200).send({ user, tokenUser })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//sendVerificationEmail 
const sendEmail = async (req, res) => {
  try {
    await sendVerificationEmail(req.body.email)
    return res.status(200).json({ message: 'Verification email sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error sending verification email', error: error.message });
  }
}

//verifyEmail
const verifyEmail = async (req, res) => {
  try {
    // Extract token from the request body or query string
    const { token } = req.body || req.query; // Supports both body and query parameter

    if (!token) {
      return res.status(400).json({ msg: 'Verification token is required' });
    }

    // Verify the JWT token
    const decoded = createJWT(token);

    // Find the user by the decoded user ID
    const user = await User.findOne({ where: { id: decoded.id, email: decoded.email } });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if the email is already verified
    if (user.status === 1) {
      return res.status(400).json({ msg: 'Email is already verified' });
    }

    // Update the user's status to 'verified'
    user.status = 1;
    await user.save();

    // Return a success response
    return res.status(200).json({ message: 'Email verified successfully' });

  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }
    return res.status(500).json({ message: error.message });
  }
}

//forgotPassword
const forgotPassword = async (req, res) => { 
  try {
    const { email } = req.body;  // The email provided by the user
    sendForgotPassword(email)

    return res.status(200).json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return res.status(500).json({ message: error.message });
  }
};

// Reset Password
const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;  // Token from URL and new password

    if (!token || !newPassword) {
      return res.status(400).json({ msg: 'Token and new password are required' });
    }

    // Verify the JWT token
    const decoded = createJWT(token);

    // Find the user by the decoded userId
    const user = await User.findOne({ where: { id: decoded.id, email: decoded.email } });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Hash the new password before saving it
    const hashedPassword = hashPassword(newPassword);
    // Update the user's password
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({ message: 'Password reset successfully' });

  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }
    return res.status(500).json({ message: error.message });
  }
}

// Logout User
const logout = async (req, res) => {
  try {
    res.cookie('token', '', {
      httpOnly: true,
      expires: new Date(0), // Expire the cookie immediately
      secure: process.env.NODE_ENV === 'production',
      signed: true,
    });

    return res.status(200).json({ msg: 'User logged out successfully!' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signup,
  signin,
  current,
  getMe,
  updateMe,
  refreshTokens,
  sendEmail,
  forgotPassword,
  resetPassword,
  logout
}