const beliButtons = document.querySelectorAll('.beli');
const cartCount = document.querySelector('#cart-count');
const cartButton = document.querySelector('#cart-count');
const cartItemsContainer = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');

let cartItems = [];

cartButton.addEventListener('click', () => {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>${item.quantity} x ${item.price}</p>
      </div>
    `;
        cartItemsContainer.appendChild(itemElement);

        total += item.quantity * item.price;
    });

    cartTotal.textContent = `Total: Rp ${total}`;
});

beliButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentNode;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('.harga').textContent;
        const productImage = product.querySelector('img').src;

        const item = cartItems.find(item => item.name === productName);

        if (item) {
            item.quantity++;
        } else {
            cartItems.push({
                name: productName,
                price: parseInt(productPrice.substring(3)),
                image: productImage,
                quantity: 1
            });
        }
    });
});
