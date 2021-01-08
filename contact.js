var selGenre, inTime, inChMedia, inChDB, inChUI, txtDes, mForm, fList, inFile, selFileUI, selFileMedia;

mForm = document.getElementById("cf");

fList = document.getElementById("subject");//List of "subjects", that the contact form can be used for.












// Select list for the web project form.
var gList = ["Please select the type of website you want built...", "Market/Store", "Blog", "Business", "Informational", 'Entertainment'];
selGenre = document.createElement("select");
selGenre.name = "genre";
selGenre.length = 6;
for(let i = 0; i < selGenre.length; i++){
    selGenre.options[i].text = gList[i];
    selGenre.options[i].value = gList[i];
}


var gLabel = document.createElement("label");
gLabel.innerText = "Type of Website";
gLabel.id = "hc1";


var tLabel = document.createElement("label");
tLabel.innerText = "Please select when you need the project completed.";
inTime = document.createElement("input");
inTime.type = "date";
inTime.name = "timeline"

var mdLabel = document.createElement("label");
mdLabel.innerText = "Do you have media to be uploaded and used? Check for yes.";
inChMedia = document.createElement("input");
inChMedia.type = "checkbox";
inChMedia.name = "mediaIn";

selFileMedia = document.createElement("input");
selFileMedia.type = "file";
selFileMedia.multiple = "multiple";


var dbLabel = document.createElement("label");
dbLabel.innerText = "Will you need database integration? Check for yes.";
inChDB = document.createElement("input");
inChDB.type = "checkbox";
inChDB.name = "database";


var uiLabel = document.createElement("label");
uiLabel.innerText = "Do you have a UI or UX template that you would like to use? Check for yes.";
inChUI = document.createElement("input");
inChUI.type = "checkbox";
inChUI.name = "ui";

selFileUI = document.createElement("input");
selFileUI.type = "file";
selFileUI.multiple = "multiple";
selFileUI.name = "uiIn"

fList.addEventListener("change", function() {
   switch(fList.selectedIndex){
       case 1:  mForm.append(gLabel);
                mForm.append(selGenre);
                mForm.append(tLabel);
                mForm.append(inTime);
                mForm.append(mdLabel);
                mForm.append(inChMedia);
                mForm.append(uiLabel);
                mForm.append(inChUI);
                mForm.append(dbLabel);
                mForm.append(inChDB);
                let submit = document.getElementById("submit");
                mForm.append(submit);

   }
})