const prompt = requier("promp-sync")();


console.log("====products====")
console.log("1.  laptop")
console.log("2. mouse")
console.log("3.  keyboard")
console.log("4.  headphone")

let choice = Number(prompt("select product (1-4);") )
let qty =  Number(prompt("enter quantity:"))

let price = 0

if (choice === 1) {
    price = 50000

}

else if (choice === 2 ) {
    perice = 1000

}

else if (choice === 3){
    price = 1500
}

else if (choice === 4){
    price = 2000
}
else     {
    console.log("invalid product")
    process.exit()
}

    
let total = price * qty

let discount = 0
if (total >= 20000) {
    discount = Total * 20/100
}


 else if (total >= 10000) {
    discount = total * 10/100
}

let amoountafterdiscount = total - discount

let gst = amountafterdiscount * 18/100  

let finalamount = amountafterdiscount + gst

console.log("\n=====bill=====")c 


