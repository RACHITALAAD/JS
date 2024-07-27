// Object de-structure and JSON API 

const course = {
    course_name : "JavaScript",
    price : "999",
    course_instructor : "abc"

}

// console.log(course.course_instructor);

const {course_instructor : instructor} = course  // better way to acess the keys of objects 

// console.log(course_instructor);
console.log(instructor);

// const navbar = ({company}) => {


// }

// navbar(company = "Google")

// API 
// backend se value aati hai JSON Structure me 
// JSON : kind of object 

// {
//     name : "rachita",  // treated as JSON 
//     course_name : "Javascript",
//     price : "free"
    
// }

[
    {},
    {},
    {}
]