//Loops
/*
for-loop:
for(let i = 1; i < 33; i++){
    console.log(i)
}
 */

/* 
while-loop
let i = 1
while(i < 33){
    console.log(i)
    i++
}
*/

//do-while-loop
// let i = 1
// do{
// console.log(i)
// }while(i<33)

// 🌀 for-of – Arrays & Strings
// for (let char of "Sheryians") {
//  console.log(char);
// }

// 🧱 forEach – Arrays
// let num = [10, 20, 30];
// num.forEach((nums) => {
//  console.log(nums);
// });

// 🧱 for-in – Objects (and arrays if needed)
// let user = { name: "Harsh", age: 26 };
// for (let key in user) {
//  console.log(key, user[key]);
// }

// Practice Questions:
// /*Q1*/ for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// /*Q2*/ let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// /*Q3*/ for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// /*Q4*/ let i = 1;
// while (i < 16) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// /*Q5*/ let x = 5;
// for (let i = 1; i < 11; i++) {
//   console.log(x, "x", i, "=", x * i);
// }

// /*Q6*/ let sum = 0, i = 1
// while(i < 101){
//     sum += i
//     i++
// }
// console.log(sum)

// /*Q7*/ let i = 1
// while(i < 51){
//     if(i%3===0){
//         console.log(i)
//     }
//     i++
// }

// /*Q8*/ let val = prompt("Enter your number")
// for(let i = 1; i <= val; i++){
//     if(i%2===0){
//         console.log(i,`is Even`)
//     }
//     else{
//         console.log(i, `is Odd`)
//     }
// }

// /*Q9*/
// for(let i = 1; i < 101; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i)
//     }
// }

// /*Q10*/ for(let i = 1; i < 101; i++){
//     if(i%7===0){
//         break
//     }
//     console.log(i)
// }

// /*Q11*/ for(let i = 1; i < 21; i++){
//     if(i%3===0){
//         continue
//     }
//     console.log(i)
// }

// /*Q12*/ let count = 0 
// for(let i = 1; i < 101; i++){
//     if(i%2!==0){
//         count += 1
//         console.log(i)
//     }
//     if(count === 5){
//         break
//     }
// }