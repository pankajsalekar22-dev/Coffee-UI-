const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOPenBUtton = document.querySelector("#menu-open-button");
const menuCloseBUtton = document.querySelector("#menu-close-button")
menuOPenBUtton.addEventListener("click",()=>{
document.body.classList.toggle("show-mobile-menu");
});

menuCloseBUtton.addEventListener("click",()=>{
    menuOPenBUtton.click();
    document.body.classList.remove("show-mobile-menu");
});


navLinks.forEach(link=>{
link.addEventListener('click',()=>
 menuOPenBUtton.click());
});

// Initialize Swiper


const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor : true,
  sapceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPerView:1
    },
     768:{
        slidesPerView:2
    }, 
    1024:{
        slidesPerView:3
    }
  }

});

