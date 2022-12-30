/* Global Variables */
const MyApiKey = '&appid=8b2cae409db139a400d9aacfeef8ef3b&units=imperial';
const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

const generateBtn = document.getElementById('generate');
// Button with function that is called when the button is clicked
generateBtn.addEventListener('click', () => {
  const zipValue = document.getElementById('zip');
  const feelingsValue = document.getElementById('feelings').value;
  // Fetch data from the API
  fetch(WeatherUrl + zipValue.value + MyApiKey)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      postData('/', data);
      return data;
    })
    // Dynamically Update UI

    .then(function updateUI(result) {
      const dateEl = document.getElementById('date');
      const tempEl = document.getElementById('temp');
      const feelingEl = document.getElementById('content');
      dateEl.innerText = `date: ${newDate}`;
      tempEl.innerText = `Tempreture: ${result.main.temp} F`;
      feelingEl.innerText = `My Feellings: ${feelingsValue}`;
    })
    .catch((error) => {
      console.log(`Error : ${error}`);
    });
});
// Function returns response from server
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};
