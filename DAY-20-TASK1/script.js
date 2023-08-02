// Function to fetch and display information about a specific Kural (poem)
function getKural(no) {
  const url = `https://api-thirukkural.vercel.app/api?num=${no}`;

  // Make a fetch request to the API endpoint with the provided Kural number
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Extract the relevant data from the response
      const sect_tam = data.sect_tam;
      const chapgrp_tam = data.chapgrp_tam;
      const chap_tam = data.chap_tam;
      const line1 = data.line1;
      const line2 = data.line2;
      const tam_exp = data.tam_exp;

      const kuralInfo = document.querySelector('.kuralInfo');
      kuralInfo.innerHTML = '';

      // Create a container box to hold the Kural information and style it
      const box = document.createElement('div');
      box.setAttribute(
        'class',
        'container text-black mt-5 border border-5 text-center p-3 fs-3 gradient-background'
      );

      // Create the header section with chapter information
      const header = document.createElement('div');
      header.setAttribute('class', 'row bg-primary text-white py-2 mb-3');

      const headerText = document.createElement('p');
      headerText.setAttribute('class', 'col-12 text-center');
      headerText.innerHTML = `${chap_tam} - ${chapgrp_tam}`;

      // Create the body section with Kural and explanation
      const body = document.createElement('div');
      body.setAttribute(
        'class',
        'row justify-content-center text-black gradient-background'
      );

      // Append the Kural and explanation to the body section
      const kuralNoText = document.createElement('p');
      kuralNoText.setAttribute('class', 'kuralNoText');
      kuralNoText.innerHTML = `குறள் ${no}:`;
      const line1Text = document.createElement('p');
      line1Text.innerHTML = line1;
      const line2Text = document.createElement('p');
      line2Text.innerHTML = line2;
      const tamExpText = document.createElement('p');
      tamExpText.setAttribute('class', 'expText');
      tamExpText.innerHTML = `விளக்கம்:<br>${tam_exp}`;

      // Append all the elements to the body section
      body.appendChild(kuralNoText);
      body.appendChild(line1Text);
      body.appendChild(line2Text);
      body.appendChild(tamExpText);

      // Append the header and body sections to the container box
      header.appendChild(headerText);
      box.appendChild(header);
      box.appendChild(body);
      kuralInfo.appendChild(box);
    })
    .catch((error) => {
      console.log('Error fetching the data:', error);
    });
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); 

  let noInput = document.querySelector('.noInput');
  let no = noInput.value.trim(); 

  // Check if the entered input is a valid number
  if (!isNaN(no) && no !== '') {
    getKural(no); 
  } else {
    // Set the button color to red for invalid input
    let searchButton = document.querySelector('.searchButton');
    searchButton.style.backgroundColor = 'red';

    // Reset the button color after 2 second
    setTimeout(() => {
      searchButton.style.backgroundColor = 'green';
    }, 2000);
  }
}

// Add event listener to the form submission
let form = document.querySelector('.kuralForm');
form.addEventListener('submit', handleSubmit);
