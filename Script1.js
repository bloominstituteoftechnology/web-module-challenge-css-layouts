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
marquee.innerHTML = "This is the first iteration of my portfolio website. Check in often for updates or sign up for the newsletter!!"

var btn = document.getElementById("mButton");
console.log(btn.innerHTML);


const projectList = [
    {"name":"JS1 Assessment",
        "link":"https://github.com/BrinkofDusk/Unit-1-JS-Assessment/tree/Austin-Jansen",
            "description":"First JavaScript Assessment taken in week 3."},
            {"name":"JS Fundamentals Sprint",
            "link":"https://github.com/BrinkofDusk/web-sprint-challenge-javascript-fundamentals/tree/Austin-Jansen/challenges",
                "description":"JavaScript fundamentals sprint. Tested knowledge on closure, call back methods, and arrays. "},
                {"name":"JS Classes Exercise",
        "link":"https://github.com/BrinkofDusk/JS-Exercise-Classes",
            "description":"Assignment to demonstrate knowledge of JavaScript Classes."},
            {"name":"JS Prototype Exercise",
        "link":"https://github.com/BrinkofDusk/JS-Exercise-Prototype/tree/Austin-Jansen",
            "description":"Assignment to demonstrate understanding of prototyping in JavaScript."},
            {"name":"Advanced CSS and Intro to JavaScript",
        "link":"https://github.com/BrinkofDusk/web-module-challenge-objects/tree/Austin-Jansen",
            "description":"Applied knowledge of advanced CSS concepts and demonstrated basic knowledge of JavaScript."},
            {"name":"JS Objects",
        "link":"https://github.com/BrinkofDusk/web-module-challenge-objects/tree/Austin-Jansen",
         "description":"Demonstrated understanding of JavaScript objects."},
            
         {"name":"JS Intro",
        "link":"https://github.com/BrinkofDusk/Introduction-to-JavaScript/tree/Austin-Jansen",
            "description":"Baisc understanding of the introductory to the basics of JavaScript."},
            {"name":"Website Sprint Challenge",
        "link":"https://github.com/BrinkofDusk/web-Sprint-Challenge-User-Interface-and-Git/tree/Austin-Jansen",
            "description":"Sprint challenge to build multi-page website in three hours."},
            {"name":"DOM 1",
        "link":"https://github.com/BrinkofDusk/DOM-I/tree/Austin-Jansen",
            "description":"Assignment to assess understanding of how to use the DOM,"},
            
];

//Add projects and github links to page.

