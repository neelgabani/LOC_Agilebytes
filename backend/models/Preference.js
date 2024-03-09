const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    topic: { type: String, required: true },
    availability: { type: String, required: true },
});

const Preference = mongoose.model('Preference', preferenceSchema);

module.exports = Preference;
