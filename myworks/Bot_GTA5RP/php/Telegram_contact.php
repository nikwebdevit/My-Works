<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$username = $_POST['Имя'];
$useremail = $_POST['e-mail'];
$theme = $_POST['Theme'];
$text = $_POST['Сообщение'];

$token = "1265910883:AAEG_xnjXqJ2L54Ql67hVXbTrDSisnfzeNc";
$chat_id = "-499214792";
$arr = [
  'Имя: ' => $username,
  'Email: ' => $useremail,
  'Тематика: ' => $theme,
  'Сообщение: ' => $text,
];

$new_arr = array_diff($arr, array(''));

foreach($new_arr as $key => $value) {
  $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>