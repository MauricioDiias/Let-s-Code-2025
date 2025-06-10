const tableBody = document.querySelector("tbody");

async function buscarDados() {
  try {
    const resposta = await fetch(
      "https://mauriciodiias.github.io/Tabela_Produtos/data.json"
    );

    if (!resposta.status === 200) {
      alert("Erro no fetch");
    }

    const dados = await resposta.json();

    console.log(resposta);
    console.log(dados);
    return dados;
  } catch (error) {
    console.log("Erro ao buscar dados", error);
    alert("Erro ao buscar dados");
  }
}

async function renderizarDados() {
  const dados = await buscarDados();
  dados.forEach((element) => {
    tableBody.innerHTML += `
 <tr>
  <td>${element.id}</td>
  <td>
   <img class="productsImg"  src="${element.image}" alt="">
  </td>
  <td>${element.name}</td>
  <td>${element.price}</td>
  <td>${element.category}</td>
  <td>
  <span onClick=details(${element.id})>Detalhes</span>
  </td>
</tr>
         `;
  });
}

renderizarDados();

const dialog = document.getElementById("dialog");
const dialogDiv = document.getElementById("container");
const buttonClose = document.getElementById("close");

buttonClose.addEventListener("click", () => {
  dialog.setAttribute("class", "off");
});

async function details(param) {
  dialog.setAttribute("class", "open");

  const dados = await buscarDados();
  const detalhes = dados.filter((item) => item.id === param);

  detalhes.forEach((item) => {
    dialogDiv.innerHTML = `
        <h2>${item.name}</h2>
        <img class="productsImg"  src="${item.image}" alt="">
        <p>${item.description}</p>
        `;
  });
}
