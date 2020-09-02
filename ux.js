class UI {
  constructor() {
    this.location = document.getElementById("location");
    this.icon = document.getElementById("w-icon");
    this.temp = document.getElementById("temp");
    this.desc = document.getElementById("des");
  }

  paint(weather) {
    this.desc.textContent = ` ${weather.weather[0].description}`;
    this.temp.textContent = `Temp: ${weather.main.temp}`;
    this.location.textContent = `Location: ${weather.name}`;
    this.icon.setAttribute(
      "src",
      (weather =
        "http://openweathermap.org/img/wn/" +
        weather["weather"][0].icon +
        ".png")
    );
  }
}
