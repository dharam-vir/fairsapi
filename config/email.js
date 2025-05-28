const nodemailer = require('nodemailer');
const User = require('../models/userModel');
const {createJWT} = require('../utils/jwt')

// SMTP transport setup (using Gmail in this example, you can replace it with your preferred email service)
const transporter = nodemailer.createTransport({
    service: 'gmail',  // You can replace this with your email service
    auth: {
      user: process.env.EMAIL_USER,  // Your email address (e.g., "example@gmail.com")
      pass: process.env.EMAIL_PASS,  // Your email password or app-specific password
    },
  });

  // Function to send the verification email

  const sendVerificationEmail = async (email) => {
    try {
      const { email } = email;
  
      // Validate the email input
      if (!email) {
        return res.status(400).json({ msg: 'Please provide an email address' });
      }
  
      // Check if the user exists in the database
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      // Create a JWT token for email verification (valid for 1 hour)
      const verificationToken = createJWT(user)
  
      // Create a verification link
      const verificationUrl = `${process.env.CLIENT_URL}/api/v1/verify-email?token=${verificationToken}`;
  
      // Prepare the email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification',
        html: `
          <p>Hello ${user.username},</p>
          <p>Thank you for registering. Please click the link below to verify your email address:</p>
          <a href="${verificationUrl}">Verify your email</a>
          <p>The link will expire in 1 hour.</p>
        `,
      };
  
      // Send the email
      await transporter.sendMail(mailOptions);
  
      // Return success response
      return res.status(200).json({ message: 'Verification email sent successfully' });
      
    } catch (error) {
      console.error('Error sending verification email:', error);
      return res.status(500).json({ message: 'Error sending verification email', error: error.message });
    }
  };


  const sendForgotPassword = async (email) => {
    try {
      const { email } = email;  // The email provided by the user
  
      if (!email) {
        return res.status(400).json({ msg: "Please provide an email address" });
      }
  
      // Find the user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      // Generate a password reset token with expiration (1 hour)
      const resetToken = createJWT(user);
  
      // Create the reset URL (send the reset link with the token to the user)
      const resetUrl = `${process.env.CLIENT_URL}/api/v1/reset-password?token=${resetToken}`;
  
      // Set up the email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset Request',
        html: `
          <p>Hello ${user.name},</p>
          <p>You requested a password reset. Click the link below to reset your password:</p>
          <a href="${resetUrl}">Reset your password</a>
          <p>The link will expire in 1 hour.</p>
        `,
      };
  
      // Send the reset email
      await transporter.sendMail(mailOptions);  
      return res.status(200).json({ message: 'Password reset email sent successfully' });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = { sendVerificationEmail, sendForgotPassword };