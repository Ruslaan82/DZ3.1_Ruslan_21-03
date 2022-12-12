// с интернета
function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("Введите число", );

        // Прекращаем ввод?
        if (value < 0) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert( sumInput() );

