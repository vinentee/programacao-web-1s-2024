const express = require('express');
const app = express();
const vnp = require('./util/verificar_numero_primo')

function verificarNumeroPrimo(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

app.get('/', function (req, res) {
    res.send('página inicial');
});

app.get('/ola/:nome', function (req, res) {
    let n = req.params.nome;
    res.send('Olá, mundo!' + n);
});

app.get('/verificar-numero-primo/:n', function (req, res) {
    let n = req.params.n;
    // let ehPrimo = vpn.verificarNumeroPrimo(n);
    if (vnp.verificarNumeroPrimo(n) == true) {
        res.send('O número ' + n + ' é primo');
    } else {
        res.send('O número ' + n + ' não é primo');
    }
    // res.send(ehPrimo);
});

const PORT = 5001;
app.listen(PORT, function () {
    console.log("App rodando na porta: " + PORT);

})
