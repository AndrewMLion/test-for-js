const numbers = [51, 18, 13, 24, 7, 85, 19];
let smalLestNumber = numbers[0];

// поиск самого маленького числа

for (const number of numbers) {
    if (number < smalLestNumber) {
        smalLestNumber = number;
    }
}

// console.log('smalLestNumber ', smalLestNumber);

// поиск самого большого числа

for (const number of numbers) {
    if (number > smalLestNumber) {
        smalLestNumber = number;
    }
}

console.log('smalLestNumber ', smalLestNumber);
