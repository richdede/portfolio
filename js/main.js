const formButton = document.querySelector(".form-button");
formButton.addEventListener("click", validateForm);
// form inputs
const clientName = document.getElementById("name");
const clientEmail = document.getElementById("email");
const clientMessage = document.getElementById("message");
const errorIcon = document.querySelectorAll(".error-icon");
const errorMessage = document.querySelectorAll(".error-message");



function validateForm(){
    const nameRegex = /^[A-Za-z-\s]+$/;
    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    let nameValidation = false
    let emailValidation = false
    let messageValidation = false

    // name input validation
    if(clientName.value.match(nameRegex)){
        clientName.style.borderColor = "#FFFFFF";
        errorIcon[0].style.visibility = "hidden";
        errorMessage[0].style.visibility = "hidden";
        nameValidation = true
    }else{
        clientName.style.borderColor = "#FF6F5B";
        errorIcon[0].style.visibility = "visible";
        errorMessage[0].style.visibility = "visible";
    }

    // email input validation
    if(clientEmail.value.match(emailRegex)){
        clientEmail.style.borderColor = "#FFFFFF";
        errorIcon[1].style.visibility = "hidden";
        errorMessage[1].style.visibility = "hidden";
        emailValidation = true
    }else{
        clientEmail.style.borderColor = "#FF6F5B";
        errorIcon[1].style.visibility = "visible";
        errorMessage[1].style.visibility = "visible";
    }

    // message validation
    if(clientMessage.value !== "" && clientMessage.value !== null){
        clientMessage.style.borderColor = "#FFFFFF";
        errorIcon[2].style.visibility = "hidden";
        errorMessage[2].style.visibility = "hidden";
        messageValidation = true
    }else{
        clientMessage.style.borderColor = "#FF6F5B";
        errorIcon[2].style.visibility = "visible";
        errorMessage[2].style.visibility = "visible";
    }

    if(nameValidation && emailValidation && messageValidation){
        sendMail();
    }else{
        messageValidation = false
        emailValidation = false
        nameValidation = false
    }
}


//  sends email with the value's from the form
function sendMail(){
    let templateParams = {
        from_name : clientName.value,
        email_id : clientEmail.value,
        message : clientMessage.value
    }

    emailjs.send('service_ul6h72u', 'template_0tf8h2q', templateParams)
    .then(function(response) {
       alert('The email has been sent succesfully', response.status, response.text);
    }, function(error) {
       alert('The email has Failed to send', error);
    });

    // resets form after succesfully sended the message
    clientName.value = null
    clientEmail.value = null
    clientMessage.value = null

}   