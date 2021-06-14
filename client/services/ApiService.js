const startTime = 1623232800000
const endTime = 1623146400000

// ------- Get sleep stage data from Google API
const getGoogleData = async () => {
  const res = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ya29.a0AfH6SMCKJA3DikCDRhO16BeG2q5o-N2APFerSxjY-EtQ6hFxZx4zSOrCzrcp7SW0gjEipSDHZWclhBrSDIPTWkMzhbL5wcSEBNkME0M-89f4jth8k5GwnhRyuFJvI7P_R8bGU9ZB83P40qpq31wWcbdnw8mX'
    },
    body: JSON.stringify({
      aggregateBy: [
        {
          dataTypeName: 'com.google.sleep.segment'
        }
      ],
      endTimeMillis: startTime,
      startTimeMillis: endTime
    })
  }).then(res => res.json())
    .catch(err => {
      console.log('error', err)
    })
  sendData(res)
  return res
}

// ------- Send sleep stage data from Google API to back-end
const sendData = async (data) => {
  console.log(data)
  const res = await fetch('http://192.168.68.100:3006/getData', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).catch(err => {
    console.log('error', err)
  })
  return res.json()
}

export default {
  getGoogleData
}
