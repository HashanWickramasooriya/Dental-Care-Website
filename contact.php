<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: contactus.html");
    exit();
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$contact = trim($_POST['contact'] ?? '');
$city = trim($_POST['city'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $contact === '') {
    die("Error: Name, email and contact number are required.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Error: Invalid email format.");
}

require __DIR__ . '/connection.php';

$stmt = $conn->prepare("INSERT INTO `message` (name, email, contact, city, message) VALUES (?, ?, ?, ?, ?)");
if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
}

$stmt->bind_param("sssss", $name, $email, $contact, $city, $message);

if ($stmt->execute()) {
    header("Location: message_sent.php");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
