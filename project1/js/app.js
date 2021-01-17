const panels = document.querySelectorAll(".panel");

let lastActivePanel = panels[0];

panels.forEach((panel, i) => {
  panels[i].addEventListener("click", expandPanel);
});

function expandPanel(e) {
  lastActivePanel.classList.toggle("active");
  lastActivePanel = e.target;
  e.target.classList.toggle("active");
  e.target.children[0].style.display = "block";
}
