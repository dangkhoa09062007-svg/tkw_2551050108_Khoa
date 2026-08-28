import { initTheme } from "./modules/theme.js";
import { initMobileMenu } from "./modules/mobile-menu.js";
import { initNavbar } from "./modules/navbar.js";
import { initAccordion } from "./modules/accordion.js";
import { initPricing } from "./modules/pricing.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initNavbar();
  initAccordion();
  initPricing();
});

// Xử lý Form Liên hệ (Tránh lỗi 405 & Không dùng innerHTML)
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const successMsg = document.getElementById("contactSuccessMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // 1. Chặn reload trang mặc định (Sửa lỗi HTTP 405)
      e.preventDefault();

      // 2. Lấy giá trị input
      const nameInput = document.getElementById("fullName");
      const nameValue = nameInput ? nameInput.value.trim() : "";

      // 3. Dùng textContent để hiển thị thông báo (An toàn XSS, đúng checklist)
      if (successMsg) {
        successMsg.textContent = `Cảm ơn ${nameValue || "bạn"}! Yêu cầu liên hệ đã được gửi thành công.`;
        successMsg.classList.remove("hidden");
      }

      // 4. Reset form
      contactForm.reset();
    });
  }
});