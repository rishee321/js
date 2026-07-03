// login with otp
const prompt = require("prompt-sync")();
const username = "admin";
const password = "1234";

const usernameInput = prompt("Enter username: ");
const passwordInput = prompt("Enter password: ");

if (usernameInput === username && passwordInput === password) {
    console.log("username and password are verified successfully.");
  const   otp = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit OTP
    console.log("Your OTP is: " + otp);
    const userOtp = prompt("Enter the OTP: ");

    if (parseInt(userOtp, 10) === otp) {
        console.log("Login successful!");
    } else {
        console.log("Invalid OTP. Please try again.");
    }
} else {
    console.log("Invalid username or password. Please try again.");
}