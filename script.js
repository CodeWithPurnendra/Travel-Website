const headline = "Discover the World Beyond Boundaries";
const speed = 200;
const deleteSpeed = 60;
const delay = 1500;

let isDeleting = false;
let index = 0;

function typeEffect() {
  const heading = document.querySelector(".headline");

  if (!heading) return;

  if (!isDeleting) {
    // Typing
    heading.textContent = headline.substring(0, index + 1);
    index++;

    if (index === headline.length) {
      setTimeout(() => {
        isDeleting = true;
      }, delay);
    }
  } else {
    // Deleting
    heading.textContent = headline.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? deleteSpeed : speed);
}

typeEffect();

const button = document.querySelector(".journey");
const DestinationSection = document.querySelector(".destination-section");
button.addEventListener("click", () => {
  button.textContent = "Choosing destination...";
  button.disabled = true;
  setTimeout(() => {
    DestinationSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, 800);

  setTimeout(() => {
    button.textContent = "Start Your Journey";
    button.disabled = false;
  }, 2000);
});