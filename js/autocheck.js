//  Example JSV2 Block 3 19
const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    // Change code below this line
    const result = [];
    for (const product of products) {
        if (product.hasOwnProperty([propName])) {
            result.push(product[propName]);
        }
    }
    return result;
}
