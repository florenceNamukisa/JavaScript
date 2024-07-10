//if
//if else
//if else if else
//switch
//ternary operator
//if(condition){
// function
//}
let number = -3
if (number > 0) {
    console.log(`${number} is a positive number`)
}
else {
    console.log(` ${number} is a negative number`)
}
let isShinning = false
if (isShinning) {
    console.log("remember to carry sun glasses")
}
else {
    console.log("no need to carry glasses")
}
//if(condition){
// //runs when the condition is true
//}else{
//run when the condition is false
//}
let weather = "sunny"
if (weather === "runny") {
    console.log("you need a rain coat")
}
else if (weather === "cloudy") {
    console.log("you need a jacket")
}
else if (weather === "sunny") {
    console.log("you only need a shirt")
}
else {
    console.log("you don't need a rain coat")
}
//conditon operators
//== mean equal to something
//!= not equal to
//>greater than comparision operator
//< less than comparision operator
//>= greater or equal to
//=== strictly equal to
//!== strictly not equal to
//&& AND operator (is used to chec two conditions)
// ||   OR operators (it needs one of the conditions to be true for it to return true)
console.log(4 == "4");//compares values
console.log(4 === "4");//comapres the value and data type
console.log(4 !== 4);//strictly not equal to


let grade = 75

if (grade > 85) {
    console.log("got an A");
}
else if (grade < 85 && grade >= 75) {
    console.log("B");
}
else if (grade >= 65 && grade < 75) {
    console.log("C");
}
else if (grade >= 55 && grade < 75) {
    console.log("D");
}
else {
    console.log("F");
}
//switch
let newWeather = "cloudy"
switch (newWeather) {
    case "rainy":
        console.log("need a rain coat")
        break
    case "cloudy":
        console.log("need a jacket")
        break
    case "sunny":
        console.log("need a shirt")
        break
    default:
        console.log("you  don't need a rain coat")
}

let dayOfTheWeekByUser = prompt("what is the date today?")
 let day = dayOfTheWeekByUser.toLowerCase()
 switch (day) {
     case "monday":
         console.log("Today is Monday")
         break
     case "tuesday":
         console.log("Today is Tuesday")
         break
     case "wednesday":
         console.log("Today is Wednesday")
         break
     case "thursday":
         console.log("Today is Thursday")
         break
     case "friday":
         console.log("Today is Friday")
         break
     case "saturday":
         console.log("Today is Saturday")
         break
     case "sunday":
         console.log("Today is Sunday")

        break
     default:
         console.log("not a day of the week")
 }
 //ternary operator
 let isRaining = true
 isRaining
     ? console.log("take a rain coat")
    : console.log("no need for rain coat today")



let GPA = 87
switch (true) {
    case( GPA > 85):
        console.log("A")
        break
    case (GPA > 75 && GPA <= 85):
        console.log("B")
        break
    case (GPA > 65 && GPA <= 75):
        console.log("C")
        break
    case (GPA > 55 && GPA <= 65):
        console.log("D")
        break
    default:
        console.log("F")
}
let student = "John Doe"
console.log(student.toLowerCase())
let student2 = "john doe"
console.log(student === student2)

let newNumber = prompt("enter a number")
//let invalid ="invalid number"
switch(true){
    case (newNumber >0):
    console.log(`${ newNumber} is a positive number`)
    break;
    case (newNumber<0):
        console.log(`${newNumber} is a negative`)
        break;
        default:
            console.log("number is invalid")
}