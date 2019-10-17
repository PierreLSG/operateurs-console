let lTab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

SortArray(lTab);
UserProgram(lTab);
Fibonacci(0);

function SortArray(pArray) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < pArray.length; i += 1) {
            if (pArray[i - 1] > pArray[i]) {
                done = false;
                var tmp = pArray[i - 1];
                pArray[i - 1] = pArray[i];
                pArray[i] = tmp;
            }
        }
    }
    console.log(pArray);
}
