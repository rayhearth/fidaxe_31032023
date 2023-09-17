const burgerMenu = document.getElementById('burger-menu');
console.log(burgerMenu)
const nav = document.getElementById('navbar');
const liItems = document.querySelectorAll('.nav-links li');

burgerMenu.addEventListener('click', function () {
    console.log('hi');
    this.classList.toggle("burger-open");
    nav.classList.toggle("is-open");
});
