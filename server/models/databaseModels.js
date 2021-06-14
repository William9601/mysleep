const Habit = require('../models') 

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

// const calculateAverage = async () => {
//   try {
//     const habits = await Habit.find()
//     habits.forEach(el => {
//       if(el.track === false) {
//         habits.deepSleepAverage += el.deepSleepTotal/el.count
//       }
//     })
//   } catch (err) {
//     res.status(500).send('Unable to find habits')
//   }
// }

// const updateHabitAverage = async () => {
//   const query = { track: false }
//   const update = {
//     $inc: { deepSleepAverage: +(deepSleepTotal/count) },
//     track: false
//   }
//   return Habit.updateMany(query, update)
//     .then(result => {
//       const { matchedCount, modifiedCount } = result
//       console.log(`Successfully updated Average ${matchedCount} and modified ${modifiedCount} items.`)
//       return result
//     })
//     .catch(err => console.error(`Failed to update items: ${err}`))
// }

