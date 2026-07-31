const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const startBtn = document.getElementById("startBtn");

function findWorkspace() {
  const place = search.value.trim();
  const url = place ? `../explore/explore.html?search=${encodeURIComponent(place)}` : "../explore/explore.html";
  window.location.href = url;
}

searchBtn.addEventListener("click", findWorkspace);
search.addEventListener("keydown", (event) => {
  if (event.key === "Enter") findWorkspace();
});
startBtn.addEventListener("click", () => { window.location.href = "../login/register.html"; });
