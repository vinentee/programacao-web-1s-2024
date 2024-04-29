const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.render('index.html');
});

app.post('/dados', function (req, res) {
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let data_agendamento = req.body.data_agendamento;
    res.render('dados', { nome: nome, endereco: endereco, telefone: telefone, data_agendamento: data_agendamento });
});

// app.get('/dados', function (req, res) {
//     res.render('dados.html');
// });

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta: " + PORT);
});