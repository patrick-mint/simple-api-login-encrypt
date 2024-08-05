const db = require('../config/db');

const createUser = (user, callback) => {
    const sql = 'INSERT INTO users (email, password, firstname, lastname) VALUES (?, ?, ?, ?)';
    db.query(sql, [user.email, user.password, user.firstname, user.lastname], callback);
};

const findUserByEmail = (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
};

module.exports = {
    createUser,
    findUserByEmail
};
