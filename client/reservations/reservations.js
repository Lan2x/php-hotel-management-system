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

let user = [];
const columnDefs = [
  { headerName: "Reservation ID", field: "first_name" },
  { headerName: "Customer ID", field: "first_name" },
  { headerName: "Employee ID", field: "last_name" },
  { headerName: "Reservation Date", field: "gender" },
  { headerName: "Date In", field: "address" },
  { headerName: "Date Out", field: "contact" },
  { headerName: "Date Range", field: "adults" },
  { headerName: "No. of Adults", field: "children" },
  { headerName: "No. of Children", field: "dateIn" },
  { headerName: "Food ID", field: "foodID" },
  { headerName: "Facilities ID", field: "facilitiesId" },
  { headerName: "Room ID", field: "roomId" },
  { headerName: "Service ID", field: "serviceId" },
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

const createField = (parent, placeholder, id) => {
  const fieldDiv = document.createElement("div");
  fieldDiv.className = "input-field";

  const label = document.createElement("label");
  label.innerText = placeholder;

  let selectArray = [];

  var selectList = document.createElement("select");
  selectList.id = "mySelect";
  fieldDiv.appendChild(selectList);

  //Create and append the options
  for (var i = 0; i < selectArray.length; i++) {
    var option = document.createElement("option");
    option.value = selectArray[i];
    option.text = selectArray[i];
    selectList.appendChild(option);
  }

  let parentDiv = document.querySelector(`${parent}`);
  parentDiv.appendChild(fieldDiv);
  fieldDiv.appendChild(label);
  fieldDiv.appendChild(selectList);
};

const createFieldText = (parent, placeholder, id) => {
  const fieldDiv = document.createElement("div");
  fieldDiv.className = "input-field";

  const label = document.createElement("label");
  label.innerText = placeholder;

  const inputText = document.createElement("input");
  inputText.type = "text";

  let selectArray = [];

  let parentDiv = document.querySelector(`${parent}`);
  parentDiv.appendChild(fieldDiv);
  fieldDiv.appendChild(label);
  fieldDiv.appendChild(inputText);
};

const createFieldDate = (parent, placeholder, id) => {
  const fieldDiv = document.createElement("div");
  fieldDiv.className = "input-field";

  const label = document.createElement("label");
  label.innerText = placeholder;

  const inputText = document.createElement("input");
  inputText.type = "datetime-local";

  let selectArray = [];

  let parentDiv = document.querySelector(`${parent}`);
  parentDiv.appendChild(fieldDiv);
  fieldDiv.appendChild(label);
  fieldDiv.appendChild(inputText);
};

function playAudio(url) {
  new Audio(url).play();
}

//modal code
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

document.querySelector("#roomSelect").addEventListener("change", function () {
  const roomImage = document.querySelector("#roomImage");
  if (this.value == "1") {
    roomImage.src = "./1.jpg";
  } else if (this.value == "2") {
    roomImage.src = "./2.jpg";
  } else if (this.value == "3") {
    roomImage.src = "./3.jpg";
  }
});

document
  .querySelector("#facilitySelect")
  .addEventListener("change", function () {
    const facilityImage = document.querySelector("#facilityImage");
    if (this.value == "1") {
      facilityImage.src = "./facility1.jpg";
    } else if (this.value == "2") {
      facilityImage.src = "./facility2.jpg";
    } else if (this.value == "3") {
      facilityImage.src = "./facility3.jpg";
    }
  });

document
  .querySelector("#roomServiceSelect")
  .addEventListener("change", function () {
    const roomServiceImage = document.querySelector("#roomServiceImage");
    if (this.value == "1") {
      roomServiceImage.src = "./roomService1.jpg";
    } else if (this.value == "2") {
      roomServiceImage.src = "./roomService2.jpg";
    }
  });

document.querySelector("#foodSelect").addEventListener("change", function () {
  const foodImage = document.querySelector("#foodImage");
  if (this.value == "1") {
    foodImage.src = "./food1.jpg";
  } else if (this.value == "2") {
    foodImage.src = "./food2.jpg";
  } else if (this.value == "3") {
    foodImage.src = "./food3.jpg";
  }
});
