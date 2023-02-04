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

//code for the table

let user = [
  {
    id: 1,
    customer: "jane dela cruz",
    room: "room 1",
    room_service: "cleaning",
    date_in: "January 1, 2023 ",
    date_out: "January 6, 2023",
    status: "reserved",
    total_payment: "6000.00",
    advance_payment: "3000.00",
    payment_left: "3000.00",
  },
];
const columnDefs = [
  { headerName: "ID", field: "id" },
  { headerName: "Customer", field: "customer" },
  { headerName: "Room", field: "room" },
  { headerName: "Room Service", field: "room_service" },
  { headerName: "Date In", field: "date_in" },
  { headerName: "Date out ", field: "date_out" },
  { headerName: "Status", field: "status" },
  { headerName: "Total Payment", field: "total_payment" },
  { headerName: "Advance Payment", field: "advance_payment" },
  { headerName: "Payment Left", field: "payment_left" },
];

// specify the data

// let the grid know which columns and what data to use

const gridOptions = {
  columnDefs: columnDefs,
  rowData: user,
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
