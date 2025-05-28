const bcrypt = require('bcryptjs');

// Function to hash a password
const hashPassword = (password) => {
     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

// Function to compare a password with a hash
const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = { hashPassword, comparePassword, }; 