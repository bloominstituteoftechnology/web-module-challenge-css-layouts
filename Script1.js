// JavaScript source code
var slideIndex = 1;




showSlides(slideIndex);
//next and previous controls

function plusSlides(n) {
    showSlides(slideIndex += n);
}



//currentSlide() for the dots to shadow properly
function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {  //Keeps slides hidden
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");//adds an active class to dots, to change their background when they are active.
    }
    slides[slideIndex - 1].style.display="block";
    dots[slideIndex - 1].className += " active";
}

var marquee = document.getElementById('announcement');
console.log(marquee);
marquee.innerHTML = "Good news! Fun facts are on track to be finished on 10/19/2020!"

var btn = document.getElementById("mButton");
console.log(btn.innerHTML);


