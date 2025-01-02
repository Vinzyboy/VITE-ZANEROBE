<?php
$conn = null;
$conn = checkDbConnection();
$clothes = new Clothes($conn);
$error = [];
$returnData = [];
if (array_key_exists("clothesid", $_GET)) {
    checkPayload($data);

  $clothes->clothes_aid = $_GET['clothesid'];
  $clothes->clothes_title = checkIndex($data, "clothes_title");
  $clothes->clothes_price = checkIndex($data, "clothes_price");
  $clothes->clothes_size = checkIndex($data, "clothes_size");
  $clothes->clothes_category_id = checkIndex($data, "clothes_category_id");
  $clothes->clothes_image = checkIndex($data, "clothes_image");
  $clothes->clothes_created = date("Y-m-d H:i:s");
  $clothes->clothes_datetime = date("Y-m-d H:i:s");
  checkId($clothes->clothes_aid);

    $query = checkUpdate($clothes);
    returnSuccess($clothes, "clothes", $query);
}

checkEndpoint();