// server.js
const express = require('express');
const path = require('path'); // Import path module for serving static files
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'homestyle')); // Set the views directory

// Serve static files (like CSS) from the public directory
app.use(express.static(path.join(__dirname, 'design')));

// Define the home route
app.get('/', (req, res) => {
    res.render('home'); // Render the home.ejs file
});

// Specify the port to listen on
const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
