const mongoose = require('mongoose');

const { Schema } = mongoose;

const habitSchema = new Schema({
  name: String,
  date: Date,
  count: {type: Number, default: 0},
  deepSleepTotal: {type: Number, default: 0},
  track: {type: Boolean, default: false}
})

// Should I have a habit ID?

