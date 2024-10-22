let cartItems = [];

function updateCart() {
    const cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = cartItems[i].name + ' - ' + cartItems[i].price + ' VND';
        cartList.appendChild(listItem);
        totalPrice += cartItems[i].price;
    }
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = 'Thanh Toán: ' + totalPrice + ' VND';
}
function addToCart(name, price) {
    cartItems.push({name:name, price:price});
    updateCart();
}
const buttons = document.querySelectorAll('.container button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        const productContainer = event.target.closest('.container');
        const productName = productContainer.querySelector('h5').textContent;
        const productPriceText = productContainer.querySelector('h6').textContent;

        const productPrice = parseInt(productPriceText.replace(/[^0-9]/g, ''), 10);
        addToCart(productName, productPrice);
    });
}

