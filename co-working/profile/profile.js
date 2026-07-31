const user = JSON.parse(localStorage.getItem("coworkHubUser") || "null");
if (localStorage.getItem("coworkHubLoggedIn") !== "true" || !user) window.location.replace("../login/login.html");

const bookings = JSON.parse(localStorage.getItem("coworkHubBookings") || "[]").filter((booking) => booking.email === user.email);
document.getElementById("userName").textContent = user.name || "-";
document.getElementById("userEmail").textContent = user.email || "-";
document.getElementById("userPhone").textContent = user.phone || "Not added";

const list = document.getElementById("bookingsList");
list.innerHTML = bookings.length ? bookings.map((booking) => `<article class="item"><div><h3>${safe(booking.workspace)}</h3><p>${date(booking.date)} | ${safe(booking.time)}</p><p>${booking.seats} seat(s), ${booking.days} day(s)</p></div><span class="status">${safe(booking.status)}</span></article>`).join("") : '<p class="empty">No bookings yet.</p>';

document.getElementById("logoutButton").addEventListener("click", () => { localStorage.removeItem("coworkHubLoggedIn"); window.location.href = "../homepage/index.html"; });
function date(value) { return value ? new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "Date not set"; }
function safe(value) { const node = document.createElement("span"); node.textContent = value || ""; return node.innerHTML; }
