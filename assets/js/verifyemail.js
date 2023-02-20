let email = document.getElementById('email');
let repeatEmail = document.getElementById('repeat-email');

// Documentazione: https://hyperform.js.org/docs/low_level_api.html

function verify() {
    if (email.value != repeatEmail.value && repeatEmail.value != '') {
        repeatEmail.setCustomValidity('The two email addresses must match.');
        // Se voglio che il messaggio venga mostrato subito (prima del tenativo di invio):
        repeatEmail.reportValidity();
    } else {
        // Input is valid -> Reset the error message 
        repeatEmail.setCustomValidity('');
    }
}