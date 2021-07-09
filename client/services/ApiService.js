const bearer_token = require('../dotFile');

const IPAddress = '';

let endTime = Date.now();
let endDate = new Date(endTime);
let startTime = endDate.setDate(endDate.getDate() - 1);

// ------- Get sleep stage data from Google API
const getGoogleData = async (token) => {
  const res = await fetch(
    'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: bearer_token.GOOGLE_BEARER_TOKEN,
      },
      body: JSON.stringify({
        aggregateBy: [
          {
            dataTypeName: 'com.google.sleep.segment',
          },
        ],
        endTimeMillis: endTime,
        startTimeMillis: startTime,
      }),
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log('error', err);
    });
  sendData(res);
  return res;
};

// ------- Send sleep stage data from Google API to back-end
const sendData = async (data) => {
  const res = await fetch(`http://${IPAddress}:3006/getData`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch((err) => {
    console.log('error', err);
  });
  return res.json();
};

export default {
  getGoogleData,
};
