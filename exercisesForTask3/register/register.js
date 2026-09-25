const username_input = document.querySelector("#username")
const password_input = document.querySelector("#password")
const confirm_pass_input = document.querySelector("#confirm-password")
const register_btn = document.querySelector("button")
const anyname = document.querySelectorAll("p")

username_input.addEventListener("input", function (event) {
    let username_value = username_input.value;
    if (username_value.length > 0) {
        anyname[0].innerHTML = "";
    }
    else
        anyname[0].innerHTML = "Required"
});

password_input.addEventListener("input", function (event) {
    let password_value = password_input.value;
    if (password_value.length > 0)
        anyname[1].innerHTML = "";
    else
        anyname[1].innerHTML = "Required"
});

confirm_pass_input.addEventListener("input", function (event) {
    let confirm_pass_value = confirm_pass_input.value;
    if (confirm_pass_value.length > 0) {
        let password_value = password_input.value;
        if (password_value !== confirm_pass_value) {
            anyname[2].innerHTML = "the passwords must be same";
        }
        else {
            anyname[2].innerHTML = "";
            let username_value = username_input.value;
            if (username_value.length > 0) {
                register_btn.disabled=false;
                console.log("hi")
            }
        }
    }
    else
        anyname[2].innerHTML = "Required"
});

register_btn.addEventListener("click", (event) => {
    event.preventDefault();
    anyname[3].innerHTML = "successful user registration";
})

