// Get all modal elements
var modals = document.querySelectorAll('.modal');

// Get all close buttons
var closeBtns = document.querySelectorAll('.close');

// Function to open the modal
function openModal(event) {
  var modalId = event.currentTarget.getAttribute('data-modal-id');
  var modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Function to close the modal
// function closeModal(event) {
//   var modal = event.target.closest('.modal');
//   modal.style.display = 'none';
// }

// Function to close the modal
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


// Optionally, add a click event to close the modal when clicking outside of it
// window.addEventListener('click', function(event) {
//     modals.forEach(function(modal) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });