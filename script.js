const radio = document.getElementById("radio");
const btn = document.getElementById("playBtn");
const music = document.getElementById("music");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    if (!radio.src) {
      alert("Coloque o link da rádio depois 😉");
      return;
    }

    radio.play();
    btn.textContent = "⏸";
  } else {
    radio.pause();
    btn.textContent = "▶";
  }
  playing = !playing;
});

// simulação de música
const lista = [
  "Top Hits 🔥",
  "Mix Jovem FM 🎧",
  "Ao vivo agora 🎶",
  "Seu som favorito 🎵"
];

setInterval(() => {
  music.textContent = lista[Math.floor(Math.random() * lista.length)];
}, 4000);
