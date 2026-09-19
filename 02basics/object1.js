//object literals

const mysym = Symbol("key1");

const obj1 = {
    name: "Rishab",
    "full name": "Rishabh Gautam",
    [mysym]: "mykey1",
    sec: "D",
    Rollno: 2400230100233,
    email: "rishabhgautamkiet.edu"
   
};
// console.log(typeof obj1[mysym]);
// console.log(obj1.Rollno);
// console.log(obj1["Rollno"]);
// console.log(obj1.full name);//cannot print the output like this if the key is like "full name"
// console.log(obj1["fullname"]);
// obj1.email = "rishabhgautam.google.com";
// console.log(obj1);
// Object.freeze(obj1);//will not be able to make changes in the object
// obj1.email = "rishabhgautam.microsoft.com"
// console.log(obj1);

obj1.greeting = function()
    {
        console.log("HEllo js user");
    };
obj1.greet = function(){
    console.log(`Hello js user: ${this.name}`);//${this.name}` costructor 
}
console.log(obj1.greeting());
console.log(obj1.greet());
console.log(obj1);
