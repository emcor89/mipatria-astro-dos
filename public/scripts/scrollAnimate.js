document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Optional: dejar de observar después de mostrar
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  elements.forEach(el => observer.observe(el));
});