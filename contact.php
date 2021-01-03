
<!-- Can not run on the hosting server I have currently -->

<?php
if(isset($_POST["submit"])) {
   $recipient="inframesc@gmail.com";
   $fName = $_POST["firstname"];
   $lName = $_POST["lastname"];
   $name = $fName + $lName;
   $subject=$_POST["subject"];
   $sender=$_POST["rEmail"];
   $message=$_POST["message"];

   $header = "From: " .$rEmail;
   $text = "You have recieved an email from " .$name .\n\n .$message;
 

   mail($recipient, $subject, $text, $header);
   echo "Contact form sent, I will be reaching out to you soon! Thank you.";
   
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contact.css">
    <title>Contact</title>
</head>
<body>

<h1>Contact Me</h1>

 <div id="cc">


<form id="cf" action="contact.php">

    
    <div id="fname">

<input type="text" id="fname" name="firstname" placeholder="Enter your first name...">
</div>

<div id="lname">

<input type="text" id="lname" name="lastname" placeholder="Enter your last name...">
</div>

<div id="email">

<input type="text" id="email" name="email" placeholder="Enter your email...">
</div>

<label for="subject">Subject</label>
<select id="subject" name="subject">
    <option value="holder">Select project type...</option>
    <option value="Website Build">Website Build</option>
    <option value="Program/App Build">Program/App Build</option>
    <option value="Feedback">Feedback</option>
    <option value="Team Up!">Team Up!</option>
    <option value="Information Request">Information Request</option>
   
</select>

<input type="submit" value="submit">





</form>

<form class="vf">
<!-- Need fields for the type of website, what type of content will be shared on the site, what features will be how many pages,  -->
<div class="fcontainer">
    <label for="genre">Website Type</label>
<select name="genre" class="">

<option value=""> Market/Store </option>
<option value="">Blog</option>
<option value="">Business</option>
<option value="">Promotional Sit</option>
<option value="">Entertainment</option>
<option value="">Informational</option>
</select>


<div class="cc">
<label for="timeline" id="timeline">Build Timeline</label>
<input type="date" id="date" ></input>
 </div>

<div class="cc">
<label for="media">Do you have any media to bee uploaded?</label>
<input type="checkbox" id="mediabox"></input>
</div>

<div class="cc">
<label for="db">Will you need database integration? Check for yes.</label>
<input type="checkbox" id="db"></input>
</div>

<div class="cc">
<label for="ui" id="ui">Do you have a UI template?</label>
<input type="checkbox" id="uibox"></input>
</div>


<div class="cc">
<label for="">Project Details</label>
<textarea id="pd" name="pd"></textarea>
</div>


</div>
</form>

<form class="vf">


</form>

<form class="vf">


</form>

<form class="vf">


</form>

<form class="vf">


</form>
</div>


   <script src="contact.js"></script> 

</body>
</html>