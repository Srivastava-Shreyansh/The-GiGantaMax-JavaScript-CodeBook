/*CHAPTER-01___VARIABLES & DECLARATIONS */
/*CHAPTER-02___DATATYPES + TYPE SYSTEM */
/*CHAPTER-03___OPERATORS */

// console.log("Hello, World!")
// console.log("Welcome to the JavaScript Language")

/*Primitive DataTypes*/
// STRINGS--->
// const name = "Sensei_SS"
// const city = "Kanpur Nagar"

//NUMBERS--->
// let age = 19
// var height = 1.85

//BOOLEAN--->
// let isEnrolled = true

//UNDEFINED--->
// let x = undefined

//NULL--->
// let x = null

//BIGINT--->
// let b = 123456789012345678901234567890n
// typeof(b)

//SYMBOL--->
// let student = {
//     uid : 1,
//     name: "Sensei_SS",
//     age: 19,
//     email: "example@test.com"
// }
// let u1 = Symbol("uid")
// student[u1] = 2

/*Reference DataTypes*/
//FUNCTION--->
// function greet(){
//     return ("Hello, World!")
// }
// let result = greet()
// console.log(result)

//ARRAYS--->
// let fruits = ["Apple" ,"Banana", "Guava"]

//OBJECTS--->
// let students = {
//     name : "Sensei_SS",
//     age : 19,
//     email : "text@example.com",
//     password : "XXXXX25"
// }

//Typeof Operator
// console.log(typeof "Sheryians") // "string"
// console.log(typeof 99) // "number"
// console.log(typeof true) // "boolean"
// console.log(typeof undefined) // "undefined"
// console.log(typeof null) // "object" ← known bug
// console.log(typeof []) // "object"
// console.log(typeof {}) // "object"
// console.log(typeof function(){}) // "function"
// console.log(typeof NaN) // "number"

//Type Coercion
// "5" + 1 // "51" → number converted to string
// "5" - 1 // 4 → string converted to number
// true + 1 // 2
// null + 1 // 1
// undefined + 1 // NaN

//Loose vs Strict Equality
// 5 == "5" // true
// 5 === "5" // false

//Truthy and Falsy Values
// Falsy values: false , 0 , "" , null , undefined , NaN
// Everything else is truthy, including: "0" , "false" , [] , {} , function(){}


/*OPERATORS*/
//➕ Arithmetic Operators
// let a = 10, b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.33333334
// console.log(a % b); // 1
// console.log(a ** b); // 1000

//� Assignment Operators
// = _assigns value
// +=  _a += b => a = a + b
// -=  _a -= b
// *=, /=, %=

//🧾 Comparison Operators
// == equal (loose)
// ===  equal (strict – value + type)
// !=  not equal (loose)
// !== not equal (strict)
// > < >= <=

//✅ Logical Operators
// &&  AND – both must be true
// ||  OR – either one true
// !  NOT – negates truthiness

//🌀 Unary Operators
// +  tries to convert to number
// -  negates
// ++ increment
// --  decrement
// typeof  returns data type