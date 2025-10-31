const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // ============================================
        // FORM SUBMISSION CODE STARTS HERE
        // ============================================
        
        // Initialize EmailJS with your public key
        emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
        
        const contactForm = document.getElementById('contactForm');
        const statusMessage = document.getElementById('statusMessage');

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                // Send email using EmailJS
                await emailjs.send(
                    'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
                    'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
                    {
                        from_name: document.getElementById('name').value,
                        from_email: document.getElementById('email').value,
                        subject: document.getElementById('subject').value,
                        message: document.getElementById('message').value,
                        to_email: 'timilehin332@gmail.com'
                    }
                );

                // Show success message
                statusMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                statusMessage.className = 'status-message success';
                statusMessage.style.display = 'block';
                contactForm.reset();
                
            } catch (error) {
                // Show error message
                console.error('EmailJS Error:', error);
                statusMessage.textContent = 'Failed to send message. Please try again or email me directly.';
                statusMessage.className = 'status-message error';
                statusMessage.style.display = 'block';
            } finally {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    statusMessage.style.display = 'none';
                }, 5000);
            }
        });
        
        // ============================================
        // FORM SUBMISSION CODE ENDS HERE
        // ============================================
    </script>
