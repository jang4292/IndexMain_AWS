const toggleBtn = document.querySelector('.navigation__toggle_button');
const menu = document.querySelector('.navigation__menu');
const icons = document.querySelector('.navigation__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});