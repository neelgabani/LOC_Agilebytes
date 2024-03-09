// // app.js

// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const preferenceRouter = require('./routes/preferences');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB Atlas');
// });

// app.use(express.json());
// app.use('/preferences', preferenceRouter);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// backend/app.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserPreferences = require('./models/UserPreferences');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.post('/preferences', async (req, res) => {
  try {
    const { name, college, country, subjects } = req.body;
    const userPreferences = new UserPreferences({ name, college, country, subjects });
    await userPreferences.save();
    res.status(201).json({ message: 'Preferences saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
