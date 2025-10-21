// Mobile Menu Toggle
        const menuBars = document.getElementById('menu-bars');
        const navbar = document.querySelector('.navbar');

        menuBars.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuBars.classList.toggle('fa-times');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuBars.classList.remove('fa-times');
            });
        });

        // Appointment Modal
        const modal = document.getElementById('appointmentModal');
        const openBtn = document.getElementById('openAppointmentModal');
        const closeBtn = document.querySelector('.close-btn');

        openBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Form Submission
        document.getElementById('appointmentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Appointment request submitted successfully! We will contact you soon.');
            modal.style.display = 'none';
            e.target.reset();
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 .5rem 2rem rgba(0,0,0,.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.1)';
            }
        });
