const Habit = require('./models')

const getHabits = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).send(events);
  } catch (err) {
    res.status(500).send('Unable to find events');
  }
};

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

const updateHabit = async (req, res) => {
  // https://docs.mongodb.com/realm/mongodb/actions/collection.findOneAndUpdate/
}

module.exports = { addHabit }