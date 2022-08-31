//Navbar
var nav = document.querySelector('nav');
var banner = document.getElementById('banner');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
          nav.classList.add('bg-custom','shadow');
    } else {
          nav.classList.remove('bg-custom','shadow');
    }
});
