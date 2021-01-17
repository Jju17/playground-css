const insert = document.querySelector(".insert");

document.addEventListener("keydown", logKey);

function logKey(e) {
  insert.innerHTML = `
  <div class="key">
    ${e.key === " " ? "Space" : e.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${e.code}
    <small>event.code</small>
  </div>
  `;
}
