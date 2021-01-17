const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll(".btn");


buttons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(`${sounds[idx]}`).play()
  })
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);

    song.pause(); // Je ne comprends pas pourquoi le .stop() nu fonctionne pas, en l'utilisant les musiques ne démarrent plus.
    song.currentTime = 0;
  })
}