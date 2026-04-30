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


// 🎵 BUSCAR NOME DA MÚSICA (se tiver API)
async function atualizarMusica() {
  try {
    const res = await fetch("COLE_API_AQUI");
    const data = await res.json();

    music.textContent =
      data.now_playing.song.title + " - " +
      data.now_playing.song.artist;

  } catch {
    music.textContent = "Ao vivo 🎧";
  }
}

setInterval(atualizarMusica, 10000);
