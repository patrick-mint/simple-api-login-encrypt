const authService = require('../services/authService');

const register = (req, res) => {
    const { email, password, firstname, lastname } = req.body;

    if (!email || !password || !firstname || !lastname) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    authService.register({ email, password, firstname, lastname }, (err, user, message) => {
        if (err) {
            console.error('Error registering user: ' + err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (!user) {
            return res.status(400).json({ error: message });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    authService.login(email, password, (err, user) => {
        if (err) {
            console.error('Error logging in: ' + err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    });
};

module.exports = {
    register,
    login
};
