// let score = "33"

// console.log(typeof score)
// console.log(typeof (score))

// let value = Number(score)
// console.log(typeof value);
// console.log(value);//gives normal 33

// let score2 = "33aba"
// let value2 = Number(score2)
// console.log(value2)//NaN not a number

// let score3 = null
// let value3 = Number(score3)
// console.log(value3)//0

// let score4 = true
// let value4 = Number(score4)
// console.log(value4)//if false = 0;

// let score5 = "rishab"
// let value5 = Number(score5)
// console.log(value5)//NaN not a number

let isloggedIN = "rishabh"
let booleanIsloggesIn = Boolean(isloggedIN)
// console.log(booleanIsloggesIn)
// if 1 = true / 0 = false 
// if "" = false;
// if "rishab" = true;

let stringnumber = 33
let newString = String(stringnumber)
// console.log(newString)
// console.log(typeof newString)

//string concatenation
let st1 = "Hello"
let st2 = " World"
let st3 = st1 + st2;
// console.log(st3);

// console.log("1" + 2)//12
// console.log(1 + "2")//12
// console.log("1" + 2 + 2)//122 which ever conversion first comes get executed in here string hence all of the numbers get concatenated
// console.log(1 + 2 + "2")//32 in here the first number is integer hence the it first get sum up with two then concat with string 3;

// console.log(true) // give true
// console.log(+true) //gives 1
// console.log(+"")//gives 0