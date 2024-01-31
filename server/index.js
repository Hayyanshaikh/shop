const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoute = require('./routes/authRoute.js');

const app = express();
const PORT = 5000;  

// Connect to MongoDB
connectDB();

// Enable CORS
app.use(cors({ origin: '*' }));

// Middleware
app.use(express.json());

// API routes
app.use('/api/auth', authRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});