// Get Elements
const content = document.querySelectorAll(".goIn");
content.forEach((elemnt, index) => {
  elemnt.style.transition = `opacity 1.3s ease-in-out, transform 1.3s ease-in-out`;
  elemnt.style.opacity = `0`;
  elemnt.style.transform = `translateY(100vh)`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  content.forEach((elemnt, index) => {
    setTimeout(() => {
      elemnt.style.opacity = `1`;
      elemnt.style.transform = `translateY(0vh)`;
    }, 1000 * index);
  });

  //   Add subject's box shadow's transitions
  document.querySelectorAll(".subject").forEach((elemnt) => {
    elemnt.style.transition = elemnt.style.transition + ", box-shadow 0.5s";
  });
});
