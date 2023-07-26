// Function to create a Bootstrap card with country data
function createCountryCard(country) {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');
    card.innerHTML = `
      <div class="card">
        <img src="${country.flag}" class="card-img-top" alt="${country.name} Flag">
        <div class="card-body">
          <h5 class="card-title">${country.name}</h5>
          <p class="card-text"><strong>Capital:</strong> ${country.capital}</p>
          <p class="card-text"><strong>Region:</strong> ${country.region}</p>
          <p class="card-text"><strong>Latlng:</strong> ${country.latlng.join(', ')}</p>
          <p class="card-text"><strong>Country Code:</strong> ${country.alpha2Code}, ${country.alpha3Code}</p>
        </div>
      </div>
    `;
    card.addEventListener('click', () => getWeatherData(country.name, country.alpha2Code));
    return card;
  }
  
  // Function to display the weather data in the clicked card
  function displayWeatherData(card, weatherData) {
    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `
      <p class="card-text"><strong>Weather:</strong> ${weatherData.weather[0].description}</p>
      <p class="card-text"><strong>Temperature:</strong> ${weatherData.main.temp}°C</p>
      <p class="card-text"><strong>Humidity:</strong> ${weatherData.main.humidity}%</p>
      <p class="card-text"><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</p>
    `;
    card.querySelector('.card-body').appendChild(weatherInfo);
  }
  
  // Function to fetch country data and create cards
  function fetchCountryData() {
    fetch('https://restcountries.com/v3/all')
      .then(response => response.json())
      .then(countries => {
        const countryCardsContainer = document.getElementById('country-cards');
        countries.forEach(country => {
          const card = createCountryCard(country);
          countryCardsContainer.appendChild(card);
        });
      })
      .catch(error => console.log('Error fetching country data:', error));
  }
  
  // Function to fetch weather data using OpenWeatherMap API
  function getWeatherData(countryName, countryCode) {
    const apiKey = 'https://openweathermap.org/';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName},${countryCode}&units=metric&appid=${apiKey}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(weatherData => {
        const selectedCard = document.querySelector('.card.active');
        if (selectedCard) {
          selectedCard.classList.remove('active');
          selectedCard.querySelector('.card-body').removeChild(selectedCard.querySelector('.card-text.weather-info'));
        }
  
        const clickedCard = event.currentTarget;
        clickedCard.classList.add('active');
        displayWeatherData(clickedCard, weatherData);
      })
      .catch(error => console.log('Error fetching weather data:', error));
  }
  
  // Call the fetchCountryData function to load the country cards on page load
  fetchCountryData();
  