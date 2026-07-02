//Write a function that returns the square of a number.
function sqr(x){
    return x * x;
}
let a = sqr(5);
console.log(a);

//Write a function that checks whether a number is even or odd.
function isEven(x){
    if (x % 2 === 0){
        return "Even";
    }
    else {
        return "Odd";
    }
}
let b = isEven(96);
console.log(b);

//Print numbers from 1 to 50 using a loop.
for(let i = 1; i <= 50 ; i++){
    console.log(i);
}

//Print only multiples of 5 from 1 to 100.
for(let i = 1; i <= 100 ; i++){
    if (i % 5 === 0){
        console.log(i);
    }
}

//Find the sum of numbers from 1 to 100.
let sum = 0;
for(let i = 1; i < 101 ; i++){
    sum += i;
}
console.log(sum);

//Reverse this array.
// [1,2,3,4,5]
let nums = [1,2,3,4,5]
let rev = []
for(let i = 5; i >= 0 ; i++){
    rev = (nums[i]);     
    }
    console.log(rev);

//Find the largest number in
// [12,45,2,89,34]
let num = [12,45,2,89,34], max = num[0];
for (let i = 0; i < 5; i++){
    if (num[i] > max){
        max = num[i];
    }
}
console.log(max);

//Count how many even numbers are present.
// [1,4,8,9,13,18]
let n = [1,4,8,9,13,18], count = 0;
for (let i = 0; i < 6 ; i++){
    if(n[i] % 2 === 0){
        count++;
    }
}
console.log(count);

//Create an object
// {
// name:"Sensei_SS",
// age:19,
// course:"BTech"
// }
// Print only the course.
let std = {
name:"Sensei_SS",
age:19,
course:"BTech"
}
console.log(std.course);

//Add a new property
// college:"CAS Lucknow"
// to the above object.
std.college = "CAS Lucknow";
console.log(std);
