// WhatsApp auto message for Buy Now buttons
const buyNowButtons = document.querySelectorAll('.buy-now');
const phoneNumber = "+918949399978"; // WhatsApp number

buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get package details from data attribute
        const packageDetails = button.getAttribute('data-price');

        // Prepare WhatsApp message
        const message = `Hi, I want to order this Instagram promotion package: ${packageDetails}`;
        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp in new tab
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    });
});
