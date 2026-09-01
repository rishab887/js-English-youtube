/* stack(primitive) : The primitve variable when store in the stack
memory they tend to make a copy of the variable and the changes 
done are always done in the copy and no change in the original variable
*/
//example of stack memory
// let num1 = 5;
// let num2 = num1;
// console.log(num1);//5
// console.log(num2);//5
// num1++;
// console.log(num1);//6
// console.log(num2);//5

/* heap(non primitive) : The non primitive variable when store in the heap
memory they tend to make a reference of the variable and the changes 
done are always done in the original variable and no change in the copy variable
*/
//example of heap memory
const obj1 = {
    name: "rishabh"
}
obj2 = obj1;
obj2.name = "Risabh"
console.log(obj1);//Rishabh ; name changed in the original variable
console.log(obj2);//Rishabh