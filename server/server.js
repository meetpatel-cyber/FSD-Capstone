const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Inquiry = require('./models/Inquiry');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('FSD Capstone API is running!');
});

app.post('/api/inquiries', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const inquiry = new Inquiry({ name, email, message });
    await inquiry.save();
    res.status(201).json({
      message: 'Inquiry submitted successfully!'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error saving inquiry'
    });
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(error => console.log(error));
