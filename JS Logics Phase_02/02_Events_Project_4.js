let main = document.querySelector("#main");
window.addEventListener("mousemove", function(details){
    main.style.top = details.clientY + "px";
    main.style.left = details.clientX + "px";
});