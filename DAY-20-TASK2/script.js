// Function to fetch data from the MealDB API using Promise
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

// Function to handle search by name
function searchByName(searchQuery) {
  const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
  
  fetchData(searchUrl)
    .then(data => {
      const searchResult = document.getElementById('searchResult');
      if (data.meals) {
        const mealList = data.meals.map(meal => `
          <div class="meal">
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-thumbnail">
          </div>
        `).join('');
        searchResult.innerHTML = mealList;
      } else {
        searchResult.innerHTML = '<p>No results found.</p>';
      }
    })
    .catch(error => console.error('Failed to fetch data:', error));
}

// Function to handle search by first letter
function searchByLetter(searchQuery) {
  const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchQuery}`;
  
  fetchData(searchUrl)
    .then(data => {
      const searchResult = document.getElementById('searchResult');
      if (data.meals) {
        const mealList = data.meals.map(meal => `
          <div class="meal">
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-thumbnail">
          </div>
        `).join('');
        searchResult.innerHTML = mealList;
      } else {
        searchResult.innerHTML = '<p>No results found.</p>';
      }
    })
    .catch(error => console.error('Failed to fetch data:', error));
}

// Function to handle lookup by ID
function lookupById(searchQuery) {
  const lookupUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchQuery}`;
  
  fetchData(lookupUrl)
    .then(data => {
      const searchResult = document.getElementById('searchResult');
      if (data.meals) {
        const meal = data.meals[0];
        searchResult.innerHTML = `
          <div class="meal">
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-thumbnail">
          </div>
        `;
      } else {
        searchResult.innerHTML = '<p>No results found.</p>';
      }
    })
    .catch(error => console.error('Failed to fetch data:', error));
}

// Function to handle random meal
function getRandomMeal() {
  const randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
  
  fetchData(randomUrl)
    .then(data => {
      const searchResult = document.getElementById('searchResult');
      if (data.meals) {
        const meal = data.meals[0];
        searchResult.innerHTML = `
          <div class="meal">
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-thumbnail">
          </div>
        `;
      } else {
        searchResult.innerHTML = '<p>No results found.</p>';
      }
    })
    .catch(error => console.error('Failed to fetch data:', error));
}

// Entry point of the script
document.addEventListener('DOMContentLoaded', () => {
  // Attach event listener to search button
  document.getElementById('searchBtn').addEventListener('click', () => {
    const searchCategory = document.getElementById('searchCategory').value;
    const searchQuery = document.getElementById('searchQuery').value;
    
    if (searchCategory === 'name') {
      searchByName(searchQuery);
    } else if (searchCategory === 'letter') {
      searchByLetter(searchQuery);
    } else if (searchCategory === 'id') {
      lookupById(searchQuery);
    } else if (searchCategory === 'random') {
      getRandomMeal();
    }
  });
});
