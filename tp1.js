console.log('***** Application Opérateurs *****');

let result = 0;
let nb1 = 0;
let nb2 = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Veuillez saisir le premier nombre…', (input1) => {
    console.log(`Premier nombre : ${input1}`);
    nb1 = Number(input1);

    readline.question('Veuillez saisir le second nombre…', (input2) => {
        console.log(`Second nombre : ${input2}`);
        nb2 = Number(input2);

        result = nb1 + nb2;
        console.log(`${nb1} + ${nb2} = ${result}`);
        result = nb1 - nb2;
        console.log(`${nb1} - ${nb2} = ${result}`);
        result = nb1 * nb2;
        console.log(`${nb1} * ${nb2} = ${result}`);
        result = nb1 / nb2;
        console.log(`${nb1} / ${nb2} = ${result}`);
        result = nb1 % nb2;
        console.log(`${nb1} % ${nb2} = ${result}`);
    })
})
