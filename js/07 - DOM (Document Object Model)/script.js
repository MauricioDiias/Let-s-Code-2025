// Selecionando arquivos do DOM

const meuTitulo = document.getElementById("titulo");
meuTitulo.textContent = "Contador";
meuTitulo.style.color = "red";

// criar elementos
const myContainer = document.getElementById("container");
myContainer.style.display = "flex";
myContainer.style.gap = "10px";

const incrementar = document.createElement("button");
incrementar.textContent = "+";
incrementar.type = "button";

const decrementar = document.createElement("button");
decrementar.textContent = "-";
decrementar.type = "button";

// Adiconar elementos
myContainer.appendChild(decrementar);
myContainer.appendChild(incrementar);

let contador = 0;

const display = document.getElementById("display");
display.textContent = contador;

function atualizar() {
  display.textContent = contador;
}

incrementar.addEventListener("click", () => {
  contador++;
  atualizar();
});

decrementar.addEventListener("click", () => {
  // if (contador > 0) {
  contador--;
  // }

  atualizar();
});
