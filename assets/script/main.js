const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('navbar');
const liItems = document.querySelectorAll('ul > li');

burgerMenu.addEventListener('click', function () {
    this.classList.toggle("burger-open");
    nav.classList.toggle("is-open");
});

liItems.forEach(function (liItem) {
    liItem.addEventListener('click', function () {
        burgerMenu.classList.remove("burger-open");
        nav.classList.remove("is-open");
    });
});