const nomeInput = document.getElementById("nomeImput");

async function adicionarNome() {
  try {
    const primeiroNome = nomeInput.value;
    const response = await fetch("http://localhost:3000/adicionar-nome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: primeiroNome }),
    });
    if (response.status === 201) {
      alert("Nome adicionado com sucesso");
      nomeInput.value = "";
      buscarNomes();
    } else {
      alert("Erro ao adicionar nome");
    }
  } catch (error) {
    console.log(error);
    alert("Erro ao adicionar nome");
  }
}

async function buscarNomes() {
  try {
    const response = await fetch("http://localhost:3000/nomes");
    if (response.status === 200) {
      const nomes = await response.json();
      const nomesContainer = document.getElementById("nomes-container");
      nomesContainer.innerHTML = "";
      //   for (let i = 0; i < nomes.length; i++) {
      //     const nome = nomes[i];
      //     const nomeElement = document.createElement("p");
      //     nomeElement.textContent = nome.nome;
      //     nomesContainer.appendChild(nomeElement);
      //   }
      nomes.forEach((nome) => {
        const nomeElement = document.createElement("p");
        nomeElement.textContent = nome.nome;
        nomesContainer.appendChild(nomeElement);
      });
      console.log(nomes);
    } else {
      alert("Erro ao buscar nomes");
    }
  } catch (error) {
    console.log(error);
    alert("Erro ao buscar nomes");
  }
}
