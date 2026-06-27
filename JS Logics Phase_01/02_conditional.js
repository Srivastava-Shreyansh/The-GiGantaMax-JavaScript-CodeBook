// 🧱 if, else if, else
// let marks = 78;
// if (marks >= 90) {
//  console.log("A");
// } else if (marks >= 75) {
//  console.log("B");
// } else {
//  console.log("C");
// }

//🌀 switch-case
// let fruit = "apple";
// switch (fruit) {
//   case "banana":
//     console.log("Yellow");
//     break;
//   case "apple":
//     console.log("Red");
//     break;
//   default:
//     console.log("Unknown");
// }

//Shorthand if-else
// ❓ Ternary Operator (Conditional)
//condition ? valueIfTrue : valueIfFalse
// let marks = 82;
// let score =
//   marks >= 80 ? "Excellent" : marks >= 60 ? "Good" : marks >= 33 ? "Average" : "Fail";
// console.log(score);

//🔁 Early Return Pattern
// function checkAge(age) {
//  if (age < 18) return "Denied";
//  return "Allowed";
// }

//Report Card
// let marks = prompt("Enter your marks:")
// if (marks > 85){
//   console.log("A")  
// } 
// if (marks > 70){
//   console.log("B")  
// } 
// if (marks > 50){
//   console.log("C")  
// } 
// if (marks > 33){
//   console.log("D")  
// } 
// else{
//     console.log("F")  
// }

//Calculator
// function calculator(a, b, operator) {
//   switch (operator) {
    // case 1:
    //   console.log("Addition:", a + b);
    //   break;
// 
    // case 2:
    //   console.log("Subtraction:", a - b);
    //   break;
// 
    // case 3:
    //   console.log("Multiplication:", a * b);
    //   break;
// 
    // // case 4:
    // //   console.log("Division:", a / b);
    // //   break;
    // // default:
    // //   console.log("Arigato!");
//   }
//}

//Rock, Paper, Scissor Game
// function rps(p1, p2) {
//   if (p1 === "rock" && p2 === "scissor") return "p1 wins";
//   if (p1 === "scissor" && p2 === "rock") return "p2 wins";

//   if (p1 === "rock" && p2 === "paper") return "p2 wins";
//   if (p1 === "paper" && p2 === "rock") return "p1 wins";

//   if (p1 === "paper" && p2 === "scissor") return "p2 wins";
//   if (p1 === "scissor" && p2 === "paper") return "p1 wins";
// }

//LogIn Messages
// let isLoggedIn = true;
// let isAdmin = false;
// if (isLoggedIn || isAdmin){
//     console.log("Logged In Successfully!")
// }
// else{
//     console.log("Logged Out")
// }

//Weather Advice
// let weather = "rainy";
// switch(weather){
//     case "summer":
//         console.log("Wear light clothes, a hat, sunglasses, and slippers")
//         break
//     case "winter":
//         console.log("Wear warm clothes, gloves, cap, and eat ramen!")
//         break
//     case "rainy":
//         console.log("Wear raincoat, boots, and always carry an umbrella.")
//         break
//     default:
//         console.log("No Worries!")
//         break
// }

//Age Checker
// let age = prompt("Enter your Age:")
// if (age > 60){
//     console.log("Senior")
// }
// if (age < 60 && age > 18){
//     console.log("Adult")
// }
// if (age > 12 && age < 18){
//     console.log("Teen")
// }
// else{
//     console.log("Kid")
// }
