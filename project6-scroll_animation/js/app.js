const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const hauteur = window.innerHeight;

  boxes.forEach((box) => {
    const boxBottom = box.getBoundingClientRect().bottom;

    if(boxBottom < hauteur) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  })

}