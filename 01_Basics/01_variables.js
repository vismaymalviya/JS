const accountId = 144553
let accountEmail = "something@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail = "notsomething@gmail.com"
accountPassword = "12345678"
accountCity = "Banglore"

/*
Prefer not to use var-
because of issue in block scope and functional scope!
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])