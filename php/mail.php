<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';
// Переменные, которые отправляет пользователь
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email_from = $_POST['email'];
$phone = $_POST['phone'];
$order = $_POST['order'];
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'Dezzinfektor'; // Логин на почте
    $mail->Password   = 'Jalapeno1'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('dezzinfektor@yandex.ru', 'MyCompany'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('rsheveljov@gmail.com');
    // Прикрипление файлов к письму

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Uusi Tilaus';
        $mail->Body    = "<b>Nimi:</b> $first_name <br>
                          <b>Sukunimi:</b> $last_name <br>
                          <b>Email:</b> $email_from <br>
                          <b>Puhelin:</b> $phone <br><br>
                          <b>Viesti:</b><br>$order";
// Проверяем отравленность сообщения

if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}