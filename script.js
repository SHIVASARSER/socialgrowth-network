// Modal functionality
const modal = document.getElementById('order-modal');
const closeBtn = document.getElementsByClassName('close')[0];
const buyNowButtons = document.querySelectorAll('.buy-now');
const orderForm = document.getElementById('order-form');

// Open modal on Buy Now click
buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const packageValue = button.getAttribute('data-package');
        document.getElementById('package').value = packageValue;
        modal.style.display = 'block';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submission
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(orderForm);
    const data = Object.fromEntries(formData);
    alert(`Order submitted!\nName: ${data.name}\nUsername: ${data.username}\nPackage: ${data.package}\nEmail: ${data.email}`);
    modal.style.display = 'none';
    orderForm.reset();
});
