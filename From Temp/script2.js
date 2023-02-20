const form = document.getElementById("form");
const username = document.getElementById("username");
const emailId = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const date = document.getElementById("date")

form.addEventListener('submit', e => {
    e.preventDefault();
    CheckInput();
    
})

function CheckInput(){
    const usernameValue = username.value ;
    const emailValue = emailId.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
    const dateValue = date.value;

    if (dateValue === ""){
        setError(date,'Please enter your date of birth')
    }
    else{
        setSuccess(date);
    }
    
    if (usernameValue === ''){
        setError(username, 'username cannot be blank');
    }
    else {
        setSuccess(username);
    }
    if (emailValue === ''){
        setError(emailId, 'email cannot be blank');
    }
    else if(!isemail(emailValue))
    {
        setError(emailId, 'not a valid Email');
    }
    else{
        setSuccess  (emailId);
    }
    if (passwordValue === ''){
        setError (password, 'password cannot be blank');
    }
    else{
        setSuccess (password);
    }
    if (password2Value === ''){
        setError (password2, 'Confirm password cannot be blank');
    }
    else if (passwordValue === password2Value){
        setSuccess (password2,)
    }
    else{
        setError(password2, 'password does not match');
    }

    function setError(input, message){
        const formcontrol = input.parentElement;
        const small = formcontrol.querySelector('small');
        formcontrol.className = 'formcontrol error'
        small.innerText = message;
    }
    function setSuccess(input){
        const formcontrol = input.parentElement;
        formcontrol.className = 'formcontrol success';
    }

}

function isemail(emailId){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId);
}