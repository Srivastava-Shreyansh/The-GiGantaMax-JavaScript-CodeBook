//Practice Question
//Q1
// let student = {
//     name: "Sensei SS",
//     age: 18,
//     isEnrolled: true
// }

//Q2
// const obj = {
//     true: "yes",
//     42: "answer",
// }
// console.log(obj[true])

//Q3
// const user = {
    // "firstName" : "Sensei_SS",
// }

//Q4
// let key = "age"
// const user = {
//     age: 26,
// }

//Q5
// const locations = {
//     city: "Kanpur",
//     coordinates:{
//         lat: 23.5,
//         lng: 77.6
//     }
// }
// let {city} = locations
// let{lat} = locations.coordinates

//Q6
// const user = {
    // "first-name" : "SenseiSS",
// }
// let {"first-name" : firstName} = user

//Q7
// const course = {
    // title: "JavaScript",
    // duration: "4 weeks",
// }
// for(let key in course){
    // console.log(key)
// }
// 
// Object.entries(course).forEach(function (val){
    // console.log(val[0] + ": " + val[1])
// })

//Q8
// const obj1 = {info: {score:80}}
// const clone = JSON.parse(JSON.stringify(obj1))
// clone.info.score = 100
// console.log(obj1.info.score)

//Q9
// const key = "role"
// let std = {
//     name: "SenseiSS",
//     age: 21,
//     [key]:"admin",  
// }