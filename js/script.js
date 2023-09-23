//  change navbar styles on scroll //
window.addEventListener("scroll", () => {
  document.querySelector(".nav").classList.toggle("scroll", window.scrollY > 0);
});

// show thee faq-answer on click
const faq = document.querySelectorAll(".faq");
faq.forEach((e) => {
  const faqIconM = e.querySelector(`.faq-minus`);
  const faqIconP = e.querySelector(".faq-plus");
  e.addEventListener("click", () => {
    e.classList.toggle("show");
    faqIconM.classList.toggle("faq-none");
    faqIconP.classList.toggle("faq-none");
  });
});

// -----overlay menu-----

const btn = document.querySelector("[openMenu]");
const btnI = document.querySelector(".fa-solid");
const overlay = document.querySelector("[overlay]");
btn.addEventListener("click", () => {
  overlay.classList.toggle("overlay");
  btnI.classList.toggle("fa-xmark");
});
