document.body.style.scrollBehavior = "smooth";

const cards = document.querySelectorAll(".destination-card");

cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";

  setTimeout(() => {
    card.style.transition = "0.8s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 120);
});

const sortIcon = document.querySelector(".sort-icon");
const dropdown = document.getElementById("filterDropdown");

// Toggle dropdown on icon click
sortIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("active");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".header-action")) {
    dropdown.classList.remove("active");
  }
});

