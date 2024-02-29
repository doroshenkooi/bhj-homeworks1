const elementsReveal = document.querySelectorAll(".reveal");

function elementVisible(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  elementsReveal.forEach((element) => {
    if (elementVisible(element)) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();