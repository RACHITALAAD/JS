// Dates

let myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.getHours());

console.log(typeof myDate); // object

// let mycreatedate = new Date(2024 , 6 , 26 , 11 , 1)  // year , month , date  .month start 0 se   time
// console.log(mycreatedate.toDateString());
// console.log(mycreatedate.toLocaleString());

// let mycreatedate = new Date("2024-07-26")   // yy-mm-dd = > month start 1 se
// console.log(mycreatedate.toLocaleDateString());
// console.log(mycreatedate.toDateString());

let mycreatedate = new Date("07-26-2024")   // mm-dd-yy = > month start 1 se
// console.log(mycreatedate.toLocaleString());
// console.log(mycreatedate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedate.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));  // converted to ms to second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay}`


newDate.toLocaleString('default' , {
    weekday:"long"
    
})


