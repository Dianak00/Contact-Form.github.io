//Targeting DOM elements
const firstNameInput = document.getElementById('name');
const lastnameInput = document.querySelector('#forname');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.getElementById('phone');
const subjectInput = document.getElementsByTagName('textarea')[0];

const submitButton = document.querySelector('#submit');

const messageAlertFirstName = document.querySelector('.message--firstName');
const messageAlertLastName = document.querySelector('.message--lastName');
const messageAlertPhone = document.querySelector('#textAlertPhone');
const messageAlertEmail = document.querySelector('#emailAlert');


//Creating the validation functions


//Validation function for First Name
function validationFirstName(input){
    var value = input.value;
    var namePattern = /^[a-zA-Z\s-]+$/;
    //const messageAlertFirstName = document.querySelector('.message--lastName');
    if (value === "") {
        //console.log('This field must be filled out!');
        messageAlertFirstName.textContent = 'This field must be filled out!';
        messageAlertFirstName.classList.remove('hidden');
        messageAlertFirstName.classList.add('message');
        //input.style.cssText = 'border: 2px solid red';
    } else {
            if (!namePattern.test(value) ) {
                //console.log('You must use only letters!')
            messageAlertFirstName.textContent = 'You must use only letters!';
            messageAlertFirstName.classList.remove('hidden');
            messageAlertFirstName.classList.add('message');
            //input.style.cssText = 'border: 3px solid red';
        }   else {
            //console.log('All correct!');
            //input.style.cssText = 'border: 3px solid green';
            messageAlertFirstName.textContent = 'All correct!';
            messageAlertFirstName.classList.remove('hidden');
            messageAlertFirstName.classList.add('correctInput');
        }
        
    }
};

//Validation function for Last Name:
function validationLastName(input){
    var value = input.value;
    var namePattern = /^[a-zA-Z\s-]+$/;
    //const messageAlertFirstName = document.querySelector('.message--lastName');
    if (value === "") {
        //console.log('This field must be filled out!');
        messageAlertLastName.textContent = 'This field must be filled out!';
        messageAlertLastName.classList.remove('hidden');
        messageAlertLastName.classList.add('message');
        //input.style.cssText = 'border: 2px solid red';
    } else {
            if (!namePattern.test(value) ) {
                //console.log('You must use only letters!')
            messageAlertLastName.textContent = 'You must use only letters!';
            messageAlertLastName.classList.remove('hidden');
            messageAlertLastName.classList.add('message');
            //input.style.cssText = 'border: 3px solid red';
        }   else {
            //console.log('All correct!');
           // input.style.cssText = 'border: 3px solid green';
            messageAlertLastName.textContent = 'All correct!';
            messageAlertLastName.classList.remove('hidden');
            messageAlertLastName.classList.add('correctInput');
        }
        
    }
};

function emailValidation(input){
    var value = input.value;
    var namePattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (value === "") {
        messageAlertEmail.textContent = 'This field must be filled out!';
        messageAlertEmail.classList.remove('hidden');
        messageAlertEmail.classList.add('message');
        //console.log('This field must be filled out!');
        //input.style.cssText = 'border: 2px solid red';
    } else {
            if (!namePattern.test(value) ) {
            messageAlertEmail.textContent = 'Invalid email - write the complete email!';
            messageAlertEmail.classList.remove('hidden');
            messageAlertEmail.classList.add('message');
            //console.log('You must use only letters!');
            //input.style.cssText = 'border: 3px solid red';
        }   else {
            //console.log('All correct!');
            messageAlertEmail.textContent = 'All correct!';
            messageAlertEmail.classList.remove('hidden');
            messageAlertEmail.classList.add('correctInput');
            //input.style.cssText = 'border: 3px solid green';
        }
        
    }
};

function phoneNumberValidation(input){
    var value = input.value;
    var namePattern = /^\d{9}$/;
    if (value === "") {
        //console.log('This field must be filled out!');
        //input.style.cssText = 'border: 2px solid red';
        messageAlertPhone.classList.remove('hidden');
        messageAlertPhone.classList.add('message');
        messageAlertPhone.textContent = 'This field must be filled out!';
    } else {
            if (!namePattern.test(value) ) {
            //console.log('Incorrect number!')
            //input.style.cssText = 'border: 3px solid red';
            messageAlertPhone.classList.remove('hidden');
            messageAlertPhone.classList.add('message');
            messageAlertPhone.textContent = 'Incorrect number!';
        }   else {
            //console.log('All correct!');
            //input.style.cssText = 'border: 3px solid green';
            //textPrompt.textContent = ''
            messageAlertPhone.classList.remove('hidden');
            messageAlertPhone.classList.add('correctInput');
            messageAlertPhone.textContent = 'All correct!';
        }
        
    }
}

firstNameInput.addEventListener('input', () => {
    validationFirstName(firstNameInput);
});
firstNameInput.addEventListener('focus', () => {
    validationFirstName(firstNameInput);
});

lastnameInput.addEventListener('input', () => {
    validationLastName(lastnameInput);
});
lastnameInput.addEventListener('focus', () => {
    validationLastName(lastnameInput);
});

phoneNumberInput.addEventListener('input', () => {
    phoneNumberValidation(phoneNumberInput);
});

phoneNumberInput.addEventListener('focus', () => {
    phoneNumberValidation(phoneNumberInput);
})

emailInput.addEventListener('input', () =>{
    emailValidation(emailInput);
});
emailInput.addEventListener('focus', () => {
    emailValidation(emailInput);
})


function validateAll() {
    console.log('validating all!');
    validationFirstName(firstNameInput);
    validationLastName(lastnameInput);
    emailValidation(emailInput);
    phoneNumberValidation(phoneNumberInput);
}

submitButton.addEventListener('click', validateAll);