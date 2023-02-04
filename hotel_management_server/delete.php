<?php
//including the database connection file
include_once("config.php");
header('Access-Control-Allow-Origin: *');


if (isset($_POST['deleteRoom'])) {
    $room_id = $_POST['room_id'];

    $result = mysqli_query($mysqli, "DELETE FROM room WHERE room_id=$room_id");



    if ($result) {
        echo json_encode(array("message" => "room deleted successfully"));
    } else {
        echo json_encode(array("message" => $result));
    }
}

if (isset($_POST['deleteRoomService'])) {
    $service_id = $_POST['service_id'];

    $result = mysqli_query($mysqli, "DELETE FROM services WHERE service_id='$service_id'");



    if ($result) {
        echo json_encode(array("message" => "room deleted successfully"));
    } else {
        echo json_encode(array("message" => $result));
    }
}

if (isset($_POST['deleteFood'])) {
    $food_id = $_POST['food_id'];

    $result = mysqli_query($mysqli, "DELETE FROM food WHERE food_id='$food_id'");



    if ($result) {
        echo json_encode(array("message" => "food deleted successfully"));
    } else {
        echo json_encode(array("message" => $result));
    }
}

if (isset($_POST['deleteFacility'])) {
    $facility_id = $_POST['facility_id'];

    $result = mysqli_query($mysqli, "DELETE FROM facilities WHERE facility_id='$facility_id'");



    if ($result) {
        echo json_encode(array("message" => "facility deleted successfully"));
    } else {
        echo json_encode(array("message" => $result));
    }
}
if (isset($_POST['deleteEmployee'])) {
    $employee_id = $_POST['employee_id'];

    $result = mysqli_query($mysqli, "DELETE FROM employees WHERE employee_id='$employee_id'");



    if ($result) {
        echo json_encode(array("message" => "employee deleted successfully"));
    } else {
        echo json_encode(array("message" => $result));
    }
}

if (isset($_POST['deleteFacilityReservation'])) {
    $customer_id = $_POST['customer_id'];

    $result = mysqli_query($mysqli, "DELETE FROM customers WHERE cust_id='$customer_id'");



    if ($result) {
        echo json_encode(array("message" => "reservation deleted successfully"));
    } else {
        echo json_encode(array("message" => $result));
    }
}

?>