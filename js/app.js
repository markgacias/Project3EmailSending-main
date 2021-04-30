//Variables
const sendBtn = document.getElementById('sendBtn');



//Event Listeners

EventListeners();

function EventListeners()
{
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);
}


//Functions

//App Initializations
function appInit()
{
    //disable the send button on load
    sendBtn.disabled = true;
} 