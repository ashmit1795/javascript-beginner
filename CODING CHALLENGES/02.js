//Assign grades to students
let score = prompt("Enter your mark:","marks"); //here marks act as an placeholder in the prompt box.
let Grade;
if (score>=90 && score<=100){
    Grade = "O"
} else if(score>=80 && score<=89){
    Grade = "E"
} else if(score>=70 && score<=79){
    Grade = "A"
} else if(score>=60 && score<=69){
    Grade = "B"
} else if(score>=50 && score<=59){
    Grade = "C"
} else if(score>=40 && score<=49){
    Grade = "D"
} else if(score>=0 && score<=40){
    Grade = "E"
} else{
    alert("Please refresh the window and enter a valid mark!")
}
console.log("According to your marks, your grade is:", Grade)
console.log("Refresh the window to get the prompt box again!")