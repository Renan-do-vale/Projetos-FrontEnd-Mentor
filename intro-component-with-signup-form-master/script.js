let first_name = document.getElementById("firstN");
let last_name = document.getElementById("lastN");
let email = document.getElementById("email")
let password = document.getElementById("password")


let submit = document.getElementById("buttonSubmit")
let inputs = document.querySelectorAll(".input_teste")



submit.addEventListener('click', (e) => {
    e.preventDefault()

    if(first_name.value == "") {
        let error1i = document.getElementById("error1i")
        let error1m = document.getElementById("error1m")
        error1i.classList.remove("hidden")
        error1m.innerHTML = "First Name cannot be empty"
        
    }else {        
        error1i.classList.add("hidden")
        error1m.innerHTML = ''
    }
    
})












function validName(first_name) { 
    let name = /^[0-9a-zA-Z]{3,15}$/
    return name.test(first_name)
}