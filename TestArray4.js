const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lTab = [];
let rep;
let close = false

const question = () => {
    return new Promise((resolve, reject) => {
        rl.question('Choisissez une option ', (val) => {
            rep = val;
            resolve()
        })
    })
}

const choice = () => {
    return new Promise((resolve, reject) => {
        rl.question('Quel nombre voulez-vous ajouter ', (val) => {
            if (isNaN(val) == false) {
                lTab.push(val)
            }
            resolve()
        })
    })
}

const main = async () => {
    while (close == false) {

        console.log('1. Ajouter un nombre ')
        console.log('2. Afficher les nombres existants. ')
        console.log('3. Fermer le programme ')

        await question()

        if (rep == 1) {
            await choice()
            console.log('Valeur bien ajoutée')
        } else if (rep == 2 ) {
            console.log(lTab);
        } else if (rep == 3) {
            console.log('Fermeture');
            close = true;
        } else {
            console.error('Cette option n\'est pas valide !');
        }
    }
    rl.close()
}

main()