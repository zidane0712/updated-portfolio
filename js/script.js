// Typing animation
document.addEventListener("DOMContentLoaded", function () {
  const text =
    "Full-stack Web Developer. Electronics Engineer.  Outside-of-the-box thinker.";
  const element = document.getElementById("typed-text");
  element.textContent = text;
});

// For resume button
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("open-resume").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "../files/Resume.pdf";
    link.target = "_blank";
    link.click();
    console.log("Opening resume PDF");
  });
});

// For Mobile nav
document.addEventListener("DOMContentLoaded", function () {
  // For nav menu
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
    console.log("Click");
  });
});
