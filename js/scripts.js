"use strict";


let windowHeight = window.innerHeight;

window.addEventListener('resize', function () {
   windowHeight = window.innerHeight;
})


let headerHeight = document.getElementById('header').clientHeight;

for (let link of document.getElementsByClassName('nav_link')) {
   link.addEventListener('click', function (e) {
      e.preventDefault();
      let idSection = this.getAttribute('href');
      window.scrollTo({
         top: document.querySelector(idSection).offsetTop - headerHeight,
         left: 0,
         behavior: 'smooth',
      })
   })
}

for (let link of document.getElementsByClassName('nav_link')) {
   let sectionId = link.getAttribute('href');
   window.addEventListener('scroll', function (e) {
      let pos = document.querySelector(sectionId).getBoundingClientRect();
      if (pos.top < windowHeight / 2 && pos.top > - 1 * (pos.height - windowHeight / 2)) {
         link.classList.add('nav_link_active')
      } else {
         link.classList.remove('nav_link_active')
      }
   })
}

let upBtn = document.getElementById('up');

window.addEventListener('scroll', function () {
   if (windowHeight < window.scrollY) {
      upBtn.classList.add('up__active')
   }
   else {
      upBtn.classList.remove('up__active')
   }
})

upBtn.addEventListener('click', function () {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
})