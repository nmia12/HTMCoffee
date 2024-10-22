const userName = document.getElementById('username');
const password = document.getElementById('password');

function login(event) {
    event.preventDefault();

    let u = userName.value.trim();
    let p = password.value;

    if (u === '' || p === '') {
        alert('Vui long nhap thong tin dang nhap!');
    } else {
        alert('Dang nhap thanh cong!!');
    }
}