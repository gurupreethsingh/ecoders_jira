const jwtSecret = require('crypto').randomBytes(64).toString('hex');
console.log(jwtSecret);