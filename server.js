const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the User Management System!🤗');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
