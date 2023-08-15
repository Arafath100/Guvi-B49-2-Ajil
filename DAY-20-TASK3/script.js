const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn-2");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const displayResults = document.querySelector(".displayResults");

btn.addEventListener("click", () => {
  result1.classList.add("show");
  result2.classList.remove("show");
  fetchResultsFromAPI(
    "https://www.scorebat.com/video-api/v3/feed/?token=MTAwMzQ3XzE2OTA5NzE5NjVfNGJkYzk0ZTViZDM4NTA4MTYzYWQyMmQwODYwNzE0YmVlNTJlY2JkMA==",
  );
});

btn2.addEventListener("click", () => {
  result1.classList.remove("show");
  result2.classList.add("show");
  loadLiveScore();
});

// Function to fetch and render the data from the given API
async function fetchResultsFromAPI(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    clearResults();
    let count = 0;
    for (const match of data.response) {
      if (count === 5) break; // Display only 5 latest matches
      renderMatchResult(match);
      count++;
    }
  } catch (error) {
    console.log(error.message);
    alert("Failed to fetch data! Please try again.");
  }
}

// Function to render a match result
function renderMatchResult(match) {
  const resultDiv = document.createElement("div");
  resultDiv.className = "card";

  const videoEmbed = document.createElement("div");
  videoEmbed.innerHTML = match.videos[0].embed;

  const matchTitle = document.createElement("p");
  matchTitle.innerHTML = `<b>Match:</b> ${match.title}`;

  const matchCompetition = document.createElement("p");
  matchCompetition.innerHTML = `<b>Competition:</b> ${match.competition.name}`;

  const matchDate = document.createElement("p");
  matchDate.innerHTML = `<b>Date:</b> ${match.date}`;

  resultDiv.appendChild(videoEmbed);
  resultDiv.appendChild(matchTitle);
  resultDiv.appendChild(matchCompetition);
  resultDiv.appendChild(matchDate);

  displayResults.appendChild(resultDiv);
}

// Function to clear previous results
function clearResults() {
  displayResults.innerHTML = "";
}

// Function to load the live score iframe
function loadLiveScore() {
  // Check if the script has already been added
  if (!document.getElementById("scorebat-jssdk")) {
    const script = document.createElement("script");
    script.id = "scorebat-jssdk";
    script.src = "https://www.scorebat.com/embed/embed.js?v=arrv";
    document.body.appendChild(script);
  }
}
