<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../models/clothes/Clothes.php';

$conn = null;
$conn = checkDbConnection();
$clothes = new Clothes($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("clothesid", $_GET)) {

        checkPayload($data);
        $clothes->clothes_aid = $_GET['clothesid'];
        $clothes->clothes_is_active = trim($data["isActive"]);
        $clothes->clothes_datetime = date("Y-m-d H:i:s");

        checkId($clothes->clothes_aid);
        $query = checkActive($clothes);
        http_response_code(200);
        returnSuccess($clothes, "clothes", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();