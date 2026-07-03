// conditional statement

let age = 17

// if condition {
// block of code }
// if (age >= 18) {
//     console.log("you are eligible to vote") 

// } else {
//     console.log("not eligible")
// }


// const prompt = require("prompt-sync")();
// let age = prompt("enter your age:")

// let age = 25
// if (age >= 18) {
//     console.log("you are elegible to vote")

// } else {
//     console.log("not a eligible")

// }

// largest of three numbers

// let a = 20
// let b =50
// let c=60
// if (a > b && a> c) {
//     console.log("a is greater")
// }
// else if (a<b && c<b){
//     console.log("b is greater")
// }
// else{
//     console.log("c is greater")
// }


// atm withdraw system

//  balance = 5000
// const prompt = require("prompt-sync")();
// let pin = prompt("enter your pin:");
// // trim input to avoid mismatches due to accidental spaces
// pin = String(pin).trim();
// if (pin == "1245") {
//             let withdraw = prompt("enter your withdraw amount:");

//     if (withdraw <= balance) {

//         balance = balance - withdraw;
//         console.log("withdraw successful");
//         console.log("available balance is ", balance);
//     } else {
//         console.log("insufficient balance");
//     }
// } else {
//     console.log("please enter correct pin");
// }



// const prompt = require("prompt-sync")();
// let age = prompt("enter your age:");
// if (age<5) {
//     console.log("free ticket")
// }else if (age>=5 && age<18) {
//     console.log("ticket price is 10$")
// }else{    console.log("ticket price is 20$")}


// login system 
// const prompt = require("prompt-sync")();
// let username = prompt("enter your username:");
// let password = prompt("enter your password:");

// if (username === "admin" && password === "1234") {
//     console.log("login successful")
// }
// else {
//     console.log("login failed")
// }



// discount calculater
// const prompt = require("prompt-sync")();
// let amount = prompt("enter the amount: ");
// amount = Number(amount)

// let finalAmount 
// if (amount > 5000) {
//     finalAmount = amount - (amount * 20 / 100)
//     console.log("you got 20% discount")
// }
// else if (amount > 2000 ) {
//     finalAmount = amount - (amount * 10 / 100)
//     console.log("you got 10% discount")
// }
// else {
//     finalAmount = amount
// }
// console.log("final amount is ", finalAmount)





// 12 digit , 3 digit , 4 digit

const prompt = require("prompt-sync")();
 let num= prompt("enter your num:");

// let number = 12
num = Math.ads(num)
if (number >= 10 && number <= 99) {
    console.log("2 digit number")
}
else if (number >= 100 && number <= 999) {
    console.log("3 digit number")
}
else if (number >= 1000 && number <= 9999) {
    console.log("4 digit number")
}
else {
    console.log("not a 2,3,4 digit number")
}


