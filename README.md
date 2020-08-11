<h1 align="center">📗 Proffy</h1>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/davibrandao18/proffy?color=">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/davibrandao18/proffy?color=">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/davibrandao18/proffy?color=">
</p> 

<p align="center">
  <a href="#gear-tecnologias-utilizadas">Contrução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#heavy_check_mark-requesitos">Requesitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-executando">Executando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

Proffy - Desenvolvido durante o evento NLW 2# by @Rocketseat

## :gear: Tecnologias utilizadas:

<details>
    <summary>Server</summary>
    <ul><li>NodeJs</li></ul>
    <ul><li>TypeScript</li></ul>
    <ul><li>Express</li></ul>
    <ul><li>Cors</li></ul>
    <ul><li>SPA</li></ul>
    <ul><li>SQLite</li></ul>
</details>

<details>
    <summary>Web</summary>
    <ul><li>React</li></ul>
    <ul><li>TypeScript</li></ul>
    <ul><li>Axios</li></ul>
    <ul><li>React Icons</li></ul>
    <ul><li>HTML</li></ul>
    <ul><li>JSX</li></ul>
    <ul><li>CSS</li></ul>
</details>

<details>
    <summary>Mobile</summary>
    <ul><li>React</li></ul>
    <ul><li>React Native</li></ul>
    <ul><li>React Icons</li></ul>
    <ul><li>React Navigate</li></ul>
    <ul><li>Expo</li></ul>
    <ul><li>Expo Google Fonts</li></ul>
    <ul><li>TypeScript</li></ul>
    <ul><li>Axios</li></ul>
    <ul><li>HTML</li></ul>
    <ul><li>JSX</li></ul>
    <ul><li>CSS</li></ul>
</details>

## :heavy_check_mark: Requesitos

<ul>
    <li><a href="https://git-scm.com/downloads">Git</a></li>
    <li><a href="https://nodejs.org/en/">Node.Js</a></li>
    <li><a href="https://www.npmjs.com/get-npm">Npm</a>
    <li><a href="https://docs.expo.io/get-started/installation/" target="_blank">Expo</a></li>
</ul>

## :arrow_forward: Executando

#### Backend:
> Vamos clonar o repositório e instalar as dependencias.
```sh
# Clonando o repositório
git clone https://github.com/davibrandao18/proffy.gi

# Acessando o backend
cd proffy/server

# instalando as dependencias do backend
npm install
```

#### Banco de dados:

> Ainda dentro do diretório server vamos rodar as migrations.
```sh
# run migrations
npm run knex:migrate
```
> Para finalizar inicie o servidor:
```sh
npm start
```

#### Frontend:

> Acesse o diretório web para instalar as dependencias.
```sh
cd /web
npm install
npm start
```

#### Mobile:
> Inicie a aplicação e obtenha sua URL
```sh
cd /mobile
npm install
npm start
```
<details>
    <summary>Print</summary>
    <img src="https://user-images.githubusercontent.com/50588380/89908957-ee852e80-dbc4-11ea-9a40-a55a1c1384ae.png" />
</details>

> Neste passo será necessário alterar o ip no arquivo <a href="https://github.com/davibrandao18/proffy/blob/master/mobile/src/services/api.ts">api.ts</a>
```js
baseURL: 'http://196.168.0.18:3333', //example
```
> A porta pode ser mantida como 3333 pois foi definida no server.
