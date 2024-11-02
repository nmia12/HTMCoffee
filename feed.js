const name = document.getElementById('name');
const gmail = document.getElementById('gmail');
const mess = document.getElementById('mess');

const button = document.getElementById('sub');

button.addEventListener('click', function(event){
    event.preventDefault();
    feedback();
});

function feedback() {
    let n = name.value.trim();
    let g = gmail.value;
    let m = mess.value.trim();

    if (n === '' || g === '' || m === '') {
        alert('Vui lòng nhập thông tin và phản hồi của bạn!');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
    if (!emailPattern.test(g)) {
        alert('Email không hợp lệ!');
        return;
    }


    alert('Cảm ơn bạn đã gửi những phản hồi này tới chúng tôi');
}