let calculadora = {
    numeroA: 0,
    numeroB: 0,
    somar: function () {
        return this.numeroA + this.numeroB
    }
};

calculadora.numeroA = 2;
calculadora.numeroB = 3;

console.log(calculadora.somar());

const pessoa = {
    nome: "Nome da Pessoa",
    cpf: 123456789,
    telefone: 61999999999
}

console.log(pessoa)

for (const key in pessoa) {
    console.log(key + ' - ' + pessoa[key]);
}

let arr = [false, 1, "DOIS", 11, 56, pessoa];

// console.log(arr)

// for (const key in arr) {
//     console.log(key + ' - ' + arr[key])
// }

for (let i = 0; i < arr.length; i++) {
    console.log(i + ' - ' + arr[i]);
}

let matriz = [[1, 2], [3, 4]];

console.log(matriz)
