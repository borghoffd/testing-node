let db = require("./db");

module.exports.handleSignup = (email, password) => {
    // Check if the email already exists
    // Save the User to database
    db.saveUser({email, password});
    // Send welcome email
};
