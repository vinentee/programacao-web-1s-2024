// function imprimirOperacao() {
//     let a = 2;
//     let b = 3;
//     console.log(`O resultado da soma entre ${a} e ${b} é ${a + b}`);
// }

// imprimirOperacao();

// function imprimirOpercaoV2(a, b) {
//     console.log(`O resultado da soma entre ${a} e ${b} é ${a + b}`);
// }

// imprimirOpercaoV2(3, 5);
// imprimirOpercaoV2(1, 4);
// imprimirOpercaoV2("1", "4");

function imprimirOpercaoV3(a, b, op) {

    let c;

    switch (op) {
        case '+':
            c = a + b;
            break;
        case '-':
            c = a - b;
            break;
        case '*':
            c = a * b;
            break;
        case '/':
            c = a / b;
            break;
        default:
            break;
    }

    console.log(`O resultado da ${op} entre ${a} e ${b} é ${c}`)

}

imprimirOpercaoV3(2, 3, '+')
imprimirOpercaoV3(2, 3, '-')
imprimirOpercaoV3(2, 3, '*')
imprimirOpercaoV3(2, 3, '/')
imprimirOpercaoV3(2, 3, 'a')