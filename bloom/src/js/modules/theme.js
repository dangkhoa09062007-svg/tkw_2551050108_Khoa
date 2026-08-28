export function initTheme() {
  const themeBtn = document.getElementById("themeToggleBtn");

  // Kiểm tra localStorage hoặc hệ thống
  const savedTheme = localStorage.getItem("bloom-dark-mode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("bloom-dark-mode", isDark ? "dark" : "light");
    });
  }
}