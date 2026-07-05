let h = document.querySelector("h1");
window.addEventListener("keydown", function(details) {
    if(details.key === " "){
        h.textContent = "Space";
    } else {
        h.textContent = details.key;
    }
    // console.log(details);
});