const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const faqText = faq.querySelector(".faq-text");

  faq.addEventListener("click", (e) => {
    faq.classList.toggle("show");
  });
});
