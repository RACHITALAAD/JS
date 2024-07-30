// functions : simply pack the code into a package and then use the copies of that package
function printmyname(){ // function keyword and function  name 
    console.log("rachita laad");  // defination of function
}
// printmyname(); //execution 
// printmyname; // it is only referance it is not executed 

function addtwonum(num1 , num2){ // parameters (input in function defination)
    console.log(num1+num2); // only print not return the value
}

// addtwonum() // NAN => not a number // because we are not give an arguments
// const result1 = addtwonum(8,5); //arguments // function calling
// console.log(result); // undefined
// addtwonum(8,"a") // 8a
// addtwonum(8,"4") // 84
// addtwonum(8,null) // 8
// addtwonum(8,undefined) // NAN

function sumtwonum(num1,num2){
    // let result = num1+num2;
    // console.log("rachita");
    // return result;
    // console.log("rachita");//it is not execute 

    return num1+num2;
}

const result = sumtwonum(8,5);
// console.log(result);

function loginusermessage(username = "hello"){ // passing default value
    if(username == undefined){ //if(!username) ""(empty string = > consider as false value ,undefined => consider as (false value)
        console.log("Please enter a user name");
        return;
    }
    return `${username} just logged In`;

}
// console.log(loginusermessage("rachita")); // rachita
// console.log(loginusermessage(""));  // just logged In
// console.log(loginusermessage());  // undefined just logged In
// console.log(loginusermessage("rachita"));


// Shopping cart

function calculateCartPrice(val1 , val2 , ...num1){  // ... => rest operator
    return num1;
}

const price = calculateCartPrice(200 , 400 , 500 , 1000);   // val1 = 200 , val2 = 400
// console.log(price); // returns the array 


const user = { // object
    username : "rachita",
    prices : 199,
}

function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleobject(user);
handleobject({
    username : "rachita",
    price : 399
})

const newArray = [100,200,300,400] //passing the array into the function 

function Array(getArray){
    return getArray[1]
}
console.log(Array(newArray));



