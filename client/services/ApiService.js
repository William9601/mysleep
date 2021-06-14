const bearer_token = require('../dotFile')

const startTime = 1623232800000
const endTime = 1623146400000


// ------- Get sleep stage data from Google API
const getGoogleData = async () => {
  const res = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ya29.a0AfH6SMAm_L81KqrLZpMvUcJPLu91enjtzeYTiSz1IdJkvnKjV2hDaUQdbJ01k7upDBBmLAJzG37C_SWxLP9u8iudJsxnvM_qv_wWYCKJMkfw11wO3cnYT9H6RS0ykCi49owNfOXIt_YNilhqXvQ5hZr8nIpf'
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

// ------- Send sleep stage data from Google API to back-end   expert: 'http://192.168.1.116:3006/getData'  / cazador: 'http://192.168.68.100:3006/getData'
const sendData = async (data) => {
  
  const res = await fetch('http://192.168.1.116:3006/getData', {
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
