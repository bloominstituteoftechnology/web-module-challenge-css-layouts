
var forms = document.getElementsByClassName("vf");
for(let i = 0;i < forms.length; i++){
    forms[i].style.display = "none";

}
let fselect = document.getElementById("subject");
fselect.addEventListener("change", function(){

    if(fselect.options.selectedIndex === 1){
        
        forms[0].style.display = "inline-block";
        forms[1].style.display = "none";
        forms[3].style.display = "none";
        forms[4].style.display = "none";
        forms[2].style.display = "none";
    }
    else if(fselect.options.selectedIndex === 2){
        forms[1].style.display = "inline-block";
        forms[0].style.display = "none";
        forms[2].style.display = "none";
        forms[3].style.display = "none";
        forms[4].style.display = "none";
    }
   else if(fselect.options.selectedIndex === 3){
        forms[2].style.display = "inline-block";
        forms[4].style.display = "none";
        forms[0].style.display = "none";
        forms[3].style.display = "none";
        forms[1].style.display = "none";
    }
  else  if(fselect.options.selectedIndex === 4){
        forms[3].style.display = "inline-block";
        forms[4].style.display = "none";
        forms[0].style.display = "none";
        forms[2].style.display = "none";
        forms[1].style.display = "none";
    }
   else if(fselect.options.selectedIndex === 5){
        forms[4].style.display = "inline-block";
        forms[3].style.display = "none";
        forms[2].style.display = "none";
        forms[1].style.display = "none";
        forms[0].style.display = "none";
    }
    else if(fselect.options.selectedIndex === 0){
        for(let i = 0;i <forms.length;i++){
            forms[i].style.display = "none";
        }
    }

    

})
