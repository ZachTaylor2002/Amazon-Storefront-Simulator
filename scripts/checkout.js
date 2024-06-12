import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
//import '../data/cart-class.js';
import { getTotalItemsInCart } from '../../data/cart.js';




// Function to update the item count in the header
function updateCartItemCount() {
    const itemCount = getTotalItemsInCart();
    const returnToHomeLink = document.querySelector(".return-to-home-link");

    if (returnToHomeLink) {
        returnToHomeLink.textContent = `${itemCount} items`;
    }
}

// Run the function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    updateCartItemCount();
    renderOrderSummary();
    renderPaymentSummary();
});