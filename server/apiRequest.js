const fetch = require('node-fetch');

const getGoogleData = async (token, data) => {
  // Get the data from Google Api
  const res = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ya29.a0AfH6SMAli0pQUXSshlDFKdsbOiuZlnj-3O3BnD2KpzOTLDrLpEiUE4hXPkKXeNu-qm90qcR3iXDKKOAFda5r385YiSPvOHi9Gxz0g62DzVLonKYgsAcpjnu8vpI20tWibCBu3l1EcqcRXXXSXkVykB5SJLfU2A'
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
    console.log(res);
  return res
}

module.exports = { getGoogleData }