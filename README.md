<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Documentação da API Tweteroo

## Descrição

Bem-vindo à documentação da API **Tweteroo**! Esta API permite que os usuários registrem-se, enviem tweets, acessem tweets recentes, e obtenham tweets de um usuário específico. A API é construída com o framework NestJS e utiliza TypeScript para programação orientada a objetos.

## URL de acesso

A base URL para todas as chamadas à API é: https://endereco-de-deploy.com

## Endpoints

### SignUp
Endpoint para registrar um novo usuário na memória.

- **URL**: /signup
- **Método**: POST
- **Headers**: N/A
- **Corpo da Requisição**:
  ```json
  {
    "username": "exemplo_usuario",
    "avatar": "https://link-do-seu-avatar.com/avatar.jpg",
  }
  ```
- **Resposta de Sucesso**:
  - **Código**: 200 Ok
- **Resposta de Erro**:
  - **Código**: 400 Bad Request
  - **Corpo da Resposta**:
    ```json
    {
      "error": "Detalhes do erro de validação"
    }
    ```

### Post Tweet
Endpoint para um usuário enviar um novo tweet para a memória.

- **URL**: /tweets
- **Método**: POST
- **Headers**: N/A
- **Corpo da Requisição**:
  ```json
  {
    "username": "exemplo_usuario",
    "tweet": "Seu tweet",
  }
  ```
- **Resposta de Sucesso**:
  - **Código**: 201 Created
- **Resposta de Erro**:
  - **Código**: 400 Bad Request
  - **Corpo da Resposta**:
    ```json
    {
      "error": "Detalhes do erro de validação"
    }
    ``````
  - **Código**: 401 Unauthorized
  - **Corpo da Resposta**:
    ```json
    {
      "error": "Detalhes do erro de validação"
    }
    ``````

### Get Tweets
Endpoint para obter os últimos 15 tweets enviados, com opção de paginação.

- **URL**: /tweets
- **Método**: GET
- **Headers**: N/A
- **Parametros de consulta**:
  - **page**: Número da página (opcional)
- **Resposta de Sucesso**:
  - **Código**: 200 Ok
  - **Corpo da Resposta**:
    ```json
    [
      {
        username: "exemplo_usuario",
        avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
        tweet: "Tweet do usuario",
      }, {}, {}, ...
    ]
    ```
- **Resposta de Erro**:
  - **Código**: 400 Bad Request
  - **Corpo da Resposta**:
    ```json
    {
      "error": "Detalhes do erro de validação"
    }
    ``````

### Get User Tweets
Endpoint para obter todos os tweets de um usuário específico.

- **URL**: /tweets/:username
- **Método**: GET
- **Headers**: N/A
- **Resposta de Sucesso**:
  - **Código**: 200 Ok
  - **Corpo da Resposta**:
    ```json
    [
      {
        username: "usuario_x",
        avatar: "https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg"
        tweet: "I'm ready!"
      },
      {
        username: "usuario_x",
        avatar: "https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg"
        tweet: "I'm tweeting!"
      }
    ]
    ```
- **Resposta de Erro**:
  - **Código**: 400 Bad Request
  - **Corpo da Resposta**:
    ```json
    {
      "error": "Detalhes do erro de validação"
    }
    ``````

## Copiando o Projeto do GitHub e Iniciando Localmente

Aqui estão os passos para copiar o projeto do GitHub, iniciar na sua máquina e utilizá-lo como servidor local.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Passos

1. **Clone o Repositório:**
   Abra o terminal e navegue até o diretório onde deseja colocar o projeto. Em seguida, execute o seguinte comando para clonar o repositório do GitHub:

   ```bash
   git clone https://github.com/seu-usuario/projeto21-tweteroo.git
   ```
2. **Navegue até a pasta do projeto:**
   Abra o terminal e navegue até a pasta do projeto. Execute o seguinte comando para navegar até a pasta do projeto:

   ```bash
   cd projeto21-tweteroo
   ```
3. **Instale as dependências:**
   Execute o seguinte comando para instalar as dependências:

   ```bash  
   npm install
   ```
4. **Inicie o Servidor:**
   Execute o seguinte comando para iniciar o servidor em modo de Desenvolvimento:
   
   ```bash
   npm run start
   ```
5. **Acesse a API Localmente:**
  Agora você pode acessar a API localmente através do navegador ou de ferramentas como o Postman. A base URL será http://localhost:3000.

