const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Check if the environment is set to 'test'
    if (process.env.NODE_ENV === 'test') {
        res.send('Hello, Test!');
    } else {
        res.send('Hello, World!');
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app; // Export the app for testing purposes
