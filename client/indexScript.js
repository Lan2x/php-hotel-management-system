const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

// document.querySelector("#loginBtn").addEventListener("click", (e) => {
//   e.preventDefault();

//   if (username.value === "admin" && password.value === "password") {
//     window.location.href = "./employees/employee.html";
//   } else {
//     alert("wrong username or password");
//   }
// });

document.querySelector("#loginBtn").addEventListener("click", (e) => {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  e.preventDefault();

  let data = new FormData();

  data.append("login", "sample");

  data.append("username", username);
  data.append("password", password);

  // AJAX Code To Submit Form.

  $.ajax({
    url: "http://localhost/jane%20dela%20cruz%20hotel%20management%20system%20er%20diagram/hotel_management_server/login.php",
    data: data,
    type: "POST", // GET/POST
    processData: false,
    contentType: false,
    success: function (data) {
      let res = JSON.parse(data);
      if (res.message === "success") {
        sessionStorage.setItem("employee_id", res.employee_id);
        window.location.href = "./employees/employee.html";
      } else {
        alert("wrong username or password");
      }
    },
    error: function (err) {
      console.log(err);
    },
  });
});
