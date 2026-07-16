/* <--- Module Patterns --->
Module Pattern, ek design pattern hai jisme hum apna code ek self-executing function(IIFE) ke andar likhte hai, taaki variables and function private bane rhe!

Iske andar se hum sirf wahi cheezein return krte hai jo bahar use krni ho!

Is pattern ka main advantage- data hiding(encapsulation) aur clean structuring, taaki code secure, reusable aur manageable banaya jaa sake!
let Bank = (function (){
    let bankBalance = 6000000;
    
    function checkBalance(){
        return (bankBalance);
    }

    function setBalance(val){
        bankBalance = val;
        console.log(val);
    }

    function withdraw(val){
        bankBalance -= val;
        console.log(bankBalance);
    }
    
    return {
        checkBalance,
        setBalance,
        withdraw,
    }
})();
*/

/* <--- Revealing Module Pattern --->
let Bank = (function (){
    let bankBalance = 6000000;

    function checkBalance(){
        return (bankBalance);
    }

    function setBalance(val){
        bankBalance = val;
        console.log(val);
    }
    
    function withdraw(val){
        bankBalance -= val;
        console.log(bankBalance);
    }

    return { //returning object me name change kr sakte hai.
        check: checkBalance,
        set : setBalance,
        wd : withdraw,
    }
})();
*/

/* <--- Factory Function Pattern --->
Ek function banate hai jo objects create krta hai.
(factory = obj forming machine)

Yeh ek aisa design pattern hai jisme hum ek simple function likhte hai jo naye objects banakr return karta hai, bina class or new keyword use kiye!

Main Idea- Object creation ko ek function ke thru control krna.

Har baar jab tum factory function ko call krte ho, tumhe ek naya object milta hai jisme apne methods aur (agar chaho to) private data ho sakta hai.

Yeh pattern especially tab useful hai jab tumhe ek hi type ke bohot saare objects chahiye like, users, products, tasks, etc.

function createProduct(name, price){
    let stock = 100;
    return {
        name,
        price,
        buy(pieces){
            if(pieces <= stock){
                stock -= pieces;
                console.log(`Ordered ${pieces}, ${stock} left!`);
            } else {
                console.error(`Only ${stock} left. Cannot order ${pieces}.`);
        }
    }
    ,
        refill(pieces){
            if(pieces > 0){
                stock += pieces;
                console.log(`Refilled ${pieces}, ${stock} now in stock.`);
            } else {
                console.error('Refill amount must be positive.');
            }
        }
    }
}

let iphone = createProduct("iphone", 134000);
iphone.buy(50);

let macbookAir = createProduct("MacBook Air", 89000);
macbookAir.refill(100);
*/

/* <--- Observer Pattern --->

class YTChannel{
    constructor(){
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`you have subscribed to SHERYIANS CODING SCHOOL!`);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((unsub) => unsub !== user)
        user.update(`you have unsubscribed to SHERYIANS CODING SCHOOL!`);
    }
    notify(msg){
        this.subscribers.forEach((sub) => sub.update(msg));
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(`${this.name}, ${data}`);
    }
}

let SCS = new YTChannel();
let user1 = new User("SENSEI_SS");
let user2 = new User("APSJ");

SCS.subscribe(user1);
SCS.unsubscribe(user2);
SCS.notify("A new video has been published!");
user2.update("Your comment got a heart❤️");

*/