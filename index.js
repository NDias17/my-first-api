//Importando o Express
const express = require('express');

//Criando uma instância do Express
const app = express();

//Definindo uma rota para a raiz do site
app.get('/', (req , res) => {
    res.send('Olá, mundo!');
})

app.get('/livros', (req , res) => {
    res.send('Olá, mundoooo!');
})

/*app.get('/livros/:id', (req, res) => {
    const idLivro = req.params.id; // Captura o que o usuário digitou no lugar de :id
    res.send(`Você está buscando o livro com o ID: ${idLivro}`);
});*/

app.get('/usuarios/:nome', (req, res) => {
    const nome = req.params.nome; // Captura o que o usuário digitou no lugar de :nome
    res.send(nome + ", Seja bem vindo!");
});

//Ligando o servidor
app.listen(3000, () => {
  console.log('O servidor está rodando na porta 3000');
})