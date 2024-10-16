<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "all_care_dental";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}
?>
