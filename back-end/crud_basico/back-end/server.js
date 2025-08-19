const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let id = 0;

const nomes = [];

//CREATE
app.post("/adicionar-nome", (req, res) => {
  id++;
  console.log(req.body);
  const nome = req.body.nome;
  console.log(id, nome);
  nomes.push({ id, nome });
  // nomes.push({id:id,nome:nome})
  res.status(201).json({ mensager: "Nome Adicionado com sucesso" });
});

//READ
app.get("/nomes", (req, res) => {
  console.log("GET /nomes");
  console.log(nomes);
  if (nomes.length > 0) {
    res.json(nomes);
  } else {
    res.status(404).json({ mensager: "Nenhum nome encontrado" });
  }
});

//READ BY ID
app.get("/nome/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const nome = nomes.find((nome) => nome.id == id);
  console.log(nome);
  if (nome) {
    res.json(nome);
  } else {
    res.status(404).json({ mensager: "Nome não encontrado" });
  }
});

//UPDATE
app.put("/nome/:id", (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  console.log(id, nome);
  const nomeIndex = nomes.findIndex((nome) => nome.id == id);
  if (nomeIndex != -1) {
    nomes[nomeIndex].nome = nome;
    res.status(200).json({ mensager: "Nome atualizado com sucesso" });
    // res.json(nomes);
  } else {
    res.status(404).json({ mensager: "Nome não encontrado" });
  }

  // nomes[id] = nome;
});

//DELETE
app.delete("/nome/:id", (req, res) => {
  const id = req.params.id;
  const nomeIndex = nomes.findIndex((nome) => nome.id == id);
  if (nomeIndex != -1) {
    nomes.splice(nomeIndex, 1);
    res.status(200).json({ mensager: "Nome deletado com sucesso" });
  } else {
    res.status(404).json({ mensager: "Nome não encontrado" });
  }
  // nomes.splice(id, 1);
  // res.json(nomes);
});

app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
