document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy loading for profile picture
    const profilePic = document.querySelector('.profile-picture');
    if (profilePic) {
        profilePic.loading = 'lazy';
    }

    // Add year to publications if needed
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.publication-year').forEach(element => {
        if (element.textContent.includes('[current]')) {
            element.textContent = element.textContent.replace('[current]', currentYear);
        }
    });

    // Track CV downloads
    const cvLink = document.querySelector('.cv-link');
    if (cvLink) {
        cvLink.addEventListener('click', function() {
            console.log('CV downloaded'); // Replace with actual analytics code if needed
        });
    }

    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });
});