require('dotenv').config();
const express = require('express');
const app = express();

// Rest of the packages
const morgan = require('morgan');   // HTTP request logger middleware
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

// Set up CORS options
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Require Routers
const authRouter = require("./routes/authRouter");
const categoryRouter = require('./routes/categoryRouter');
const pagesRouter = require('./routes/pagesRouter');
const clientsRouter = require('./routes/clientsRouter');
const subscribeRoutes = require('./routes/subscribeRoutes');

// Middleware setup
app.use(morgan("tiny"));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser(process.env.JWT_SECRET_KEY));
app.use(express.static("./public"));
app.use(fileUpload());

// Testing route
app.get("/", (req, res) => {
  res.send("Good URL");
});

// API Testing route
app.get("/api/v1/", (req, res) => {
  res.send("Testing API");
});

// API routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/client', clientsRouter);
app.use('/api/v1/page', pagesRouter);
app.use('/api/v1', subscribeRoutes);
// If 'userRouter' is required, make sure it's defined and imported correctly

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
