# API (Application Programming Interface)

Uma API (Interface de Programação de Aplicações) é um conjunto de regras, protocolos e ferramentas que permitem diferentes softwares se comunicarem entre si. É como um "contrato" que define como diferentes componentes de software devem interagir.

## Principais características:

- Funciona como uma interface entre diferentes programas
- Permite a comunicação entre sistemas diferentes
- Oferece um conjunto padronizado de métodos/comandos
- Abstrai a complexidade interna dos sistemas

## Tipos comuns de APIs:

1. **APIs Web/REST**

   - Usam protocolo HTTP
   - Formato JSON/XML
   - Muito usadas para serviços web

2. **APIs de Biblioteca**

   - Conjunto de funções/classes
   - Usadas diretamente no código
   - Ex: APIs do sistema operacional

3. **APIs de Sistema Operacional**
   - Permitem interação com recursos do SO
   - Ex: APIs de arquivo, rede, etc.

## Benefícios:

- Reutilização de código
- Abstração de complexidade
- Padronização de comunicação
- Segurança e controle de acesso
- Facilita integração entre sistemas

## Exemplo prático:

Quando um app de clima consulta dados meteorológicos, ele usa uma API para se comunicar com servidores que fornecem essas informações, sem precisar conhecer como esses dados são processados internamente.

## HTTP (Hypertext Transfer Protocol)

O HTTP é um protocolo de comunicação usado para transferir dados na web. É a base da comunicação de dados na World Wide Web.

### Características principais:

- Protocolo cliente-servidor
- Stateless (não mantém estado entre requisições)
- Baseado em texto
- Opera sobre TCP/IP

### Métodos HTTP comuns:

- GET: Solicita dados
- POST: Envia dados
- PUT: Atualiza dados
- DELETE: Remove dados
- PATCH: Atualiza parcialmente

### Códigos de status:

- 2xx: Sucesso (200 OK)
- 3xx: Redirecionamento
- 4xx: Erro do cliente (404 Not Found)
- 5xx: Erro do servidor

### Headers HTTP:

- Fornecem metadados sobre a requisição/resposta
- Controlam cache, autenticação, tipo de conteúdo
- Essenciais para configurar a comunicação

### Exemplo de requisição:
