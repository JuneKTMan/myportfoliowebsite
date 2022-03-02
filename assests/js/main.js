/*==================== NAV MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU WHEN MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // remove show class menu when click
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS OPEN CLOSE the arrow====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
/* Will develop this part later */

/*==================== TIMELINE TABS ====================*/
 /* make a timer in timer.js*/

/*==================== PORTFOLIO MODAL fail script====================*/
/* try to make a popup on portfolio but not work*/

/*==================== PORTFOLIO SWIPER DISPLAY  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 



/*==================== PORTFOLIO1,2,3 CONTROL OPEN WINDOW  ====================*/
/*let other = null; // with portfolio link
let features =
    'menubar=yes,location=yes,resizable=no,scrollbars=yes,status=no,height=700,width=700';

     document.getElementById('portfolio1__button').addEventListener('click', (ev) => {
    //open portfolio game button in a new tab or window
        let url = 'portfolio.html';
        let other = window.open(url, '_blank', features);
    });

    document.getElementById('portfolio2__button').addEventListener('click', (ev) => {
        //open portfolio game button in a new tab or window
            let url = 'portfolio2.html';
            let other = window.open(url, '_blank', features);
    });

    /*========== it not work on portfolio 3 =========*/
    
    /*document.getElementById('portfolio3__button').addEventListener('click', (ev) => {
        //open portfolio game button in a new tab or window
            let url = 'portfolio3.html';
            let other = window.open(url, '_blank', features);
    });
    */
  

/*==================== SCROLL SECTIONS ACTIVE LINK WIll SHOW OR HIDE WHEN BROSWER RESIZE====================*/
const section = document.querySelectorAll('section[id]');


function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetheight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY.sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']').classList
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList
        }
    })   
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER  ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // it's not work well, can not show the icon when scroll down again, need to revise this later//
    if(this.scrollY >=80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP (add motion to the scroll icon, but it doesn't work, need to developer later) ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 560 viewpoint height, add the show-scroll class to the a tag with the scroll//
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== CONTACT MODAL POPUP(the script not work again, will develop later)====================*/
const modalViews = document.querySelectorAll('contact__modal'),
    modalBtns = document.querySelectorAll('.contact__button'),
    modalCloses = document.querySelectorAll('.contact_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')

}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click',() =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')

        })
    })
})

/*==================== CONTACT FORMSPREE====================*/
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)