// Primitive data types  => call by value // copied

// 7 types : String , Number , Boolean , null , undefined , Symbol (unique) , BigInt(Big values)

const score = 100; // Dynamic 
const scoreValue = 100.30;

const isLoggedIn = false;
const outsideTemo = null;
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3452152665235
const bigNumber = 32451789524631478954261n


// Reference type // Non primitive  => call by reference

// Array , Objects , Functions 

const heros = ["shaktiman" , "naagraj" , "doga"]  // Array  => object 
let myobj = {   //object
    name : "rachita",
    age : 20,
}

const myFunction = function(){  // object function
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemo)

console.log(typeof myFunction)
console.log(typeof myobj)
console.log(typeof heros)
console.log(typeof id)

