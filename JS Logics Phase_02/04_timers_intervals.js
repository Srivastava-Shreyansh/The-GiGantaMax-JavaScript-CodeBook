/* let clrT = setTimeout(() => {
    console.log("I ❤️ you🫵");
}, 2000);

let clrI = setInterval(() => {
    console.log("I ❤️ you🫵");
}, 3000);

clearTimeout(clrT);
clearInterval(clrI);
*/

/*
let count = 10;
let clearI = setInterval(function(){
    if(count > 0){
        console.log(count);
        count--;
    }else{
        clearInterval(clearI);
    }
},1000);
*/

let progress = document.querySelector(".progress");
let percent = document.querySelector(".percentage");
let status = document.querySelector(".status");
let card = document.querySelector("h2");
let seconds = 3;
let count = 0;

let s = setInterval(function(){
    if(count < 100){
        count++;
        progress.style.width = `${count}%`;
        percent.textContent = `${count}%`;
    }else{
        status.textContent = "Download Completed🥳";
        card.textContent = "";
        clearInterval(s);
    }
},(seconds * 1000) / 100);