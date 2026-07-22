/* <--- Performance Optimization --->
Debouncing -> aap koi action kr rhe ho and aap yeh nhi chahte ki har action per kuch ho, jab bhi mere actions ke beech koi specific gap aajaye to fir rxn perform ho! 

Basically, ek delay bataoge tum, jitna delay hoga utni der baad aapko rxn milega!
function debounce(fnc, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args);
        }, delay);
    };
}

document.querySelector("input")
.addEventListener("input", debounce(function(){
    console.log("Hola!");
}, 1000));
*/

/*
Throttle -> Interval per chalega, action agar hota rha and aapne ek interval bataya, then utne time-interval me aapka event chalne lagega!
function throttle(fnc, delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args);
        }
    };
}

document.querySelector("input")
.addEventListener("input", throttle(function(){
    console.log("Hey");
}, 1000));
*/

/* <--- Lazy Image Loading --->
let imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            observer.unobserve(entry);
        }
    });
},{
    root: null,
    threshold: .1
});

imgs.forEach(function(img){
    observer.observe(img);
});
*/

/* <--- Code Splitting --->
let btn = document.querySelector("button");

btn.addEventListener("click", async function () {
    let heavy = await import("./02_heavyFunction.js");
    heavy.heavyFunction();
});
*/

/* <--- Avoid Unnecessary Reflows and  Repaints --->
const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();

for(let i = 1; i <= 10; i++){
    const li = document.createElement("li");
    li.textContent = i;
    fragment.appendChild(li);
}

ul.appendChild(fragment);
*/

/* <--- Memory Leaks: Timers & Event Listeners --->
let count = 0;
const int = setInterval(() => {
    if (count < 10) {
        count++;
        console.log(count);
    }else{
        console.log("I ❤️ U");
    clearInterval(int);
    }
}, 500);
*/