<?php
$conn = null;
$conn = checkDbConnection();
$clothes = new Clothes($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("clothesid", $_GET)) {
    $clothes->clothes_aid = $_GET['clothesid'];
    checkId($clothes->clothes_aid);
    // isAssociated($clothes);
    $query = checkDelete($clothes);
    returnSuccess($clothes, "clothes", $query);
}

checkEndpoint();