// app_api/controllers/authentication.js

const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User'); // Make sure 'User' is the model name used during registration

// Register a new user
const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ "message": "All fields are required" });
    }

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save((err) => {
        if (err) {
            return res.status(400).json(err);
        } else {
            const token = user.generateJwt();
            return res.status(200).json({ token });
        }
    });
};

// Log in an existing user
const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ "message": "All fields are required" });
    }

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(404).json(err);
        }
        if (!user) {
            return res.status(401).json(info);
        }

        const token = user.generateJwt();
        return res.status(200).json({ token });
    })(req, res);
};

// Export the register and login functions
module.exports = {
    register,
    login
};
