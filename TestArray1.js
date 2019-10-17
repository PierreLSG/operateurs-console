let lTab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

ShowAllArrayElement(lTab);
ShowAllArrayElementInverse(lTab);
ShowArrayElementMax3(lTab);
ShowArrayElementEvenInt(lTab);
ShowBigestArrayElement(lTab);
ShowSmallerElement(lTab);


function ShowAllArrayElement(pArray) {
    console.log('Affichage des élements du tableau')
    //pls - Affichage des élements du tableau
    for (let i = 0; i < pArray.length; i++) {
        console.log(`Element ${i + 1} du tableau : ${pArray[i]}`);
    }
}

function ShowAllArrayElementInverse(pArray) {
    console.log('Affichage des élements dans l\'ordre inverse du tableau')
    //pls - Affichage des élements dans l'ordre inverse du tableau
    for (let i = pArray.length - 1; i > -1; i--) {
        console.log(`Element ${i + 1} du tableau : ${pArray[i]}`)
    }
}

function ShowArrayElementMax3(pArray) {
    console.log('Affichage des élements du tableau qui sont supérieur à 3')
    //pls - Affichage des élements du tableau qui sont supérieur à 3
    for (let i = 0; i < pArray.length; i++) {
        if (pArray[i] > 3) {
            console.log(`Element ${i + 1} du tableau : ${pArray[i]}`);
        }
    }
}

function ShowArrayElementEvenInt(pArray) {
    console.log('Affichage des élements du tableau entier et pair');
    //pls Affichage des élements du tableau entier et pair
    for (let i = 0; i < pArray.length; i++) {
        if (pArray[i] % 2 === 0) {
            console.log(`Element ${i} du tableau : ${pArray[i]}`);
        }
    }
}

function ShowBigestArrayElement(pArray) {
    console.log("Affichage du plus grand élement du tableau");
    //pls - Affichage du plus grand élement du tableau
    for (i = 0; i < pArray.length; i++) {
        for (j = 0; j < i; j++) {
            if (pArray[i] < pArray[j]) {
                var x = pArray[i];
                pArray[i] = pArray[j];
                pArray[j] = x;
            }
        }
    }
    console.log(`Le plus grand élement du tableau est : ${pArray[pArray.length - 1]}`);
}

function ShowSmallerElement(pArray) {
    console.log("Affichage du plus petit élement du tableau");
    //pls - Affichage du plus petit élement du tableau
    for (i = 0; i < pArray.length; i++) {
        for (j = 0; j < i; j++) {
            if (pArray[i] > pArray[j]) {
                var x = pArray[i];
                pArray[i] = pArray[j];
                pArray[j] = x;
            }
        }
    }
    console.log(`Le plus petit élement du tableau est : ${pArray[pArray.length - 1]}`);
}