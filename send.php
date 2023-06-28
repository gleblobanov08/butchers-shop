<?php
if(!isset($_POST['fio']) and !isset($_POST['email']))

$name = $_POST['name'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);

$name = urldecode($name);
$email = urldecode($email);

$name = trim($name);
$email = trim($email);

if (mail("lobanov.gleb.08@mail.ru", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email.". Сообщение:".. , "From: $email \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
?>