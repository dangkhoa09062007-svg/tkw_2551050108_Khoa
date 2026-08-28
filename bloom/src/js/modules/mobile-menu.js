export function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    mobileMenu.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu(e) {
    e.stopPropagation();
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // 1. Toggle khi bấm vào nút Hamburger
  menuBtn.addEventListener("click", toggleMenu);

  // 2. Đóng menu khi bấm phím ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      closeMenu();
    }
  });

  // 3. Đóng menu khi bấm ra ngoài vùng menu (Click Outside)
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // 4. Đóng menu khi bấm vào một liên kết menu bất kỳ
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}