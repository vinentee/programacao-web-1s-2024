const express = require('express');
const app = express();
const c = require('./util/calculadora')

app.get('/somar/:a/:b', function (req, res) {
    let a = parseFloat(req.params.a)
    let b = parseFloat(req.params.b)
    resultado = c.somar(a, b)
    res.send(resultado.toString())
})

app.get('/subtrair/:a/:b', function (req, res) {
    let a = parseFloat(req.params.a)
    let b = parseFloat(req.params.b)
    resultado = c.subtrair(a, b)
    res.send(resultado.toString())
})

app.get('/multiplicar/:a/:b', function (req, res) {
    let a = parseFloat(req.params.a)
    let b = parseFloat(req.params.b)
    resultado = c.multiplicar(a, b)
    res.send(resultado.toString())
})

app.get('/dividir/:a/:b', function (req, res) {
    let a = parseFloat(req.params.a)
    let b = parseFloat(req.params.b)
    resultado = c.dividir(a, b)
    res.send(resultado.toString())
})

const PORT = 8080
app.listen(PORT, function () {

})