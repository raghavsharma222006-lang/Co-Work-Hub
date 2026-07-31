const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("message");

document.querySelectorAll(".eye").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.password);
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    button.innerHTML = isHidden ? '<i class="ri-eye-off-line"></i>' : '<i class="ri-eye-line"></i>';
    button.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    registerMessage.textContent = "Passwords do not match. Please try again.";
    registerMessage.classList.add("error");
    return;
  }

  const user = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password,
  };
  localStorage.setItem("coworkHubUser", JSON.stringify(user));
  localStorage.setItem("coworkHubLoggedIn", "true");
  registerMessage.textContent = "Account created successfully! Opening your profile...";
  registerMessage.classList.remove("error");
  registerForm.reset();
  setTimeout(() => { window.location.href = "../profile/profile.html"; }, 900);
});
