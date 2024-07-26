// Arrays

const myArr = [1,2,3,4,5]
console.log(myArr[0]);

const heroes = ["saktiman" , "naagraj"];
console.log(heroes[0]);

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[0])

// Array methods

// myArr.push(6);  // add element in the last
// myArr.push(7); 
// myArr.pop();   // remove last element

// myArr.unshift(0)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(5))
// console.log(myArr.indexOf(1));

// const newArray = myArr.join() // Array converted into string 
// console.log(myArr);
// console.log(newArray);
// console.log(typeof newArray);

// slice . splice

console.log("A ", myArr);

// difference between the slice and splice
const mynewArr1 = myArr.slice(1,3)
console.log(mynewArr1);
console.log("B ", myArr);

const mynewArr2 = myArr.splice(1,3)
console.log(mynewArr2);
console.log("C ", myArr);





