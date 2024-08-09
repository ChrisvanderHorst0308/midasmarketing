document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".navButtonsHolder");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
hamburger.querySelectorAll('.bar').forEach((bar, index) => {
    bar.classList.toggle(`change`);
});
});
});



/* === fade up === */

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-visible');
          observer.unobserve(entry.target); // Stop observeren nadat animatie is gestart
        }
      });
    });
  
    document.querySelectorAll('.fade-up').forEach(div => {
      observer.observe(div);
    });
  });

/* - flip-up --*/

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('flip-up-visible');
          observer.unobserve(entry.target); // Stop observeren nadat animatie is gestart
        }
      });
    });
  
    document.querySelectorAll('.flip-up').forEach(div => {
      observer.observe(div);
    });
  });