// There is a two way to declare the object 
// 1) literal method 2) constructor method
// singleton 
// when we declare the object from the literal method then the singleton does not form and 
// when we declare the object from the constructor method then it always form the singleton

// object literals : it is the way to declare the object
// Object.create  // object made by constructor method


// const UserJS = {}   // simply the curly braces is called object  called empty object 
// there is key value pair concept in object 
const mySymbol = Symbol("Hello");
const JsUser = {
    name : "rachita",
    "full_name" : "Rachita Laad",
    [mySymbol] : "Hi",  // use symbol as a key
    Age : 20,
    location : "sanawad",
    email : "rachita@google.com",
    isloggedIn : false,
    
}

// different ways to access the object 

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.full_name);
console.log(JsUser["full_name"]);
console.log(JsUser[mySymbol]);

JsUser.email = "rachitalaad@gpt.com";
// Object.freeze(JsUser)
JsUser.email = "rachitalaad@chatgpt.com";
console.log(JsUser);

// we can treat as function as a variable
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}

console.log(JsUser.greeting());
// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

