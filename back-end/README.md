# Back-end Installation Guide

# Verificar a versão do Node.js e npm

node --version
npm --version

# Iniciar um projeto Node.js

# Isso criará um arquivo package.json com as configurações básicas do projeto

node init -y

# Instalar as dependências do projeto

# Isso criará um arquivo package-lock.json com as versões exatas das dependências instaladas

npm install express

npm install cors

# rodar servidor

# Isso iniciará o servidor na porta 3000

node server.js

node <nome_do_arquivo>.js

# Testar a API

# Abra o navegador e acesse http://localhost:3000

# Você deverá ver a mensagem "Hello, World!"
