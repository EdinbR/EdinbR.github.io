// the currently displayed slide
var slideIndex = 0;

// this syntax means the function runs AFTER everything else has been loaded
$(function() {
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex + n);
}

// show the next (or prev) slide
function showSlides(slideToShow) {
  var slides = document.getElementsByClassName("mySlides");

  // this code just stops us going out of bounds in either direction
  if (slideToShow >= slides.length) {
	slideIndex = 0;
  } else if (slideToShow < 0) {
    slideIndex = slides.length-1
  } else {
    slideIndex = slideToShow;
  }
  
  // loop around the slides and hide or display them
  for (var i = 0; i < slides.length; i++) {
      if ( i == slideIndex) {
        // if current slide is desired slide then show it
        slides[slideIndex].style.display = "block";
      } else {
        // if current slide is not desired slide hide it
        slides[i].style.display = "none";
      }
  }

} 

