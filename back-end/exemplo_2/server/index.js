const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const nomes = [
  {
    name: "Mauricio",
    age: 25,
  },
  {
    name: "João",
    age: 20,
  },
];
const faturas = [
  {
    name: "Mauricio",
    value: "R$ 25.00",
    data_vencimento: "2023-01-01",
  },
  {
    name: "João",
    value: "R$ 30.00",
    data_vencimento: "2023-01-02",
  },
];

//ler os dados da API
app.get("/", (req, res) => {
  res.json(nomes);
  console.log("GET");
});

//ler as faturas
app.get("/faturas", (req, res) => {
  res.json(faturas);
});

//adicionar um novo nome
app.post("/", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  nomes.push({ name, age });
  res.json(nomes);

  // const { name, age } = req.body;
  // nomes.push({ name, age });
  // res.json(nomes);
});

app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
