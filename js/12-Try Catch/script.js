const tableBody = document.querySelector("tbody");
const searchInput = document.getElementById("search");
const orderAlfa = document.getElementById("orderAlfa");
const orderPrice = document.getElementById("orderPrice");
let allProducts = [];
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

async function renderizarDados(dados) {
  tableBody.innerHTML = "";
  dados.forEach((element) => {
    tableBody.innerHTML += `
 <tr>
  <td>${element.id}</td>
  <td>
   <img class="productsImg"  src="${element.image}" alt="">
  </td>
  <td>${element.name}</td>
  <td> ${element.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}</td>
  <td>${element.category}</td>
  <td>
  <span onClick=details(${element.id})>Detalhes</span>
  </td>
</tr>
         `;
  });
}

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
        <p>  <strong>Preço:</strong>  ${item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}  </p>
        <p>${item.description}</p>
        `;
  });
}

async function initial() {
  allProducts = await buscarDados();
  renderizarDados(allProducts);
}
initial();

searchInput.addEventListener("input", pesquisarProduto);

function pesquisarProduto() {
  let produtosFiltrados = allProducts.filter((item) =>
    item.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  renderizarDados(produtosFiltrados);
}

orderAlfa.addEventListener("click", ordenarAlfabetica);

// let statusOrder = false;
// function ordenarAlfabetica() {
//   if (!statusOrder) {
//     allProducts.sort((a, b) => a.name.trim().localeCompare(b.name.trim()));
//     renderizarDados(allProducts);
//     statusOrder = !statusOrder;
//     orderAlfa.textContent = "🔄";
//   } else {
//     initial();
//     statusOrder = !statusOrder;
//     orderAlfa.textContent = "🔤";
//   }
// }

let statusOrder = false;
function ordenarAlfabetica() {
  if (statusOrder) {
    initial();
    statusOrder = !statusOrder;
    orderAlfa.textContent = "🔤";
  } else {
    allProducts.sort((a, b) => a.name.trim().localeCompare(b.name.trim()));
    renderizarDados(allProducts);
    statusOrder = !statusOrder;
    orderAlfa.textContent = "🔄";
  }
}

orderPrice.addEventListener("click", ordenarPeloPreco);

let statusPrice = 0;
function ordenarPeloPreco() {
  if (statusPrice === 0) {
    allProducts.sort((a, b) => a.price - b.price);
    renderizarDados(allProducts);
    statusPrice = 1;
    orderPrice.textContent = "🔽";
  } else if (statusPrice === 1) {
    allProducts.sort((a, b) => b.price - a.price);
    renderizarDados(allProducts);
    statusPrice = 2;
    orderPrice.textContent = "🔄";
  } else {
    initial();
    orderPrice.textContent = "🔼";
    statusPrice = 0;
  }
}

const selectCategoria = document.getElementById("selectCategoria");

selectCategoria.addEventListener("change", (e) => {
  let nomeCategoria = e.target.value;
  console.log("Evento", e);
  console.log("nomeCategoria", nomeCategoria);
  let produtosFiltradosPorCategory = allProducts.filter(
    (item) => item.category === nomeCategoria
  );
  if (nomeCategoria === "selecione") {
    renderizarDados(allProducts);
  } else {
    renderizarDados(produtosFiltradosPorCategory);
  }
});

async function popularSelect() {
  let produtos = await buscarDados();
  let categorias = produtos.reduce((acumulador, item) => {
    if (!acumulador.includes(item.category)) {
      acumulador.push(item.category);
    }

    return acumulador;
  }, []);
  categorias.forEach((category) => {
    selectCategoria.innerHTML += `
   <option value="${category}">${category}</option>
  `;
  });
}
popularSelect();
