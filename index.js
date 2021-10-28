console.log("Hello World")

function addMovie(event) {
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    const ul = document.querySelector("ul");
    ul.appendChild(movie);
}

document.querySelector('form').addEventListener("submit", addMovie);
