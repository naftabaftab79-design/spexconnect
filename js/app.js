document.querySelectorAll(".reveal").forEach(el => {
  const observer = new IntersectionObserver(e => {
    if (e[0].isIntersecting) {
      el.classList.add("visible");
      observer.disconnect();
    }
  });
  observer.observe(el);
});
