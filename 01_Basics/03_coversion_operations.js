let score1 = "33abc"
console.log(typeof score1);
console.log(typeof(score1));
let valueInNumber1 = Number(score1)
console.log(valueInNumber1);

let score2 = null
console.log(typeof score2);
let valueInNumber2 = Number(score2)
console.log(valueInNumber2);

let score3 = undefined
console.log(typeof score3);
let valueInNumber3 = Number(score3)
console.log(valueInNumber3);

let score4 = 33
console.log(typeof score4);
let valueInNumber4 = Number(score4)
console.log(valueInNumber4);

// "33" => 33
// "33abc" => NaN (Not A Number)
// true => 1; false => 0

let isLoggedIn1 = 1
let booleanisLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanisLoggedIn1);

let isLoggedIn2 = ""
let booleanisLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanisLoggedIn2);

// 1=> true; 0=> false
// "" => false
// "Vismay" => 

let someNumber = 36
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);