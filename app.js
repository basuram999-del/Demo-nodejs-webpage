const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to API');
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" }
    ]);
});

app.post('/users', (req, res) => {
    const user = req.body;
    res.json({
        message: "User created",
        user: user
    });
});

// Port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
