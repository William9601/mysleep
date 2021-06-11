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

export default {
  addHabit,
}