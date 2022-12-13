<?php

$name = $_POST['POST-name'];
$phone = $_POST['POST-phone'];
$square = $_POST['POST-square'];
$object = $_POST['POST-object'];
$token = '5899219382:AAG2nnU-U_eadWorOweyjX3oNqzxy0p0s0c';
$chat_id = '270827211';
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Площадь объекта, кв.м.: ' => $square,
  'Тип объекта: ' => $object,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
} else {
  alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
}

?>
