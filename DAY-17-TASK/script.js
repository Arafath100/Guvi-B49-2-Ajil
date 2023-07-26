async function fetchdata() {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    return data;
  }
  
  async function weatherData(cityName) {
    let apiKey = "865fcd9137725e9d7396bf25aa649043";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    let data = await response.json();
    return data;
  }
  
  async function createCardElement(elementName, className, textContent = "") {
    const element = document.createElement(elementName);
    element.className = className;
    element.textContent = textContent;
    return element;
  }
  
  async function createCard(country) {
    let name = country.name.common;
    let capital = country.capital;
    let region = country.region;
    let latitude = country.latlng[0];
    let longitude = country.latlng[1];
    let countryCode = country.cca3;
    let flag = country.cca2;
  
    const colDiv = document.createElement('div');
    colDiv.className = 'col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-4 mb-3 justify-content-center';
  
    const card = document.createElement('div');
    card.className = 'card h-100';
    card.style.backgroundColor = 'yellow';
  
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header bg-primary text-white text-center fs-3';
    cardHeader.textContent = name;
  
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center fs-4 fw-bold';
  
    const image = document.createElement('img');
    image.className = 'card-img';
    image.setAttribute('style', 'height:12rem; border:2px solid black');
    image.setAttribute('src', `https://flagcdn.com/w320/${flag.toLowerCase()}.png`);
    image.setAttribute('alt', 'flag');
  
    const details = document.createElement('div');
    details.className = 'card-text fs-5 mt-3';
    details.innerHTML = `Capital : ${capital}<br>------------------------<br>Region : ${region}<br>------------------------<br>Latitude : ${latitude}, Longitude : ${longitude}<br>------------------------<br>Country code : ${countryCode}<br>`;
  
    const button = document.createElement('button');
    button.className = 'btn btn-primary mt-3 fs-5 fw-bold';
    button.textContent = 'Click for Weather';
    button.onclick = async function () {
      let w_data = await weatherData(capital);
      let temp = w_data.main.temp;
      let pressure = w_data.main.pressure;
      let humidity = w_data.main.humidity;
      let w_speed = w_data.wind.speed;
  
      const weatherAlert = document.createElement('div');
      weatherAlert.className = 'alert alert-success mt-3';
      const head = document.createElement('h3');
      head.textContent = 'Weather Details';
      const list = document.createElement('p');
      list.innerHTML = `Temperature : ${temp - 273.15}&deg;C<br>Pressure : ${pressure}<br>Humidity : ${humidity}<br>Wind Speed : ${w_speed}<br>`;
  
      const button1 = document.createElement('button');
      button1.className = 'btn btn-primary mt-2';
      button1.textContent = 'Go Back';
      button1.onclick = function () {
        cardBody.removeChild(weatherAlert);
        cardBody.append(image, details);
      };
  
      weatherAlert.append(head, list, button1);
      cardBody.removeChild(details);
      cardBody.removeChild(image);
      cardBody.appendChild(weatherAlert);
    };
  
    colDiv.appendChild(card);
    card.append(cardHeader, cardBody);
    cardBody.append(image, details);
    details.appendChild(button);
  
    return colDiv;
  }
  
  async function createCards() {
    const container = document.getElementById('container');
    const cardRow = document.getElementById('cardRow');
  
    const content = await fetchdata();
    for (let country of content) {
      const card = await createCard(country);
      cardRow.appendChild(card);
    }
  }
  
  createCards();
  