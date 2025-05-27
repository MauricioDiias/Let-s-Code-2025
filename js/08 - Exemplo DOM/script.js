const verde = document.getElementById("verde");
const amarelo = document.getElementById("amarelo");
const vermelho = document.getElementById("vermelho");
const buttonMudar = document.getElementById("mudar");

const timer = document.getElementById("timer");

let estadoDaCor = "verde";
console.log(vermelho);

function contagemRegressiva(param) {
  let tempo = param;

  let contador = setInterval(() => {
    console.log(tempo);

    if (estadoDaCor === "verde") {
      timer.style.color = "green";
    } else if (estadoDaCor === "amarelo") {
      timer.style.color = "yellow";
    } else {
      timer.style.color = "red";
    }

    timer.textContent = tempo;
    tempo--;

    if (tempo === 1) {
      clearInterval(contador);
      // timer.textContent = 0;
    }
  }, 1000);
}

// contagemRegressiva();

function sinal() {
  //   console.log("executou");
  if (estadoDaCor === "verde") {
    verde.classList = "luzesApagada";
    amarelo.classList = "classAmarelo";
    estadoDaCor = "amarelo";
    contagemRegressiva(3);
    setTimeout(sinal, 3000);
  } else if (estadoDaCor === "amarelo") {
    amarelo.classList = "luzesApagada";
    vermelho.classList = "classVermelho";
    estadoDaCor = "vermelho";
    contagemRegressiva(3);
    setTimeout(sinal, 3000);
  } else if (estadoDaCor === "vermelho") {
    vermelho.classList = "luzesApagada";
    verde.classList = "classVerde";
    estadoDaCor = "verde";
    contagemRegressiva(3);
    setTimeout(sinal, 3000);
  }
}
sinal();

// setTimeout;

// setTimeout(() => {
//   console.log("olá");
// }, 5000);

//# CASO DE USO LIGANDO UMA DE CADA VEZ

// let estadoDaCor = "verde";

// buttonMudar.addEventListener("click", () => {
//   if (estadoDaCor === "verde") {
//     verde.classList = "luzesApagada";
//     amarelo.classList = "classAmarelo";
//     estadoDaCor = "amarelo";
//   } else if (estadoDaCor === "amarelo") {
//     amarelo.classList = "luzesApagada";
//     vermelho.classList = "classVermelho";
//     estadoDaCor = "vermelho";
//   } else if (estadoDaCor === "vermelho") {
//     vermelho.classList = "luzesApagada";
//     verde.classList = "classVerde";
//     estadoDaCor = "verde";
//   }
// });

// # caso de uso ligar tudo com um click

// verde.classList = "classVerde";
// amarelo.classList = "classAmarelo";
// vermelho.classList = "classVermelho";

// let estado = "apagado";

// buttonMudar.addEventListener("click", () => {
//   if (estado === "apagado") {
//     verde.classList = "classVerde";
//     amarelo.classList = "classAmarelo";
//     vermelho.classList = "classVermelho";
//     estado = "ligado";
//   } else {
//     verde.classList = "luzes";
//     amarelo.classList = "luzes";
//     vermelho.classList = "luzes";
//     estado = "apagado";
//   }
// });
