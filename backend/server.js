const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const gradeRoutes = require('./routes/gradeRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const cors = require('cors');


const app = express();

dotenv.config();
connectDB();

// ALL ROUTES
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // To parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/analytics', analyticsRoutes);

app.get('/', (req, res) => {
  console.log("JWT Token:", token);
console.log("JWT Secret:", process.env.JWT_SECRET);
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
