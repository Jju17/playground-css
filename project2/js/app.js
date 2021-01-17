const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".progress-container .circle");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let currentActive = 0;

nextButton.addEventListener("click", () => {
  currentActive++;
  update();
});

prevButton.addEventListener("click", () => {
  currentActive--;
  update();
});

function update() {
  for (let i = 0; i < circles.length; i++) {
    if (i <= currentActive) {
      circles[i].classList.add("active");
    } else {
      circles[i].classList.remove("active");
    }

    if (currentActive === 0) {
      prevButton.disabled = true;
    } else if (currentActive === 3) {
      nextButton.disabled = true;
    } else {
      prevButton.disabled = false;
      nextButton.disabled = false;
    }

    progress.style.width = `${(currentActive / (circles.length - 1)) * 100}%`;
  }
}
