const score = 400;
console.log(score)

const balance = new Number(100)
console.log(balance);
console.log(typeof balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherNumber = 23.8966
const number = 123.8966
const Num = 1125.8966
console.log(otherNumber.toPrecision(3));
console.log(number.toPrecision(3));
console.log(Num.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());

//indian
console.log(hundreds.toLocaleString('en-IN'));

// **Maths**

// console.log(Math);
// console.log(Math.abs(-4)) // => 4
// console.log(Math.round(4.6)); // => 5
// console.log(Math.ceil(4.2));  // ceiling : top value => 5
// console.log(Math.floor(4.8)); // floor : => 4
// console.log(Math.min(4,5,2,1));
// console.log(Math.max(5,8,9,10))

console.log(Math.random()); // number always lies between 0 and 1 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1) )

console.log(Math.floor(Math.random() * (max - min + 1) ) + min)


