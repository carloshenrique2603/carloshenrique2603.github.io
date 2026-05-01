// TOCAR RÁDIO
function tocarRadio() {
  var radio = document.getElementById("radio");
  radio.play();
}

// FRASES AUTOMÁTICAS
var frases = [
  "A melhor rádio da cidade 🎶",
  "Só sucesso toca aqui 🔥",
  "Ligou, curtiu! 📻",
  "24 horas de música pra você 🎧",
  "Rádio Jovem FM - Sua vibe!"
];

var i = 0;

setInterval(function() {
  i++;
  if (i >= frases.length) i = 0;
  document.getElementById("frase").innerText = frases[i];
}, 5000);
