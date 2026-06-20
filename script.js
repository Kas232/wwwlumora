// script.js

// --- CART FUNCTIONALITY ---
const cartCount = document.getElementById("cart-count");
const addCartButtons = document.querySelectorAll(".add-cart");
const cartBtn = document.querySelector(".cart-btn");

// Load saved cart items from localStorage (if any)
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
updateCartCount();

// Add to Cart
addCartButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const productCard = e.target.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = productCard.querySelector("p").textContent;

        // Save product info
        cartItems.push({ name: productName, price: productPrice });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        updateCartCount();

        alert(`${productName} added to cart!`);
    });
});

// Update Cart Count
function updateCartCount() {
    cartCount.textContent = cartItems.length;
}

// Show Cart Items when clicking Cart button
cartBtn.addEventListener("click", () => {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
    } else {
        let cartSummary = "🛒 Your Cart:\n\n";
        cartItems.forEach((item, index) => {
            cartSummary += `${index + 1}. ${item.name} - ${item.price}\n`;
        });
        alert(cartSummary);
    }
});

// --- CONTACT FORM HANDLER ---
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const name = contactForm.querySelector("input[type='text']").value;
    const email = contactForm.querySelector("input[type='email']").value;
    const message = contactForm.querySelector("textarea").value;

    // For now, just show a confirmation
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Reset form
    contactForm.reset();
});
