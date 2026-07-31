
const bookingForm = document.getElementById("bookingForm");
const bookingDate = document.getElementById("date");
const workspace = document.getElementById("workspace");
const bookingMsg = document.getElementById("bookingMsg");
const selectedWorkspace = new URLSearchParams(window.location.search).get("workspace");
const loggedInUser = JSON.parse(localStorage.getItem("coworkHubUser") || "null");

if (localStorage.getItem("coworkHubLoggedIn") === "true" && loggedInUser) {
  document.getElementById("name").value = loggedInUser.name || "";
  document.getElementById("email").value = loggedInUser.email || "";
  document.querySelector(".profile-link")?.classList.add("visible");
}

bookingDate.min = new Date().toISOString().split("T")[0];

if (selectedWorkspace) {
  workspace.value = selectedWorkspace;
}

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const chosenWorkspace = workspace.value;
  const booking = {
    id: Date.now(),
    name,
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    workspace: chosenWorkspace,
    date: bookingDate.value,
    time: document.getElementById("time").value,
    seats: document.getElementById("seats").value,
    days: document.getElementById("days").value,
    status: "Confirmed",
  };
  const bookings = JSON.parse(localStorage.getItem("coworkHubBookings") || "[]");
  bookings.unshift(booking);
  localStorage.setItem("coworkHubBookings", JSON.stringify(bookings));
  if (loggedInUser) {
    localStorage.setItem("coworkHubUser", JSON.stringify({ ...loggedInUser, name: booking.name, email: booking.email, phone: booking.phone }));
  }
  bookingMsg.textContent = `Thanks ${name}! Your booking request for ${chosenWorkspace} has been confirmed.`;
  bookingForm.reset();
  bookingDate.min = new Date().toISOString().split("T")[0];
});
