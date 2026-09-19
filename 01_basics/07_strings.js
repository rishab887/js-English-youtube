// // const name = "Rishabh";
// // let repocount = 30;
// // console.log(name + repocount + "value"); //old school try not to use this instead
// // //use this way

// // console.log(`my name is ${name} and my repo count is ${repocount}`); //this is called template string

// //how to input a string
const gameName = new String("Pubg-Mobile");//this is called string object
// console.log(gameName[0]);
// console.log(gameName.__proto__); // Note: This will log the prototype of the String object
// console.log(gameName.length);
// console.log(gameName.toUpperCase());//no change in the original string because of the stack 
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('u'));

const newString = gameName.substring(0 , 4);//end value will not be included it will be excluded
// this will look like [0,4) means 0 to 3 will be included and 4 will be excluded
console.log(newString);

const anstring = gameName.slice(-8,4);//end value will not be included it will be excluded
console.log(anstring);

const anstring2 = gameName.slice(-6 , -1);//end value will not be included it will be excluded
//will start from reverse ex: mobile => -1 = e , -2 = l , -3 = b , -4 = i , -5 = o , -6 = m
console.log(anstring2);

const newstr = "   Rishabh   "
console.log(newstr);
console.log(newstr.trim());

const url = "https://www.youtube.com/watch?v=1s8f3g4h5j6k7l8m9n0o"

console.log(url.replace('1s8f3g4h5j6k7l8m9n0o','Netflix'));

console.log(url.includes('youtube'));//true
console.log(url.includes('Netflix'));//false

console.log(url.split('.'));// makes this as array and split the string into 
//array based on the given character