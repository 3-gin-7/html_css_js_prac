const validateEmail = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateForm = () =>{
    const email = document.forms[0].querySelector('input[name="email"]').value
    const msg = document.querySelector('#msg')

    if(!validateEmail(email)){
        msg.innerHTML = "Invalid email"
        msg.classList.add('invalid')
    }
    else{
        msg.innerHTML = "Thank you"
        msg.classList.add('valid')
    }
}