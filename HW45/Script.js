const weatherDescription = document.querySelector('.weather__description');
const weatherIcon = document.querySelector('.weather__icon');
const weatherTemperature = document.querySelector('.weather__temperature');
const weatherPressure = document.querySelector('.weather__pressure');
const weatherHumidity = document.querySelector('.weather__humidity');
const weatherWindSpeed = document.querySelector('.weather__wind-speed');
const weatherWindDirection = document.querySelector('.weather__wind-direction');

const cityInput = document.querySelector('#city-input');
const cityName = document.querySelector('#city-name');

// функция для виконання AJAX-запиту
function getWeather(city) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);

      // виводимо погодні дані на сторінку
      cityName.textContent = data.name;
      weatherDescription.textContent = data.weather[0].description;
      weatherIcon.setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      weatherTemperature.textContent = `${data.main.temp}°C`;
      weatherPressure.textContent = `${data.main.pressure} hPa`;
      weatherHumidity.textContent = `${data.main.humidity}%`;
      weatherWindSpeed.textContent = `${data.wind.speed} m/s`;
      weatherWindDirection.textContent = `${data.wind.deg}°`;
    } else {
      console.log('Помилка запиту:', xhr.statusText);
    }
  };
  xhr.onerror = function() {
    console.log('Помилка мережі');
  };
  xhr.send();
}

// обработчик события для кнопки
const getWeatherBtn = document.querySelector('#get-weather-btn');
getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
    cityInput.value = '';
  }
});

// функция для обновления погоды
function updateWeather() {
  const city = cityName.textContent;
  if (city) {
    getWeather(city);
  }
}

// обновление погоды каждые 5 минут
setInterval(updateWeather, 1 * 60 * 1000);
