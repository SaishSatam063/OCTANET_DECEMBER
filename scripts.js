// Mobile Navigation Menu Toggle
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
