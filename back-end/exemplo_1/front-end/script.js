async function getApi() {
  const response = await fetch("http://localhost:3000");
  console.log(response);
  const data = await response.json();
  console.log(data);
}

async function getApiUser() {
  const response = await fetch("http://localhost:3000/user");
  console.log(response);
  const data = await response.json();
  console.log(data);
  showUser(data);
}

function showUser(data) {
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  name.innerHTML = data.name;
  age.innerHTML = data.age;
}

async function getApiMenu() {
  try {
    const response = await fetch("http://localhost:3000/menu");
    console.log(response);
    const data = await response.json();
    console.log(data);
    showMenu(data);
  } catch (error) {
    const menu = document.getElementById("menu");
    menu.innerHTML = '<p style="color: red;">Servidor Fora do ar</p>';
    console.error("Error fetching menu:", error);
  }
}

function showMenu(data) {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";
  data.pratos.forEach((prato) => {
    menu.innerHTML += `
      <div class="prato">
        <h2 style="color: blue;">${prato.nome}</h2>
        <p>${prato.descricao}</p>
        <p>R$ ${prato.preco.toFixed(2)}</p>
      </div>
    `;
  });
}

// async function getApiMenu() {
//   const response = await fetch("http://localhost:3000/menu");
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
//   showMenu(data);
// }

// function showMenu(data) {
//   const menu = document.getElementById("menu");
//   menu.innerHTML = "";
//   data.pratos.forEach((prato) => {
//     menu.innerHTML += `
//       <div class="prato">
//         <h2 style="color: blue;">${prato.nome}</h2>
//         <p>${prato.descricao}</p>
//         <p>R$ ${prato.preco.toFixed(2)}</p>
//       </div>
//     `;
//   });
// }
