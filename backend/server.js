const express = require('express');
const mongoose = require('mongoose');
const Preference = require('./models/Preference');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

app.post('/api/preferences', async (req, res) => {
    try {
        const preference = new Preference(req.body);
        await preference.save();
        res.status(201).send('Preference submitted successfully');
    } catch (error) {
        console.error('Error saving preference:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
