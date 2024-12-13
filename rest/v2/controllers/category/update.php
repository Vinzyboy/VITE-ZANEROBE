<?php
$conn = null;
$conn = checkDbConnection();
$category = new Category($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("categoryid", $_GET)) {
    checkPayload($data);

  $category->category_aid = $_GET['categoryid'];
  $category->category_title = checkIndex($data, "category_title");
  $category->category_created = date("Y-m-d H:i:s");
  $category->category_datetime = date("Y-m-d H:i:s");
  checkId($category->category_aid);
    $query = checkUpdate($category);
    returnSuccess($category, "category", $query);
}

checkEndpoint();