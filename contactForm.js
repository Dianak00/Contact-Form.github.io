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
    if (value === "") {
        messageAlertFirstName.textContent = 'This field must be filled out!';
        messageAlertFirstName.classList.remove('hidden');
        messageAlertFirstName.classList.add('message');
    } else {
            if (!namePattern.test(value) ) {
            messageAlertFirstName.textContent = 'You must use only letters!';
            messageAlertFirstName.classList.remove('hidden');
            messageAlertFirstName.classList.add('message');
        }   else {
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
    if (value === "") {
        messageAlertLastName.textContent = 'This field must be filled out!';
        messageAlertLastName.classList.remove('hidden');
        messageAlertLastName.classList.add('message');
    } else {
            if (!namePattern.test(value) ) {
            messageAlertLastName.textContent = 'You must use only letters!';
            messageAlertLastName.classList.remove('hidden');
            messageAlertLastName.classList.add('message');
        }   else {
            messageAlertLastName.textContent = 'All correct!';
            messageAlertLastName.classList.remove('hidden');
            messageAlertLastName.classList.add('correctInput');
        }
        
    }
};


// Creating the validation function for email
function emailValidation(input){
    var value = input.value;
    var namePattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (value === "") {
        messageAlertEmail.textContent = 'This field must be filled out!';
        messageAlertEmail.classList.remove('hidden');
        messageAlertEmail.classList.add('message');
    } else {
            if (!namePattern.test(value) ) {
            messageAlertEmail.textContent = 'Invalid email - write the complete email!';
            messageAlertEmail.classList.remove('hidden');
            messageAlertEmail.classList.add('message');
        }   else {
            messageAlertEmail.textContent = 'All correct!';
            messageAlertEmail.classList.remove('hidden');
            messageAlertEmail.classList.add('correctInput');
        }
        
    }
};


// Creating the validation function for phone number
function phoneNumberValidation(input){
    var value = input.value;
    var namePattern = /^\d{9}$/;
    if (value === "") {
        messageAlertPhone.classList.remove('hidden');
        messageAlertPhone.classList.add('message');
        messageAlertPhone.textContent = 'This field must be filled out!';
    } else {
            if (!namePattern.test(value) ) {
            messageAlertPhone.classList.remove('hidden');
            messageAlertPhone.classList.add('message');
            messageAlertPhone.textContent = 'Incorrect number!';
        }   else {
            messageAlertPhone.classList.remove('hidden');
            messageAlertPhone.classList.add('correctInput');
            messageAlertPhone.textContent = 'All correct!';
        }
        
    }
}


// calling the function
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


// Creating function for validatiog the all above function
function validateAll() {
    console.log('validating all!');
    validationFirstName(firstNameInput);
    validationLastName(lastnameInput);
    emailValidation(emailInput);
    phoneNumberValidation(phoneNumberInput);
}

submitButton.addEventListener('click', validateAll);