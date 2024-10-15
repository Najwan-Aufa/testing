// Get all sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    // Loop through sections to determine which one is in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Add active class to the current section link
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
