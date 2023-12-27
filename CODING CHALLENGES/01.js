//To Check wether the user input number is a multiple of 5 or not.
let userInput = prompt("Enter a Number");
if (userInput%5 === 0){
    console.log("The given number", userInput, "IS a multiple of 5.")
} else{
    console.log("The given number", userInput, "IS NOT a multiple of 5.")
}
