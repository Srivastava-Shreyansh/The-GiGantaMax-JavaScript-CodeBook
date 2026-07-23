/* <--- Separation of Concerns --->
DOM ka code and logic ka code separate hona chahiye!
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

function add(a, b){ //✅
    return a + b;
}

btn.addEventListener("click", function(){
    let n1 = Math.floor(Math.random()*10);
    let n2 = Math.floor(Math.random()*10);
    // const sum = n1 + n2; //❌
    const finalSum = add(n1,n2);
    let li = document.createElement("li");
    ul.textContent = `Sum of two random numbers: ${finalSum}`;
    ul.appendChild(li);
});
*/

/* <--- Custom Utility --->
const arr = [1,2,3,4,5];

function myMap(arr, callback){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr;
}

let ans = myMap(arr, function(val){
    return val + 2;
});
*/

/* <--- Web APIs --->
console, setTimeout, setInterval.... these all are provided by our Browser!!!
they ai'nt came from JavaScript...

Suppose, if we are having a total of 500 functions---> and we create 400 functions, then browser will provide 100 functions... that's the beauty of browser..

U can simply check all those properties or functions that browser provides by---->"console.log(window)"
*/

/* <--- Event Handler --->
Basically, a supervisor which allows a function getting executed once the call stack is cleared/empty and get transferred from Task/Callback Queue!
*/

/* <--- Call Stack(Execution Stack) --->
JS Single-Threaded hai -> ek time per ek hi kaam krta hai
Jab tum function call krte ho -> wo stack ke top pe chala jaata hai
Function end hone ke baad stack se bahar ho jaata hai(pop ho jaata hai)

function a(){
    console.log("a")
}
function b(){
    a();
    console.log("b");
}
function c(){
    b();
    console.log("c");
}
c();
*/