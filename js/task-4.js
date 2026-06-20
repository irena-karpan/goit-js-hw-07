'use strict'

const loginForm = document.querySelector('.login-form');
const formObj = {};


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;
    formObj.email = form.elements.email.value.trim();
    formObj.password = form.elements.password.value.trim();

    if (formObj.email === '' || formObj.password === '') {
        alert('All form fields must be filled in');
    }

    console.log(formObj);
    form.reset();

    
});
