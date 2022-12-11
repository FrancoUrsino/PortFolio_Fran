const navbar = document.querySelector('.nav__container--menu');
const navlist = document.querySelector('.nav__container--list');
const links = document.querySelector('.nav__container--items');

navbar.addEventListener('click', function(){
  this.classList.toggle('click');
  navlist.classList.toggle('open');
})
