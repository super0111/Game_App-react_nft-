const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/group', require('./routes/api/group'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));