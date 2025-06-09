const container = document.getElementById("container");
const container2 = document.getElementById("container2");

async function buscarDados() {
  const resposta = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  const dados = await resposta.json();

  dados.forEach((element, index) => {
    container.innerHTML += `
      <h3>${index} - ${element.id}</h3>
  <img
  width="200px"
  height="200px"
  src=${element.url}
  alt=""
  />`;
  });

  console.log(resposta);
  console.log(dados);
}
buscarDados();

// const obj = {
//   notas: [1, 2, 3, 5],
// };

// const lista = ["nome1", "nome2"];

// const num = obj.notas.forEach((item) => console.log(item));

// lista.forEach((item) => {
//   console.log(item);
// });

async function buscarDadosEstados() {
  const resposta = await fetch(
    "https://mauriciodiias.github.io/estadosDoBrasil/data.json"
  );
  const dados = await resposta.json();

  dados.estados.forEach((element, index) => {
    container2.innerHTML += `
      <h3> ${element.nome}</h3>
  <img
  width="200px"
  height="200px"
  src=${element.bandeira_url}
  alt=""
  />
  <p>Habitantes: ${element.habitantes}</p>
  `;
  });

  console.log(resposta);
  console.log(dados);
}
buscarDadosEstados();
