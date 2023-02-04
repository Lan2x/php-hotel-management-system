// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll("#sidebar .side-dropdown");
const sidebar = document.getElementById("sidebar");

allDropdown.forEach((item) => {
  const a = item.parentElement.querySelector("a:first-child");
  a.addEventListener("click", function (e) {
    e.preventDefault();

    if (!this.classList.contains("active")) {
      allDropdown.forEach((i) => {
        const aLink = i.parentElement.querySelector("a:first-child");

        aLink.classList.remove("active");
        i.classList.remove("show");
      });
    }

    this.classList.toggle("active");
    item.classList.toggle("show");
  });
});

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector("nav .toggle-sidebar");
const allSideDivider = document.querySelectorAll("#sidebar .divider");

var i = 10;

if (sidebar.classList.contains("hide")) {
  allSideDivider.forEach((item) => {
    item.textContent = "-";
  });
  allDropdown.forEach((item) => {
    const a = item.parentElement.querySelector("a:first-child");
    a.classList.remove("active");
    item.classList.remove("show");
  });
} else {
  allSideDivider.forEach((item) => {
    item.textContent = item.dataset.text;
  });
}

toggleSidebar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");

  if (sidebar.classList.contains("hide")) {
    allSideDivider.forEach((item) => {
      item.textContent = "-";
    });

    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.classList.remove("active");
      item.classList.remove("show");
    });
  } else {
    allSideDivider.forEach((item) => {
      item.textContent = item.dataset.text;
    });
  }
});

sidebar.addEventListener("mouseleave", function () {
  if (this.classList.contains("hide")) {
    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.classList.remove("active");
      item.classList.remove("show");
    });
    allSideDivider.forEach((item) => {
      item.textContent = "-";
    });
  }
});

sidebar.addEventListener("mouseenter", function () {
  if (this.classList.contains("hide")) {
    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.classList.remove("active");
      item.classList.remove("show");
    });
    allSideDivider.forEach((item) => {
      item.textContent = item.dataset.text;
    });
  }
});

// MENU
const allMenu = document.querySelectorAll("main .content-data .head .menu");

allMenu.forEach((item) => {
  const icon = item.querySelector(".icon");
  const menuLink = item.querySelector(".menu-link");

  icon.addEventListener("click", function () {
    menuLink.classList.toggle("show");
  });
});

window.addEventListener("click", function (e) {
  allMenu.forEach((item) => {
    const icon = item.querySelector(".icon");
    const menuLink = item.querySelector(".menu-link");

    if (e.target !== icon) {
      if (e.target !== menuLink) {
        if (menuLink.classList.contains("show")) {
          menuLink.classList.remove("show");
        }
      }
    }
  });
});

function populateSelect(data, select) {
  // THE JSON ARRAY.
  // let birds = [
  //     {"ID": "001", "Bird_Name": "Eurasian Collared-Dove"},
  //     {"ID": "002", "Bird_Name": "Bald Eagle"},
  //     {"ID": "003", "Bird_Name": "Cooper's Hawk"},
  // ];

  let ele = document.getElementById(select);
  for (let i = 0; i < data.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.
    ele.innerHTML =
      ele.innerHTML +
      '<option value="' +
      data[i]["facility_id"] +
      '">' +
      data[i]["name"] +
      "</option>";
  }
}

//submitting the data

document.querySelector("#reserve").addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = document.querySelector("#first_name").value;
  let lastName = document.querySelector("#last_name").value;
  let gender = document.querySelector("#gender").value;
  let address = document.querySelector("#address").value;
  let contact_no = document.querySelector("#contact_no").value;
  let zip_code = document.querySelector("#zip_code").value;
  let facility_id = document.querySelector("#facility").value;
  let time_in = document.querySelector("#time_in").value;
  let time_out = document.querySelector("#time_out").value;
  let num_adults = document.querySelector("#num_adults").value;
  let num_children = document.querySelector("#num_children").value;
  let total_payment_amount = document.querySelector(
    "#total_payment_amount"
  ).value;
  let current_date = new Date().toLocaleString();

  let data = new FormData();
  data.append("fName", firstName);
  data.append("lName", lastName);
  data.append("gender", gender);
  data.append("address", address);
  data.append("contact_no", contact_no);
  data.append("zip_code", zip_code);
  data.append("reservation_date", current_date);
  data.append("total_payment_amount", total_payment_amount);
  data.append("num_adults", num_adults);
  data.append("num_children", num_children);
  data.append("reservation_status", "reserved");
  data.append("facility_id", facility_id);
  data.append("time_in", time_in);
  data.append("time_out", time_out);
  data.append("reserveFacility", "reserve");
  data.append("employee_id", sessionStorage.getItem("employee_id"));

  data.append("addFacilityReservation", "sample");

  // AJAX Code To Submit Form.

  $.ajax({
    url: "http://localhost/jane%20dela%20cruz%20hotel%20management%20system%20er%20diagram/hotel_management_server/add.php",
    data: data,
    type: "POST", // GET/POST
    processData: false,
    contentType: false,
    success: function (data) {
      let res = JSON.parse(data);
      alert(res.message);
      window.location.reload();
    },
    error: function (err) {
      console.log(err);
    },
  });
});

document.querySelector("#delete").addEventListener("click", (e) => {
  e.preventDefault();

  let data = new FormData();

  data.append("deleteFacilityReservation", "sample");
  data.append("customer_id", selectedRow.customer_id);

  // AJAX Code To Submit Form.

  $.ajax({
    url: "http://localhost/jane%20dela%20cruz%20hotel%20management%20system%20er%20diagram/hotel_management_server/delete.php",
    data: data,
    type: "POST", // GET/POST
    processData: false,
    contentType: false,
    success: function (data) {
      let res = JSON.parse(data);
      alert(res.message);
      window.location.reload();
    },
    error: function (err) {
      console.log(err);
    },
  });
});

document.querySelector("#checkInBtn").addEventListener("click", (e) => {
  e.preventDefault();

  let data = new FormData();

  data.append("changeRoomStatus", "sample");
  data.append("room_id", selectedRow.room_id);
  data.append("booking_status", "Booked");

  // AJAX Code To Submit Form.

  $.ajax({
    url: "http://localhost/jane%20dela%20cruz%20hotel%20management%20system%20er%20diagram/hotel_management_server/edit.php",
    data: data,
    type: "POST", // GET/POST
    processData: false,
    contentType: false,
    success: function (data) {
      let res = JSON.parse(data);
      alert(res.message);
      window.location.reload();
    },
    error: function (err) {
      console.log(err);
    },
  });
});

document.querySelector("#checkOutBtn").addEventListener("click", (e) => {
  e.preventDefault();

  // let data = new FormData();

  // data.append("reservation_id", selectedRow.reservation_id);
  // data.append("paid", "Yes");

  // data.append("checkOutFacilityReservation", "sample");

  // // AJAX Code To Submit Form.

  // $.ajax({
  //   url: "http://localhost/jane%20dela%20cruz%20hotel%20management%20system%20er%20diagram/hotel_management_server/add.php",
  //   data: data,
  //   type: "POST", // GET/POST
  //   processData: false,
  //   contentType: false,
  //   success: function (data) {
  //     let res = JSON.parse(data);
  //     alert(res.message);
  //     window.location.reload();
  //   },
  //   error: function (err) {
  //     console.log(err);
  //   },
  // });
});

document.addEventListener("DOMContentLoaded", () => {
  let data = new FormData();
  data.append("getAllFacilityReservations", "sample");
  $.ajax({
    url: "http://localhost/jane%20dela%20cruz%20hotel%20management%20system%20er%20diagram/hotel_management_server/get.php",
    data: data,
    type: "POST", // GET/POST
    processData: false,
    contentType: false,
    success: function (data) {
      let res = JSON.parse(data);
      //code for the table
      console.log(res);

      const columnDefs = [
        { headerName: "ID", field: "reservation_id", hide: true },
        { headerName: "Customer Name", field: "fName" },
        { headerName: "Customer ID", field: "customer_id", hide: true },
        { headerName: "Reservation ID", field: "reservation_id", hide: true },
        { headerName: "Facility", field: "name" },
        { headerName: "Time In", field: "time_in" },
        { headerName: "Time out", field: "time_out" },
        { headerName: "Num of Adults", field: "num_adults" },
        { headerName: "Num of Children", field: "num_children" },
        { headerName: "Total Payment", field: "total_payment_amount" },
        { headerName: "Paid", field: "paid" },
        { headerName: "Reservation Status", field: "reservation_status" },
      ];

      // specify the data

      // let the grid know which columns and what data to use

      const gridOptions = {
        columnDefs: columnDefs,
        rowData: res,
        rowSelection: "single",
        animateRows: true,
        header: "column",
        onSelectionChanged: onSelectionChanged,
      };
      function onSelectionChanged() {
        const selectedRows = gridOptions.api.getSelectedRows();

        selectedRow = selectedRows.length === 1 ? selectedRows[0] : "";
      }

      const gridDiv = document.querySelector("#myGrid");
      new agGrid.Grid(gridDiv, gridOptions);
    },
    error: function (err) {
      console.log(err);
    },
  });
  //populate facility dropdown
  let getFacilityData = new FormData();
  getFacilityData.append("getAllFacility", "sample");
  $.ajax({
    url: "http://localhost/jane%20dela%20cruz%20hotel%20management%20system%20er%20diagram/hotel_management_server/get.php",
    data: getFacilityData,
    type: "POST", // GET/POST
    processData: false,
    contentType: false,
    success: function (data) {
      let res = JSON.parse(data);
      populateSelect(res, "facility");
    },

    error: function (err) {
      console.log(err);
    },
  });

  document.querySelector("#checkOutBtn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hadouken");

    document.querySelector("#amount_paid").value =
      selectedRow.total_payment_amount;
  });
  let b = "";
  document.querySelector("#pdwd").addEventListener("change", (e) => {
    let discount = document.querySelector("#discount");
    let amountToPay = document.querySelector("#amount_paid");
    if (e.target.value === "10") {
      discount.value = "10%";
      let k = parseFloat(amountToPay.value.toString().replace(/,/g, ""));
      let discountValue = k * 0.1;
      console.log("value: " + k);
      console.log("dioscount: " + discountValue);

      amountToPay.value = (k - discountValue).toString();
    } else {
      discount.value = "0%";
      amountToPay.value = selectedRow.total_payment_amount;
    }
  });

  document.querySelector("#paymentBtn").addEventListener("click", (e) => {
    e.preventDefault();

    let pdwd = document.querySelector("#pdwd").value;
    let discount = document.querySelector("#discount").value;
    let amount_paid = document.querySelector("#amount_paid").value;
    let k = parseFloat(amount_paid.toString().replace(/,/g, ""));

    console.log(`pdwd ${pdwd}`);
    console.log(`dicsount ${discount}`);
    console.log(`reservation id ${selectedRow.reservation_id}`);
    console.log(`amount ${k}`);

    let data = new FormData();
    data.append("pdwd", pdwd);
    data.append("discount", discount);
    data.append("reservation_id", selectedRow.reservation_id);
    data.append("amount_paid", k);

    data.append("addPayment", "sample");
    $.ajax({
      url: "http://localhost/jane%20dela%20cruz%20hotel%20management%20system%20er%20diagram/hotel_management_server/add.php",
      data: data,
      type: "POST", // GET/POST
      processData: false,
      contentType: false,
      success: function (data) {
        let res = JSON.parse(data);
        alert(res.message);
        window.location.reload();
      },

      error: function (err) {
        console.log(err);
      },
    });
  });
});
