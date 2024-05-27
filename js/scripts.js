/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));

});

var typingElement = document.querySelector('.typing');

var typed = new Typed(typingElement, {
    //strings: ["Student", "Web Developer", "UI/UX Designer", "Cybersecurity Enthusiast"],
    strings: ["Student", "Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// window.addEventListener('scroll', function() {
//     var navbar = document.getElementById('mainNav');
//     var header = document.querySelector('header');
//     var headerHeight = header.offsetHeight;

//     if (window.pageYOffset > headerHeight) {
//         navbar.classList.add('sticky-top');
//     } else {
//         navbar.classList.remove('sticky-top');
//     }
// });


// function openModal(image) {
//     // Create a modal element
//     var modal = document.createElement('div');
//     modal.className = 'modal';
    
//     // Create an image element to display the larger image
//     var modalImg = document.createElement('img');
//     modalImg.src = image.src;
//     modalImg.alt = image.alt;
    
//     // Append the image to the modal
//     modal.appendChild(modalImg);
    
//     // Append the modal to the body
//     document.body.appendChild(modal);
    
//     // Close the modal when clicked outside of the image
//     modal.onclick = function() {
//       modal.remove();
//     };
//   }