var menu = document.querySelector('#menu');
var drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (e) {
    drawer.classList.toggle('open');
    menu.classList.toggle('open');
    e.stopPropagation();
});
