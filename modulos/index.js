const matriz_util = require('./util/matriz_util');
const calc = require('./util/calculadora');
const express = require('express');
const app = express();

app.get('/ola', function (req, res) {
    res.send('Olá, mundo!');
    // console.log('Olá, mundo!')
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});