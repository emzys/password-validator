const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPassword = () => {
    if (pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.innerHTML = 'You have a very strong password. :)';
        p.style.color = 'lime';
    } else if (pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.innerHTML = 'You have a strong password.';
        p.style.color = 'gold';
    } else {
        p.innerHTML = 'Your password is too weak.';
        p.style.color = 'red';
    }
}

pass.addEventListener('keyup', function() {
    if (pass.value !== '') {
        checkPassword();
    } else {
        p.innerHTML = 'No password was entered.';
        p.removeAttribute('style');
    }
})