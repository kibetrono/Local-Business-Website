// Form validation and handling
document.addEventListener('DOMContentLoaded', function () {
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const service = document.getElementById('service');
            const message = document.getElementById('message');

            // Reset previous error states
            [name, email, service, message].forEach(field => {
                if (field) {
                    field.classList.remove('is-invalid');
                }
            });

            // Validate fields in order
            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                showAlert('Please enter your name', 'danger');
                name.focus();
                return;
            }

            if (!email.value.trim() || !email.value.includes('@')) {
                email.classList.add('is-invalid');
                showAlert('Please enter a valid email', 'danger');
                email.focus();
                return;
            }

            if (service && !service.value) {
                service.classList.add('is-invalid');
                showAlert('Please select a service', 'danger');
                service.focus();
                return;
            }

            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                showAlert('Please enter your message', 'danger');
                message.focus();
                return;
            }

            // If all valid
            alert(`Thank you ${name.value}! We have received your message and will contact you soon.`, 'success');
            contactForm.reset();
        });
    }
    // Navigation highlight
    const currentPage = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });


    // Service details interaction in services page
    const overviewCards = document.querySelectorAll('.overview-card');
    overviewCards.forEach(card => {
        card.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-service');
            const serviceName = this.querySelector('h3').textContent;
            showAlert(`Learn more about ${serviceName}`);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

});

// Alert system
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed start-50 translate-middle`;
    alertDiv.style.cssText = `
        top: 20%;
        z-index: 1000;
        min-width: 300px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        font-size: 1.1rem;
        font-weight: 500;
    `;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.body.appendChild(alertDiv);

    setTimeout(() => alertDiv.remove(), 3000);
}

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
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