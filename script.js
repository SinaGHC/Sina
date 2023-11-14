const username = document.getElementById('username1');

username.addEventListener('focus', function () {
    username.placeholder = '';
});
username.addEventListener('blur', function () {
    if (username.value === '') {
        username.placeholder = 'username';
    }
});
function showcontent(){
    username.value = 'sina';
}