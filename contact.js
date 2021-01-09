var selGenre, inTime, inChMedia, inChDB, inChUI, txtDes, mForm, fList, inFile, selFileUI, selFileMedia, submit;

mForm = document.getElementById("cf");

fList = document.getElementById("subject");//List of "subjects", that the contact form can be used for.

const inArry = [];

submit = document.getElementById("submit");









// Select list for the web project form.
var gList = ["Please select the type of website you want built...", "Market/Store", "Blog", "Business", "Informational", 'Entertainment'];
selGenre = document.createElement("select");
selGenre.name = "genre";
selGenre.length = 6;
selGenre.className = "cc";
selGenre.style.width = "35%";
for(let i = 0; i < selGenre.length; i++){
    selGenre.options[i].text = gList[i];
    selGenre.options[i].value = gList[i];
}




var gLabel = document.createElement("label");
gLabel.innerText = "Type of Website";
gLabel.id = "hc1";
gLabel.className = "cc";
inArry.push(gLabel, selGenre);


var tLabel = document.createElement("label");
tLabel.className = "cc";
tLabel.innerText = "Please select when you need the project completed.";
inTime = document.createElement("input");
inTime.type = "date";
inTime.name = "timeline"
inTime.className = "cc";
inTime.style.width = "35%";
inArry.push(tLabel,inTime);

var mdLabel = document.createElement("label");

mdLabel.className = "cc";
mdLabel.innerText = "Do you have media to be uploaded and used? Check for yes.";
inChMedia = document.createElement("input");
inChMedia.type = "checkbox";
inChMedia.name = "mediaIn";
inChMedia.className = "cc";
inArry.push(mdLabel,inChMedia);




selFileMedia = document.createElement("input");
selFileMedia.className = "cc";
selFileMedia.style.marginLeft = "40%";
selFileMedia.style.width = "30%";
selFileMedia.type = "file";
selFileMedia.multiple = "multiple";


//Event listener to monitor the checked state, allowing the submitting of valid media.
inChMedia.addEventListener("click", function(){
    if(inChMedia.checked == true){
        mForm.insertBefore(selFileMedia,dbLabel);
    }else if(inChMedia.checked == false){
        mForm.removeChild(selFileMedia);
    }
})




var dbLabel = document.createElement("label");
dbLabel.className = "cc";
dbLabel.innerText = "Will you need database integration? Check for yes.";
inChDB = document.createElement("input");
inChDB.type = "checkbox";
inChDB.name = "database";
inChDB.className = "cc";
inArry.push(dbLabel,inChDB);


var uiLabel = document.createElement("label");
uiLabel.className = "cc";
uiLabel.innerText = "Do you have a UI or UX template that you would like to use? Check for yes.";
inChUI = document.createElement("input");
inChUI.type = "checkbox";
inChUI.name = "ui";
inChUI.className = "cc";
inArry.push(uiLabel,inChUI);


selFileUI = document.createElement("input");
selFileUI.className = "cc";
selFileUI.type = "file";
selFileUI.multiple = "multiple";
selFileUI.name = "uiIn"
selFileUI.style.marginLeft = "40%";
selFileUI.style.width = "30%";

inChUI.addEventListener("click", function(){
    if(inChUI.checked == true){
        mForm.insertBefore(selFileUI,submit);
    }else if(inChUI.checked == false){
        mForm.removeChild(selFileUI);
    }
})



//Each case in the switch function will append a specific group of fields for the form, via a for loop.
fList.addEventListener("change", function() {
   switch(fList.selectedIndex){
       case 1:  for(let i = 0; i < inArry.length;i++){
           mForm.append(inArry[i]);
           mForm.append(submit);
       }

   }
})