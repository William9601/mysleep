const Habit = require('../models')
const model = require('../models/sleepDataModel')
const dbModel = require('../models/databaseModels')
//const { data } = require('../mockData')



// ------------ GOOGLE DATA FUNCTIONS
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
    // habitsList.forEach(el => {
    //   el.deepSleepAverage = (el.deepSleepTotal/el.count)
    // })
    res.status(200).send(habitList)
  } catch (err) {
    res.status(500).send('Unable to find habits')
  }
}


// ------------ DB DATA FUNCTIONS
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

const finalData = async (req, res) => {
  try {
    const orderedData = await testData()
    res.status(200).send(orderedData)
  } catch (err) {
    res.status(500).send('Unable to find habits')
  }
}

module.exports = { addHabit, getData, getList }
