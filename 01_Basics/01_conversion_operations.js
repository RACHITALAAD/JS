let score = "33abc";
let score1 = null;
let score2 = undefined;
let score3 = true;

console.log(typeof score);
console.log(typeof(score));

let valueIntnum = Number(score);
console.log(typeof valueIntnum);
console.log(valueIntnum);

let valueIntnum1 = Number(score1);
console.log(typeof valueIntnum1);
console.log(valueIntnum1);
console.log(typeof score1);

let valueIntnum2 = Number(score2);
console.log(typeof valueIntnum2);
console.log(valueIntnum2);
console.log(typeof score2);

let valueIntnum3 = Number(score3);
console.log(typeof valueIntnum3);
console.log(valueIntnum3);
console.log(typeof score3);


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => undefined

// let isloggedIn = 1
// let isloggedIn = ""
let isloggedIn = "rachita"

let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn)

// 1 => true 0 => false
// "" => false
// "rachita" => true

let someNumber = 33;

let string = String(someNumber);
console.log(string);
console.log(typeof string)

// **Operations**

let value = 3;
let negvalue = -value;
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " rachita";
let str3 = str1+str2;

console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+"2");
// console.log("1" + 2 + 2);
// console.log(1+2+"2");

console.log(true);
// console.log(+true);
// console.log(true+);

console.log(+"");

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 150;
// gameCounter++;
++gameCounter;
console.log(gameCounter)




