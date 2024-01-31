const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 5000;  

// Connect to MongoDB
connectDB();

// Enable CORS
app.use(cors({ origin: '*' })); // Use a wildcard for development, update for production

// Middleware
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});