// // Toggle Burger Menu for Mobile
// const burgerMenu = document.getElementById('burger-menu');
// const navbarLinks = document.querySelector('.navbar-links');

// burgerMenu.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
//     burgerMenu.classList.toggle('active');
// });
// Toggle Burger Menu for Mobile
const burgerMenu = document.getElementById('burger-menu');
const navbarLinks = document.querySelector('.navbar-links');

// Toggle the 'active' class for the menu and the burger icon
burgerMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');  // Toggles visibility of the menu
    burgerMenu.classList.toggle('active');  // Toggles the appearance of the burger icon
});

// Close the menu when a link is clicked
const navbarItems = document.querySelectorAll('.navbar-links a');
navbarItems.forEach(item => {
    item.addEventListener('click', () => {
        navbarLinks.classList.remove('active'); // Hides the menu
        burgerMenu.classList.remove('active');  // Resets the burger icon back to normal
    });
});