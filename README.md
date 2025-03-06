# API de Autenticação e Gerenciamento de Usuários

Esta é uma API desenvolvida em Node.js, TypeScript, Express e MongoDB para autenticação e gerenciamento de usuários. Ela permite cadastrar, autenticar, buscar, atualizar e deletar usuários. A documentação da API é gerada automaticamente usando o padrão OpenAPI e pode ser acessada via `@scalar/express-api-reference`.

## Funcionalidades

- **Cadastro de usuários**: Cria um novo usuário no sistema.
- **Login de usuários**: Autentica um usuário e retorna um token JWT.
- **Busca de usuário por ID**: Retorna os detalhes de um usuário específico.
- **Atualização de usuário**: Atualiza os dados de um usuário existente.
- **Deleção de usuário**: Remove um usuário do sistema.
- **Documentação interativa**: Acessível via `/reference`.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset JavaScript com tipagem estática.
- **Express**: Framework para construção de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB.
- **Bcryptjs**: Biblioteca para criptografia de senhas.
- **JSON Web Token (JWT)**: Para autenticação e geração de tokens.
- **@scalar/express-api-reference**: Para gerar documentação interativa da API.

## Pré-requisitos

- Node.js (v18 ou superior)
- MongoDB (local ou MongoDB Atlas)
- PNPM (ou NPM/Yarn)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/<seu-usuario>/<seu-repositorio>.git
cd authentication-microservice
```

2. Instale as dependências:

```bash
pnpm install
```

3. Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/user-service?retryWrites=true&w=majority
JWT_SECRET=secret
```

4. Substitua <username> e <password> pelas credenciais do seu banco de dados.

Inicie o servidor:

```bash
pnpm run dev
```

O servidor estará disponível em http://localhost:3000.

## Rotas da API

### Cadastrar Usuário
**POST /users**

Corpo da Requisição:

```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123"
}
```

Resposta:

```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "João Silva",
  "email": "joao@example.com"
}
```

### Login de Usuário
**POST /users/login**

Corpo da Requisição:

```json
{
  "email": "joao@example.com",
  "password": "senha123"
}
```

Resposta:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Buscar Usuário por ID
**GET /users/:id**

Resposta:

```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "João Silva",
  "email": "joao@example.com"
}
```

### Atualizar Usuário
**PUT /users/:id**

Corpo da Requisição:

```json
{
  "name": "João Silva Atualizado",
  "email": "joao.novo@example.com"
}
```

Resposta:

```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "João Silva Atualizado",
  "email": "joao.novo@example.com"
}
```

### Deletar Usuário
**DELETE /users/:id**

Resposta: Status 204 (Sem conteúdo).

Documentação Interativa
A documentação da API está disponível em http://localhost:3000/reference. Ela é gerada automaticamente com base na especificação OpenAPI (openapi.json) e permite testar as rotas diretamente no navegador.

Como Contribuir?
Faça um fork do repositório.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

Desenvolvido com ❤️ por Renato de Queiroz Marcondes | Analista de Sistemas

