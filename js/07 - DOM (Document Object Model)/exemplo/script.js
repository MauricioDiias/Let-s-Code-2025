const input = document.getElementById("input");
const buttonAdiconar = document.getElementById("adicionar");
const lista = document.getElementById("lista");

let nomes = ["Flavio", "Nivia", "Kelberis"];

// nomes.forEach((nome) => {
//   const li = document.createElement("li");
//   li.textContent = nome;
//   lista.appendChild(li);
// });

buttonAdiconar.addEventListener("click", () => {
  const li = document.createElement("li");
  let nome = input.value;
  li.textContent = nome;
  lista.appendChild(li);
  input.value = "";
});

nomes.forEach((nome) => {
  lista.innerHTML += `<li>${nome}</li>`;
});
