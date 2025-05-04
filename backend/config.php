<?php
$host = "localhost";
$user = "mpydi1";      
$pass = "mpydi1";      
$dbname = "mpydi1";    

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>