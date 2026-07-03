// print squares of numberS
// 1-10

// for (let i = 1; i <= 10 ; i++) {
//     console.log(i*i*i)
// }

// sum of ever nunmber
// 1-50

// let sum = 0
// for (let i = 1 ; i <= 50; i++){
//     if(i % 2 == 0) {
//         console.log("evrn :" ,i)
//         sum  = sum + 1
//     }
// }

// console.log("sum of even number :" ,sum)


// sum of odd number


// let sum = 0
// for (let i = 1 ; i <= 100; i++){
//     if(i % 2 !== 0) {
//         console.log("evrn :" ,i)
//         sum  = sum + 1
//     }
// }

// console.log("sum of odd number :" ,sum)


// number divisible by 3
// 1-100


// for (let i = 1 ; i <= 100 ; i++) {

//     if (i % 3 == 0 || i % 5 ==0){

//     console.log("number is divisile by 3 & 5 :" ,i )
// }
// }

//  factorial 
// 4!

// 4*3*2*1


const prompt = require ("prompt-sync")();
let num = prompt("enter your number:")

let fact = 1 
for (let i = 1 ; i <= num; i++ ){

fact = fact * i

}

console.log("factorial = ",fact)