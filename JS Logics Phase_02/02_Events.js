/* Events & Event Handling */
//Browser per koi bhi harkat ho, event raise ho jaayega!
//Kuch screen per ho aur aapko reaction dena ho to us waqt event handling ka use karte hain.

let h = document.querySelector("h1");
h.addEventListener("click", function () {
    h.style.color = "red";
});

let pr = document.querySelector("pre");
pr.addEventListener("dblclick", function () {
    pr.style.color = "green";
});

function click() {
    H.style.color = "blue";
};
let H = document.querySelector("h2");
H.addEventListener("click", click) 
H.removeEventListener("click", click) //remove event listener

let inp = document.querySelector("input");
inp.addEventListener("input", function(details) {  /* details---> event-object */
    /*if(details.data !== null) {
        console.log("You typed: ", details.data);
    }*/
    // console.log("You typed: ", details);
    // console.log("You typed: ", inp.value);
});

let s = document.querySelector("select");
let h3 = document.querySelector("h3");
s.addEventListener("change", function(details) {
    h3.textContent = `${details.target.value} is the GOAT🐐`;
    // console.log("You selected: ", details);
    console.log("You selected: ", details.target.value);
});

let main = document.querySelector("#main2");
main.addEventListener("mouseover", function(){
    main.style.backgroundColor = "orangered";
});

main.addEventListener("mouseout", function(){
    main.style.backgroundColor = "blueviolet";
});

let keydown = document.querySelector("input");
keydown = addEventListener("keydown", function(){
    console.log("Key Pressed!");
});

let keyup = document.querySelector("input");
keydown = addEventListener("keyup", function(){
    console.log("Key Released!");
});

let main2 = document.querySelector("#nav");
main2.addEventListener("click", function(){
    alert("Key Pressed!");
});

let ul = document.querySelector("ul");
ul.addEventListener("click", function(details){
    details.target.classList.toggle("lt");
});