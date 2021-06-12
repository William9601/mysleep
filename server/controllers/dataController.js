const Habit = require('../models')
const {data, habitsData} = require('../mockData')

// 1 --------------- Calculates Total Sleep & DeepSleep Hours
const sleepStages = data.bucket[0].dataset[0].point

const totalSleepCalculate = (data) => {
  let counter = 0
  sleepStages.forEach((el) => counter += el.endTimeNanos - el.startTimeNanos)
  return ((counter / 1000000000) / 60) / 60
}

const totalDeepSleepCalculate = (data) => {
  let counter = 0
  sleepStages.forEach(function (el) {
    if (el.value[0].intVal === 5) counter += el.endTimeNanos - el.startTimeNanos
  })
  return ((counter / 1000000000) / 60) / 60
}

// 2 --------------- Adds deepSleep hrs to database
let updateDbData = function(data) {
  habitsData.forEach(el => {
    if (el.track === true) {
       el.deepSleepTotal += totalDeepSleepCalculate(data)
       el.track = false
       el.counter +=1
     }
  })
 }

// 3 --------------- Sort Habits data
let habitsAverage = habitsData.forEach(function (el) {
   el.deepSleepAverage = (el.deepSleepTotal / el.count)
})

let sortedHabits = habitsData.sort(function (a, b) {
  let sorted = a.deepSleepAverage - b.deepSleepAverage
  return sorted
})

// 4 ---------------- Get the final data
const testData = function (data) {
  totalSleepCalculate(data)
  totalDeepSleepCalculate(data)
  updateDbData(data)
  habitsAverage
  return sortedHabits
}

const finalData = async (req, res) => {
  try {
    const orderedData = await testData()
    console.log(orderedData);
    res.status(200).send(orderedData)
  } catch (err) {
    res.status(500).send('Unable to find habits')
  }
}

module.exports = { finalData }