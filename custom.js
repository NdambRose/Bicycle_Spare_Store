// JavaScript for Bicycle Store

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add to Cart Animation
document.querySelectorAll('.product-card .btn').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Added!';
        button.disabled = true;
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.disabled = false;
        }, 1500);
    });
});

// Responsive Navbar Toggle (Optional for Small Screens)
const navbar = document.querySelector('.navbar');
const toggleButton = document.createElement('button');
toggleButton.textContent = '☰';
toggleButton.className = 'navbar-toggle';
navbar.parentElement.insertBefore(toggleButton, navbar);

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
