const background = document.querySelector(".background");
const loader = document.querySelector(".loader")

function loadingPage() {
  let loadingTime = 0.01;

  let interval = setInterval(() => {
    background.style.filter = `blur(${30 - (30*loadingTime)}px)`
    loadingTime += 0.01;
    loader.textContent = `${Math.round(loadingTime*100)}%`;
    loader.style.opacity = 1-loadingTime;

    if(loadingTime >= 1) {
      clearInterval(interval);
    }
  }, 20)
}