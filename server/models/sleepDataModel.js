
// Calculates Total Sleep Hours using getData
exports.totalSleepCalculate = (data, sleepStages) => {
  let count = 0
  sleepStages.forEach((el) => count += el.endTimeNanos - el.startTimeNanos)
  return ((count / 1000000000) / 60) / 60
}

// Calculates Total Deep Sleep Hours using getData
exports.totalDeepSleepCalculate = (data, sleepStages) => {
  let count = 0
  sleepStages.forEach(function (el) {
    if (el.value[0].intVal === 5) count += el.endTimeNanos - el.startTimeNanos
  })
  return ((count / 1000000000) / 60) / 60
}

