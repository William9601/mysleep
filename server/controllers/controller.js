const Habit = require('../models')
const { data } = require('../mockData')

const sleepStages = data.bucket[0].dataset[0].point

// ------------ GOOGLE DATA FUNCTIONS

// 1- Get the data from API (pending)
const getData = async (req, res) => {
  console.log('controler response', req.body.dataset)
}

// Calculates Total Sleep Hours using getData
const totalSleepCalculate = (data) => {
  let count = 0
  sleepStages.forEach((el) => count += el.endTimeNanos - el.startTimeNanos)
  return ((count / 1000000000) / 60) / 60
}

// Calculates Total Deep Sleep Hours using getData
const totalDeepSleepCalculate = (data) => {
  let count = 0
  sleepStages.forEach(function (el) {
    if (el.value[0].intVal === 5) count += el.endTimeNanos - el.startTimeNanos
  })
  return ((count / 1000000000) / 60) / 60
}

// ------------ DB DATA FUNCTIONS

// Get habits object from DB (COMPLETE)
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find()
    res.status(200).send(habits)
  } catch (err) {
    res.status(500).send('Unable to find habits')
  }
}

// Save habits to the DB (COMPLETE)
const addHabit = async (req, res) => {
  try {
    const newHabit = new Habit({
      habit: req.body.habit,
      track: true
    })
    newHabit.save()
    res.status(201).send(newHabit)
  } catch (err) {
    res.status(400).send('Error saving habit')
  }
}

// Update sleep values in DB deepSleepAverage: +deepSleepTotal/count
const updateHabit = async () => {
  const query = { track: true }
  const update = {
    $inc: { deepSleepTotal: +totalDeepSleepCalculate(data), count: +1, },
    track: false
  }

  return Habit.updateMany(query, update)
    .then(result => {
      const { matchedCount, modifiedCount } = result
      console.log(`Successfully matched ${matchedCount} and modified ${modifiedCount} items.`)
      return result
    })
    .catch(err => console.error(`Failed to update items: ${err}`))

  // https://docs.mongodb.com/realm/mongodb/actions/collection.findOneAndUpdate/
}

updateHabit()

module.exports = { addHabit, getHabits, updateHabit, getData }
