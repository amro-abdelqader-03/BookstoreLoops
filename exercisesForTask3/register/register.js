const username_input = document.querySelector("#username")
const password_input = document.querySelector("#password")
const confirm_pass_input = document.querySelector("#confirm-password")
const register_btn = document.querySelector("button")
const anyname = document.querySelectorAll("p")


function required_input_check(username_value, password_value, confirm_pass_value){
    let is_all_filled = 1;

    if(username_value === ""){
        anyname[0].innerText="Required";
        is_all_filled = 0;
    }

    if(password_value === ""){
        anyname[1].innerText="Required";
        is_all_filled = 0;
    }

    if(confirm_pass_value === ""){
        anyname[2].innerText="Required";
        is_all_filled = 0;
    }
    return is_all_filled;
    
}

register_btn.addEventListener("click", (event) => {
    event.preventDefault();
    const username_value = username_input.value;
    const password_value = password_input.value;
    const confirm_pass_value = confirm_pass_input.value;
    username_input.value = "";
    password_input.value = "";
    confirm_pass_input.value = "";

    let is_all_filled = required_input_check(username_value, password_value, confirm_pass_value)
    if(!is_all_filled)
        return;
    
})

