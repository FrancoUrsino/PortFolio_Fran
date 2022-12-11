const navbar = document.querySelector('.nav__container--menu');
const navlist = document.querySelector('.nav__container--list');
const links = document.querySelector('.nav__container--items');

navbar.addEventListener('click', function(){
  this.classList.toggle('click');
  navlist.classList.toggle('open');
})


let navigation = document.querySelector('.navigation');
let close = document.querySelector('.close');

navigation.onclick = function(){
  navigation.classList.add('active');
}
close.onclick = function(){
  navigation.classList.remove('active');
}