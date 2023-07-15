
let email = document.getElementById('email')
let form = document.getElementById('buttonText')
let iconError = document.getElementById('iconError')
let errorEmail = document.getElementById('errorEmail')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(email.value === '' || validarEmail(email.value) !== true) {
        email.style.borderColor = 'red'
        iconError.style.display = 'block'
        errorEmail.style.display = 'block'
        errorEmail.textContent = 'Please provide a valid e-mail!'
    } else {
        iconError.style.display = 'none'
        errorEmail.style.display = 'none'
        email.style.borderColor = 'green'
        console.log(email.value)
    }
})


function validarEmail(email) { 
    let emailtest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    return emailtest.test(email)
}