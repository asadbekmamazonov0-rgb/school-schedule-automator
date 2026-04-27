const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route for getting school schedules
app.get('/schedules', (req, res) => {
    res.send({ message: 'Here are the school schedules' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
