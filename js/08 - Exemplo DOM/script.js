const verde = document.getElementById("verde");
const amarelo = document.getElementById("amarelo");
const vermelho = document.getElementById("vermelho");
const buttonMudar = document.getElementById("mudar");

const timer = document.getElementById("timer");

let estadoDaCor = "verde";
console.log(vermelho);

function contagemRegressiva(param) {
  let tempo = param;
  atualizarTempo();
  let contador = setInterval(atualizarTempo, 1000);
  function atualizarTempo() {
    console.log(tempo);

    if (estadoDaCor === "verde") {
      timer.style.color = "green";
    } else if (estadoDaCor === "amarelo") {
      timer.style.color = "yellow";
    } else {
      timer.style.color = "red";
    }

    timer.textContent = tempo;

    if (tempo <= 0) {
      clearInterval(contador);
      sinal();
    }
    tempo--;
  }
}

function sinal() {
  if (estadoDaCor === "verde") {
    verde.classList = "luzesApagada";
    amarelo.classList = "classAmarelo";
    estadoDaCor = "amarelo";
    contagemRegressiva(5);
  } else if (estadoDaCor === "amarelo") {
    amarelo.classList = "luzesApagada";
    vermelho.classList = "classVermelho";
    estadoDaCor = "vermelho";
    contagemRegressiva(7);
  } else if (estadoDaCor === "vermelho") {
    vermelho.classList = "luzesApagada";
    verde.classList = "classVerde";
    estadoDaCor = "verde";
    contagemRegressiva(10);
  }
}
sinal();

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

// # CASO DE USO LIGAR TUDO COM UM CLICK

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
//     verde.classList = "luzesApagada";
//     amarelo.classList = "luzesApagada";
//     vermelho.classList = "luzesApagada";
//     estado = "apagado";
//   }
// });
