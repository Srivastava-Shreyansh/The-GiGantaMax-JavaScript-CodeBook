/* Local Storage */
//Store Data
localStorage.setItem("name", "SENSEI_SS");

//Fetch Data
let val = localStorage.getItem("name", "SENSEI_SS");

//Update Data
localStorage.setItem("name", "APSJ");
localStorage.setItem("name", "SENSEI_SS");

//Remove Data
localStorage.removeItem("name");


/* Session Storage */
//Store Data
sessionStorage.setItem("name", "SENSEI_SS");

//Fetch Data
let val2 = sessionStorage.getItem("name", "SENSEI_SS");

//Update Data
sessionStorage.setItem("name", "APSJ");
sessionStorage.setItem("name", "SENSEI_SS");


/* Cookie Storage Management */
localStorage.setItem("breathing", JSON.stringify(["fire", "water", "stone", "wind", "thunder"]))
let b = JSON.parse(localStorage.getItem("breathing"));