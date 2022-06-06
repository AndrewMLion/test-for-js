// const add = function (x, y) {
//     console.log(x);
//     console.log(y);

//     const result = x + y;
//     console.log('Выполняется функция add');

//     return x + y;
// };

// const r1 = add(5, 3);
// console.log('r1', r1);

// const r2 = add(10, 15);
// console.log('r2', 2);

// const r3 = add(30, 50);
// console.log('r3', r3);

// const fn = function () {
//     console.log(1);

//     console.log(2);

//     console.log(3);
// };

// console.log('Результат функции:', fn());

const fnA = function () {
    console.log('Вызывается функция А');

    fnB();
};

const fnB = function () {
    console.log('Вызывается функция B');

    // console.log(value);
    fnC();
};

const fnC = function () {
    console.log('Вызывается функция C');

    console.log(value);
};

fnA();

fnB();

fnC();
