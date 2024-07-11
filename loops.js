// print 0-19 using console.log
//let m =0;inirtialization
for(let m = 0; m<=19; m++){
    console.log(m)
}
for(let n = 19; n>=0;n--){
    console.log(n)
}


let numbers = [1,2,3,4,5]
for(let i = 0; i< numbers.length; i++){
    let add = numbers[i]+20;
    console.log(add)
}
//inirtialization, condition, increment/decrement
let sum = 0
for( i = 0; i<numbers.length; i++){
sum = sum+numbers[i]
}
console.log(sum)
// own trial
for(let i=1; i<=5; i++){
    console.log(`${i}.hello\n`)
}
 let names = ['florence','daina',' sharon']
 for(let i = 0; i<names.length; i++){
    console.log(names)
 }


//while loops(used wen u dk how many)
let m = 0
while( m<=5){

    console.log(m)
    m++
}
//do while
let n = 0
do {
    console.log(n)
    n++
}
while (n<=5)
// if uk how many tyms use for
    for(let m = 0; m<=5; m++){
        console.log(m)
    }

    //for of(used for arrays)
    let number1 = [1,2,3,4,5]
for(let i = 0; i< number1.length; i++){
    let add = number1[i]+20;
    console.log(add)
}
for(const digit of number1){
    console.log(digit);
}

let cereals = ["beans", "maize", "g nuts"]
for(const grain of cereals){
    console.log(grain);
}

const produceList = [{name:"beans", type:"legumes",weight:1000,cost:500000},
    {name:"maize",type:"grain",weight:2000,cost:700000},
    {name:"gnuts",type:"grain",weight:1500,cost:600000}]

    for(const produce of produceList){
        console.log(`name:${produce.name},type:${produce.type},weight:${produce.weight}kg,cost:${produce.cost}ugx`)
        
    }