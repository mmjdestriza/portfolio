//Navbar
var nav = document.querySelector('nav');
var banner = document.getElementById('banner');


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var typed = new Typed(".auto",{
    strings:["a Web Developer","a UI Designer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
})
