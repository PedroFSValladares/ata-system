<?php

$inputs = $_POST['input'];
$detalhes = $_POST['detalhes'];
$assinaturas = $_POST['assinatura'];




foreach ($inputs as $dado) {
  echo "<pre>";
  print_r($dado);
  echo "</pre>";

  /*   for ($i = 0; $i < count($inputs); $i++) {
    $arr[] = array("$inputs[$i]" => "$dado");
  } */
}
