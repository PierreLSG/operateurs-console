const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

lTab = [];
lengthTab = 0;

console.log('*****  Suite de Fibonacci *****')

const question = () => {
    return new Promise((resolve, reject) => {
        rl.question('Veuillez saisir le rang N ', (val) => {
            if (isNaN(val) == false) {
                lengthTab = val;
            } else {
                console.log('Vous n\'avez pas choisi de nombre')
            }
            resolve()
        })
    })
}

function suiteFibonacci(lengthFibo) {
    lTab = [0, 1]
    while (lTab.length < lengthFibo) {
        lTab[lTab.length] = lTab[lTab.length-1] + lTab[lTab.length -2]
    }
    console.log('La valeur n°' + lengthFibo + ' est égale à : ' + lTab[lengthFibo-1])
}

const main = async () => {
    await question()
    rl.close()
    if (isNaN(lengthTab) == false && lengthTab > 2) {
        suiteFibonacci(lengthTab)
    } else {
        console.log('Votre saisie est incorrecte, fin du programme ')
    }
}

main()