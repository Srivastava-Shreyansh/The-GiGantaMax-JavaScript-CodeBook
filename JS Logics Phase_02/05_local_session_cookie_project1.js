let btn = document.querySelector("button");
let tn = document.querySelector("#theme-name");

btn.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        tn.textContent = "DARK";
        localStorage.setItem("theme", "dark");
    }else{
        tn.textContent = "LIGHT";
        localStorage.setItem("theme", "light");
    }
});

function setTheme(){
    let savedTheme = localStorage.getItem("theme");

    if(savedTheme){
        document.body.classList.add(savedTheme);
        document.body.classList.remove(savedTheme === "dark" ? "light" : "dark");
        tn.textContent = savedTheme === "dark" ? "DARK" : "LIGHT";
    }else{
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            tn.textContent = "DARK";
        }else{
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            tn.textContent = "LIGHT";
        }
    }
}

setTheme();