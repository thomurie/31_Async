function displayData(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      $("body").append(`<p>${key} : ${element}</p>`);
    }
  }
}

async function NumberAsync() {
  try {
    const res = await axios.get(`http://numbersapi.com/52..62?json`);
    return displayData(res.data);
  } catch (error) {
    console.log(error)
  }
};

NumberAsync()

async function multipleNumFacts() {
  numFactsArr = await Promise.all([
    axios.get(`http://numbersapi.com/42?json`),
    axios.get(`http://numbersapi.com/42?json`),
    axios.get(`http://numbersapi.com/42?json`),
    axios.get(`http://numbersapi.com/42?json`),
  ])

  return numFactsArr.forEach((fact) => $("body").append(`<p>${fact.data.text}</p>`))

}

multipleNumFacts()