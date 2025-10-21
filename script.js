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

        // Scroll Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.inner-technology, .doc-poster, .inner-services, .review-box, .stat-box').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Counter Animation for Statistics
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;

        const animateCounter = (counter) => {
            const target = counter.innerText.replace(/[^0-9]/g, '');
            const count = +target;
            const increment = count / speed;
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < count) {
                    counter.innerText = Math.ceil(current) + (counter.innerText.includes('+') ? '+' : '');
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target + (counter.innerText.includes('K') ? 'K+' : '+');
                }
            };
            updateCounter();
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            statsObserver.observe(counter);
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
