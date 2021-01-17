const choicesTextArea = document.getElementById("choicesTextArea");
const tags = document.querySelector(".tags");

choicesTextArea.addEventListener("keyup", (e) => {
  createTag(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTag(input) {
  const splitWords = input.split(",").filter((tag) => tag.trim() !== "");

  let test = splitWords.map((element) => {
    return `<div class="tag">${element}</div>`;
  });
  tags.innerHTML = test.join("");
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tagsEl = document.querySelectorAll(".tag");
  return tagsEl[Math.floor(Math.random() * tagsEl.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
