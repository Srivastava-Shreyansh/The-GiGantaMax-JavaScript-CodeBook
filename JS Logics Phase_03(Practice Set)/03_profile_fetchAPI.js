function getUsers(){
    fetch("https://randomuser.me/api/?results=3")
    .then((rawData) => rawData.json())
    .then((data) => {
        document.querySelector(".users").innerHTML = "";
        data.results.forEach(function(user){
            const card = document.createElement("div");
            card.className = "bg-gray-800 w-72 p-6 rounded-xl shadow-lg text-center";
            
            const avatar = document.createElement("img");
            avatar.id = "avatar";
            avatar.src = user.picture.large;
            avatar.alt = "User";
            avatar.className = "w-24 h-24 rounded-full mx-auto border-2 border-blue-500";
            
            const name = document.createElement("h2");
            name.id = "name";
            name.className = "text-white text-xl font-semibold mt-4";
            name.textContent = user.name.first + " " + user.name.last;
            
            const email = document.createElement("p");
            email.id = "email";
            email.className = "text-gray-400 mt-2";
            email.textContent = user.email;
            
            const btn = document.createElement("button");
            btn.className = "mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition";
            btn.textContent = "View Profile";
            
            card.appendChild(avatar);
            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(btn);
            
            document.querySelector(".users").appendChild(card);
});
});
}

getUsers();

let rbtn = document.querySelector("#refreshBtn");
rbtn.addEventListener("click", function(){
    getUsers();
})