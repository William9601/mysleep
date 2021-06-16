const Habit = require('../models')
const model = require('../models/sleepDataModel')
const dbModel = require('../models/databaseModels')


// 1- Get the data from API (pending) req.body.bucket
const getData = async (req, res) => {
  let data = req.body
  let sleepStages = req.body.bucket[0].dataset[0].point
  let totalSleep = model.totalSleepCalculate(data, sleepStages)
  let totalDeepSleep = model.totalDeepSleepCalculate(data, sleepStages)
  dbModel.updateHabit(totalDeepSleep)
}

const getList = async (req, res) => {
  try {
    const habitList = await Habit.find()
    res.status(200).send(habitList)
  } catch (err) {
    res.status(500).send('Unable to find habits')
  }
}

// Adds a habit if it doesn't exist. If it does exist, then it updates it adding count +1 and track changes to true
const addHabit = async (req, res) => {
  try {
    const filter = { habit: req.body.habit };
    const update = { 
      $inc: { count: +1, },
      track: true };
    await Habit.countDocuments(filter)
    let doc = await Habit.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
      useFindAndModify: false
    })
    res.status(201).send(doc)
  } catch (err) {
    console.log(err)
  }
}


module.exports = { addHabit, getData, getList }
