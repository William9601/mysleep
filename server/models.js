const mongoose = require('mongoose');

const { Schema } = mongoose;

const habitSchema = new Schema({
  name: String,
  date: {type: Date, default: Date.now},
  count: {type: Number, default: 0},
  deepSleepTotal: {type: Number, default: 0},
  track: {type: Boolean, default: false}
})

// Should I have a habit ID?

const Habit = mongoose.model('Habit', habitSchema)
module.exports = Habit