// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    });
});

// Form handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Check if form was submitted (for success/error messages)
        const urlParams = new URLSearchParams(window.location.search);
        const statusMessage = document.getElementById('statusMessage');

        if (urlParams.has('success')) {
            statusMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            statusMessage.className = 'status-message success';
            statusMessage.style.display = 'block';

            // Clear the URL parameters
            window.history.replaceState({}, document.title, window.location.pathname);
        } else if (urlParams.has('error')) {
            statusMessage.textContent = 'There was an error sending your message. Please try again or email me directly.';
            statusMessage.className = 'status-message error';
            statusMessage.style.display = 'block';

            // Clear the URL parameters
            window.history.replaceState({}, document.title, window.location.pathname);
        }

        // Form validation and submission handling
        contactForm.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            // Basic validation
            if (!name || !email || !subject || !message) {
                e.preventDefault();
                statusMessage.textContent = 'Please fill in all fields before submitting.';
                statusMessage.className = 'status-message error';
                statusMessage.style.display = 'block';
                return false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                statusMessage.textContent = 'Please enter a valid email address.';
                statusMessage.className = 'status-message error';
                statusMessage.style.display = 'block';
                return false;
            }

            // Show sending state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            statusMessage.textContent = 'Sending your message...';
            statusMessage.className = 'status-message info';
            statusMessage.style.display = 'block';

            // Form will submit to FormSubmit, which will handle the email sending
        });
    }
});
