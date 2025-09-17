// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Animate box function
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  animateBox.classList.add("move");
  animateBox.addEventListener("animationend", () => {
    animateBox.classList.remove("move");
  });
});

