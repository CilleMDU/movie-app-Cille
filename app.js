"use strict";

async function loadMovies() {
  console.log("🚀 Henter movie data...");

  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );
  const data = await response.json();

  console.log("🎬 Data modtaget:", data);
  return data;

  const moviesFromJSON = await response.json();

  console.log("🎬 Movies fra JSON:", moviesFromJSON);
  console.log("📊 Antal movies:", moviesFromJSON.length);
  console.log("🎭 Første movie:", moviesFromJSON[0]);

  return moviesFromJSON;
}

loadMovies();

const movieListContainer = document.querySelector("#movie-list");

function displayMovie(movieObject) {
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet fra JSON!`);
}

async function testDisplayMovie() {
  console.log("🧪 Tester displayMovie med JSON data...");

  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );
  const moviesFromJSON = await response.json();

  displayMovie(moviesFromJSON[0]);
  console.log("✅ Test fuldført - det virkede!");
}

testDisplayMovie();

function displayMovies(movieArray) {
  movieListContainer.innerHTML = "";

  console.log(`🎬 Viser ${movieArray.length} movies...`);

  for (const movie of movieArray) {
    displayMovie(movie);
  }

  console.log(`🎉 ${movieArray.length} movies vist successfully!`);
}

async function loadMovies() {
  console.log("🌐 Henter alle movies fra JSON...");

  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );
  const moviesFromJSON = await response.json();

  console.log("📊 JSON data modtaget:", moviesFromJSON.length, "movies");

  displayMovies(moviesFromJSON);
}

loadMovies();
