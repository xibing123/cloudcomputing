// Fungsi untuk toggle dark mode / light mode
function toggleDarkMode() {
  document.body.classList.toggle("light-mode");

  // Simpan preferensi ke localStorage
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

// Saat halaman dimuat, cek preferensi tema sebelumnya
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }
});
