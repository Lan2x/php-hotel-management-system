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

document.querySelector("#add").addEventListener("click", (e) => {
  e.preventDefault();
  let first_name = document.querySelector("#first_name").value;
  let last_name = document.querySelector("#last_name").value;
  let job_department = document.querySelector("#job_department").value;
  let employee_type = document.querySelector("#employee_type").value;
  let address = document.querySelector("#address").value;
  let contact_no = document.querySelector("#contact_no").value;
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let salary = document.querySelector("#salary").value;

  let data = new FormData();
  data.append("first_name", first_name);
  data.append("last_name", last_name);
  data.append("job_department", job_department);
  data.append("employee_type", employee_type);
  data.append("address", address);
  data.append("contact_no", contact_no);
  data.append("username", username);
  data.append("password", password);
  data.append("salary", salary);

  data.append("addEmployee", "sample");

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

  data.append("deleteEmployee", "sample");
  data.append("employee_id", selectedRow.employee_id);

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

document.addEventListener("DOMContentLoaded", () => {
  let data = new FormData();
  data.append("getAllEmployee", "sample");
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
        { headerName: "ID", field: "employee_id" },
        { headerName: "First Name", field: "first_name" },
        { headerName: "Last Name", field: "last_name" },
        { headerName: "Job Department", field: "job_department" },
        { headerName: "Employee Type", field: "employee_type" },
        { headerName: "Address", field: "address" },
        { headerName: "Contact No", field: "contact_add" },
        { headerName: "Username", field: "username" },
        { headerName: "Password", field: "password" },
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
