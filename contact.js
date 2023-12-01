'use strict'
const nav = document.querySelector('.nav');



////////////////////////////////////////////////////////////////////////////////
//fading nav items on hover on a particular element

const navHover = function(e,opacity){
    if(e.target.classList.contains('nav-item')){
      const link = e.target;
      const siblings =link.closest('.nav').querySelectorAll('.nav-item')
      const logo = link.closest('.nav').querySelector('img');
  
  
      siblings.forEach(function(el){
        if(el !== link){
          el.style.opacity = opacity
        }
  
        logo.style.opacity = opacity
      })
  }
  
  }
   nav.addEventListener('mouseover',function(e){
    navHover(e,0.5)
   });
  
   nav.addEventListener('mouseout',function(e){
    navHover(e,1)
   });


/* HAMBURGER ANIMATION*/
/* Open when someone clicks on the span element */

const hamburgerIcon = document.querySelector('.hamburger-container');
const closeNavBotton = document.querySelector('.closebtn');
const mobileNav = document.querySelector('.mobile-nav')


hamburgerIcon.addEventListener('click', function(e){
  e.preventDefault();
  console.log(this)
  mobileNav.style.display = 'none'
  
  document.getElementById("myNav").style.width = "100%";
});



closeNavBotton.addEventListener('click',function(e){
  document.getElementById("myNav").style.width = "0%";
  mobileNav.style.display = 'grid';

})


function closeNav() {
}
