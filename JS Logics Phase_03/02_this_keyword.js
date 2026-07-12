/* <--- 'this' Keyword --->
yeh ek special keyword hota hai, kyunki baaki keywords ki value and nature same rehta hai wahi par 'this' keyword ki value and nature change ho jaata hai with respect of where we are using it.

<--- Global Scope's Value --->
console.log(this); //Window

<--- Function Scope's Value --->
function abcd(){
    console.log(this); //Window
}
abcd();

<--- Method ---> (OBJECT-METHOD)
let obj = {
    name: "SENSEI_SS",
    age: 19,
    sayName: function(){
        console.log(this);
    }
}
obj.sayName();

<--- Event Handler --->
let h = document.createElement("h1");
h.textContent = "HELLO";
h.addEventListener("click", function(){
    console.log(this);
});
document.body.appendChild(h);

<--- Class --->
class Abcd{
    constructor(){
        console.log("Hola");
        this.a = 100;
    }
};
let ans = new Abcd(); 
*/

/* <--- Manual Binding --->
call() => function call ke waqt aap 'this' ki value ko apne hisaab se set kr sakte ho!

let obj = {
    name: "SENSEI_SS",
    age: 18,
}

function abcd(a,b,c){
    console.log(this, a, b, c);
}

abcd.call(obj, 1, 2, 3); //this ko manually set karta hai aur function immediately execute karta hai. Arguments separately pass hote hain.

abcd.apply(obj, [1,2,3]); //this ko manually set karta hai aur function immediately execute karta hai. Arguments array ke form me pass hote hain.

let func = abcd.bind(obj, 1,2,3); 
func();//this ko manually set karta hai, execute nahi karta, balki ek new function return karta hai jise baad me call kiya ja sakta hai.
*/