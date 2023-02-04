<?php
//including the database connection file
include_once("config.php");
header('Access-Control-Allow-Origin: *');


if (isset($_POST['addRoom'])) {
	$room_number = $_POST['room_number'];
	$additional_features = $_POST['additional_features'];
	$aircon = $_POST['aircon'];
	$price = $_POST['price'];
	$free_wifi = $_POST['free_wifi'];

	$result = mysqli_query($mysqli, "INSERT INTO room(room_number,additional_features,aircon, price, free_wifi,booking_status) VALUES('$room_number','$additional_features','$aircon','$price','$free_wifi','available')");
	if ($result) {
		echo json_encode(array("message" => "room added successfully"));
	} else {
		echo json_encode(array("message" => $result));
	}
}

if (isset($_POST['addRoomService'])) {
	$service_name = $_POST['service_name'];
	$price = $_POST['price'];


	$result = mysqli_query($mysqli, "INSERT INTO services(service_name, price, booking_status) VALUES('$service_name','$price','Available')");
	if ($result) {
		echo json_encode(array("message" => "room service added successfully"));
	} else {
		echo json_encode(array("message" => $result));
	}
}

if (isset($_POST['addFood'])) {
	$name = $_POST['name'];
	$price = $_POST['price'];
	$food_package = $_POST['food_package'];



	$result = mysqli_query($mysqli, "INSERT INTO food(name, price, food_package, booking_status) VALUES('$name','$price','$food_package','Available')");
	if ($result) {
		echo json_encode(array("message" => "food added successfully"));
	} else {
		echo json_encode(array("message" => $result));
	}
}

if (isset($_POST['addFacility'])) {
	$name = $_POST['name'];
	$facility_description = $_POST['facility_description'];
	$price = $_POST['price'];



	$result = mysqli_query($mysqli, "INSERT INTO facilities(name, facility_description, price, booking_status) VALUES('$name','$facility_description','$price','Available')");
	if ($result) {
		echo json_encode(array("message" => "facility added successfully"));
	} else {
		echo json_encode(array("message" => $result));
	}
}

if (isset($_POST['addEmployee'])) {
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$job_department = $_POST['job_department'];
	$employee_type = $_POST['employee_type'];
	$address = $_POST['address'];
	$contact_no = $_POST['contact_no'];
	$username = $_POST['username'];
	$password = $_POST['password'];
	$salary = $_POST['salary'];



	$result = mysqli_query($mysqli, "INSERT INTO employees(first_name, last_name, job_department, employee_type, contact_add,username,password,salary,address) VALUES('$first_name','$last_name','$job_department','$employee_type','$contact_no','$username','$password','$salary','$address')");

	if ($result) {
		echo json_encode(array("message" => "employee added successfully"));
	} else {
		echo json_encode(array("message" => $result));
	}
}

if (isset($_POST['addPayment'])) {
	$reservation_id = $_POST['reservation_id'];
	$pdwd = $_POST['pdwd'];
	$discount = $_POST['discount'];
	$amount_paid = $_POST['amount_paid'];
	$data = array();
	$confirm_payment = mysqli_query($mysqli, "SELECT paid FROM reservations WHERE reservation_id='$reservation_id' AND paid='No'");
	while ($row = $confirm_payment->fetch_assoc()) {
		$data[] = $row;
	}

	if (count($data) > 0) {
		$payment_result = mysqli_query($mysqli, "INSERT INTO payments(reservation_id, discount, pdwd, amount_paid) VALUES('$reservation_id','$discount','$pdwd',$amount_paid)");
		$update_reservation_result = mysqli_query($mysqli, "UPDATE reservations SET paid='paid' WHERE reservation_id='$reservation_id'");
		$update_reservation_status = mysqli_query($mysqli, "UPDATE reservations SET booking_status='$booking_status' WHERE facility_id='$facility_id'");

		if ($payment_result && $update_reservation_result) {
			echo json_encode(array("message" => "payment added successfully"));
		} else {
			echo json_encode(array("message" => $result));

		}
	} else {
		echo json_encode(array("message" => "reservation already paid"));
	}
}

if (isset($_POST['addFacilityReservation'])) {
	// customer
	$fName = $_POST['fName'];
	$lName = $_POST['lName'];
	$gender = $_POST['gender'];
	$address = $_POST['address'];
	$contact_no = $_POST['contact_no'];

	//reservation
	$customer_id = ""; //template
	$reservation_date = $_POST['reservation_date'];
	$employee_id = $_POST['employee_id'];
	$total_payment_amount = $_POST['total_payment_amount'];
	$num_adults = $_POST['num_adults'];
	$num_children = $_POST['num_children'];
	$reservation_status = "Reserved";

	//facility_reservation
	$reservation_id = ""; //template
	$facility_id = $_POST['facility_id'];
	$time_in = $_POST['time_in'];
	$time_out = $_POST['time_out'];

	//insert sa customer
	$result = mysqli_query($mysqli, "INSERT INTO customers(fName, lName, gender, address, contact_no) VALUES('$fName','$lName','$gender','$address','$contact_no')");
	$last_id = mysqli_insert_id($mysqli);

	//insert sa reservations
	$customer_id = $last_id;
	$result = mysqli_query($mysqli, "INSERT INTO reservations(customer_id, reservation_date, employee_id, total_payment_amount, num_adults,num_children,reservation_status,paid) VALUES('$customer_id','$reservation_date','$employee_id','$total_payment_amount','$num_adults','$num_children','$reservation_status', 'No')");
	$last_id = mysqli_insert_id($mysqli);


	//insert sa facility_reservations
	$reservation_id = $last_id;
	$result = mysqli_query($mysqli, "INSERT INTO facility_reservations(reservation_id, facility_id, time_in, time_out) VALUES('$reservation_id','$facility_id','$time_in','$time_out')");

	if ($result) {
		echo json_encode(array("message" => "reservation added successfully"));
	} else {
		echo json_encode(array("message" => $result));
	}
}





// $last_id = mysqli_insert_id($conn);
// $result = mysqli_query($mysqli, "INSERT INTO users(name,age,email) VALUES('$name','$age','$email')");




?>