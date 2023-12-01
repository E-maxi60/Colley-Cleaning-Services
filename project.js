'use strict'
 const projectContainer = document.querySelector('.project-main-container');
 const beforeAndAfter = document.querySelectorAll('.before-after-container');
 const img = document.querySelectorAll('.project-img');
 const projectItem = document.querySelectorAll('.project-item');
 const nav = document.querySelector('.nav')



 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 // hover to change project from before to after


 
projectContainer.addEventListener('mouseover',function(el){
    console.log(el.target)
    if(el.target.classList.contains('project-img')){
        el.target.src = el.target.dataset.src

    }
})

projectContainer.addEventListener('mouseout',function(el){
    console.log('mouse leaves element')
    if(el.target.classList.contains('project-img')){
    el.target.src= el.target.dataset.srcReverse
    }
})

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



////  OPENINGING AND CLOSING OF NAVIGATION MENU FOR MOBILE


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













////////////////////////////////////////////////////////////////////////////////////////////////////////
// hover and clicking on before and after button to change images

// projectItem.forEach(function(el){
//     el.addEventListener('mouseover',function(element){
//         this.lastElementChild.classList.remove('hidden')

//     })
// })

// projectItem.forEach(function(el){
//     el.addEventListener('mouseout',function(element){
//         this.lastElementChild.classList.add('hidden')
//         this.firstElementChild.src = this.firstElementChild.dataset.srcReverse

//     })
// })


const after = document.querySelectorAll('.after');
after.forEach(function(el){
    el.addEventListener('click',function(e){
        this.parentElement.previousElementSibling.src=this.parentElement.previousElementSibling.dataset.src
    })
})


const before = document.querySelectorAll('.before');
before.forEach(function(el){
    el.addEventListener('click',function(e){
        console.log(this.parentElement.previousElementSibling.src)
        this.parentElement.previousElementSibling.src=this.parentElement.previousElementSibling.dataset.srcReverse
    })
})