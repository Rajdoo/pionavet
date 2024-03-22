const navBtn = document.querySelector('.nav__button');
const navMobile = document.querySelector('.nav__link-box');
const footer = document.querySelector('.footer__date');
let serviceMelemect;
let serviceDelemect;
const serviceMboxAll = document.querySelectorAll('.mobile-service__list-info_box');
const serviceDboxAll = document.querySelectorAll('.desktop-service__boxes');

const main = () => {
    prepareDOMElements();
    prepereDOMEvents();
}

const prepareDOMElements = () => {
    serviceMelemect = document.querySelectorAll('.mobile-service__list-element');
    serviceDelemect = document.querySelectorAll('.desktop-service__list-element');
}

const prepereDOMEvents = () => {
    serviceMelemect.forEach(element => {
        element.addEventListener('click', serviceM);
    });
    serviceDelemect.forEach(element => {
        element.addEventListener('click', serviceD);
    });
}

const controlNav = () => {
    navMobile.classList.toggle('nav__link-box__open');
}

const footerYear = () => {
    const year = (new Date).getFullYear();
    footer.textContent = year;
}

const serviceM = (e) => {
    serviceMelemect.forEach(element => {
        if(element == e.target){
            element.classList.toggle('chooseCard');
            for (let i = 0; i < serviceMelemect.length; i++) {
                if(element == serviceMelemect[i]){
                    serviceMboxAll[i].classList.toggle('openCard');
                }else{
                    serviceMboxAll[i].classList.remove('openCard');
                }
            }
        }else{
            element.classList.remove('chooseCard');
        }
    });
}

const serviceD = (e) => {
    serviceDelemect.forEach(element => {
        if(element == e.target){
            element.classList.toggle('chooseCard');
            for (let i = 0; i < serviceDelemect.length; i++) {
                if(element == serviceDelemect[i]){
                    serviceDboxAll[i].classList.toggle('openCard');
                }else{
                    serviceDboxAll[i].classList.remove('openCard');
                }
            }
        }else{
            element.classList.remove('chooseCard');
        }
    });
}

document.addEventListener('DOMContentLoaded', main);
navBtn.addEventListener('click', controlNav);
footerYear();