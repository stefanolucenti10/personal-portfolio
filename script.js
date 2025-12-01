document.addEventListener('DOMContentLoaded', () => {
    // Size Selection Logic
    const sizeBtns = document.querySelectorAll('.size-btn');

    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            sizeBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
        });
    });

    // Add to Cart Logic
    const addToCartBtn = document.getElementById('addToCartBtn');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            // Animation feedback
            addToCartBtn.textContent = "Aggiunto!";
            addToCartBtn.style.backgroundColor = "var(--accent-color)";

            // Increment counter
            count++;
            cartCount.textContent = count;

            // Reset button after 1.5s
            setTimeout(() => {
                addToCartBtn.textContent = "Aggiungi al Carrello";
                addToCartBtn.style.backgroundColor = ""; // Revert to CSS default
            }, 1500);
        });
    }
});
