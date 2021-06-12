const Habit = require('./models')
const data = require('./mockData')

// const sleepType = data.bucket[0].dataset[0].point[0].value[0].intVal
// const sleepStageStartTime = new Date((data.bucket[0].dataset[0].point[0].startTimeNanos) / 1000000)
// const sleepStageEndTime = new Date((data.bucket[0].dataset[0].point[0].endTimeNanos) / 1000000)
// const date = new Date(1623146400000)

const sleepStages = data.bucket[0].dataset[0].point

// Calculates Total Sleep Hours
const totalSleepCalculate = (data) => {
  let counter = 0
  sleepStages.forEach((el) => counter += el.endTimeNanos-el.startTimeNanos)
  return ((counter/1000000000)/60)/60
}

// Calculates Total Deep Sleep Hours
const totalDeepSleepCalculate = (data) => {
  let counter = 0
  sleepStages.forEach(function(el) {
    if(el.value[0].intVal === 5) counter += el.endTimeNanos-el.startTimeNanos
  })
  return ((counter/1000000000)/60)/60
}


// Get habits to render ordered by sleep quality
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).send(habits);
  } catch (err) {
    res.status(500).send('Unable to find habits');
  }
  // sort(res.deepSleepTotal/res.count)...
};


// Save habits to the DB
const addHabit = async (req, res) => {
  try {
    const newHabit = new Habit ({
      habit: req.body.habit,
      track: true,
    })
    newHabit.save()
    res.status(201).send(newHabit)
  } catch (err) {
    res.status(400).send('Error saving habit');
  }
};

const deepSleepp = 0
// This is triggered when app starts
if(Date().split(' ')[4] === '10:00:00') {
  deepSleep = totalDeepSleepCalculate(data)
}


// Update sleep values the next day, if Date = 10:00 run the below function
const updateHabit = async (req, res) => {
  const query = {"track": "true"}
  const update = {
    "$mul": {
      "count": req.body.count +1,
      "deepSleepTotal": req.body.deepSleepTotal,
      "track": false
    }
  }

  return itemsCollection.updateMany(query, update)
  .then(result => {
    const { matchedCount, modifiedCount } = result;
    console.log(`Successfully matched ${matchedCount} and modified ${modifiedCount} items.`)
    return result
  })
  .catch(err => console.error(`Failed to update items: ${err}`))
  
  // https://docs.mongodb.com/realm/mongodb/actions/collection.findOneAndUpdate/
}

module.exports = { addHabit, getHabits, updateHabit }