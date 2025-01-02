<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../models/clothes/Clothes.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clothes = new Clothes($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $clothes->clothes_start = $_GET['start'];
        $clothes->clothes_total = 15;
        checkLimitId($clothes->clothes_start, $clothes->clothes_total);
        $query = checkReadLimit($clothes);
        $total_result = checkReadAll($clothes);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $clothes->clothes_total,
            $clothes->clothes_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();
