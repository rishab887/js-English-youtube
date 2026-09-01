const accountId = 13334//const we cant change the accountId now
let accountName = "Rishabh"
var accountAdd = "Delhi"
accountPass = 2234
/* 
  never use var why ?
  issue with block Scope and functional Scope
  for ex: if(true){
               var x = 10;
              }
               console.log(x); //print the 10 doesnt care about the if scope
*/
// accountId = 54533 // not allowed as it is const
console.table([accountId ,accountName , accountAdd , accountPass])