//singelton
// const tinder = new Object();//singleton object;
const tinder = {
  id: "123avs",
  name: "shayaa",
  isLoggedin: false  
};//non-singleton object;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Rishabh",
            Lastname: "Gautam",
        }
    }
};
// console.log(regularUser.email);
// console.log(regularUser.fullname.userFullname.firstname);
// console.log(regularUser.fullname.userFullname.Lastname);
const obj1 = {1: "a" , 2: "b"
};
const obj2 = {3: "a" , 4: "b"};
// const obj3 = {obj1, obj2};
// console.log(obj3);//do not merge give separate obj into one
// const obj3 = Object.assign({},obj1, obj2);//merge two objects 
// console.log(obj3);

// const obj3 = {...obj1,...obj2};//spread operator
// console.log(obj3);

// console.log(tinder);
// console.log(Object.keys(tinder));//it puts all keys in an array of string type ex; ["id" , "name" , "isLoggedin"]
// console.log(Object.values(tinder));//same as the keys but for values; 
// console.log(Object.entries(tinder));//output ; [["id" , "2324"] , ["name","shae"] , ["isLoggedin" , "false"]]

console.log(tinder.hasOwnProperty('isLoggedin'));//check if the value exists in the object or not return true or false;


