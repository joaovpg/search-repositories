# Search Repositories

- [Protótipo no Figma](https://www.figma.com/design/0doBeBkluiPfPgfs7ayYuh/Projeto---Search-Repositories?node-id=0-1&t=nbZQNNf4HifA7fYS-1)

## Tecnologias

- React + TypeScript
- Vite
- GraphQL API do GitHub + ApolloClient
- Axios
- Zustend
- TailwindCSS

## Requisitos

- Node.js v22.14 ou superior
- [Git](https://git-scm.com/)

## Instalação

Clone o repositório:

```bash
git clone https://github.com/joaovpg/search-repositories.git
cd search-repositories
```

Ou baixe o projeto em [.zip](https://github.com/joaovpg/search-repositories/archive/refs/heads/main.zip).

Instale as dependências:

```bash
npm install
```

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione sua chave de acesso do GitHub:

```
VITE_GITHUB_TOKEN=seu_token_aqui
```

> ⚠️ O token é obrigatório para algumas requisições, pois a API GraphQL do GitHub exige autenticação.

## Execução

Para rodar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

O projeto ficará disponível em [http://localhost:5173](http://localhost:5173/).

## 📜 Scripts Disponíveis

- `npm run dev` – inicia o servidor de desenvolvimento
- `npm run build` – gera a versão de produção
- `npm run preview` – visualiza a build localmente
- `npm run test` – executa os testes unitários
