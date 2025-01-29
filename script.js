  // Funcție care adaugă clasa 'visible'
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Adaugă efect
const donateButton = document.querySelector('.cta-button');
donateButton.addEventListener('click', function() {
    donateButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        donateButton.style.transform = 'scale(1)';
    }, 200);
});
