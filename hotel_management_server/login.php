<?php
//including the database connection file
include_once("config.php");
header('Access-Control-Allow-Origin: *');


if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $result = mysqli_query($mysqli, "SELECT * FROM employees WHERE username='$username' AND password = '$password'");
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (count($data) > 0) {
        echo json_encode(array("message" => "success", "employee_id" => $data));
    } else {
        echo json_encode(array("message" => $result));
    }
}


?>