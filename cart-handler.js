document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartAlert = document.getElementById('cartAlert');
    const alertMessage = document.getElementById('alertMessage');

    // Function to add item to cart
    function addItemToCart(item) {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(item);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            alertMessage.textContent = `${productName} added to cart!`;
            
            // Show alert
            cartAlert.style.display = 'block';
            setTimeout(() => {
                const alert = new bootstrap.Alert(cartAlert);
                alert.close();
            }, 3000);
            
            // Add product to cart in localStorage
            const product = { name: productName };
            addItemToCart(product);

            console.log(`${productName} added to cart`);
        });
    });
});
