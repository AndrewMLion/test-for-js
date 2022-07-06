// let base = prompt("Давай число");
// base = Number(base);

// console.log(base);

// let power = prompt("Давай степень");
// power = Number(power);
// console.log(power);

// const result = base ** power;

// console.log(result);

// Массивы

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
// 	console.log(numbers[i]);
// 	if (numbers[i] % 2 === 0) {
// 		console.log("Четное!!!");

// 		total += numbers[i];
// 	}
// }

// Упрощенный вид кода

// for (const number of numbers) {
// 	console.log(number);

// 	if (number % 2 === 0) {
// 		console.log("Четное!!!");

// 		total += number;
// 	}
// }

// проверка от обратного

// for (const number of numbers) {
// 	if (number % 2 !== 0) {
// 		console.log("Эту итерацию нужно пропустить", number);
// 		continue;
// 	}

// 	console.log(`${number} - четное !!!`);
// 	total += number;
// }
// console.log("Total: ", total);

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
