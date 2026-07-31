const query = new URLSearchParams(window.location.search).get("search")?.toLowerCase().trim();

document.querySelectorAll(".explore-row").forEach((row) => {
  const name = row.querySelector("h2").textContent;
  const matches = !query || row.textContent.toLowerCase().includes(query);
  row.hidden = !matches;

  row.querySelector("button").addEventListener("click", () => {
    window.location.href = `../booking/booking.html?workspace=${encodeURIComponent(name)}`;
  });
});
