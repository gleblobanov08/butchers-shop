<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer,php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguge('ru', 'phpmailer/language');
    $mail->IsHTML(true);

    $mail->setFrom('gleblobanov7@gmail.com', 'site feedback');
    $mail->addAddress('lobanov.gleb.08@mail.ru');
    $mail->Subject = 'Hi! It is feedback from your shop';

    $body = '<h1>Welcome super feedback!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name: </strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Email: </strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Message: </strong> '.$_POST['message'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Error';
    } else {
        $message = 'Message sent!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>