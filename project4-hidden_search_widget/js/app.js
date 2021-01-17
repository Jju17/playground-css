const searchButton = document.querySelector(".search-button");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("search-input");
const container = document.querySelector(".container");

console.log(searchButton);

searchButton.addEventListener("click", () => {
  container.classList.toggle("active");
  searchInput.focus();
});
