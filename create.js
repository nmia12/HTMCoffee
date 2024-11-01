const userName = document.getElementById('username');
const phone = document.getElementById('phone');
const passWord = document.getElementById('password');
const confirmpass = document.getElementById('confirmPassword');

const button = document.getElementById('create');

button.addEventListener('click', function(event){
    event.preventDefault();
    create();
});

function create() {
    let u = userName.value.trim();
    let pn = phone.value.trim();
    let p = passWord.value;
    let confirm = confirmpass.value;

    if (u === '' || pn === '' || p === '' || confirm==='') {
        alert('Vui lòng nhập thông tin!!');
        return;
    }

    const phonePattern = /^\d{10}$/; 
    if (!phonePattern.test(pn)) {
        alert('Số điện thoại không hợp lệ!');
        return;
    }
    if (confirm != p) {
        alert('Mật khẩu nhập lại không giống!')
    }


    alert('Bạn đã tạo tài khoản thành công, hãy quay lại đăng nhập');
}