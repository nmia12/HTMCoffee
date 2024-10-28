
const cartItemsContainer = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');
let totalPrice = 0;


function addToCart(productName, productPrice){
    const li = document.createElement('li');
    li.textContent = `${productName} - ${productPrice},000 VND`;
    cartItemsContainer.appendChild(li);

    totalPrice += productPrice;
    totalPriceElement.textContent = `Tổng: ${totalPrice},000 VND`;
}

const addButtons = document.querySelectorAll('.product button');

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', function(event){
        const productContainer = event.target.closest('.container');
        const productName = productContainer.querySelector('.info h5').textContent;
        const productPrice = parseInt(productContainer.querySelector('.info h6').textContent.replace(' VND', ''));

        addToCart(productName, productPrice);
    });
}


const paymentButton = document.getElementById('paymentButton');
const paymentOptions = document.getElementById('paymentOptions');

paymentOptions.style.display = 'none';
function payment() {
    if (cartItemsContainer.children.length === 0) {
        alert('Bạn chưa thêm sản phẩm nào vào giỏ hàng!');
    } else {
        paymentOptions.style.display = 'block'; 
    }
}

function cash() {
    alert('Vui lòng thanh toán khi nhận hàng!')
}

function qr() {
    alert('Quét mã qr bên dưới để thanh toán!')
}






