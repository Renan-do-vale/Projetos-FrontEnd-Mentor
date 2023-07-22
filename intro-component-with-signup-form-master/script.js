let first_name = document.getElementById("firstN");
let last_name = document.getElementById("lastN");
let email = document.getElementById("email")
let password = document.getElementById("password")
let form_submit = document.getElementById('form_submit')

function submitForm(event) {
    event.preventDefault()
    
    if(first_name.value === "") {
        let error1i = document.getElementById("error1i")
        let error1m = document.getElementById("error1m")
        error1i.classList.remove("hidden")
        error1m.classList.remove("hidden")
        first_name.style.borderColor = 'red'
        
    }else {        
        error1i.classList.add("hidden")
        error1m.classList.add("hidden")
        first_name.style.borderColor = 'green'
    }
    
    if(last_name.value === "") {
        let error2i = document.getElementById("error2i")
        let error2m = document.getElementById("error2m")
        error2i.classList.remove("hidden")
        error2m.classList.remove("hidden")
        last_name.style.borderColor = 'red'
        
    }else {        
        error2i.classList.add("hidden")
        error2m.classList.add("hidden")
        last_name.style.borderColor = 'green'
    }
    
    if(email.value === "" || validEmail(email.value) !== true) {
        let error3i = document.getElementById("error3i")
        let error3m = document.getElementById("error3m")
        error3i.classList.remove("hidden")
        error3m.classList.remove("hidden")
        email.placeholder = 'email@example.com'
        email.style.borderColor = 'red'
        
    }else {        
        error3i.classList.add("hidden")
        error3m.classList.add("hidden")
        email.style.borderColor = 'green'
    }
    
    if(password.value === "" || validpass(password.value) !== true) {
        let error4i = document.getElementById("error4i")
        let error4m = document.getElementById("error4m")
        error4i.classList.remove("hidden")
        error4m.classList.remove("hidden")
        password.placeholder = 'Exemple#123'
        password.style.borderColor = 'red'
        
    }else {        
        error4i.classList.add("hidden")
        error4m.classList.add("hidden")
        password.style.borderColor = 'green'
    }
    // document.getElementById('form_submit').removeEventListener('submit',submitForm)
}


form_submit.addEventListener('submit', submitForm)







function validpass(password) { 
    let test_password = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/;
    return test_password.test(password)
}




function validEmail(email) { 
    let test_email = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    return test_email.test(email)
}