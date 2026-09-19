// //shallow copy - make changes in original array if i changed something in copy array
// //deep copy - make no change in original array if i changed something in copy array
// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// // const arr2 = arr1;//shallow copy
// // arr2[0] = 100;
// // console.log(arr1);
// // console.log(arr2);

// // const arr3 = [...arr1];//deep copy with rest operator
// // arr3[0] = 200;
// // console.log(arr1);
// // console.log(arr3);

const arr1 = new Array(1 , 3 ,5 ,6 ,6);
console.log(arr1);

// arr1.pop();
// console.log(arr1);

// arr1.shift();
// console.log(arr1);

// arr1.unshift(0);
// console.log(arr1);

// console.log(arr1.indexOf(6));
// console.log(arr1.includes(6));
// console.log(arr1.reverse());

// const arr2 = arr1.join();
// console.log(arr1);
// console.log(arr2);
// console.log(typeof arr2);

//slice 
// const myarr = arr1.slice(1, 4);
// console.log(myarr);

// //splice
// const myarr2 = arr1.splice(1, 3);
// console.log("B " ,myarr2);
// console.log("C " ,arr1);
// console.log();

// const myarr3 = arr1.splice(0,1);
// console.log("D " ,myarr3);
// console.log("E " ,arr1);

// const marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];

// const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

// const all_heroes2 = [...marvel_heroes, ...dc_heroes];//spread operator
// console.log(all_heroes2);

// const arr2 = [1 , 3 , 4 , [4 , 3 ,5 , [3 , 4 ,6 ]]];
// const arr4 = arr2.flat(2);
// console.log(arr4);

// console.log(Array.isArray("RIshabh"));
// console.log(Array.from("Rishabh"));
// console.log(Array.from({name: "Rishabh"}));//interesting output = []

let score1 = 200;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));