
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
<label for="fname">First Name</label>
<input type="text" id="fname" name="firstname" placeholder="Enter your first name...">
</div>

<div id="lname">
<label for="lname">Last Name</label>
<input type="text" id="lname" name="lastname" placeholder="Enter your last name...">
</div>

<div id="email">
<label for="email">Email</label>
<input type="text" id="email" name="email" placeholder="Enter your email...">
</div>

<label for="subject">Subject</label>
<select id="subject" name="subject">
    <option value="Website Build">Website Build</option>
    <option value="Program/App Build">Program/App Build</option>
    <option value="Feedback">Feedback</option>
    <option value="Team Up!">Team Up!</option>
    <option value="Information Request">Information Request</option>
   
</select>

<input type="submit" value="Submit">





</form>

<form id="webbuild">
<!-- Need fields for the type of website, what type of content will be shared on the site, what features will be how many pages,  -->

</form>

<form id="prap">


</form>

<form id="feed">


</form>

<form id="team">


</form>

<form id="info">


</form>
</div>


    
</body>
</html>