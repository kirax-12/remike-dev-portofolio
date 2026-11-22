// Set the footer year to the current year.
document.getElementById("year").textContent = new Date().getFullYear();

// Filter proyek per kategori.
const chips = document.querySelectorAll("#filters .chip");
const cards = document.querySelectorAll(".project-list .project");
const counter = document.getElementById("project-count");

function applyFilter(name) {
  let shown = 0;
  cards.forEach((c) => {
    const match = name === "semua" || c.dataset.cat === name;
    c.style.display = match ? "" : "none";
    if (match) shown++;
  });
  counter.textContent = `Menampilkan ${shown} dari ${cards.length} proyek`;
  chips.forEach((ch) => ch.classList.toggle("active", ch.dataset.filter === name));
}

chips.forEach((ch) => ch.addEventListener("click", () => applyFilter(ch.dataset.filter)));
applyFilter("semua");
