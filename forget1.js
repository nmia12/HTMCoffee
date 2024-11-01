const phone = document.getElementById('phone');
const button = document.getElementById('next');

button.addEventListener('click', function(event) {
    event.preventDefault(); 
    const phoneValue = phone.value.trim();
    const phonePattern = /^(0[0-9]{9})$/; 

    if (!phonePattern.test(phoneValue)) {
        alert('Số điện thoại không hợp lệ! Vui lòng nhập lại.');
    } else {
        window.location.href = './forget2.html';
    }
});
