<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointment Confirmation</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-image: url(images/appoinments2.png);
            background-size: cover;
            color: #333;
            text-align: center;
            padding: 0;
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .confirmation-message {
            background: #ffffff;
            padding: 30px;
            border-radius: 15px;
            display: inline-block;
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
            transform: translateY(-20px);
            animation: bounceIn 1s ease-out;
        }
        .confirmation-message h1 {
            color: #2d87f0;
            font-size: 2.5em;
            margin: 0;
            animation: fadeIn 1s ease-out;
        }
        .confirmation-message p {
            font-size: 1.2em;
            margin: 20px 0;
        }
        .confirmation-message a {
            text-decoration: none;
            color: #ffffff;
            background-color: #2d87f0;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1.2em;
            transition: background-color 0.3s ease;
        }
        .confirmation-message a:hover {
            background-color: #1a5cb8;
        }
        
        /* Keyframes for animations */
        @keyframes bounceIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="confirmation-message">
        <h1>Appointment Booked Successfully!</h1>
        <p>Thank you for booking an appointment with us. We look forward to seeing you.</p>
        <a href="index.html">Return to Home Page</a>
    </div>
</body>
</html>
