require('dotenv').config()

const client_id = process.env.GOOGLE_BEARER_TOKEN 

const startTime = 1623232800000
const endTime = 1623146400000


// ------- Get sleep stage data from Google API
const getGoogleData = async () => {
  const res = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: client_id
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
