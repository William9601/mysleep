const Habit = require('../models') 

// If track = true, it adds the deep sleep to it's existing count on the DB, then changes track to false.
exports.updateHabit = async (totalDeepSleep) => {
  const query = { track: true }
  const update = {
    $inc: { deepSleepTotal: +totalDeepSleep, },
    track: false
  }
  return Habit.updateMany(query, update)
    .then(result => {
      const { matchedCount, modifiedCount } = result
      console.log(`Successfully matched ${matchedCount} and modified ${modifiedCount} items.`)
      return result
    })
    .catch(err => console.error(`Failed to update items: ${err}`))
}

