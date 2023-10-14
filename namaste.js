(function () {
  let slider = 0;
  const images = document.querySelectorAll(".image");
  const dots = document.querySelectorAll(".dots");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const containerdots = document.querySelector("#containerdots");

  prev.addEventListener("click", () => handlePrev());
  next.addEventListener("click", () => handleNext());

  function Carousel() {
    for (let i = 0; i < images.length; i++) {
      if (slider === i) {
        images[i].style.display = "block";
      } else {
        images[i].style.display = "none";
      }
    }
  }
  containerdots.addEventListener("click", (e) => handleMoveDots(e));

  function handleMoveDots(e) {
    const { id } = e.target?.dataset;
    if (id) {
      slider = Number(id);
      Carousel();
      handleDots();
    }
  }

  function handleDots() {
    for (let i = 0; i < dots.length; i++) {
      dots[i].style.backgroundColor = slider === i ? "skyblue" : "white";
    }
  }

  function handleNext() {
    if (slider < images.length - 1) {
      slider = slider + 1;
    }
    Carousel();
    handleDots();
  }
  function handlePrev() {
    if (slider > 0) {
      slider = slider - 1;
    }
    Carousel();
    handleDots();
  }
  Carousel();
  handleDots();
})();
