
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    const discountCarousel = new bootstrap.Carousel('#discountCarousel', {
        interval: 3000,
        wrap: true,
        pause: 'hover'
    });
    
    // Countdown timer
    function updateCountdown() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 0);
        
        const diff = endOfDay - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').textContent = 
            `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartAlert = document.getElementById('cartAlert');
    const alertMessage = document.getElementById('alertMessage');
    
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
            
            // Here you would normally add to cart logic
            console.log(`${productName} added to cart`);
        });
    });
});
