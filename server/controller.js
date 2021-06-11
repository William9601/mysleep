const Habit = require('./models')

const addHabit = async (req, res) => {
  try {
    const newHabit = new Habit ({
      name: req.body.name,
      count: count,
      deepSleepTotal: deepSleepTotal,
      track: false
    })
    newHabit.save()
    res.status(201).send(newHabit)
  } catch (err) {
    res.status(400).send('Error saving habit');
  }
};

module.exports = { addHabit }