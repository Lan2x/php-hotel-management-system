<?php
//including the database connection file
include_once("config.php");
header('Access-Control-Allow-Origin: *');


if (isset($_POST['changeRoomStatus'])) {
	$booking_status = $_POST['booking_status'];
	$room_id = $_POST['room_id'];

	$result = mysqli_query($mysqli, "UPDATE room SET booking_status='$booking_status' WHERE room_id='$room_id'");


	if ($result) {
		echo json_encode(array("message" => "room status changed"));
	} else {
		echo json_encode(array("message" => $result));
	}
}

if (isset($_POST['changeServiceStatus'])) {
	$service_status = $_POST['service_status'];
	$service_id = $_POST['service_id'];

	$result = mysqli_query($mysqli, "UPDATE services SET booking_status='$service_status' WHERE service_id='$service_id'");


	if ($result) {
		echo json_encode(array("message" => "room status changed"));
	} else {
		echo json_encode(array("message" => $result));
	}
}

if (isset($_POST['changeFoodStatus'])) {
	$booking_status = $_POST['booking_status'];
	$food_id = $_POST['food_id'];

	$result = mysqli_query($mysqli, "UPDATE food SET booking_status='$booking_status' WHERE food_id='$food_id'");


	if ($result) {
		echo json_encode(array("message" => "food status changed"));
	} else {
		echo json_encode(array("message" => $result));
	}
}

if (isset($_POST['changeFacilityStatus'])) {
	$booking_status = $_POST['booking_status'];
	$facility_id = $_POST['facility_id'];

	$result = mysqli_query($mysqli, "UPDATE facilities SET booking_status='$booking_status' WHERE facility_id='$facility_id'");


	if ($result) {
		echo json_encode(array("message" => "facility status changed"));
	} else {
		echo json_encode(array("message" => $result));
	}
}


?>