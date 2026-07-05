let form = document.querySelector("form");
let inp = document.querySelectorAll("input")
let main = document.querySelector("#main")
form.addEventListener("submit", function(details){
    details.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inp[0].value);

    let h1 = document.createElement("h1");
    h1.textContent = inp[1].value;
    
    let h4 = document.createElement("h4");
    h4.textContent = inp[2].value;
    
    let p = document.createElement("p");
    p.textContent = inp[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h1);
    card.appendChild(h4);
    card.appendChild(p);

    main.appendChild(card);

    inp.forEach(function(inputs){
        if(inputs.value !== inp[4].value){
            inputs.value = " ";
        }
    });
});