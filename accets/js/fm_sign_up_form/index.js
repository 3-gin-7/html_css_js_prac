let form_invalid = false

const verifyEmail = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const submitForm = () => {
    const form = document.forms[0]
    const email_input = form.querySelector('input[name="email"]')
    const err_msg = document.querySelector('#error_message')
    const success_msg = document.querySelector('#success_message')
    let form_value_missing = false
    const inputs = form.querySelectorAll('input')


    inputs.forEach((i) =>{
        if(i.value === ''){
            i.classList.add('invalid-input')
            form_value_missing = true
        }
    })
    if(form_value_missing){
        err_msg.innerHTML = "Please complete the form"
        form_invalid = true
        return
    }
    if(!verifyEmail(email_input.value)){
        err_msg.innerHTML = "Email invalid"
        form_invalid = true
        email_input.classList.add('invalid-input')
        return
    }

    success_msg.innerHTML = "Thank you for signing up"
}

const resetValidator = () =>{
    if(form_invalid){
        form_invalid = false
        document.querySelector('#error_message').innerHTML = ''
        document.querySelector('#success_message').innerHTML = ''

    }
}

window.onload = () =>{
    const form = document.forms[0].querySelectorAll('input')
    form.forEach( (i) =>{
        i.addEventListener('input', ()=>{
            i.classList.remove('invalid-input')
            resetValidator()
        })
    })
}