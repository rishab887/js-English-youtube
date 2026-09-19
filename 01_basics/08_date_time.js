//Dates

let myDate = new Date();
 console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());

let createdate =  new Date(2023, 0, 5, 10, 30, 50); //year, month, date, hours, minutes, seconds
console.log(createdate.toString());
console.log(createdate.toLocaleString());
console.log(createdate.toLocaleDateString());
console.log(createdate.toLocaleTimeString());

let createDate = new Date('2023-01-05 10:30:50'); //year, month, date, hours, minutes, seconds
console.log(createDate.toString());
console.log(createDate.toLocaleString());
console.log(createDate.toLocaleDateString());
console.log(createDate.toLocaleTimeString());

let myTime = Date.now();
console.log(myTime); //milliseconds since 1970

console.log(Math.floor(myTime / 1000)); //seconds since 1970

let newDate = new Date();
console.log(newDate)
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

// console.log(newDate.toLocaleString('default', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
// }));