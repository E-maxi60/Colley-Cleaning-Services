'use strict';

console.log('js active')
const allSection= document.querySelectorAll('.section');
const viewNav = document.querySelector('.view-nav-section');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.log-img');
const sec2 = document.querySelector('.hero-page2');
const dropArrow = document.querySelector('.circular-container');




//  slider

const sliderFuction = function(){
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotsContainer = document.querySelector('.dots');
    const dots = document.getElementById('dots_slider');
    
    
    let currSlide = 0;
    const maxSlide = slides.length;
    
    // fuctions
    const createDots = function(){
      slides.forEach(function(s,i){
        dotsContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}">
          </button>`
        );
      });
    };
    
    
    const activateDot = function(slide){
      document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
      
      document.querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
    }
    
    
    
    
    const goToSlide =function(slide){
      slides.forEach((s,i)=> s.style.transform =
      `translateX(${100*(i-slide)}%)`);
    };
    
    
    
    const nextSlide = function(){
      if(currSlide === maxSlide -1){
        currSlide = 0
      } else{
        currSlide++
      }
    
      goToSlide(currSlide);
      activateDot(currSlide);
    }
     
    const prevSlide= function(){
      if(currSlide === 0){
        currSlide = maxSlide-1
      } else{
        currSlide--
      }
    
      goToSlide(currSlide);
      activateDot(currSlide);
    }
    
    const init = function(){
      goToSlide(0);
      createDots(0);
      activateDot(0)
    }
    
    init();
    
    // Event Handlers
    
    btnRight.addEventListener('click',nextSlide);
    btnLeft.addEventListener('click',prevSlide);
    
    document.addEventListener('keydown',function(e){
      if (e.key === 'ArrowRight'){
        nextSlide()
      } else if(e.key==='ArrowLeft') {
        prevSlide()
      }
    
    })
    dotsContainer.addEventListener('click',function(e){
      if(e.target.classList.contains('dots__dot')){
        console.log('dots');
        const slide = e.target.dataset.slide;
        goToSlide(slide)
        activateDot(slide)
        
    
      }
    })
    }
    
    sliderFuction();

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    const serviceMainContainer =document.querySelector('.services-sec1-container');
    const servicesContainer = document.querySelectorAll('.services-sec1-item');
    const headerText = document.querySelectorAll('.service-head');
    const serviceP = document.querySelectorAll('.service-p');





    // Event Handlers

    // servicesContainer.forEach(function(el,i){

    //   el.addEventListener('mouseover',function(e){
    //     this.style.backgroundColor = '#0058bf';
    //     const child = Array.from(this.children);
    //     child[0].style.color = 'white'
    //     child[1].style.color = 'white'
     
    //   })
    // })
    
    
    // servicesContainer.forEach(function(el,i){

    //   el.addEventListener('mouseout',function(e){
    //     this.style.backgroundColor = '';
    //     const child = Array.from(this.children);
    //     console.log(child[0])
    //     child[0].style.color = ''
    //     child[1].style.color = ''
        
        
    //   })
    // })





 

 
   ////////////////////////////////////////////////////////////////////////////////////////////////////
    // changing color of services containers


    servicesContainer.forEach(function(el){
      el.addEventListener('mouseover',function(e){
        e.preventDefault();
        this.style.backgroundColor = '#0058bf'
        this.firstElementChild.style.color = 'white';
        this.lastElementChild.style.color = 'white'
      })
    })

      
    servicesContainer.forEach(function(el){
      el.addEventListener('mouseout',function(e){
        e.preventDefault();
        this.style.backgroundColor = ''
        this.firstElementChild.style.color = '';
        this.lastElementChild.style.color = ''
      })
    })



/////////////////////////////////////////////////////////////


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


/////////////////////////////////////////////////////////////////////////////////////////
// sticky navigation 

const navHeight = nav.getBoundingClientRect().height ;
const navSticky =function(entries){
    const [entry]= entries;
    if(!entry.isIntersecting) {
        nav.classList.add('sticky');
        logo.src =('images/Untitled-2 logo.png');

    }else{
        nav.classList.remove('sticky')
        logo.src =('images/Logo_colley-removebg-preview.png');
        }
}

const headerObserver = new IntersectionObserver(navSticky,{
    root:null,
    threshold:0,
    rootMargin:`-${navHeight}px`
})

headerObserver.observe(viewNav);




// REVEL SECTIONS

const revelSection = function(entries,observer){
  const [entry]= entries;
  if(!entry.isIntersecting)return;
  entry.target.classList.remove('hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revelSection,{
  root:null,
  threshold:0.15,
})

allSection.forEach(function(sec){
  sectionObserver.observe(sec)
  sec.classList.add('hidden')
})
