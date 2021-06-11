const Habit = require('./models')
const data = require('./mockData')

// Get habits to render ordered by sleep quality
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).send(habits);
  } catch (err) {
    res.status(500).send('Unable to find habits');
  }
  // sort(res.count)...
};


// Save habits to the DB
const addHabit = async (req, res) => {
  try {
    const newHabit = new Habit ({
      habit: req.body.habit,
    })
    newHabit.save()
    res.status(201).send(newHabit)
  } catch (err) {
    res.status(400).send('Error saving habit');
  }
};


console.log(new Date(Date.now()))
// if Date = 10:00 run the below function
// Update sleep values the next day
const updateHabit = async (req, res) => {
  const query = {"track": "true"}
  const update = {
    "$set": {
      "count": 1,
      "deepSleepTotal": 1,
      "track": false
    }
  }

  return itemsCollection.findOneAndUpdate(query, update, options)
  .then(updatedDocument => {
    if(updatedDocument) {
      console.log(`Successfully updated document: ${updatedDocument}.`)
    } else {
      console.log("No document matches the provided query.")
    }
    return updatedDocument
  })
  .catch(err => console.error(`Failed to find and update document: ${err}`))
  
  // https://docs.mongodb.com/realm/mongodb/actions/collection.findOneAndUpdate/
}

module.exports = { addHabit, getHabits, updateHabit }