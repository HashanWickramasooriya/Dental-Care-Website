<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


$servername = "localhost";
$username = "root";  
$password = "";      
$dbname = "all_care_dental"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if (isset($_POST['name'], $_POST['phone'], $_POST['email'], $_POST['doctor'], $_POST['date'], $_POST['time'])) {
   
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $email = trim($_POST['email']);
    $doctor = trim($_POST['doctor']);
    $date = trim($_POST['date']);
    $time = trim($_POST['time']);

 
    if (empty($name) || empty($phone) || empty($email) || empty($doctor) || empty($date) || empty($time)) {
        die("Error: All fields are required.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Error: Invalid email format.");
    }

    
    $stmt = $conn->prepare("INSERT INTO appointments (name, phone, email, doctor, date, time) VALUES (?, ?, ?, ?, ?, ?)");
    if ($stmt === false) {
        die("Error preparing statement: " . $conn->error);
    }

 
    $stmt->bind_param("ssssss", $name, $phone, $email, $doctor, $date, $time);

   
    if ($stmt->execute()) {
      
        header("Location: confirmation.php"); 
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Error: Missing form data.";
}

$conn->close();
?>
