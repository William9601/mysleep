// --------- Add habit to DB
const addHabit = async (data) => {
  const res = await fetch('http://192.168.1.116:3006/habits', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).catch(err => {
    console.log('error', err)
  })
  console.log(JSON.stringify(data))
  return res.json()
}

// --------- Get the sorted list of habits
const getSortedData = async () => {
  const response = await fetch('http://192.168.1.116:3006/sortedData')
  return await response.json()
}

export default {
  addHabit,
  getSortedData
}
