const result = document.getElementById('validation-result');
const validateEmail = () => {
    const emailInput = document.getElementById('email-input');
    const email = (emailInput.value).toLowerCase();
    if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) === true) {
        result.innerText = 'Your Email is Valid';
        result.style.color = 'limegreen';
    }
    else {
        result.innerText = 'Please Enter a Valid Email Address';
        result.style.color = 'red';
    }
    emailInput.value = '';
};