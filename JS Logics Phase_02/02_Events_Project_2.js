let btn = document.querySelector("#btn");
let file = document.querySelector("#fileInput");
btn.addEventListener("click", function() {
    file.click();
});
file.addEventListener("change", function(details) {
    // console.log(details.target.files[0].name);
    const file1 = details.target.files[0];
    if(file1){
        btn.textContent = `${file1.n} Selected!`;
    }
});