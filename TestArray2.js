let lTab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

ShowAverage(lTab);
GetIndex(lTab);
showDuplicate(lTab);

//pls - Fonction pour afficher la moyenne du tableau
function ShowAverage(pArray) {
    let lAdd = 0;
    let lResult = 0;
    for (let i = 0; i < pArray.length; i++) {
        lAdd += pArray[i];
    }
   lResult =  lAdd / pArray.length;
   console.log(`La moyenne du tableau est de : ${lResult}`);
}

function GetIndex(pArray) {
    for (let i = 0; i < pArray.length; i++) {
        if (pArray[i] === 15) {
         console.log(`L'index de l'élement ${pArray[i]} est ${i}`);   
        }
    }
}

function showDuplicate(pArray) {
    for (i = 0; i < pArray.length; ++i) {
        for (j = 1; j < (pArray.length - i); ++j) {
            if (pArray[j - 1] > pArray[j]) {
                temp = pArray[j - 1];
                pArray[j - 1] = pArray[j];
                pArray[j] = temp;
            }
        }
    }

    numDup = 0
    dupCount = 0;
    previous = -1;
    for (i = 0; i < pArray.length; ++i) {
        if (pArray[i] == previous) {
            ++numDup;
            if (numDup == 1) {
                ++dupCount;
            }
        }
        else {
            previous = pArray[i];
            numDup = 0;
        }
    }

   console.log("Nombre de doublons dans le tableau : " + dupCount);
}