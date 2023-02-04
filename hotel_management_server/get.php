<?php
//including the database connection file
include_once("config.php");
header('Access-Control-Allow-Origin: *');

if (isset($_POST['getAllRoom'])) {

    $result = mysqli_query($mysqli, "SELECT * FROM room");
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if ($data) {
        echo json_encode($data);
    } else {
        echo json_encode(array("message" => $result));
    }
}

if (isset($_POST['getAllRoomService'])) {

    $result = mysqli_query($mysqli, "SELECT * FROM services");
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (count($data) > 0) {
        echo json_encode($data);
    } else {
        echo json_encode(array("message" => $result));
    }
}

if (isset($_POST['getAllFood'])) {

    $result = mysqli_query($mysqli, "SELECT * FROM food");
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (count($data) > 0) {
        echo json_encode($data);
    } else {
        echo json_encode(array("message" => $result));
    }
}
if (isset($_POST['getAllFacility'])) {

    $result = mysqli_query($mysqli, "SELECT * FROM facilities");
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (count($data) > 0) {
        echo json_encode($data);
    } else {
        echo json_encode(array("message" => $result));
    }
}
if (isset($_POST['getAllEmployee'])) {

    $result = mysqli_query($mysqli, "SELECT * FROM employees");
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (count($data) > 0) {
        echo json_encode($data);
    } else {
        echo json_encode(array("message" => $result));
    }
}

if (isset($_POST['getAllFacilityReservations'])) {

    $result = mysqli_query($mysqli, "SELECT * FROM customers INNER JOIN reservations  ON customers.cust_id = reservations.customer_id INNER JOIN facility_reservations ON reservations.reservation_id = facility_reservations.reservation_id INNER JOIN facilities ON facility_reservations.facility_id = facilities.facility_id");
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (count($data) > 0) {
        echo json_encode($data);
    } else {
        echo json_encode(array("message" => $result));
    }

    // SELECT book_id , title, publisher_name 
    // FROM book
    // INNER JOIN publisher 
    // ON book.publisher_id = publisher.publisher_id
    // INNER JOIN book_language
    // ON book.language_id = book_language.language_id
}

?>