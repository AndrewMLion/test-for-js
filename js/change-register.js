const string = 'JavaScript';
const letters = string.split('');
let invertedString = ' ';

// console.log(letters);

for (const letter of letters) {
    // console.log(letter);

    // if (letter === letter.toLowerCase()) {
    //     // console.log('Эта буква в нижнем регистре!!! - ', letter);

    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    // }

    invertedString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase();
}

console.log(invertedString);
