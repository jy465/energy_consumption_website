// Highlight current page dynamically
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const currentLocation = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });

  // Auto-update copyright year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});