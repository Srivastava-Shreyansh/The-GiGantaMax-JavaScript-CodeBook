//FUNCTION DECLARATION---->
// function greet(){
//     console.log("Hello, World!")
// } ----> Statement

// const greet = function(){
//     console.log("Hello, World!")
// } ----> Expression

// const greet = () => {
//     console.log("Hello, World!")
// } ----> Fat Arrow

//🧂 Default + Rest + Spread
// function multiply(a = 1, b = 1) {
//  return a * b;
// } //Default Parameter

// function sum(...nums) {
//  return nums.reduce((acc, val) => acc + val, 0);
// } //Rest Parameter

// let nums = [1, 2, 3];
// console.log(sum(...nums)); // Spread operator(...)

//🎯 First-Class Functions
// JavaScript treats functions as values:
// Assign to variables
// Pass as arguments
// Return from other functions

//🧠 Higher-Order Functions (HOF)
// Functions that accept other functions or return functions.

// function createMultiplier(x) {
//  return function (y) {
//  return x * y;
//  };
// }
// let double = createMultiplier(2);
// console.log(double(5)); // 10

//🔐 Closures & Lexical Scope
// Closures = when a function remembers its parent scope, even after the parent has finished.

// function outer() {
//  let count = 0;
//  return function () {
//  count++;
//  console.log(count);
//  };
// }
// let counter = outer();
// counter(); // 1
// counter(); // 2

//Even after outer is done, counter still remembers count .

//IIFE
//Used to create private scope instantly.
// (function init() {
//   console.log("Initialized");
// })();

/*Hoisting & TDZ*/
// greet()

// function greet(){
//     console.log("Good morning!")
// }

// greet()

// let greet = ()=>{
//     console.log("Good morning!")
// }

//Return vs Console.log()
// function sum(a, b) {
//     console.log(a + b);
// }

// let result = sum(5, 7);

// console.log(result + 10);



//Practice Questions:
//Q1
// function bmi(h, w) {
//     return w / (h * h);
// }

// let height = Number(prompt("Enter your height (in meters): "));
// let weight = Number(prompt("Enter your weight (in kgs): "));

// console.log("Your BMI:", bmi(height, weight).toFixed(2));

//Q2
// function discountCalculator(discount){
//     return function(price){
//         return (price - price * (discount / 100))
//     }
// }
// let ten = discountCalculator(10)
// let fifteen = discountCalculator(15)
// let thirty = discountCalculator(30)
// console.log(ten(299))
// console.log(fifteen(299))
// console.log(thirty(299))

//Q3
// function counter(){
//     let count = 0 
//     return function(){
//         count++
//         return count
//     }
// }
// let counting = counter()
// console.log(counting())
// console.log(counting())
// console.log(counting())

// let cnt = counter()
// console.log(cnt())

//Q4
// let total = 0
// function score(n){
//     newTotal = total
//     return total += n    
// }

// //Q5-- we can make private variables using IIFE
// (function abcd(){
//     const id = "SS"
//     console.log(id)
// })()
// abcd()