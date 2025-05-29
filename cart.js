let cartItems = [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        renderCart();
        updateCartCount();
    }
}

// Add item to cart
function addItemToCart(item) {
    cartItems.push(item);
    saveCart();
    renderCart();
    updateCartCount();
}

// Remove item from cart
function removeItemFromCart(itemIndex) {
    cartItems.splice(itemIndex, 1);
    saveCart();
    renderCart();
    updateCartCount();
}

// Render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item.name; // Assuming item has a name property
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItemFromCart(index);
        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);
    });
}

// Update cart count
function updateCartCount() {
    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `Total items: ${cartItems.length}`;
}

// Load cart when the page loads
window.onload = function() {
    loadCart();
};
