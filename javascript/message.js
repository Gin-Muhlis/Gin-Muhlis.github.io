// Form to googlesheet, button loading effect and alert message
const scriptURL = 'https://script.google.com/macros/s/AKfycbzcVCkZk4HdpAcrn4tHySufYQLWGcD7RvhKwYrWe27158-MXBcY7UftUQg8i3UoTIAHdA/exec'
const form = document.forms['form-to-google-sheet'];
const btn = document.querySelector('.button');

form.addEventListener('submit', e => {
    e.preventDefault()
    btn.classList.add('button-loading');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            console.log('Success!', response);
            btn.classList.remove('button-loading')
            alert('Your message has been sent!')
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})