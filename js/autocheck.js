const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    const result = [];

    for (const argument of products) {
        // console.log(![propName] === argument);
        // if ([propName] !== argument) {

        // }
        console.log(argument);
    }

    // return result;
}
// console.log(result);

getAllPropValues('name');
getAllPropValues('quantity');
getAllPropValues('price');
getAllPropValues('category');

//  В браузере работает, автопроверка не принимает (

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const result = [];
//     for (const product of products) {
//         if (product.hasOwnProperty([propName])) {
//             result.push(product[propName]);
//         }
//         // Change code above this line
//     }
// }
