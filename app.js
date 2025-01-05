const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const connectDB = require('./config/db');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const classRoutes = require('./routes/classRoutes');
const studentRoutes = require('./routes/studentRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(logger);
app.use('/api/classes', classRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/enrollments', enrollmentRoutes);

app.use(errorHandler);

connectDB();

module.exports = app;