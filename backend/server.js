const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/saas')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
