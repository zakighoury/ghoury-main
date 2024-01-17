require('dotenv').config({ path: 'server.env' }); 

const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToDatabase } = require('./db');
const loggerMiddleware = require('./middleware/middleware');

const app = express();
const port = process.env.PORT || 5000;
const mongodbUri = process.env.MONGODB_URI;

// Connect to MongoDB
connectToDatabase(mongodbUri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Use custom middleware
app.use(loggerMiddleware);

// Import routes
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');

// Use routes
app.use('/login', loginRoute);
app.use('/signup', signupRoute);

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Your other routes

// ... rest of your code

app.get('/message', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
