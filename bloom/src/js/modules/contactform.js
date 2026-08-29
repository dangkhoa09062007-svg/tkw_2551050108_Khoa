// src/js/modules/contact.js
export function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  const successMsg = document.getElementById("contactSuccessMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("fullName");
      const nameValue = nameInput ? nameInput.value.trim() : "";

      if (successMsg) {
        successMsg.textContent = `Cảm ơn ${nameValue || "bạn"}! Yêu cầu liên hệ đã được gửi thành công.`;
        successMsg.classList.remove("hidden");
      }

      contactForm.reset();
    });
  }
}