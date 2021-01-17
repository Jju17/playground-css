const left = document.querySelector(".split-one");
const right = document.querySelector(".split-two");
const container = document.querySelector(".container");




left.addEventListener("mouseenter", () => {
  container.classList.add("left")
})
left.addEventListener("mouseleave", () => {
  container.classList.remove("left")
})

right.addEventListener("mouseenter", () => {
  container.classList.add("right")
})
right.addEventListener("mouseleave", () => {
  container.classList.remove("right")
})