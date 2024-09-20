document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
});




document.getElementById("hamburger").addEventListener("click", function() {
  var navHolder = document.querySelector(".navButtonsHolder");
  navHolder.classList.toggle("active");
  
  var bars = document.querySelectorAll(".bar");
  bars[0].classList.toggle("change");
  bars[1].classList.toggle("change");
  bars[2].classList.toggle("change");
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