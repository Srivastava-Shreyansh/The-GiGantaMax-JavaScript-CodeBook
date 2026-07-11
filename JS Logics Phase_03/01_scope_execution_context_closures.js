/*<--- Scopes in JavaScript --->
ek variable ko uske scope ke bahar access nhi kr sakte, in simple words.
It can be whether Function or Block or Global Scope...

Global Scope--> us variable ko hum poore code me kahi bhi access kr sakte hai!
let r = 100;

Function Scope--> function me declare kiye hue var ko function me hi access kr sakte hai!
function greet(){
    let s = 1000;
    console.log(s); ✅Can be accessed here.
}
console.log(s); ❌Can't be accessed here.
console.log(r); ✅Can be accessed as it is a global variable.

Block Scope--> sirf {}(curly braces) ke andar hi variable ko access kr sakte hai!
{
    const greet = "Hello, World!";
    console.log(greet); ✅
}
console.log(greet); ❌
console.log(r); ✅Can be accessed as it is a global variable.
*/

/* <--- Execution Context --->
JS sabse pehle jaise hi apka function dekhta hai sabse pehle wo banata hai Execution Context,
yeh ek process hai jo do different phases me work karti hai,
Memory Creation Phase and Execution Phase!
(Just imagine the function, a Box hypothetically where variable are stored, processed, executed!)
It's basically an ABSTRACT.
*/


/* <--- Lexical Scoping(JS, Python and C) --->
app kaha per physically available ho poori tarah se, yahi depend krta hai 
ki app kya kya access kr sakte ho.

   <--- Dynamic Scoping --->
app kaha se call kr rhe function ko usper depend krega ki kya value milegi.
*/

/* <--- Closures --->
Closures hote hai functions jo kisi parent function ke andar ho aur andar wala 
function return ho rha ho, and returning function us parent function ka
koi variable use kr rha ho!

function abcd(){
    let a = 10;
    return function (){
        console.log(a);
    }
}
let p = abcd();
p();

Jab bhi CLOSURES bante hai to function or uske variables ka ek BACKLINK banaya
jaata hai aur uska naam hota hai---> [[environment]]
*/
//Private Counters:
function count(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let cnt = count();
cnt(); //1
cnt(); //2
cnt(); //3

let cnt2 = count();
cnt2(); //1
cnt2(); //2
cnt2(); //3
cnt2(); //4
cnt2(); //5

/* <--- Encapsulation --->
jitni details aap user ko show krana chahte ho aur
baaki details ko hidden rakhna chahte ho(private variables)
wahi hai humara ENCAPSULATION!
*/

function clickMe(){
    let click = 0;
    return function(){
        if(click < 5){
            click++;
            console.log(`Clicked ${click} times!`);
        }else{
            console.error("CAN'T CLICK ANYMORE!\n Please try later!")
        }
    }
}
let clk = clickMe();
clk();
clk();
clk();
clk();
clk();
clk();