<?php 
                         
// ваш логин на сайте smsfeedback.ru
$userlogin="Vladimir99";
// ваш пароль на сайте smsfeedback.ru
$userpassword="Fgis784";
//Вы можете указать пароль в закодированном md5 виде, чтобы не оставлять в коде парль в открытом виде.
$userpassword=md5($userpassword);

     
// Добавляем семерку к телефону
// проверка имени и текста сообщения не добавляется, чтобы не перегружать код, но необходима.
// Вы можете оптимизировать проверку номера телефона,
// в данном случае проверка идет на цифры и минимум 11 символов, т.к.
// для отправки 
// if(!preg_match("/^[0-9]{11,20}+$/", $_POST['phone'])) links ("Телефон задан в неверном формате");
   
// перекодируемся в UTF-8, если ваше сообщение не в UTF-8
$message1251 = $_POST['name'] . " оставил заявку. Номер: " . $_POST['phone'] . " Почта: " . $_POST['mail'];
// $message1251 = iconv('windows-1251', 'UTF-8', $message1251);
 
// отправляем смс
$sendsms = send("api.smsfeedback.ru", 80, $userlogin, $userpassword, "79779717983", $message1251 ,"TEST-SMS");
           
echo $sendsms."<br/>";


header('Location: http://asdaasddma.temp.swtest.ru/');
// Настраиваем обработку для некоторых из возможных ответов смс шлюза
// if ($sendsms=="not enough credits")  links("Недостаточно денег на балансе для отправки смс");
// if ($sendsms=="invalid mobile phone")  links("Неверный формат номера телефона, проверка на 
// стороне смс шлюза");
 
// Если смс принято к отправке и ответ вида accepted;A133541BC, то разделяем ответ,
//  чтобы получить id отправленного сообщения 
 
// $sendsms = explode(";", $sendsms);
// $smsid = $sendsms[0];
// $smsstatus = $sendsms[1];
 
// $smsid - можно записать в вашу базу данных, чтобы потом можно было отследить что стало с смс
 
// Формируем и выполняем SQL-запрос на добавление информации о смс в базу данных
// Подключения к базе данных должно быть активно, в данном примере подключения к БД нет
 // $query = "INSERT INTO sms_uvedomlenie VALUES (0,
 //                                     $smsid,
 //                                     '".$smsstatus."',
 //                                     '".$_POST['phone']."',
 //                                     '".$message1251."');";
// if(mysql_query($query))
//    {
    // Если запрос выполнен удачно, осуществляем автоматический переход
    // на необходимую страницу сайта, в данном случае мы завершаем работу скрипта обработчика формы
// 
  // }
  // else
  // {  
  //   links("Ошибка при обработке данных");
  // }
     
 
 
// Вспомогательная функция для вывода ссылок возврата
  function links($msg)
  {
    echo "<p>".$msg."</p>";
    echo "<p><a href=# onClick='history.back()'>Вернуться назад</a></p>";
    exit();
  }
 
/* 
* функция передачи сообщения 
*/
  
function send($host, $port, $login, $password, $phone, $text, $sender = false, $wapurl = false )
{
    $fp = fsockopen($host, $port, $errno, $errstr);
    if (!$fp) {
        return "errno: $errno \nerrstr: $errstr\n";
    }
    fwrite($fp, "GET /messages/v2/send/" .
        "?phone=" . rawurlencode($phone) .
        "&text=" . rawurlencode($text) .
        ($sender ? "&sender=" . rawurlencode($sender) : "") .
        ($wapurl ? "&wapurl=" . rawurlencode($wapurl) : "") .
        "  HTTP/1.0\n");
    fwrite($fp, "Host: " . $host . "\r\n");
    if ($login != "") {
        fwrite($fp, "Authorization: Basic " . 
            base64_encode($login. ":" . $password) . "\n");
    }
    fwrite($fp, "\n");
    $response = "";
    while(!feof($fp)) {
        $response .= fread($fp, 1);
    }
    fclose($fp);
    list($other, $responseBody) = explode("\r\n\r\n", $response, 2);
    return $responseBody;
}
  
?>