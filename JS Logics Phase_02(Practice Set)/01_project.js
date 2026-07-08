let inp = document.querySelector("#search");
let cards = document.querySelectorAll(".card");
let msg = document.querySelector("#msg");
inp.addEventListener("input", function () {
  let value = inp.value.toLowerCase();
  let found = false;
  cards.forEach(function (card) {
    let name = card.querySelector("h3").textContent.toLowerCase();
    if (name.includes(value)) {
      card.style.display = "";
      found = true;
    } else {
        card.style.display = "none";
    }
});
if(found){
    msg.style.display = "none";
}else{
    msg.style.display = "block";
}
});