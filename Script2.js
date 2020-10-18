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
var proArr = document.getElementsByClassName("proBox");  
for(let i = 0; i < projectList.length; i++){
 proArr[i].childNodes[3].textContent = projectList[i].name;
 proArr[i].children[1].textContent = projectList[i].link;
 proArr[i].children[1].attributes[0].value = projectList[i].link;


 proArr[i].childNodes[11].textContent = projectList[i].description;
};

