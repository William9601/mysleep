const getSleepData = async (data) => {
  const res = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorisation': 'ya29.a0AfH6SMCxEuMbEJBUR1tFGEQ2ZkHcQPancFdcS768qpqVroWwxciH_k5ugMQeUzjrm0CZPbegaLPqx-25VMtxL3hc0pbsyKlCyPlXpGrvDSfkRRrEIV8qWRQrz_hrwRbuL2IdRxKus1yNDuOiK6iQa_icgt5y'
    },
    body: JSON.stringify(data),
  })
  console.log(res.json());
  return res.json();
}

const googleData = {
  "aggregateBy": [
    {
      "dataTypeName": "com.google.sleep.segment"
    }
  ],
  "endTimeMillis": 1623232800000,
  "startTimeMillis": 1623146400000
}

console.lof(getSleepData(googleData))