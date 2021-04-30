//Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');


//Event Listeners

EventListeners();

function EventListeners()
{
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}


//Functions

//App Initializations
function appInit()
{
    //disable the send button on load
    sendBtn.disabled = true;
} 

//Validate the fields
function validateField()
{
    let errors;

    //validate the lenght of the field
    validateLength(this)

    //Validate the email
    if(this.type === 'email')
    {
        validateEmail(this);
    }
}

//Validate the lenght of the fields
function validateLength(field)
{
    if(field.value.length > 0)
    {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else
    {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
//Validate email (checks for @ in the value)
function validateEmail(field)
{
    let emailText = field.value;
    //check if the email contains the @ sign
    if(emailText.indexOf('@') !== -1)
    {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else
    {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}