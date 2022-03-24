<?php
$servername = "localhost";
$username = "root";
$password="";
$dbname = "INTERIORPROJECT";

// Create connection
$conn = new mysqli("$servername", "$username","$password","$dbname");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$fullname=$contact=$email=$inquiry="";


$fullname=$_POST["fullname"];
$contact=$_POST["contact"];
$email=$_POST["email"];
$inquiry=$_POST["inquiry"];



  $sql = "INSERT INTO inquiry (fullname, email, contact,inquiry)
  VALUES ('$fullname','$email','$contact','$inquiry')";
if ($conn->query($sql) === TRUE) header("location:thank.html") 
?>