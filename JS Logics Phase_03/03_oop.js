/* <--- OOPs --->
hume factories banana seekhna hai, matlab ki aap ek baar blueprint/prototype bana do ki har ek object kaisa dikhega and then hum naye-naye objects with different inputs paayenge!

function CreateBikes(name, color, company, price){
    this.name = name;
    this.color = color;
    this.company = company
    this.price = price;
}

Agar humara constuctor function koi field apne prototype par attach karle to us constructor se banne wale sabhi instances(objects) ke pass wo field automatically chali jaati hai! 

CreateBikes.prototype.write = function(text){
        let h = document.createElement("pre");
        h.textContent = text;
        h.style.color = this.color;        
        document.body.append(h);
    }

let bike1 = new CreateBikes("Ninja ZX-10R", "gray", "Kawasaki", 2300000);
let bike2 = new CreateBikes("Hayabusa", "crimson", "Suzuki", 1800000);
let bike3 = new CreateBikes("S-1000 RR", "lime", "BMW", 2500000);
*/

/* <--- ES6 Classes --->

class CreateChocolates{
    constructor(name, company, price, color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    write(text){
        let p = document.createElement("p");
        p.textContent = text;
        p.style.color = this.color;
        document.body.append(p);
    }

    erase(){
        document.body.querySelectorAll("p").forEach((i) => {
            if(i.style.color === this.color){
                i.remove();
            }
        });
    }
}

let c1 = new CreateChocolates("Dairy Milk", "Cadbury", 80, "blueviolet");
let c2 = new CreateChocolates("Hazelnut Dark Chocolate", "Hershey's", 120, "brown");
let c3 = new CreateChocolates("White Chocolate", "Feastables", 500, "blue");

<--- extends & super --->
class Users{
    constructor(name, city, username, email, role){
        this.name = name;
        this.city = city;
        this.username = username;
        this.email = email;
        this.role = role;
        this.salary = "$10000";
    }
    
    checkSalary(){
        console.log(`Your Salary per month is ${this.salary}`);
    }

    write(text){
        let p = document.createElement("p");
        p.textContent = `${this.name} : ${text}`;
        document.body.append(p);
    }
}

class Admin extends Users{
    constructor(name, city, username, email, role){
        super(name, city, username, email, role);
        this.salary = "$100000";
    }

    erase(text){
        document.querySelectorAll("p").forEach(function(ele){
            ele.remove();
        });
    }
}

let u1 = new Users("SENSEI_SS", "KANPUR", "Hinokami Kagura", "hello@example.com", "Software Engineer");
let u2 = new Users("APSJ", "LUCKNOW", "Water Breathing", "hello@world.com", "AI/ML Engineer");
let a1 = new Admin("CAS", "LUCKNOW", "Sun Breathing", "cas@res.in", "HR");
*/

/* <--- Prototypal Inheritance vs Classical Inheritance --->
Classical Inheritance: class => class (class se class ko inherit krna, means transfer krna){In C++, Java}
classes banana or unhe extend kr dena.

Prototypal Inheritance: object => object (object se object ko inherit krna){Only in JavaScript}

let chai = {
    drink: "Chocolate Chai",
    sip: () => {
        console.log("ghad ghad ghad ghad!");
    }
}

let code = Object.create(chai);
code.orders = 5;
console.log(code.drink);
code.sip();
*/