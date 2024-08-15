/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
// window.addEventListener('DOMContentLoaded', event => {
//     const listHoursArray = document.body.querySelectorAll('.list-hours li');
//     listHoursArray[new Date().getDay()].classList.add(('today'));

// });

//create variable typingelement, uses querySelector() method to select the element with the class of "typing"
var typingElement = document.querySelector('.typing');
var typed = new Typed(typingElement, {
    strings: ["Student", "Web Developer", "UI/UX Designer", "Cybersecurity Enthusiast"],
    // strings: ["Student", "Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
//typeSpeed: 100,determines the speed of each character being typed out
//backSpeed: 100,determines the speed at which the animation should erase each string 
//loop: true: makes the typed strings loop infinitely