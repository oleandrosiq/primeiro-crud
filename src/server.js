const express = require('express');
const path = require('path');

const db = require('./database');
const routes = require('./routes');

const app = express();

// conexão com o banco de dados
db.connect();

// definindo o template engine
app.set('view engine', 'ejs');

// como a pasta views nao esta na primeira camada da pasta principal do projeto (crud) passamos com o path o ser local
app.set('views', path.join(__dirname, 'views'));

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));

// habilitando o server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }));

// definindo as rotas
app.use('/', routes);


// 404 error (not found)
app.use((req, res) => {
  res.send("Página não encontrada!");
});



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});