// initialize slideIndex to 1, call showslide func w slideindex argument
let slideIndex = 1;
showSlides(slideIndex);

//used to move to next or previous slide, by adding or subtracting value of slideindex
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//used to display img corresponding to certain slide index
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//used to display img corresponding to current slideindex
//slides n dots variable are set to the html elements with the corresponding class name
//1st if statement checks if n is greater than the length of slides, if yes, resets the value of slideindex to 1
//2nd if statement checks if the value of n is less than 1, if yes, sets the slideindex to length of slide, eg 1
//1st for loop is used to hide all the slides by setting their display CSS property to none
//2nd for loop is used to remove the active class from all the dots.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
