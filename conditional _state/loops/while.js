//  even numbers 

// range 10-40

// let  i = 10
// count = 0

// while (i <= 40) {
//     console.log("even number: " , i);
// count = count + 1
//     i = i  + 2
// }

// console.log("total even numbers: " , count);



// count digits 
//24567

// const prompt = require("prompt-sync")();
// let num = prompt("Enter a number: ");
// let count = 0
// let temp = num

// while (num > 0) {
//     count = count + 1
//     num = Math.floor(num / 10)
// }
// console.log("number of  digits in: " + temp + " : ", count)


// revrse number
// 1234
// 4321


// let num = 1234567

// let reverse = 0

// while (num > 0) {
//     let lastDigit = num % 10   //last digit nikalna
//     reverse = reverse * 10 + lastDigit  //reverse ko update krna
//     num = Math.floor(num / 10)  //last digit ko remove krna
// }
// console.log("reversed number: ", reverse)


// sum of digits
// 1234


// const prompt = require("prompt-sync")();
// let num = prompt("Enter a number: ");
// let sum = 0 

// while (num > 0) {
//     let lastDigit = num % 10
//     sum = sum + lastDigit
//     num = Math.floor(num / 10)
// }

// console.log("sum of digits: ", sum)


// palindrome number
// 121

//  let num = 121


//  let originalNum = num
//  let reverse = 0

//  while (num > 0) {
//         let lastDigit = num % 10
//         reverse = reverse * 10 + lastDigit
//         num = Math.floor(num / 10)
//  }

//     if (originalNum == reverse) {
//         console.log("The number is a palindrome.");
//     } else {
//         console.log("The number is not a palindrome.");
//     }


// login password retry system

// const prompt = require("prompt-sync")();
// const correctPassword = "password123";
// let attempts = 0;
// const maxAttempts = 3;

// while (attempts < maxAttempts) {
//     let enteredPassword = prompt("Enter your password: ");

//     if (enteredPassword === correctPassword) {
//         console.log("Login successful!");
//         break;
//     } else {
//         attempts++;
//         console.log(`Incorrect password. You have ${maxAttempts - attempts} attempts left.`);
//     }       



// const prompt = require("prompt-sync")();


// let password = ""
// let attempts = 3

// while(attempts > 0) {
//     password = prompt("Enter your password: ")

//     if (password === "admin123") {
//         console.log("login successful")
//         break
//     }   
//     attempts--
//     console.log("wrong passworrd")
//     console.log("reaming attemps: " ,attempts)

// } 


// if (attempts === 0) {
//     console.log("login failed")
// }   


// print numbers from 1 to 10


// for (let i = 1; i <= 10; i++) {

//     if (i === 3) {
//         break
//     console.log(i)
// }


// break

// 1-100

// for (let i = 2; i <= 100 ; i++) {

//     if (i === 38) {
//         break;
//     }

//     console.log(i)
// }


// continue

// 1-10


// for (let i=1; i <=10; i++){
//     if (i === 4 ) {

//         continue;
//     }

//     console.log(i)
// }
  

// for (let i = 1 ; i <= 10; i++) {

//     if (i % 2  !== 0 ) {
//         continue;
//     }

//     console.log(i)
// 

// menu - driven program

const prompt = require("prompt-sync")();
let choice = 0

while (choice  !== 5){
    console.log("======MENU=====")
    console.log("1. Addition")
    console.log("2. Substraction")
    console.log("3. Multipication")
    console.log("4. Division")

    console.log("5. Exit")

    choice = Number(prompt(" enter your choice"))
1

    if (choice >= 1  && choice <= 4 ){
        let num1 = Number(prompt("enter your number"))
        let num2 = Number(prompt("enter yiur number"))

        if (choice === 1){
            console.log ("result =" , num1 + num2)
        }
        else if ( choice === 2) {
            console.log("resut =" ,num1 - num2 )
        }

        else if ( choice === 3) {
            console.log("resut =" ,num1 * num2 )
        }

        else if ( choice === 4) {
            console.log("resut =" ,num1 / num2 )
        }


}

else if (choice === 5 ){
    console.log("thanks ")

}
else {
    console.log("envaid choice")
}
}

