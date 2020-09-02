const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("btn").addEventListener("click", e => {
  const city = document.getElementById("state").value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
