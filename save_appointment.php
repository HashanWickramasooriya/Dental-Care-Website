<?php

function fail($message) {
    http_response_code(400);
    echo "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'>";
    echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    echo "<title>Booking Error - All Care Dental</title></head><body style='font-family:sans-serif;max-width:480px;margin:80px auto;text-align:center;color:#333;'>";
    echo "<h1 style='color:#c0392b;'>We couldn't complete your booking</h1>";
    echo "<p>" . htmlspecialchars($message) . "</p>";
    echo "<p><a href='Customer Information Form.html'>Try again</a></p>";
    echo "</body></html>";
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: Customer Information Form.html');
    exit();
}

$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$doctor = trim($_POST['doctor'] ?? '');
$date = trim($_POST['date'] ?? '');
$time = trim($_POST['time'] ?? '');

if ($name === '' || $phone === '' || $email === '' || $doctor === '' || $date === '' || $time === '') {
    fail('All fields are required. Please fill in the form again.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail('The email address you entered is not valid.');
}

$dateObj = DateTime::createFromFormat('Y-m-d', $date);
if (!$dateObj || $dateObj->format('Y-m-d') !== $date) {
    fail('The selected date is not valid.');
}

if ((int) $dateObj->format('w') === 0) {
    fail('We are closed on Sundays. Please choose another day.');
}

require __DIR__ . '/connection.php';

$stmt = $conn->prepare("INSERT INTO appointments (name, phone, email, doctor, date, time) VALUES (?, ?, ?, ?, ?, ?)");
if ($stmt === false) {
    fail('Something went wrong on our end. Please try again shortly.');
}

$stmt->bind_param("ssssss", $name, $phone, $email, $doctor, $date, $time);

if ($stmt->execute()) {
    header("Location: confirmation.php");
    exit();
} else {
    fail('Something went wrong while saving your appointment. Please try again.');
}

$stmt->close();
$conn->close();
