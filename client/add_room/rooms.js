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

//submitting the data

document.querySelector("#addRoomBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let room_number = document.querySelector("#room_number").value;
  let additional_features = document.querySelector(
    "#additional_features"
  ).value;
  let aircon = document.querySelector("#aircon").value;
  let price = document.querySelector("#price").value;
  let free_wifi = document.querySelector("#free_wifi").value;

  let data = new FormData();
  data.append("room_number", room_number);
  data.append("additional_features", additional_features);
  data.append("aircon", aircon);
  data.append("price", price);
  data.append("free_wifi", free_wifi);

  data.append("addRoom", "sample");
  for (var p of data) {
    let name = p[0];
    let value = p[1];

    console.log(name, value);
  }

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

document.querySelector("#deleteRoomBtn").addEventListener("click", (e) => {
  e.preventDefault();

  let data = new FormData();

  data.append("deleteRoom", "sample");
  data.append("room_id", selectedRow.room_id);

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

document.querySelector("#setBooked").addEventListener("click", (e) => {
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

document.querySelector("#setAvailable").addEventListener("click", (e) => {
  e.preventDefault();

  let data = new FormData();

  data.append("changeRoomStatus", "sample");
  data.append("room_id", selectedRow.room_id);
  data.append("booking_status", "Available");

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

document.addEventListener("DOMContentLoaded", () => {
  let data = new FormData();
  data.append("getAllRoom", "sample");
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
        { headerName: "ID", field: "room_id" },
        { headerName: "Room Number", field: "room_number" },
        { headerName: "Additional Features", field: "additional_features" },
        { headerName: "Aircon", field: "aircon" },
        { headerName: "Price", field: "price" },
        { headerName: "Free Wifi", field: "free_wifi" },
        { headerName: "Booking Status", field: "booking_status" },
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
});
