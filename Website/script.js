document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle functionality
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // When the hamburger button is clicked, toggle the menu visibility
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
