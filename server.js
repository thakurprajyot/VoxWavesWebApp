// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// In-memory user database (replace with a real database)
const users = [];
console.log(users)

// Registration endpoint
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    
    // Check if the username or email is already registered
    if (users.some(user => user.username === username || user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create a new user object (in a real app, you'd hash and salt the password)
    const newUser = { username, email, password };
    
    // Store the user in the database
    users.push(newUser);
    
    res.status(201).json({ message: 'Registration successful' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Check if the user exists
    const user = users.find(user => user.username === username);
    
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    res.json({ message: 'Login successful' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});