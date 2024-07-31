// let a = 10
// const b = 20
// var c = 30

// {} => curly braces called a object

// var c = 300; // global scoped
// let a = 50;
const b = 60;

if(true){
    let a = 10  // block scoped
    const b = 20
    var c = 30
    // console.log(a);
    // console.log(b);
}

// console.log(a);
// console.log(b);
// console.log(c);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// nested scope

function one(){
    const username = "rachita";

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    // two()
}

one();

// closures 

if(true){
    const username = "rachita"
    if(username === "rachita"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
//     console.log(username);
 }

// console.log(username);

// ***** IMP *****

console.log(addOne(5));  // it is execute 
function addOne(num){  // function 
    return num + 1;
}

// addOne(5)

// addTwo(5);  // error
const addTwo = function(num){  // expression   // a variable hold a function //hosting 
    return num+2;
}

// addTwo(5);

