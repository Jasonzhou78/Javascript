const fname = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const passwordcf = document.getElementById("passwordcf");
const errorMessage = document.getElementById("error");
form.addEventListener("submit", function(e) {
    let messages = [];
    if (fname === '' || fname == null) {
        messages.push('first name is required!');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorMessage.innerHTML = messages.join(', ');
    }
    if (password.value.length < 6) {
        messages.push('Password must be equal or longer than 6 characters!');
    }
});