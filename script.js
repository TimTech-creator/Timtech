document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting immediately

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (!name || !email || !phone) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simple email regex check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simple phone number validation (basic 10-15 digits)
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number (10–15 digits).');
            return;
        }

        alert('Form submitted successfully!');
        form.submit(); // If everything is valid, submit the form
    });
});
