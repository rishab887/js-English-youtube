// const score = 400;
// console.log(score);

// const score2 = new Number(100);
// console.log(score2);

// console.log(score2.toString());
// console.log(score2.toString().length);
// console.log(score2.toFixed(2));

// const score3 = 400.123456784;
// console.log(score3.toFixed(2));
// console.log(score3.toFixed(4));
// console.log(score3.toFixed(6));
// console.log(score3.toFixed(7));
// console.log(score3.toFixed(8));
// console.log(score3.toPrecision(3));
// console.log(score3.toPrecision(8));

const bal = 100000000;
// console.log(bal.toLocaleString('en-IN'));//1,00,00,000
// console.log(bal.toLocaleString());

// ++++++++++++++++++ MATHS ++++++++++++++++++++++++ //
// console.log(Math.abs(-4)); // 4
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.round(4.5)); // 5
// console.log(Math.max(4, 5, 6, 7, 8, 9));
// console.log(Math.min(4, 5, 6, 7, 8, 9));

// Random off in maths
console.log(Math.random()); // 0 to 1 ex: 0.123456789
console.log(Math.random() * 10); // 0 to 10 ex: 4.123456789
console.log(Math.floor(Math.random() * 10)); // 0 to 9 ex: 4 changes point values to exact values
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10 ex: 5//avoids 0 and gives 1 to 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20 ex: 15