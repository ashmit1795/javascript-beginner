/*Create a faulty calculator using JavaScrpit

This faulty calculator does following:
1. It takes two numbers as input from the user.
2. It performs wrong operations as follows:

+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong operation only 10% of the times.
*/

let num1 = Number(prompt("Enter your first number:"));
let num2 = Number(prompt("Enter your second number:"));
let userInput = Number(prompt("Choose your operation number:\n1. Addition\n2.Subtraction\n3.Multiplication\n4.Divide\n5.Exponentiation"));
let operation;//Operations


let wrongOprCh = Math.floor(Math.random()*100) + 1;
console.log("Random:", wrongOprCh);

//Function for faulty condition
const faultyCondn = ()=>{
    //Addition but subtraction due to fault
    if (userInput === 1){
        operation = "+"
        return num1 - num2
    }
    //Subtraction but divison due to fault
    else if (userInput === 2){
        operation = "-"
        return num1/num2
    }
    //Multiplication but addition due to fault
    else if (userInput === 3){
        operation = "*"
        return num1+num2
    }
    //Division but exponention due to fault
    else if (userInput === 4){
        operation = "/"
        return num1**num2
    }
    //Exponentiation but divison due to fault
    else if (userInput === 5){
        operation = "**"
        return num1/num2
    }
}

//Function for correct condition
const correctCondn = ()=>{
    //Addition
    if (userInput === 1){
        operation = "+"
        return num1 + num2
    }
    //Substraction
    else if (userInput === 2){
        operation = "-"
        return num1-num2
    }
    //Multiplication
    else if (userInput === 3){
        operation = "*"
        return num1*num2
    }
    //Division
    else if (userInput === 4){
        operation = "/"
        return num1/num2
    }
    //Exponentiation 
    else if (userInput === 5){
        operation = "**"
        return num1**num2
    }
}

//Start Function
const startFunc = () =>{
    if (wrongOprCh<=10){
        let wrongRes = faultyCondn(); //Function call for faulty condition
        alert(`${num1} ${operation} ${num2} = ${wrongRes}`);
    }else{
        let rightRes = correctCondn(); //Function call for correct condition
        alert(`${num1} ${operation} ${num2} = ${rightRes}`);
    }
}

//Start of Flow
startFunc();
alert("Relaod the page to perform next operation!")