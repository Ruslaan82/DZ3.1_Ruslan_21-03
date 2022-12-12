var number = 0;
var sum = 0;
do {
    number = +prompt("Введите номер")

    //0 = 0 + 2 = 2
    if (number>0) {
        sum = sum + number
    }
} while (number>=0)

console.log(sum)