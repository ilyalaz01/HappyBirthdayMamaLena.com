const flowers = document.querySelectorAll(".flower");

flowers.forEach(flower => {
  flower.addEventListener("mouseover", () => {
    flower.src = "another-flower-img.png";
  });
  flower.addEventListener("mouseout", () => {
    flower.src = "flower1.png";
  });
});
