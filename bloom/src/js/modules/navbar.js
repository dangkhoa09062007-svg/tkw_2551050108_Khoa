export function initNavbar() {
  const header = document.querySelector("header");
  const heroSection = document.querySelector("main");

  if (!header || !heroSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        header.classList.add("shadow-md", "bg-surface/95");
      } else {
        header.classList.remove("shadow-md", "bg-surface/95");
      }
    },
    { threshold: 0.9 }
  );

  observer.observe(heroSection);
}