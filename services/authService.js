const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const register = (userData, callback) => {
    User.findUserByEmail(userData.email, (err, results) => {
        if (err) return callback(err);
        if (results.length > 0) {
            return callback(null, false, 'Email already exists');
        }

        const hashedPassword = bcrypt.hashSync(userData.password, 8);
        const newUser = {
            email: userData.email,
            password: hashedPassword,
            firstname: userData.firstname,
            lastname: userData.lastname
        };
        User.createUser(newUser, callback);
    });
};

const login = (email, password, callback) => {
    User.findUserByEmail(email, (err, results) => {
        if (err) return callback(err);
        if (results.length === 0) return callback(null, false);

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return callback(null, false);

        callback(null, user);
    });
};

module.exports = {
    register,
    login
};
