const { createJWT, isTokenValid, attachCookiesToResponse } = require("./jwt")
// const createTokenUser = require("./createTokenUser")
// const checkPermissions = require("./checkPermissions")
const { hashPassword, comparePassword } = require("./passwordBcrypt")

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  // createTokenUser,
  // checkPermissions,
  hashPassword, 
  comparePassword,
}