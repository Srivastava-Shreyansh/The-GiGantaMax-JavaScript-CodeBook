let sp = document.querySelector("span");
let sp2 = document.querySelector("#left");
let inp = document.querySelector("input");
inp.addEventListener("input", function(){
    if(inp.value.length <= 20){
        sp.textContent = inp.value.length;
    }else{
        alert("Maximum Character Limit Exceeds!!!");
    }
    sp2.textContent = 20 - inp.value.length;
});