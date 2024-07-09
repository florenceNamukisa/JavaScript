//Declaring a function without using parameter
function greet(){
    //code goes in here
}
greet()

function areaOfCircle(){
    const PI =3.14
let radius =100
let area =PI*radius*radius
return area;
}
console.log(areaOfCircle());

//using parameters
function areaOfCircle(radius){
    const PI =3.14
//using returns
let area = Math.PI*radius*radius
return area;
}
console.log(areaOfCircle(200));

function sum (x,y){
    let add = x+y
    return add;
}
console.log(sum(5,5))

//using arrow functions
const sum2 =(x,y) => x+y;
console.log(sum2(4,8))

//functions to multiply two numbers
function multiply(m,n) {
    let asigment = m*n
    return asigment;
}
console.log(multiply(100,5));
// functions to gravity
function product(m,g= 9.81){
    let weight = m*g
    return weight + "N";

}
console.log(product(6));
