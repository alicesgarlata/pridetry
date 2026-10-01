// 1. Evidenzia automaticamente il link nella barra di navigazione in base alla sezione visibile
const sections = document.querySelectorAll('section, [id^="sez"], #team');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 2. Animazione delicata di comparsa (Fade-in on scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.benchmark-card, .process-step, .team-member, .info-box').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
