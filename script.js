let username = document.getElementById('name');
let submit = document.getElementById('submit');
let password = document.getElementById('password');
let passwordcf = document.getElementById('passwordcf');
let checkbox = document.getElementById('checkbox');
let country = document.getElementById('country');
let message = document.getElementById('welcomeMessage');

submit.disabled = true;

username.addEventListener("change", validateAllInputs);
password.addEventListener("change", validateAllInputs);
passwordcf.addEventListener("change", validateAllInputs);
checkbox.addEventListener("change", validateAllInputs);
country.addEventListener("change", validateAllInputs);

submit.onclick = function() {
    message.innerHTML = "Welcome " + username.value +
        "! The country code you selected is " +
        country.options[country.selectedIndex].text;
}

// function to check all the fields
function validateAllInputs(e) {
    // check the username field
    submit.disabled = true;
    if (username.value.length == 0) {
        return;
    }

    // check the password field  check the password comfirm field
    if (password.value.length < 10 || password.value != passwordcf.value) {
        return;
    }

    // check the checkbox for accepting the terms of service
    if (!checkbox.checked) {
        return;
    }
    // check the dropdown
    if (country.value == "") {
        return;
    }

    // all inputs meet the requirements, enable the submit button
    submit.disabled = false;

}