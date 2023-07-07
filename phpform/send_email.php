<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $to = "lobanov.gleb.08@mail.ru";

        $subject = "feddback from your site";

        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";

        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Message:\n$message\n";

        mail($to, $subject, $email_content, $headers);

        header('Location: thank_you.html');
        exit;
    }
?>