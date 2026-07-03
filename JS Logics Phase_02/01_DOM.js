/*
---Questions---
What is the DOM?
Understanding the Document Object Model as a tree-like structure.

Representation of HTML as a Tree: 
How every element in HTML is represented as a node in the DOM tree.

Node Difference: 
Understanding the differences between types of nodes (element, text, etc.) and why text nodes cannot have children.

Inspecting Nodes: 
Using the browser's developer tools to inspect specific HTML and identify each node.

Selecting Elements: 
Discussion on HTMLCollections and how getElementsByClassName differs from arrays.

Querying Elements: 
Using querySelectorAll to select multiple elements (like buttons with a specific class).

Text Manipulation: 
Explaining the differences between innerText, textContent, and innerHTML.

Best Practices for Content: 
When to prefer textContent over innerText (performance and hidden content).

Attribute Manipulation: 
How to retrieve and set attributes like src for images or disabled for buttons.
*/

//How to access elements in the DOM?
/*let a = document.getElementById("first");
console.dir(a);

let b = document.getElementsByClassName("second");
console.dir(b);

let c = document.querySelector("p");
console.dir(c);

let d = document.querySelectorAll("p");
console.dir(d);
*/

//How to change the content of an element in the DOM?
/*
let bClass = document.querySelector(".second");
bClass.innerText = "Hello World";
bClass.innerHTML = "<h1>Hello World</h1>";

let cClass = document.querySelectorAll("p");
for (let i = 0; i < cClass.length; i++) {
    cClass[i].innerText = "Hello World";
    cClass[i].innerHTML = "<h1>Hello World</h1>";
}
*/
/*
let i = document.querySelector("img");
i.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1782807909041-a8557ce3b03e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);
i.style.height = "200px";
i.style.width = "200px";


let A = document.querySelector("#a");
console.log(A.getAttribute("href"));
A.removeAttribute("href");

let h = document.createElement("h1");
h.textContent = "Hello, frandds! Chai Pee Lo☕";
document.querySelector("body").prepend(h);
h.innerHTML = "<i>Hello, frandds! Chai Pee Lo☕</i>";

a.remove();

let p = document.querySelector("p");
p.classList.add("second");
p.classList.toggle("second");
*/

let btn = document.querySelector("button");
btn.removeAttribute("disabled");


// Task:01
let h = document.querySelector("#heading");
h.innerText = "Welcome to Sheryians!";

// Task:02
let lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
  console.log(lis[i].textContent);
}

// Task: 03
let para = document.querySelector("#second");
para.innerHTML = "<b>Updated</b> by JavaScript";

// Task: 04
let a = document.querySelector("a");
a.href = "https://www.google.com";
a.setAttribute("href", "https://www.sheryians.com");

// Task: 05
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "Item 4";
ul.append(li);

// Task: 06
let div = document.querySelector("#kny");
let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1705932461994-6fb2b07f27dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVtb24lMjBzbGF5ZXIlMjB0aXRsZSUyMHBob3RvfGVufDB8fDB8fHww");
img.classList.add("kny-img");
div.prepend(img);

// Task: 07
let li1 = document.querySelector("li");
li1.remove();

// Task: 08
let hgl = document.querySelectorAll("ul li:nth-child(2n)");
hgl.forEach((element) => {
  element.classList.add("highlight");
});

//Task: 09
let fnt = document.querySelectorAll("p");
fnt.forEach((element) => {
  element.style.fontSize = "18px";
});