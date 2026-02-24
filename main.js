document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });

    // Mobile Nav Toggle
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav--open');
            navToggle.classList.toggle('nav-toggle--open');
            document.body.classList.toggle('overflow-hidden');
        });
    }

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile nav if open
                nav.classList.remove('nav--open');
                navToggle.classList.remove('nav-toggle--open');
                document.body.classList.remove('overflow-hidden');

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
