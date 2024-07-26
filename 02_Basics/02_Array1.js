const heroes = ["thor" , "ironman" , "spiderman"]
const heroes1 = ["superman" , "flash" , "batman"]

// ** combining two Arrays **
// heroes.push(heroes1) 
// console.log(heroes[3][1]);

// const newArr = heroes.concat(heroes1) // it returns the new Array => concat
// console.log(newArr);

const newheroArr = [...heroes, ...heroes1] // spread the array...
console.log(newheroArr);

const anotherarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const mynumArr = anotherarr.flat(Infinity)  //depth
console.log(mynumArr);


console.log((Array.isArray("rachita"))) // false not a array
console.log(Array.from("rachita")); // convert to array
console.log(Array.from({name : "rachita"}));   // it returns the empty array 

let score = 100;
let score1 = 200;
let score2 = 300;

let newScoreArr = Array.of(score,score1,score2); // converted to Array 
console.log(newScoreArr);


