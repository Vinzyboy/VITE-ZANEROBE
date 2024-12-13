<?php
$conn = null;
$conn = checkDbConnection();
$clothes = new Clothes($conn);
$error = [];
$returnData = [];
if (array_key_exists("clothesid", $_GET)) {
    $clothes->clothes_aid = $_GET['clothesid'];
    checkId($clothes->clothes_aid);
    $query = checkReadById($clothes);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($clothes);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();