// backend/models/UserPreferences.js

const mongoose = require('mongoose');

const userPreferencesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  country: { type: String, required: true },
  subjects: { type: [String], required: true },
});

const UserPreferences = mongoose.model('UserPreferences', userPreferencesSchema);

module.exports = UserPreferences;
