// Get all modal elements
//using the querySelectorAll() method, where the selector argument ".modal" 
//selects all HTML elements with a class of "modal"
var modals = document.querySelectorAll('.modal');

// Get all close buttons
//same as abv, selects all html elements with a class of "close"
var closeBtns = document.querySelectorAll('.close');

// Function to open the modal
//The openModal() function is defined to show the modal. 
//It accepts an event object as an argument, and it gets the modal ID from 
//the clicked element using the getAttribute() method.
function openModal(event) {
  var modalId = event.currentTarget.getAttribute('data-modal-id');
  var modal = document.getElementById(modalId);
  modal.style.display = 'block';
}
//modal id target id of modal to open
// get modal element using getElementById(), sets display property to block
//to make modal visible

// Function to close the modal
//hide modal,accepts an event object as an argument, 
//and it gets the modal element using the target property of the event, 
//traversing the DOM to find the parent element's parent element
function closeModal(event) {
  // Get the modal element that contains the clicked close button
  var modal = event.target.parentElement.parentElement;
  modal.style.display = 'none';
}

// Add event listeners to open the modals
var hexLinks = document.querySelectorAll('.hexLink');
        hexLinks.forEach(function (hexLink) {
            hexLink.addEventListener('click', openModal);
        });

// Add event listeners to the close buttons
closeBtns.forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

