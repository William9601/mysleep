// ------- Get sleep stage data from Google API
const getGoogleData = async () => {
  const res = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ya29.a0AfH6SMCMOW408s2sJLIuWgRMuR5s3czOUZHsnmE4Cg0f9utOP_WaA7XwB227JFGp74ANQT5sPWpiQCobK7M-BBtun0lI6POxw-NbU2KksrteKyH42Vs0RQEZ8qqxiMk7PwrdKC-P26Lbi09AVLGY8WiS6jEi'
    },
    body: JSON.stringify({
      aggregateBy: [
        {
          dataTypeName: 'com.google.sleep.segment'
        }
      ],
      endTimeMillis: 1623232800000,
      startTimeMillis: 1623146400000
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
  getGoogleData,
}
