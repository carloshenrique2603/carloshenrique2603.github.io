const radio = document.getElementById("radio");
const btn = document.getElementById("playBtn");
const music = document.getElementById("music");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    radio.play();
    btn.textContent = "⏸";
  } else {
    radio.pause();
    btn.textContent = "▶";
  }
  playing = !playing;
});
