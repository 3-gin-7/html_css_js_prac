const emailRegexVerify = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const verifyEmail = () =>{
    const email = document.querySelector('#email').value
    const msg_box = document.querySelector('#error-message')
    if(!email || email === '' || !emailRegexVerify(email)) msg_box.innerHTML = 'Incorrect email'
    else msg_box.innerHTML = 'Thank you!'
}

