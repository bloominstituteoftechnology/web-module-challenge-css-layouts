
<!-- Can not run on the hosting server I have currently -->

<?php
if(isset($_POST["submit"])) {
   $recipient="inframesc@gmail.com";
   $fName = $_POST["firstname"];
   $lName = $_POST["lastname"];
   $name = $fName + $lName;
   $subject=$_POST["subject"];
   $sender=$_POST["rEmail"];
   $timeLine=$_POST["timeline"];
   $media-$_POST["mediaIn"];
   $db=$_POST["databse"];
   $ui=$_POST["ui"];
   $message=$_POST["message"];
   $wtype = $_POST["genre"]; 
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

<!-- Main form, variant forms will branch from this one. This is to ensure that the php can access variables necessary. -->
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


<BR></BR>


<input type="submit" value="submit" id="submit">




</form>
</div> 


   <script src="contact.js"></script>

</body>
</html> 