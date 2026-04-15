document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.id;
            const link = document.querySelector(`nav a[href="#${id}"]`);
            if (link) {
                link.classList.toggle('active', entry.isIntersecting);
            }
        });
    }, {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0.2,
    });

    sections.forEach((section) => observer.observe(section));
});
