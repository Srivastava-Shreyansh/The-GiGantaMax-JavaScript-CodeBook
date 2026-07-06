let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

const emailMsg = document.querySelector("#email-msg");
const passwordMsg = document.querySelector("#password-msg");
const resultMsg = document.querySelector("#resultMsg");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d@$!%*?&^#()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;

email.addEventListener("input", function () {

    if (emailRegex.test(email.value)) {
        emailMsg.textContent = "";
        email.style.borderColor = "green";
    } else {
        emailMsg.textContent = "*Please enter a valid email address.";
        emailMsg.style.color = "red";
        email.style.borderColor = "red";
    }

});

password.addEventListener("input", function () {

    if (passwordRegex.test(password.value)) {
        passwordMsg.textContent = "";
        password.style.borderColor = "green";
    } else {
        passwordMsg.textContent = "*Please enter a valid password.";
        passwordMsg.style.color = "red";
        password.style.borderColor = "red";
    }

});

form.addEventListener("submit", function (details) {

    details.preventDefault();

    resultMsg.textContent = "";

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;

    if (!emailAns) {
        emailMsg.textContent = "*Please enter a valid email address.";
        emailMsg.style.color = "red";
        email.style.borderColor = "red";
        isValid = false;
    }

    if (!passwordAns) {
        passwordMsg.textContent = "*Please enter a valid password.";
        passwordMsg.style.color = "red";
        password.style.borderColor = "red";
        isValid = false;
    }

    if (isValid) {
        resultMsg.textContent = "Login Successful! ✅";
        resultMsg.style.color = "green";

        email.value = "";
        password.value = "";

        email.style.borderColor = "#ddd";
        password.style.borderColor = "#ddd";
    }
});