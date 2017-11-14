<?php
$config = 'data.txt';
$file=fopen($config,"r+") or exit("Unable to open file!");

$date = date("F j, Y");
$time = date("H:i:s");

$nombre = $_POST['name'];
$email = $_POST['em'];
$newuser = $nombre . " " . $email . " - " . $date . " " . $time;

while (!feof($file)) {
    $line=fgets($file);
        $newline = PHP_EOL . $newuser;
}

fwrite($file, $newline);

fclose($file);
?>