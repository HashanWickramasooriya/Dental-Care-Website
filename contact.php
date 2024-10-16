<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_REQUEST['name']);
    $email = htmlspecialchars($_REQUEST['email']);
    $contact = htmlspecialchars($_REQUEST['contact']);
    $message = htmlspecialchars($_REQUEST['message']);

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "all_care_dental";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO `message` (name, email, contact, message) VALUES ('$name', '$email', '$contact', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Message Sent successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>