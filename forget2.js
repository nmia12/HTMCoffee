const otp = document.getElementById('otp');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const changePassButton = document.getElementById('changepass');

changePassButton.addEventListener('click', function(event) {
    event.preventDefault();

    const o = otp.value.trim();
    const p = password.value;
    const confirm = confirmPassword.value;

    if (o === '' || p === '' || confirm === '') {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    const otpPattern = /^\d{6}$/;
    if (!otpPattern.test(o)) {
        alert('OTP không hợp lệ! Vui lòng nhập lại.');
        return;
    }

    if (p !== confirm) {
        alert('Mật khẩu nhập lại không giống! Vui lòng kiểm tra lại.');
        return;
    }

    alert('Bạn đã đổi mật khẩu thành công, hãy quay lại đăng nhập!');
});
