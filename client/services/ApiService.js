const addHabit = async (data) => {
  const res = await fetch('http://localhost:3006/habits', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  console.log(res.json());
  return res.json();
}

export default {
  addHabit,
}