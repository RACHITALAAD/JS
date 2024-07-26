// how we declare the object with the help of constructor

// const zeptoUser = new Object() // This is a singleton object 
// console.log(zeptoUser);
const zeptoUser1 = {} // This is called non singleton object 

zeptoUser1.id = "12488abc";
zeptoUser1.name = "krishna";
zeptoUser1.isloggedIn = false;

// console.log(zeptoUser1);

const regularUser = {
    email : "hello@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Rachita",
            lastname : "Laad"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// console.log(obj3)

// const obj3 = Object.assign({} , obj1 , obj2) // {} empty object are optional 
// console.log(obj3);

const obj3 = {...obj1 , ...obj2} //spread ...
console.log(obj3);

const users = [
    {
        id : 1,
        email : "hello@gmail.cm"
    },

    {
        id : 1,
        email : "hello@gmail.cm"
    },
    
]

// console.log(users);
// console.log(users[1]);
// console.log(users[0]);

console.log(zeptoUser1);

console.log(Object.keys(zeptoUser1)); // type : Array 
console.log(Object.values(zeptoUser1));

console.log(Object.entries(zeptoUser1));

console.log(zeptoUser1.hasOwnProperty('isloggedIn'));