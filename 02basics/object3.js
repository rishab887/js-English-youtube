const course = {
    coursename: "ja english",
    price: "3322",
    courseInstructor: "hitesh"
};
console.log(course.courseInstructor);//we cant do this everytime we want instructor takes so much typing we will use 
//de-structuring
const {courseInstructor: instructor} = course;//i have used the destructuring and also made the name little small for easy usage
console.log(instructor);