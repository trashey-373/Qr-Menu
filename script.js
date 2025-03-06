// Add smooth scrolling animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add category highlight on scroll
window.addEventListener('scroll', () => {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        const rect = category.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
            category.style.opacity = '1';
        } else {
            category.style.opacity = '0.6';
        }
    });
});