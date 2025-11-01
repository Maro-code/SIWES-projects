const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
        function filterProjects(category) {
            const tabs = document.querySelectorAll('.filter-tab');
            const cards = document.querySelectorAll('.card');
            
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            
            cards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.dataset.category === category ? 'block' : 'none';
                }
            });
        }

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

