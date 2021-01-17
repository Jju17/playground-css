const newJokeBtn = document.getElementById("newJokeBtn");
const joke = document.querySelector(".joke");

getAJoke();

async function getAJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
}

newJokeBtn.addEventListener("click", () => getAJoke());
