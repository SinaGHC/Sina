const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('button');
const header = document.getElementById('h11');
username.addEventListener('input', updateHeader);
password.addEventListener('input', updateHeader);

btn.addEventListener('click', function() {
    if (username.value === '' || password.value === '') {
        header.textContent = 'Login here. username';
    } else if (username.value === 'Erfan' && password.value === 'erfanrobot') {
        header.textContent = 'Welcome ErfanRobot';
    } else {
        header.textContent = 'Incorrect U or P';
    }
});
function updateHeader(){
    if (username.value === '' && password.value === '') 
        header.textContent = 'Login here';

}
