const userName = document.getElementById('email');
const passWord = document.getElementById('passWord');
const button = document.getElementById('login');

button.addEventListener('click', function(event) {
    event.preventDefault();
    login();
});

function login() {
    let u = userName.value.trim();
    let p = passWord.value;

    if (u === '' || p === '') {
        alert('Nhập thông tin đăng nhập');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(u)) {
        alert('Email không hợp lệ!');
        return;
    }

    alert('Đăng nhập thành công!');
}

