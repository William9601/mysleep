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
    res.status(200).send(habitList)
  } catch (err) {
    res.status(500).send('Unable to find habits')
  }
}


// ------------ DB DATA FUNCTIONS
// Save habit to the DB if it is a new habit
const addNewHabit = async (req, res) => {
  try {
    const newHabit = new Habit({
      habit: req.body.habit,
      track: true,
      count: 1, 
    })
    newHabit.save()
    res.status(201).send(newHabit)
  } catch (err) {
    res.status(400).send('Error saving habit')
  }
}

// Update existing habit
const addToExistingHabit = async (existingHabit) => {
  const query = { habit: existingHabit }
  const update = {
    $inc: { count: +1, },
    track: true
  } 
  return Habit.updateMany(query, update)
  .then(result => {
    const { matchedCount, modifiedCount } = result
    console.log(`Successfully matched ${matchedCount} and modified ${modifiedCount} items.`)
    return result
  })
  .catch(err => console.error(`Failed to update items: ${err}`))
}


const addHabit = async (req, res) => {
  try {
    const habitList = await Habit.find()
    const habitListMap = habitList.map(el => el.habit)
    console.log(habitListMap);
       if(habitListMap.includes(req.body.habit)) {
         console.log('Exists');
          addToExistingHabit(req.body.habit)
          res.status(201).send(req.body)
       } else {
         console.log('Doesnt exist');
         addNewHabit(req, res)
        }
  } catch (err) {
    console.log(err)
  }
}



module.exports = { addHabit, getData, getList }
