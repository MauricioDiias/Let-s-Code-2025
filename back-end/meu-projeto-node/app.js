// app.js
console.log("Olá, Node.js!");

const http = require("http");

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Meu primeiro servidor Node.js!");
});

const porta = 3002;
servidor.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}/`);
});
