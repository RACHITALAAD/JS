const name = "rachita"
const repocount = 5

// console.log(name + " " + repocount + " Value"); 

console.log(`Hello my name is ${name} and my repocount is ${repocount}`); // best and this is called string interpolation

const gameName = new String('hello-World');

// type of string is object 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); //length is a property
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('t'))
console.log(gameName.indexOf('o'));


// const Name = "HELLO";
// console.log(Name.toLowerCase())
// console.log(Name.charAt(0))

const newGame = gameName.substring(0,4)
console.log(newGame);

const anotherstring = gameName.slice(1,4)
console.log(anotherstring)

const newStringOne = "         rachita       ";
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hello.com/hello%20"
url.replace('%20' , '%80')
console.log(url.replace('%20' , '%80'))

console.log(url.includes('hello'))
console.log(url.includes('rachita'))

console.log(gameName.split('-'));





