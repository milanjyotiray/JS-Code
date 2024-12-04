const accountId = 14445
let accountEmail = "milanray@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

//accountId = 2 //not allowed

accountEmail = "hjjh@gmail.com"

accountPassword = "78343"

accountCity = "Mumbai"

let accountState

console.log(accountId);


/*
Prefer not to use var 
bacause of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
