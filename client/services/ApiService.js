const addHabit = async (data) => {
  const res = await fetch('http://192.168.68.101:3006/habits', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch(err=> {
    console.log('error', err)
  })
  console.log(JSON.stringify(data));
  return res.json();
}


const getGoogleData = async (token, data) => {
  const res = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ya29.a0AfH6SMAE9k6fyEHyxESquvz8r1spgQ9eOMcIzNNadd1QyXxCvr3J-L-yGJeLKyNL38RSucj7bzcRcXk-QQ55gx-mzIZGoCI2cC1Y0ebJmUpDzfVC0-ztX51rlQvVd5uqxvXCO-SbqZdRwIp9kwBC6mc6yomo'
    },
    body: JSON.stringify({
      "aggregateBy": [
        {
          "dataTypeName": "com.google.sleep.segment"
        }
      ],
      "endTimeMillis": 1623232800000,
      "startTimeMillis": 1623146400000
    }),
  }).then(res => res.json())
  .catch(err=> {
    console.log('error', err)
  })
  console.log(res);
  return res;
}



export default {
  addHabit,
  getGoogleData
}