<?php
$host = "localhost";
$user = "root";
$password = "root"; //leave this blank for windows users
$db = "db_infographic";

$conn = mysqli_connect($host, $user, $password, $db);

if (!$conn) {
    echo "something broke ... connection isn't working";
    exit;
}

// echo "connected!";

// go and get all data from the database
//$myQuery = "SELECT * FROM tbl_mmiw";
//$result = mysqli_query($conn, $myQuery);
//$rows = array();

// fill the array with the result set and send it to the browser
while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}

//get one item from the database
if (isset($_GET["cityName"])){

    $myQuery = "SELECT * FROM `tbl_rankin` WHERE `ID` = 1";
    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
}

if (isset($_GET["provNo"])){
    $province = $_GET["provNo"];

    $myQuery = "SELECT * FROM tbl_mmiw WHERE province = '$province'";
    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
}

if (isset($_GET["resNo"])){
    $res = $_GET["resNo"];
    $myQuery = "SELECT * FROM tbl_resources WHERE resource = '$res'";
    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
}


echo json_encode($rows);
?>