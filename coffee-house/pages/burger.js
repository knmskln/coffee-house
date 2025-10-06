const body = document.body;
const burger = document.getElementById('burger');
const burgerMenuWrapper = document.getElementById('burger-menu-wrapper');

burger.addEventListener('click', function () {
    burgerMenuWrapper.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('wrapper-active');
});

burgerMenuWrapper.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        burgerMenuWrapper.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('wrapper-active');
    }
});