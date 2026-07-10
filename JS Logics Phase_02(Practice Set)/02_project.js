let inp = document.querySelector("input");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");
let form = document.querySelector("form");

form.addEventListener("submit", function(details){
    details.preventDefault();
});

btn.addEventListener("click", function(){
    let tasks = inp.value.trim();  //button clicked
    
    if(tasks === ""){
        alert("Kindly add the tasks!");
        return;
    }

    let newLi = document.createElement("li");  //new li created

    newLi.innerHTML = `<span class="lt-span">${tasks}</span>
                        <div class="task-buttons">
                            <button class="complete-btn">✔</button>
                            <button class="delete-btn">🗑</button>
                        </div>`;

    ul.appendChild(newLi); //appending the new li into the ul

    inp.value = "";
});

ul.addEventListener("click", function(details){
    if(details.target.classList.contains("complete-btn")){
        let span = details.target.parentElement.previousElementSibling;
        span.classList.toggle("lt");
    }
    
    if(details.target.classList.contains("delete-btn")){
        confirm("Press OK, if you want to delete this task?");
        let li = details.target.closest("li");
        li.remove();
    }
});

let h = document.querySelector("h1");
inp.addEventListener("keydown", function(details) {
    if(details.key === "Enter"){
        let tasks = inp.value.trim();  //button clicked
    
    if(tasks === ""){
        alert("Kindly add the tasks!");
        return;
    }

    let newLi = document.createElement("li");  //new li created

    newLi.innerHTML = `<span class="lt-span">${tasks}</span>
    <div class="task-buttons">
    <button class="complete-btn">✔</button>
    <button class="delete-btn">🗑</button>
    </div>`;
    
    ul.appendChild(newLi);

    inp.value = "";
    } else {
        h.style.display = "none";
    }
});