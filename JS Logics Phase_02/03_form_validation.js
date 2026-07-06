let nm = document.querySelector("#name");
let form = document.querySelector("form");
form.addEventListener("submit", function(details){
    details.preventDefault();
    if (nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";
    }else{
        document.querySelector("#hide").style.display = "none";
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const email = "a@a.a";
    
    if (emailRegex.test(email)) {
        console.log("✅ Valid Email");
    } else {
        console.log("❌ Invalid Email");
    }
});