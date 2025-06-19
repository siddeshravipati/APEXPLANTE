// Show alert when "Reserve a Table" button is clicked
function showAlert() {
  alert("Reservation functionality coming soon!");
}

// Future expansion: Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Menu section animation on scroll (if desired)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.dish').forEach(dish => {
    const dishTop = dish.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (dishTop < windowHeight - 50) {
      dish.classList.add('show');
    }
  });
});