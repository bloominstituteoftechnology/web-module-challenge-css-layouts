
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
   header("Location: index.html?mailsent");
   
}
?>