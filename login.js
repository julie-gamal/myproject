document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  registerBtn.addEventListener("click", function () {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", function () {
    container.classList.remove("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const loginTogglePassword = document.getElementById("loginTogglePassword");
  const registerTogglePassword = document.getElementById(
    "registerTogglePassword"
  );
  const loginPassword = document.getElementById("loginPassword");
  const registerPassword = document.getElementById("registerPassword");
  loginTogglePassword.addEventListener("click", function () {
    const type =
      loginPassword.getAttribute("type") === "password" ? "text" : "password";
    loginPassword.setAttribute("type", type);

    this.classList.toggle("bx-hide");
    this.classList.toggle("bx-show");
  });

  registerTogglePassword.addEventListener("click", function () {
    // Toggle the type attribute
    const type =
      registerPassword.getAttribute("type") === "password"
        ? "text"
        : "password";
    registerPassword.setAttribute("type", type);
    this.classList.toggle("bx-hide");
    this.classList.toggle("bx-show");
  });
});
