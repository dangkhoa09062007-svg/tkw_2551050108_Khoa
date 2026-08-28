export function initPricing() {
  const billingToggleBtn = document.getElementById("billingToggle");
  const priceElements = document.querySelectorAll(".price-value");

  if (!billingToggleBtn) return;

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  let isYearly = true;

  billingToggleBtn.addEventListener("click", () => {
    isYearly = !isYearly;
    billingToggleBtn.setAttribute("aria-checked", isYearly.toString());

    priceElements.forEach((el) => {
      const rawPrice = isYearly
        ? el.getAttribute("data-yearly-raw")
        : el.getAttribute("data-monthly-raw");

      if (rawPrice) {
        el.textContent = formatter.format(Number(rawPrice));
      }
    });
  });
}