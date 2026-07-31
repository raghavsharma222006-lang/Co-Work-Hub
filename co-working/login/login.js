const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const passwordButton = document.querySelector(".eye");
const message = document.getElementById("message");

passwordButton.addEventListener("click", function () {
  const isHidden = password.type === "password";
  password.type = isHidden ? "text" : "password";
  passwordButton.innerHTML = isHidden
    ? '<i class="ri-eye-off-line"></i>'
    : '<i class="ri-eye-line"></i>';
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const enteredPassword = password.value;
  const savedUser = JSON.parse(localStorage.getItem("coworkHubUser") || "null");

  if (!savedUser) {
    message.textContent = "Please create an account before logging in.";
    message.classList.add("error");
    return;
  }

  if (savedUser.email !== email || savedUser.password !== enteredPassword) {
    message.textContent = "Email or password is incorrect.";
    message.classList.add("error");
    return;
  }

  localStorage.setItem("coworkHubLoggedIn", "true");
  message.classList.remove("error");
  message.textContent = "Login successful! Opening your dashboard...";
  setTimeout(() => { window.location.href = "../profile/profile.html"; }, 650);
});
