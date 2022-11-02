//Navbar
var nav = document.querySelector('nav');
var banner = document.getElementById('banner');


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  freeMode: true,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  }
});

var typed = new Typed(".auto",{
    strings:["a Web Developer","a UI Designer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
})
