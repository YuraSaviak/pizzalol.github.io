<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// переменные из нашей формы
$pricers = $_POST['pricers'];
$name = $_POST['username'];
$cityq = $_POST['usercity'];
$quest = $_POST['userquest'];
$mail23 =$_POST['useremail'];
$phonen =$_POST['userphone'];

// настройка почтового ящика
$mail->isSMTP();                                // Настраиваем почту для SMTP
$mail->Host = 'smtp.ukr.net';  															// Основкой SMTP сервер
$mail->SMTPAuth = true;                         // Включить аутентификацию SMTP
$mail->Username = 'up5962@ukr.net';    // логин от почты с которой будут отправляться письма
$mail->Password = 'PokJHtd0ggn9wMv0';            // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                      // Включить шифрование ssl
$mail->Port = 465;                                 // TCP порт для подключения / этот порт может отличаться у других провайдеров

$mail->setFrom('up5962@ukr.net');      // от кого будет уходить письмо для пользователя
$mail->addAddress("lolik4240@gmail.com");                          // Кому будет приходить заявка
//$mail->addAddress('ellen@example.com');               // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                                  // Установить формат электронной почты в HTML

$mail->Subject = "Заявка с тестового сайта mysite.com";
$mail->Body    =  "Client ${name} from ${cityq} ordered pizza: ${quest}. Contacts to ${name} is :${mail23} and phone ${phonen} , price for all is : ${pricers}";
// $mail->Body    =  "" .$name  "оставил заявку,на заказ" .$quest   "в город " .$cityq "номер телефона" .$phonen "";
$mail->AltBody = "";

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>
